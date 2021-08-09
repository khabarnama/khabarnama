import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import SVGCross from './SVG/SVGCross'
import SVGSearch from './SVG/SVGSearch'

function SearchForm() {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [display, setDisplay] = useState(false)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (search && search != '' && !loading && !disabled) {
      setLoading(true)
      setDisabled(true)
      router.push(`/search/${search}`)
    }
  }

  useEffect(() => {
    setLoading(false)
    setSearch('')
  }, [router])

  const inputHandler = (e) => {
    let str = e.target.value
    str = str.replace(/^\s+/, '')
    if (e.target.value == '') {
      setDisabled(true)
      setSearch('')
    } else {
      setSearch(str)
      setDisabled(false)
    }
  }
  // errors
  // onChange => one letter is not changable
  // once in the search page, the second search is not working

  return (
    <>
      <form
        className='w-96 hidden md:flex flex-row items-center gap-2'
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <button
          className='font-medium text-gray-700 hover:text-red-700'
          disabled={disabled}
          type='submit'
          onClick={(e) => onSubmitHandler(e)}
        >
          {loading ? (
            'loading...'
          ) : (
            <svg width='24' height='24' fill='none' className='text-gray-400'>
              <path
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
          )}
        </button>
        <input
          type='text'
          name='search'
          placeholder='Search...'
          onChange={(e) => inputHandler(e)}
          value={search}
          className='p-3 focus:ring-red-700 focus:border-red-700 rounded-md block w-full sm:text-sm'
        />
      </form>
    </>
  )
}

export default SearchForm
