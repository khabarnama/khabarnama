import React from 'react'
import ContentLoader from 'react-content-loader'

const BlogLoader = (props) => (
  <ContentLoader viewBox='0 0 100 70' {...props}>
    <rect className='rounded-md' x='0' y='0' rx='0' ry='0' width='100%' height='5%' />
    <rect className='rounded-md' x='40%' y='6%' rx='0' ry='0' width='60%' height='5%' />
    <rect className='rounded-md' x='0' y='13%' rx='0' ry='0' width='20%' height='10%' />
    <rect className='rounded-md' x='80%' y='13%' rx='0' ry='0' width='20%' height='10%' />
    <rect className='rounded-md' x='0' y='26%' rx='0' ry='0' width='100%' height='60%' />
    <rect className='rounded-md' x='0' y='89%' rx='0' ry='0' width='100%' height='3%' />
    <rect className='rounded-md' x='0' y='93%' rx='0' ry='0' width='100%' height='3%' />
    <rect className='rounded-md' x='0' y='97%' rx='0' ry='0' width='100%' height='3%' />
  </ContentLoader>
)

export default BlogLoader
