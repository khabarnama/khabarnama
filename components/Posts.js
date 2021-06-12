import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import ResponsiveArticle from './skeleton/ResponsiveArticle'
import SVGReload from './SVG/SVGReload'

import dynamic from 'next/dynamic'
const GridCols = dynamic(() => import('./BlogTemplates/GridCols'))
const GridCols2 = dynamic(() => import('./BlogTemplates/GridCols2'))
const GridCols3 = dynamic(() => import('./BlogTemplates/GridCols3'))
const SingleCol = dynamic(() => import('./BlogTemplates/SingleCol'))
const HorizontalSmall = dynamic(() => import('./BlogTemplates/HorizontalSmall'))
const HorizontalVariant = dynamic(() => import('./BlogTemplates/HorizontalVariant'))
const HorizontalVariantBig = dynamic(() => import('./BlogTemplates/HorizontalVariantBig'))
const SectionTitle = dynamic(() => import('./SectionTitle'))
const SectionTitleWidget = dynamic(() => import('./sectionTitle/SectionTitleWidget'))
const ListHorizontal = dynamic(() => import('./BlogTemplates/ListHorizontal'))

const SectionTitleTemplate = (widget, classes, type_url) => {
  switch (widget.name) {
    case 'Posts':
      return (
        <SectionTitle classes={classes.sectionTitleClasses} widget={widget} type_url={type_url} />
      )
    case 'ListWidget':
      return <SectionTitleWidget classes={classes.sectionTitleClasses} widget={widget} />

    default:
      return (
        <SectionTitle
          classes={classes.sectionTitleClasses}
          link={widget.slug ? `/${type_url}/${widget.slug}` : ''}
          title={widget.title}
        />
      )
  }
}

const BlogTemplate = (items, component, classes) => {
  switch (component) {
    case 'HorizontalSmall':
      return <HorizontalSmall key='1' blogs={items} classes={classes} />
    case 'HorizontalVariant':
      return <HorizontalVariant key='2' blogs={items} classes={classes} />
    case 'HorizontalVariantBig':
      return <HorizontalVariantBig key='3' blogs={items} classes={classes} />
    case 'SingleCol':
      return <SingleCol key='4' blogs={items} classes={classes} />
    case 'GridCols2':
      return <GridCols2 key='5' blogs={items} classes={classes} />
    case 'GridCols3':
      return <GridCols3 key='6' blogs={items} classes={classes} />

    case 'ListHorizontal':
      return <ListHorizontal key='7' items={items} />

    default:
      return <GridCols key='8' blogs={items} classes={classes} />
  }
}

