import { useRouter } from 'next/router'
import Posts from './../../components/Posts'
import ResponsiveArticle from './../../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

function Tag({ tags, posts, widget, classes }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      {tags.length === 0 ? (
        <h1>NO POSTS WITH THIS TAG</h1>
      ) : (
        <div className={classes.containerClasses}>
          <Head>{ReactHtmlParser(tags[0].yoast_head)}</Head>
          <header className={classes.sectionTitleClasses}>
            <h1 className='text-xl font-bold uppercase mb-2'>{tags[0].name}</h1>
            <article dangerouslySetInnerHTML={{ __html: tags[0].description }} />
            <hr className='my-4' />
          </header>
          <Posts
            key={Math.random().toString(36).substring(7)}
            widget={widget}
            classes={classes}
            posts={posts}
          />
        </div>
      )}
    </>
  )
}

export default Tag

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/tags?order=desc&orderby=count`)
  const tags = await res.json()

  const slugs = []
  tags.forEach((tag) => {
    slugs.push({ params: { slug: tag.slug } })
  })

  return {
    paths: slugs,
    fallback: true
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const classes = {
    containerClasses: 'max-w-screen-xl mx-auto sm:my-10 relative p-5 sm:p-0',
    olClasses: 'grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10',
    imageClasses: 'h-20 w-20'
  }
  const widget = {
    name: 'Posts',
    component: 'HorizontalSmall',
    paginationStyle: 'loadmore',
    count: 12
  }

  const { slug } = params
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/tags?slug=${slug}`)
  const tags = await res.json()

  // get posts of this tag
  let posts = []
  let tag_id = null
  let total_pages = null
  if (tags.length > 0) {
    tag_id = tags[0].id
    const tag_posts = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/posts?_embed=true&tags=${tag_id}&per_page=${widget.count}`
    )
    const blogs = await tag_posts.json()
    total_pages = tag_posts.headers.get('X-WP-TotalPages')

    widget['totalPages'] = total_pages

    for (const post of blogs) {
      const post_id = post.id
      // get categories
      const post_cats = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/categories?post=${post_id}`
      )
      const cats = await post_cats.json()
      // get tags
      const post_tags = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/tags?post=${post_id}`)
      const tags = await post_tags.json()

      posts.push({ blog: post, cats, tags })
    }
  }

  // Pass post data to the page via props
  return {
    props: { tags, posts, widget, classes },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  }
}
