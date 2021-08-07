export default function SVGArrow({ classes }) {
  return (
    <svg
      className={classes ? classes : 'h-5 text-red-800'}
      fill='currentColor'
      version='1.1'
      id='Layer_1'
      x='0px'
      y='0px'
      viewBox='0 0 512 512'
    >
      <g>
        <g>
          <path
            d='M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z'
          />
        </g>
      </g>
    </svg>
  )
}
