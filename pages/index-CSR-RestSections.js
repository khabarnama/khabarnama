import React, { useState, useEffect } from 'react'
import Posts from '../components/Posts'
import Ads from '../components/Ads'
import Head from 'next/head'

const SectionWidget = (containerItem) => {
  console.log('CONTAINER ITEM ', containerItem)
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

function Blog(container) {
  const sections = Object.entries(container)

  const restSections = [
    {
      classes: {
        containerClasses: 'bg-gray-100 dark:bg-gray-800  relative m2-10 px-5 lg:px-0 py-20',
        sectionTitleClasses: 'max-w-screen-xl mx-auto',
        olClasses:
          'max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10',
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
    }
  ]
  const [rest, setRest] = useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      let getSections = await getHomeSections(restSections)
      setRest(Object.entries([...getSections]))
    }

    fetchMyAPI()
  }, [])

  useEffect(() => {
    console.log('REST ', rest)
  }, [rest])

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
      {sections.map((container) => {
        return SectionWidget(container)
      })}
      {rest.length > 0 &&
        rest.map((sec) => {
          return SectionWidget(sec)
        })}
    </>
  )
}

const getHomeSections = async (sections) => {
  // console.log('GETHOMESECTIONS LENGTH', sections.length)
  // console.log('SECTIONS LENGTH | SECTIONS', sections.length, sections)

  let container = []
  for (const section of sections) {
    // console.log('SECTION NAME', section.widget.name)
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
  console.log('CONTAINER', container)
  return container
}

export async function getStaticProps() {
  const sections = [
    {
      classes: {
        containerClasses: 'max-w-screen-xl mx-auto relative mb-5 lg:mb-20 mt-5 lg:mt-10 p-5 lg:p-0',
        olClasses: 'grid grid-cols-1 sm:grid-cols-12 gap-5 md:gap-10',
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
        containerClasses: 'max-w-screen-lg mx-auto relative my-5 lg:my-20',
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
    }
  ]

  const container = await getHomeSections(sections)

  // console.log('POSTS CONTAINER', ...container)

  return {
    props: {
      ...container
    }
  }
}

export default Blog
