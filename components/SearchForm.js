import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import SearchResults from './SearchResults'

function SearchForm() {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    setSearch('')
  }, [router])

  const inputHandler = (e) => {
    let str = e.target.value
    str = str.replace(/^\s+/, '')
    if (e.keyCode != 13) {
      setSubmit(false)
    }
    if (e.target.value == '') {
      setSearch('')
    } else {
      setSearch(str)
    }
  }

  return (
    <div className='relative flex-grow'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSubmit(true)
        }}
      >
        <input
          type='text'
          name='search'
          placeholder='جستجو در هشتگ ها (#افغانستان)'
          onChange={(e) => inputHandler(e)}
          value={search}
          className='text-xs sm:text-sm md:text-base p-3 flex-grow border-2 border-gray-800 rounded-md block w-full sm:text-sm'
        />
        <button className='hidden' type='sumbit' />
      </form>
      {submit && search.length > 3 && (
        <div className='absolute top-10 z-40 bg-white right-0 left-0 w-full p-4 rounded-b-sm shadow-lg'>
          <SearchResults key='searchresults' s={search.replace('#', '')} />
        </div>
      )}
    </div>
  )
}

export default SearchForm
