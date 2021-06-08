import React from 'react'
import Posts from './../components/Posts'
import Ads from './../components/Ads'
import Head from 'next/head'

// show 2 posts of this category - done
// show 2 posts of this author - done
// show 2 posts latest - done

const SectionWidget = (containerItem) => {
  switch (containerItem[1].widget.name) {
    case 'Posts':
      return (
        <Posts
          key={Math.random().toString(36).substring(7)}
          widget={containerItem[1].widget}
          classes={containerItem[1].classes}
          posts={containerItem[1].posts}
        />
      )

    case 'Ads':
      return (
        <Ads
          key={Math.random().toString(36).substring(7)}
          widget={containerItem[1].widget}
          classes={containerItem[1].classes}
        />
      )

    default:
      return (
        <Posts
          key={Math.random().toString(36).substring(7)}
          widget={containerItem[1].widget}
          classes={containerItem[1].classes}
          posts={containerItem[1].posts}
        />
      )
  }
}

export default function Blog(container) {
  return (
    <>
      <Head>
        <title>WP-NextJs Theme</title>
        <meta name='description' content='Componentity Team has made a WP-NEXTJS theme' />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='IE=7' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@componentity' />
        <meta name='twitter:creator' content='@componentity' />
        <meta property='og:url' content='http://theme-blog.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:site_name' content='Componentity' />
      </Head>
      {Object.entries(container).map((containerItem) => {
        return SectionWidget(containerItem)
      })}
    </>
  )
}

