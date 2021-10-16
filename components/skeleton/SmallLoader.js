import React from 'react'
import ContentLoader from 'react-content-loader'

const SmallLoader = (props) => (
  <ContentLoader
    viewBox='0 0 100 100'
    className='w-full flex justify-between items-center'
    {...props}
  >
    <circle cx='50%' cy='50%' r='30%' />
  </ContentLoader>
)

export default SmallLoader
