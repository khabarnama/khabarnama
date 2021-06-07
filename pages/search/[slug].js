import { useRouter } from 'next/router'
import React from 'react'
import Posts from './../../components/Posts'
import ResponsiveArticle from './../../components/skeleton/ResponsiveArticle'

function Search({ posts, classes, widget }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <div className={classes.containerClasses}>
      <header className={classes.sectionTitleClasses}>
        <h1 className='text-xl font-regular mb-2'>
          Search Results For: <b>{widget.slug}</b>
        </h1>
        <hr className='my-4' />
      </header>
      <Posts
        key={Math.random().toString(36).substring(7)}
        posts={posts}
        classes={classes}
        widget={widget}
      />
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/posts?_embed=true`)
  const posts = await res.json()

  const slugs = []
  posts.forEach((post) => {
    slugs.push({ params: { slug: post.slug } })
  })

  return {
    paths: slugs,
    fallback: true
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const classes = {
    containerClasses: 'max-w-screen-xl mx-auto relative my-10',
    sectionTitleClasses: 'max-w-screen-xl mx-auto',
    olClasses: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10',
    imageClasses: 'h-52'
  }
  const widget = {
    name: 'Posts',
    component: 'GridCols',
    paginationStyle: 'loadmore',
    count: 12
  }

  const { slug } = params
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/posts?search=${slug}&_embed=true`)
  const blogs = await res.json()
  const total_pages = res.headers.get('X-WP-TotalPages')
  widget['totalPages'] = total_pages
  widget['slug'] = slug

  const posts = []
  for (const post of blogs) {
    const post_id = post.id
    // get categories
    const post_cats = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/categories?post=${post_id}`)
    const cats = await post_cats.json()
    // get tags
    const post_tags = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/tags?post=${post_id}`)
    const tags = await post_tags.json()

    posts.push({ blog: post, cats, tags })
  }

  // Pass post data to the page via props
  return {
    props: { posts, classes, widget },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  }
}

export default Search
