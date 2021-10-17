export default function SVGArrow({ classes }) {
  return (
    <svg
      className={classes ? classes : 'h-5 w-5'}
      fill='currentColor'
      viewBox='0 0 24 24'
      role='img'
      ariaLabelledby='hashIconTitle'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      color='currentColor'
    >
      {' '}
      <title id='hashIconTitle'>
        Hash
      </title> <path d='M11 3L5 21M19 3L13 21M3 16L19 16M5 8L21 8' />{' '}
    </svg>
  )
}
