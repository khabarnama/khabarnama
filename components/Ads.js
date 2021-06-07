import HorizontalAds from './widgetTemplates/HorizontalAds'

const Template = (widget, classes) => {
  switch (widget.component) {
    case 'HorizontalAds':
      return <HorizontalAds widget={widget} classes={classes} />

    default:
      return <HorizontalAds widget={widget} classes={classes} />
  }
}

export default function Ads({ classes, widget }) {
  return (
    <>
      <div className={classes && classes.containerClasses}>{Template(widget, classes)}</div>
    </>
  )
}
