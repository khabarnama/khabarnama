import { useRouter } from 'next/router'
import Posts from './../../components/Posts'
import ResponsiveArticle from './../../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

function Author({ author, posts, author_id, total_pages, section }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      {author.length === 0 ? (
        <h1>My Custom 404 Page</h1>
      ) : (
        <div className={section.containerClasses}>
          <Head>{ReactHtmlParser(author[0].yoast_head)}</Head>
          <header className={section.sectionTitleClasses}>
            <h1 className='text-xl font-bold uppercase mb-2'>{author[0].name}</h1>
            <hr className='mb-2 w-40 h-2' />
            <article dangerouslySetInnerHTML={{ __html: author[0].description.rendered }} />
            <hr className='my-4' />
          </header>
          <Posts
            posts={posts}
            type='author'
            type_id={author_id}
            totalPages={total_pages}
            paginationStyle='infinite'
            key={Math.random().toString(36).substring(7)}
            perPage={10}
            section={section}
          />
        </div>
      )}
    </>
  )
}

export default Author

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/users`)
  const authors = await res.json()

  const slugs = []
  authors.forEach((author) => {
    slugs.push({ params: { slug: author.slug } })
  })

  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: slugs,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const section = {
    containerClasses: 'max-w-screen-lg mx-auto mb-10 relative',
    sectionTitleClasses: '',
    olClasses: 'grid sm:grid-cols-2 lg:grid-cols-4 gap-10',
    liType: 'GridCols',
    imageClasses: 'h-52'
  }

  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const { slug } = params
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/users?_embed=true&slug=${slug}`)
  const author = await res.json()

  // get posts of this author
  let posts = []
  let total_pages = null
  let author_id = null

  if (author.length > 0) {
    author_id = author[0].id
    const author_posts = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/posts?_embed=true&author=${author_id}`
    )
    const blogs = await author_posts.json()
    total_pages = author_posts.headers.get('X-WP-TotalPages')

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
    props: { author, posts, author_id, total_pages, section },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  }
}