export async function getStaticProps() {
  const sections = [
    {
      classes: {
        containerClasses: 'max-w-screen-xl mx-auto relative mb-20 sm:mt-10 p-5 sm:p-0',
        olClasses: 'grid grid-cols-1 sm:grid-cols-12 gap-10',
        imageClasses: 'h-52'
      },
      widget: {
        name: 'Posts',
        component: 'HorizontalVariant',
        title: 'LIFESTYLE',
        slug: 'lifestyle',
        type: 'categories',
        type_id: 278,
        orderBy: 'id',
        order: 'desc',
        count: 6
      }
    },
    {
      classes: {
        containerClasses: 'max-w-screen-lg mx-auto relative my-20',
        imageClasses: 'h-12 sm:h-32'
      },
      widget: {
        name: 'Ads',
        component: 'HorizontalAds',
        image: {
          href: 'https://componentity.com',
          src: 'https://www.etilaatroz.com/wp-content/uploads/2020/11/F45-fitness-training-afghanistan.jpg'
        }
      }
    },
    {
      classes: {
        containerClasses: 'bg-gray-100 dark:bg-gray-800  relative m2-10 px-5 sm:px-0 py-20',
        sectionTitleClasses: 'max-w-screen-xl mx-auto',
        olClasses: 'max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10',
        imageClasses: 'h-20 w-20'
      },
      widget: {
        name: 'Posts',
        component: 'HorizontalSmall',
        title: 'frpatrickbriscoe',
        slug: 'frpatrickbriscoe',
        type: 'author',
        type_id: 187244155,
        orderBy: 'id',
        order: 'desc',
        count: 6
      }
    },
    {
      classes: {
        containerClasses: 'max-w-screen-xl mx-auto relative my-20 p-5 sm:p-0',
        olClasses: 'grid grid-cols-1 sm:grid-cols-12 gap-10',
        imageClasses: 'h-36'
      },
      widget: {
        name: 'Posts',
        component: 'HorizontalVariantBig',
        title: 'Latest',
        orderBy: 'id',
        order: 'desc',
        count: 4
      }
    },
    {
      classes: {
        containerClasses: 'bg-gray-100 dark:bg-gray-800  relative px-5 sm:px-0 py-20 my-20',
        sectionTitleClasses: 'max-w-screen-xl mx-auto',
        olClasses: 'max-w-screen-xl mx-auto flex gap-2'
      },
      widget: {
        name: 'ListWidget',
        component: 'ListHorizontal',
        title: 'Trends For You',
        type: 'tags',
        count: 10,
        order: 'desc',
        orderBy: 'count'
      }
    },
    {
      classes: {
        containerClasses: 'max-w-screen-xl mx-auto relative my-20 p-5 sm:p-0',
        olClasses: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10',
        imageClasses: 'h-52'
      },
      widget: {
        name: 'Posts',
        component: 'GridCols',
        title: 'Pope Francis',
        slug: 'pope-francis',
        type: 'tags',
        type_id: 423714612,
        orderBy: 'id',
        order: 'desc',
        paginationStyle: 'loadmore',
        count: 3
      }
    },
    {
      classes: {
        containerClasses: 'bg-gray-100 dark:bg-gray-800  relative my-20 px-5 sm:px-0 py-20',
        sectionTitleClasses: 'max-w-screen-xl mx-auto',
        olClasses:
          'max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-10 mb-10 place-items-start place-content-stretch',
        imageClasses: 'h-52'
      },
      widget: {
        name: 'Posts',
        component: 'GridCols2',
        title: 'Art & Culture',
        slug: 'art-culture',
        type: 'categories',
        type_id: 423715388,
        orderBy: 'id',
        order: 'desc',
        paginationStyle: 'loadmore',
        count: 6
      }
    },
    {
      classes: {
        containerClasses: 'max-w-screen-xl mx-auto relative my-20 p-5 sm:p-0',
        olClasses: 'grid grid-cols-1 sm:grid-cols-12 gap-10 mb-10',
        imageClasses: 'h-52'
      },
      widget: {
        name: 'Posts',
        component: 'GridCols3',
        title: 'Church',
        slug: 'church-news',
        type: 'categories',
        type_id: 423715166,
        orderBy: 'id',
        order: 'desc',
        paginationStyle: 'loadmore',
        count: 5
      }
    },
    {
      classes: {
        containerClasses: 'bg-gray-100 dark:bg-gray-800  relative my-20 px-5 sm:px-0 py-20',
        sectionTitleClasses: 'max-w-screen-xl mx-auto',
        olClasses:
          'max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10',
        imageClasses: 'h-80'
      },
      widget: {
        name: 'Posts',
        component: 'GridCols',
        title: 'Art & Culture',
        slug: 'art-culture',
        type: 'categories',
        type_id: 423715388,
        orderBy: 'id',
        order: 'desc',
        paginationStyle: 'loadmore',
        count: 4
      }
    },
    {
      classes: {
        containerClasses: 'max-w-screen-xl mx-auto relative my-20 p-5 sm:p-0',
        olClasses: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10',
        imageClasses: 'h-48'
      },
      widget: {
        name: 'Posts',
        component: 'GridCols',
        title: 'Daily Catholic Prayer',
        slug: 'daily-catholic-prayer',
        type: 'categories',
        type_id: 423716895,
        orderBy: 'id',
        order: 'desc',
        paginationStyle: 'loadmore',
        count: 3
      }
    }
  ]

  let container = []
  for (const section of sections) {
    if (section.widget.name == 'Posts') {
      let args = `_embed=true&orderBy=${section.widget.orderBy ?? 'id'}&order=${
        section.widget.order ?? 'desc'
      }&per_page=${section.widget.count ?? 10}`
      if (section.widget.type && section.widget.type_id) {
        args += `&${section.widget.type}=${section.widget.type_id}`
      }
      //console.log('ARGS', `${process.env.NEXT_PUBLIC_SITE_URL}/posts?${args}`)

      const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/posts?${args}`)
      const blogs = await res.json()
      const total_pages = res.headers.get('X-WP-TotalPages')

      section['widget']['total_pages'] = total_pages
      // console.log('BLOGS INDEXJS', blogs)

      let posts = []
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

      // console.log('BLOGS PASSED TO POSTS.JS: ', posts)

      // console.log('SECTOIN', section)

      container.push({
        ...section,
        posts: posts
      })
      // console.log('POSTS CONTAINER', container)
    } else if (section.widget.name === 'ListWidget') {
      // see if its categories, tags or authors list
      // fetch the list in the order specified
      // send the items to the
      let args = `_embed=true&orderBy=${section.widget.orderBy ?? 'id'}&order=${
        section.widget.order ?? 'desc'
      }&per_page=${section.widget.count ?? 10}`

      const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/${section.widget.type}?${args}`)
      const items = await res.json()
      const total_pages = res.headers.get('X-WP-TotalPages')

      section['widget']['total_pages'] = total_pages

      container.push({
        ...section,
        posts: items
      })
    } else {
      container.push({
        ...section
      })
    }
  }

  // console.log('POSTS CONTAINER', ...container)

  return {
    props: {
      ...container
    }
  }
}