const postsFetcher = async (url, widget_name) =>
  await fetch(url)
    .then((res) => {
      return res.json()
    })
    .then(async (res) => {
      console.log('DATA', res)
      let posts = []
      if (widget_name == 'Posts') {
        for (const post of res) {
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
      } else {
        posts.push(...data)
      }
      return posts
    })

function Page({ page, widget, classes }) {
  let args = `_embed=true&page=${page}&per_page=${widget.count ?? 10}&orderBy=${
    widget.orderBy ?? 'id'
  }&order=${widget.order ?? 'desc'}`
  if (widget.name == 'Posts') {
    args += `&${widget.type}=${widget.type_id}`
  }
  const { data: posts, error } = useSWR(
    [
      `${process.env.NEXT_PUBLIC_SITE_URL}/${
        widget.name == 'Posts' ? 'posts' : widget.type
      }?${args}`,
      widget.name
    ],
    postsFetcher
  )
  // console.log('ERROR', error)
  if (error)
    return (
      <div key='12535' className='flex justify-center items-center text-center'>
        ERROR: failed to load
      </div>
    )
  if (!posts) return <ResponsiveArticle />

  return BlogTemplate(posts, widget.component, classes)
}

export default function Posts({ posts, classes, widget }) {
  const router = useRouter()
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [disable, setDisable] = useState(false)
  const [pages, setPages] = useState([BlogTemplate(posts, widget.component, classes)])
  // posts
  // [{blog:post, cats, tags}, {blog:post, cats, tags}, {blog:post, cats, tags}, ]
  // const [items, setItems] = useState(posts)
  // console.log('items: POSTS.JS', items)

  const isInitialMount = useRef(true)

  let type_url
  switch (widget.type) {
    case 'categories':
      type_url = 'category'
      break
    case 'tags':
      type_url = 'tag'
      break

    default:
      type_url = widget.type
      break
  }

  // trigger loadmore (update page number)
  function updatePage(pageNum) {
    // console.log('UPDATING PAGE NUMBER...')
    setPage(pageNum)
    // console.log('PAGE UPDATEPAGE: ', page)
    return null
  }

  // get more posts
  useEffect(async () => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      // console.log('CURRENT')
    } else {
      // console.log('ON PAGE UPDATE SET LOADING TRUE')
      setLoading(true)
      const pages_new = [<Page page={page} widget={widget} classes={classes} key={page} />]
      if (widget.paginationStyle == 'pagination') {
        console.log('PAGES', pages)
        console.log('NEW PAGES', pages_new)
        setPages(...pages_new)
        console.log('PAGES AFTER SETPAGES', pages)
        // setPages([...(<Page page={page} widget={widget} key={page} />)])
      } else {
        setPages([...pages, <Page page={page} widget={widget} classes={classes} key={page} />])
      }
    }
  }, [page])

  useEffect(() => {
    // console.log('ON ROUTER USE EFFECT')
    // console.log('PAGE', page)
    setPages([BlogTemplate(posts, widget.component, classes)])
  }, [router])

  // disable loadmore
  useEffect(() => {
    // console.log('ON EACH PAGE UPDATE IF PAGE === LAST PAGE SET DISABLE TRUE')
    if (widget.page >= widget.totalPages) {
      setDisable(true)
    }
    // console.log('Total', totalPages)
    // console.log('Current Page', page)
  }, [page])

  useEffect(() => {
    // console.log('ON EACH pages UPDATE SET LOADING FALSE: ')
    setLoading(false)
  }, [pages])

  // ========================================================
  // INFINITE SCROLLING
  // ========================================================

  // Listen to scroll positions for loading more data on scroll
  if (widget.paginationStyle == 'infinite') {
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    })

    const handleScroll = () => {
      if (!loading && !disable) {
        // To get page offset of last blog
        const lastBlogLoaded = document.querySelector(
          '.infinite-loader-container > .infinite-loader-item:last-child'
        )
        if (lastBlogLoaded) {
          const lastBlogLoadedOffset = lastBlogLoaded.offsetTop + lastBlogLoaded.clientHeight
          const pageOffset = window.pageYOffset + window.innerHeight
          // Detects when user scrolls down till the last blog
          if (pageOffset > lastBlogLoadedOffset) {
            // fetch new posts
            updatePage(page * 1 + 1)
          }
        }
      }
    }
  }

  // =============================================
  // LOAD MORE BUTTON OR PAGINATION COMPONENT
  // =============================================

  function Pagination({ type }) {
    if (type == 'loadmore') {
      return <Loadmore />
    } else if (type == 'pagination') {
      return <PaginationButtons />
    } else if (type == 'infinite') {
      return <InfiniteLoader />
    }
    return ''
  }

  // ===================================
  // INFINITE LOADING COMPONENT
  // ===================================
  function InfiniteLoader() {
    return loading ? <ResponsiveArticle /> : ''
  }

  // ===================================
  // LOADMORE BUTTON COMPONENT
  // =====================================

  function Loadmore() {
    return (
      <div className='flex flex-col gap-5 items-center w-full'>
        {loading ? <ResponsiveArticle /> : ''}
        <button
          className='flex flex-row items-center justify-center gap-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 w-40 h-12 rounded disabled:bg-gray-100 disabled:cursor-not-allowed'
          disabled={disable}
          onClick={() => updatePage(page * 1 + 1)}
        >
          <SVGReload />
          {loading ? 'Loading...' : 'Load more'}
        </button>
      </div>
    )
  }

  // ================================
  // PAGINATION BUTTONS
  // ================================
  function PaginationButtons() {
    const pagesArray = []
    // first
    pagesArray.push(
      <li key='first'>
        <button
          className='border hidden sm:inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 disabled:bg-gray-100 disabled:cursor-not-allowed'
          disabled={page == 1 ? true : false}
          onClick={() => updatePage(1)}
        >
          First
        </button>
      </li>
    )
    // previous
    pagesArray.push(
      <li key='prev'>
        <button
          className='border bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 disabled:bg-gray-100 disabled:cursor-not-allowed'
          disabled={page == 1 ? true : false}
          onClick={() => updatePage(page - 1)}
        >
          Prev
        </button>
      </li>
    )
    // current + 5
    let noBefore
    let noAfter
    let start = page
    let last = widget.totalPages

    // total pages = 1
    // page = 1
    if (page < widget.totalPages - 5) {
      noAfter = 5
      noBefore = 0
      start = page * 1
      last = start + 5
    } else {
      noAfter = widget.totalPages - page // 180 - 178 = 2 || 1-1=0
      if (widget.totalPages < 5) {
        noBefore = 0
      } else {
        noBefore = 5 - noAfter
      }
      start = page - noBefore
    }

    for (let i = start; i <= last; i++) {
      pagesArray.push(
        <li key={i}>
          <button
            className={`${
              page == i ? '' : 'hidden'
            } border sm:inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 disabled:bg-gray-100 disabled:cursor-not-allowed`}
            disabled={page == i ? true : false}
            onClick={() => updatePage(i)}
          >
            {i}
          </button>
        </li>
      )
    }

    // next
    pagesArray.push(
      <li key='next'>
        <button
          className='border bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 disabled:bg-gray-100 disabled:cursor-not-allowed'
          disabled={page == widget.totalPages ? true : false}
          onClick={() => updatePage(page + 1)}
        >
          Next
        </button>
      </li>
    )
    // last
    pagesArray.push(
      <li key='last'>
        <button
          className='border hidden sm:inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 disabled:bg-gray-100 disabled:cursor-not-allowed'
          disabled={page == widget.totalPages ? true : false}
          onClick={() => updatePage(widget.totalPages)}
        >
          Last ({widget.totalPages})
        </button>
      </li>
    )

    return (
      <ul className='inline-flex text-center'>
        {pagesArray.map((page) => {
          return page
        })}
      </ul>
    )
  }

  return (
    <>
      {pages.length == 0 || !pages ? (
        <h1>No Results found</h1>
      ) : (
        <div className={widget.title && classes && classes.containerClasses}>
          {widget.title && SectionTitleTemplate(widget, classes, type_url)}
          {loading && widget.paginationStyle == 'pagination' ? (
            <ResponsiveArticle />
          ) : (
            <div
              className={`infinite-loader-container w-full ${
                classes.olClasses
                  ? classes.olClasses
                  : 'grid sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-start place-content-stretch'
              }`}
            >
              {pages}
            </div>
          )}
          <div className='flex items-center justify-center'>
            {widget.paginationStyle ? <Pagination type={widget.paginationStyle} /> : ''}
          </div>
        </div>
      )}
    </>
  )
}
