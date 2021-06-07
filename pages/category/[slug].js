import { useRouter } from 'next/router'
import Posts from './../../components/Posts'
import ResponsiveArticle from './../../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

function Category({ categories, posts, classes, widget }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      {categories.length === 0 ? (
        <h1>My Custom 404 Page</h1>
      ) : (
        <div className={classes.containerClasses}>
          <Head>{ReactHtmlParser(categories[0].yoast_head)}</Head>
          <header className={classes.sectionTitleClasses}>
            <h1 className='text-xl font-bold uppercase mb-2'>{categories[0].name}</h1>
            <article dangerouslySetInnerHTML={{ __html: categories[0].description }} />
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

export default Category

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/categories?order=desc&orderby=count`)
  const categories = await res.json()

  const slugs = []
  categories.forEach((category) => {
    slugs.push({ params: { slug: category.slug } })
  })

  return {
    paths: slugs,
    fallback: true
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const classes = {
    containerClasses: 'max-w-screen-md mx-auto relative my-10',
    sectionTitleClasses: 'max-w-screen-md mx-auto',
    olClasses: 'flex flex-col gap-10',
    imageClasses: 'h-96'
  }
  const widget = {
    name: 'Posts',
    component: 'SingleCol',
    paginationStyle: 'pagination',
    count: 12
  }
  const { slug } = params
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/categories?slug=${slug}`)
  const categories = await res.json()

  // get posts of this category
  let category_id = null
  let total_pages = null
  let posts = []

  if (categories.length > 0) {
    category_id = categories[0].id
    const cat_posts = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/posts?categories=${category_id}&_embed=true&per_page=${widget.count}`
    )
    const blogs = await cat_posts.json()
    total_pages = cat_posts.headers.get('X-WP-TotalPages')
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
    props: { categories, posts, classes, widget },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  }
}
