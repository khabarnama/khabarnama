import ImageComponentity from '../ImageComponentity'
import Link from 'next/link'

export default function HorizontalAds({ section }) {
  const template = (section) => {
    return (
      <Link href={`${section.image.href}`}>
        <a aria-label='ADS image'>
          {section.image.src && (
            <ImageComponentity
              classes={section.imageClasses}
              src={section.image.src}
              alt={section.image.href}
            />
          )}
        </a>
      </Link>
    )
  }
  return template(section)
}
