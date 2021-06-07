import ImageComponentity from '../ImageComponentity'
import Link from 'next/link'

export default function HorizontalAds({ widget, classes }) {
  const template = (widget, classes) => {
    return (
      <Link target='_blank' href={`${widget.image.href}`}>
        <a aria-label='ADS image'>
          {widget.image.src && (
            <ImageComponentity
              classes={classes.imageClasses}
              src={widget.image.src}
              alt={widget.image.href}
            />
          )}
        </a>
      </Link>
    )
  }
  return template(widget, classes)
}
