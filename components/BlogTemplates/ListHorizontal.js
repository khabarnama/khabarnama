import Link from 'next/link'

export default function ListHorizontal({ items }) {
  const template = (item) => {
    let taxonomy = ''
    if (!item.taxonomy) {
      taxonomy = 'author'
    } else if (item.taxonomy == 'post_tag') {
      taxonomy = 'tag'
    } else {
      taxonomy = item.taxonomy
    }
    return (
      <Link key={item.id} href={`/${taxonomy}/${encodeURIComponent(item.slug)}`}>
        <a
          aria-label='Link'
          className='flex-1 rounded-md flex items-center justify-center py-3 text-xs bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out text-center'
        >
          {item.name}
        </a>
      </Link>
    )
  }
  return items.map((item) => {
    return template(item)
  })
}
