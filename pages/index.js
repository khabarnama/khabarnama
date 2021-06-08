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
  // {
  //   section: {
  //     containerClasses: 'max-w-screen-xl mx-auto relative mb-10',
  //     sectionTitleClasses: '',
  //     olClasses: 'grid grid-cols-1 sm:grid-cols-12 gap-10',
  //     liType: 'HorizontalVariant',
  //     imageClasses: 'h-52'
  //   },
  //   name: 'NEWS',
  //   slug: 'news',
  //   type: 'categories',
  //   type_id: 423715164,
  //   count: 6
  // },
  // {
  //   section: {
  //     containerClasses: 'max-w-screen-lg mx-auto my-10 relative',
  //     olClasses: 'text-center',
  //     liType: 'HorizontalAds',
  //     imageClasses: 'h-32 w-full',
  // image: {
  //   href: 'https://componentity.com',
  //   src: 'https://www.etilaatroz.com/wp-content/uploads/2020/11/F45-fitness-training-afghanistan.jpg'
  // }
  //   },
  //   type: 'ads',
  //   count: 1
  // },
  // {
  //   section: {
  //     containerClasses: 'max-w-screen-xl mx-auto mb-10 relative',
  //     olClasses: 'grid sm:grid-cols-2 lg:grid-cols-4 gap-10',
  //     liType: 'GridCols',
  //     imageClasses: 'h-52'
  //   },
  //   name: 'SPRITUALITY',
  //   slug: 'spirituality',
  //   type: 'categories',
  //   type_id: 1494,
  //   count: 8
  // },
  // {
  //   section: {
  // containerClasses: 'bg-gray-100 p-8 mb-10 relative',
  // sectionTitleClasses: 'max-w-screen-xl mx-auto',
  // olClasses: 'max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10',
  //     liType: 'HorizontalSmall',
  // imageClasses: 'h-20 w-20'
  //   },
  //   name: 'LATEST',
  //   count: 6
  // },
  // {
  //   section: {
  //     containerClasses: 'max-w-screen-lg mx-auto relative',
  //     olClasses: 'grid grid-cols-1 gap-10',
  //     liType: 'SingleCol',
  //     imageClasses: 'h-52'
  //   },
  //   name: 'LIFESTYLE',
  //   slug: 'lifestyle',
  //   type: 'categories',
  //   type_id: 278,
  //   count: 6
  // }

  // ====================================
  // HORIZONTALVARIANT
  // - NO PAGINATION SHOULD BE APPLIED
  // DONT REPEAT THE SAME CATEGORY IN 2 DIFFERENT SECTIONS
  // ====================================

  // =====================
  // classes: {
  //   containerClasses,
  //   olClasses,
  //   imageClasses,
  //   sectionTitleClasses,
  // }
  // widget: {
  //   name,
  //   component,
  //   title,
  //   slug,
  //   type,
  //   type_id,
  //   count,
  //   paginationStyle,
  //   totalPages
  // }
  // =====================

  const sections = [
    {
      classes: {
        containerClasses: 'max-w-screen-xl mx-auto relative my-10',
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
        containerClasses: 'max-w-screen-lg mx-auto relative my-10',
        imageClasses: 'h-32'
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
        containerClasses: 'bg-gray-100 relative my-10 p-5 sm:p-0 py-10',
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
        containerClasses: 'max-w-screen-xl mx-auto relative my-10',
        olClasses: 'flex flex-wrap gap-4 mb-8',
        sectionTitleClasses: 'max-w-screen-xl mx-auto'
      },
      widget: {
        name: 'ListWidget',
        type: 'categories',
        title: 'Categories List',
        desc: 'Most Popular Categories in order',
        count: 10,
        paginationStyle: 'loadmore',
        orderBy: 'count',
        order: 'desc',
        component: 'ListHorizontal'
      }
    },
    {
      classes: {
        containerClasses: 'max-w-screen-xl mx-auto relative my-10',
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
        containerClasses: 'max-w-screen-xl mx-auto relative my-10',
        olClasses:
          'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 place-content-stretch mb-8',
        sectionTitleClasses: 'max-w-screen-xl mx-auto'
      },
      widget: {
        name: 'ListWidget',
        type: 'tags',
        title: 'Tags List',
        desc: 'Most Popular Tags in order',
        count: 10,
        paginationStyle: 'loadmore',
        orderBy: 'count',
        order: 'desc',
        component: 'ListHorizontal'
      }
    },
    {
      classes: {
        containerClasses: 'max-w-screen-xl mx-auto relative my-10',
        olClasses: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10',
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
        count: 8
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
