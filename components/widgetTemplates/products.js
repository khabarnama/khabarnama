import ImageComponentity from '../ImageComponentity'
import Link from 'next/link'
import SVGArrow from './../SVG/SVGArrow'

export default function ProductsWidget({ products }) {
  const template = (products) => {
    return (
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        {products.map((product, index) => {
          if (index == 0) {
            return (
              <div
                key={product.id}
                className='bg-gray-300 col-span-1 lg:col-span-8 grid grid-cols-1 lg:grid-cols-12'
              >
                <div className='order-2 sm:order-1 bg-yellow-500 col-span-1 lg:col-span-6 h-72'>
                  {product.featured_media != 0 && product.featured_media != null ? (
                    <ImageComponentity
                      src={
                        product._embedded['wp:featuredmedia'][0].media_details.sizes.medium
                          .source_url
                      }
                      classes={'h-72'}
                      alt={product.title.rendered}
                    />
                  ) : (
                    ''
                  )}
                </div>
                <div className='order-1 sm:order-2 p-8 col-span-1 lg:col-span-6 flex flex-col justify-between'>
                  <Link href={`/product/${product.slug}`}>
                    <a aria-label='product' className='hover:underline'>
                      <h3
                        className='font-bold uppercase text-3xl'
                        dangerouslySetInnerHTML={{ __html: product.title.rendered }}
                      />
                    </a>
                  </Link>
                  <div className='mt-6'>
                    <div
                      className='text-gray-700 mb-2 line-clamp-3'
                      dangerouslySetInnerHTML={{ __html: product.content.rendered }}
                    />
                    <Link href={`/product/${product.slug}`}>
                      <a
                        aria-label='product'
                        className='font-semibold hover:underline flex items-center group'
                      >
                        <span className='mr-2 group-hover:mr-3'>Contact Us</span> <SVGArrow />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div
                key={product.id}
                className='bg-white col-span-1 lg:col-span-4 p-8 flex flex-col justify-between'
              >
                <Link href={`/product/${product.slug}`}>
                  <a aria-label='product' className='hover:underline'>
                    <h3
                      className='font-bold uppercase text-3xl'
                      dangerouslySetInnerHTML={{ __html: product.title.rendered }}
                    />
                  </a>
                </Link>
                <div className='mt-6'>
                  <div
                    className='text-gray-700 mb-2 line-clamp-3'
                    dangerouslySetInnerHTML={{ __html: product.content.rendered }}
                  />
                  <Link href={`/product/${product.slug}`}>
                    <a
                      aria-label='product'
                      className='font-semibold hover:underline flex items-center group'
                    >
                      <span className='mr-2 group-hover:mr-3'>Contact Us</span> <SVGArrow />
                    </a>
                  </Link>
                </div>
              </div>
            )
          }
        })}
      </div>
    )
  }
  return template(products)
}
