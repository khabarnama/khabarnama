import HeaderClassic from './HeaderClassic'
import LatestStories from './LatestStories'
import SVGHome from './../components/SVG/SVGHome'
import SVGNotification from './../components/SVG/SVGNotification'

export default function Layout({ children }) {
  return (
    <div className='bg-white py-4 md:px-4 flex flex-col md:gap-5'>
      <HeaderClassic />
      <div className='main grid grid-cols-12 justify-between'>
        <div className='col-span-12 md:col-span-9 flex'>
          <div className='block fixed bottom-0 right-0 left-0 md:relative bg-white z-50 md:inline-block md:w-72 md:flex-none md:border-r border-gray-100'>
            <div className='md:sticky md:top-0 bg-white md:p-8 md:pt-0 md:pr-1'>
              <ul className='navigationbar md:my-5 border-y flex flex-row justify-around md:flex-col text-lg'>
                <li>
                  <a className='text-red-800 hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full font-semibold flex items-center'>
                    <SVGHome />
                    <span className='ml-2 hidden md:inline-block'>Home</span>
                  </a>
                </li>
                <li>
                  <a className='flex items-center hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                    <SVGNotification />
                    <span className='ml-2 hidden md:inline-block'>Latest Stories</span>
                  </a>
                </li>
                <li>
                  <a className='flex items-center hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                    <svg className='h-7 ml-1 mr-1' fill='currentColor' viewBox='0 0 512 512'>
                      <g>
                        <g>
                          <path
                            d='M437.018,74.982C388.666,26.628,324.379,0,255.998,0S123.332,26.629,74.981,74.982
            c-48.351,48.352-74.98,112.639-74.98,181.02s26.628,132.667,74.98,181.019C123.332,485.372,187.618,512,255.998,512
            s132.667-26.628,181.02-74.98c48.353-48.351,74.981-112.638,74.981-181.019S485.371,123.334,437.018,74.982z M355.72,73.707
            c3.666-3.595,7.392-7.251,10.862-10.855c14.444,8.302,27.867,18.185,40.047,29.399c-0.06,0.082-0.124,0.175-0.177,0.242
            c-2.208-0.214-5.189-1.191-8.329-2.222c-6.078-1.993-13.646-4.471-22.419-3.769c-8.55,0.687-15.724,4.22-21.489,7.058
            c-2.67,1.314-7.106,3.499-8.632,3.507c-1.559-0.748-4.793-4.887-6.079-6.541C343.495,85.697,349.702,79.61,355.72,73.707z
             M185.755,44.756c3.972,12.127,8.509,23.571,12.951,34.461c3.65,8.947,7.787,19.086,6.941,27.398
            c-0.344,3.371-0.932,5.013-1.223,5.653c-1.487,0.477-5.039,0.775-7.465,0.977c-7.623,0.636-18.063,1.507-27.724,8.291
            c-1.897,1.331-3.598,2.661-5.245,3.947c-2.775,2.167-5.644,4.409-7.448,4.914c-1.782,0.499-5.352,0.092-8.802-0.301
            c-2.542-0.289-5.423-0.618-8.459-0.718c-9.309-0.314-32.07,3.647-42.928,17.828c-5.601,7.313-7.211,16.162-4.534,24.921
            c1.986,6.495,6.164,10.924,9.582,14.059c14.943,13.7,35.422,23.399,56.188,26.612c2.898,0.449,5.658,0.786,8.327,1.113
            c14.408,1.763,18.469,2.938,22.178,9.622c1.129,2.035,2.138,4.709,3.208,7.542c1.337,3.543,2.853,7.557,5.059,11.604
            c7.111,13.041,19.376,20.697,31.984,19.965c9.384-0.54,16.072-5.267,20.957-8.718c1.705-1.205,3.469-2.452,4.506-2.884
            c1.976-0.823,6.728,0.046,12.502,3.893c5.636,3.758,9.5,8.13,10.88,12.311c0.997,3.025,0.343,6.47-0.974,7.583l-30.579,26.118
            c-7.859,6.713-22.488,19.208-22.941,38.068c-0.13,5.427,0.919,10.312,1.844,14.622c0.18,0.837,0.397,1.849,0.588,2.826
            c-2.866,0.703-6.368,1.602-10.026,3.448c-18.567,9.374-20.236,30.755-21.233,43.529c-0.292,3.733-1.037,6.631-1.785,8.606
            c-0.415-0.779-0.8-1.704-1.064-2.734c-0.717-2.799-1.082-6.187-1.469-9.775c-0.631-5.853-1.347-12.487-3.812-19.32
            c-3.174-8.797-8.44-15.711-13.087-21.809c-4.046-5.31-7.54-9.897-8.543-14.134c-0.753-3.187-0.395-7.693-0.017-12.465
            c0.575-7.237,1.228-15.441-1.197-24.261c-3.449-12.548-11.538-21.035-18.674-28.522c-4.037-4.235-7.85-8.236-9.88-12.112
            c-2.028-3.869-1.881-8.012-1.447-15.001c0.415-6.694,0.932-15.024-2.04-23.732c-3.22-9.432-10.527-14.663-15.424-18.17
            c-12.858-9.205-24.901-19.687-35.795-31.157c-5.43-5.718-10.714-11.88-12.597-18.209c-0.574-1.929-0.972-3.385-1.282-4.525
            c-1.131-4.139-2.098-6.725-3.731-9.226C88.968,99.18,132.998,62.346,185.755,44.756z M255.998,478.609
            c-122.746,0-222.606-99.862-222.606-222.607c0-23.651,3.721-46.447,10.585-67.848c3.564,5.1,7.588,9.634,11.448,13.697
            c12.347,12.999,25.996,24.88,40.629,35.356c1.085,0.777,2.63,1.883,3.435,2.607c0.55,2.459,0.329,6,0.08,10.033
            c-0.53,8.547-1.257,20.252,5.198,32.569c4.205,8.024,10.092,14.2,15.286,19.65c5.058,5.307,9.426,9.889,10.647,14.334
            c0.87,3.168,0.5,7.829,0.107,12.765c-0.54,6.798-1.153,14.505,0.808,22.796c2.636,11.143,8.927,19.4,14.477,26.685
            c3.499,4.592,6.804,8.931,8.238,12.903c1.105,3.065,1.552,7.197,2.023,11.571c0.473,4.385,1.01,9.355,2.32,14.473
            c3.926,15.336,16.655,30.052,33.831,30.051c0.915,0,1.846-0.042,2.786-0.128c17.786-1.625,29.999-17.517,31.871-41.477
            c0.303-3.878,1.101-14.101,3.079-16.356c0.612-0.244,2.103-0.609,3.209-0.879c4.705-1.152,11.814-2.894,17.688-8.91
            c10.819-11.08,7.836-24.971,6.053-33.27c-0.536-2.499-1.145-5.333-1.11-6.81c0.095-3.955,8.196-10.874,11.246-13.479
            l30.516-26.066c11.881-10.047,16.325-27.524,11.059-43.487c-3.76-11.396-12.082-21.643-24.069-29.635
            c-14.789-9.857-30.778-12.384-43.861-6.933c-4.449,1.853-8.046,4.395-10.937,6.438c-0.875,0.619-2.028,1.434-2.966,2.029
            c-0.431-0.48-0.928-1.144-1.389-1.99c-1.1-2.018-2.088-4.638-3.135-7.412c-1.378-3.65-2.94-7.788-5.251-11.953
            c-12.367-22.285-32.569-24.757-47.319-26.561c-2.521-0.308-4.903-0.6-7.278-0.967c-12.417-1.921-25.049-7.373-34.746-14.875
            c3.554-1.278,7.898-2.263,10.236-2.172c1.692,0.056,3.675,0.282,5.777,0.521c6.023,0.687,13.516,1.54,21.592-0.724
            c8.153-2.285,14.164-6.98,18.993-10.752c1.378-1.076,2.679-2.093,3.879-2.935c2.26-1.586,6.657-1.953,11.312-2.342
            c11.593-0.968,35.716-2.981,39.131-36.524c1.69-16.596-4.372-31.454-9.243-43.393c-4.051-9.932-7.982-19.79-11.412-29.991
            c12.285-2.106,24.906-3.219,37.785-3.219c27.634,0,54.101,5.077,78.538,14.32c-0.732,0.72-1.466,1.439-2.197,2.156
            c-7.421,7.278-15.095,14.805-20.376,21.642c-2.233,2.891-5.969,7.728-7.071,14.694c-1.867,11.818,5.2,20.897,8.218,24.773
            c4.484,5.763,11.992,15.409,24.393,18.502c2.77,0.69,5.444,0.986,8.01,0.986c9.344,0,17.292-3.913,23.454-6.948
            c3.548-1.747,7.217-3.554,9.41-3.73c2.088-0.171,5.774,1.044,9.345,2.214c5.214,1.71,11.123,3.646,18.084,3.899
            c0.42,0.016,0.835,0.023,1.251,0.023c8.644-0.001,16.319-3.292,22.402-9.272c14.782,18.364,26.714,39.11,35.116,61.568
            c-1.19,0.031-2.402,0.048-3.484,0.061c-3.272,0.041-6.982,0.088-11.023,0.398c-9.325,0.717-16.629-1.99-25.878-5.418
            c-6.35-2.353-13.548-5.021-21.987-6.698c-22.742-4.519-46.069,7.879-59.43,31.587c-3.891,6.904-22.498,42.451-6.665,64.26
            c5.936,8.176,13.878,12.937,20.261,16.761c8.564,5.133,17.418,10.44,27.45,14.488c2.136,0.862,4.251,1.643,6.295,2.397
            c6.084,2.246,12.376,4.569,14.626,7.65c1.261,1.726,2.577,5.614,1.68,14.325c-0.601,5.827-2.933,12.186-5.402,18.918
            c-6.082,16.586-14.413,39.304,5.108,61.608c3.494,3.991,7.437,7.371,11.717,10.122
            C377.228,451.708,319.698,478.609,255.998,478.609z M431.254,376.566c-5.719-6.535-4.954-11.571,1.114-28.122
            c2.924-7.974,6.237-17.01,7.266-26.991c1.616-15.68-0.979-27.929-7.934-37.447c-8.194-11.216-20.297-15.685-30.023-19.274
            c-1.899-0.701-3.692-1.364-5.367-2.039c-7.604-3.068-14.974-7.485-22.777-12.162c-4.001-2.398-8.133-4.874-10.163-7.421
            c-1.183-4.102,2.253-17.496,8.492-28.568c5.035-8.937,14.353-17.117,23.83-15.23c5.836,1.16,11.206,3.15,16.893,5.258
            c10.977,4.068,23.417,8.675,40.044,7.401c2.972-0.229,5.977-0.267,8.882-0.303c4.127-0.051,8.334-0.106,12.514-0.713
            c3.003,14.553,4.582,29.618,4.582,45.047c0.001,46.857-14.563,90.368-39.385,126.273
            C436.238,381.079,433.541,379.179,431.254,376.566z'
                          />
                        </g>
                      </g>
                    </svg>

                    <span className='ml-2 hidden md:inline-block'>Beyond Afg</span>
                  </a>
                </li>
                <li>
                  <a className='flex items-center hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                    <svg
                      className='h-8'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      id='_24x24_On_Light_Messages'
                      data-name='24x24/On Light/Messages'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect id='view-box' width='24' height='24' fill='none' />
                      <path
                        id='Shape'
                        d='M6.485,18.519a9.891,9.891,0,0,1-4.876.981c-.285,0-.584-.006-.887-.018a.739.739,0,0,1-.65-.432.738.738,0,0,1,.085-.775,11.192,11.192,0,0,0,2.072-3.787A9.751,9.751,0,1,1,10.751,19.5,9.661,9.661,0,0,1,6.485,18.519ZM6.808,17a8.247,8.247,0,1,0-3.139-3.015.75.75,0,0,1,.092.535A10.189,10.189,0,0,1,2.2,17.99a7.2,7.2,0,0,0,3.816-.947.745.745,0,0,1,.431-.136A.756.756,0,0,1,6.808,17Zm-.057-4.5a.75.75,0,0,1,0-1.5h7a.75.75,0,0,1,0,1.5Zm0-4a.75.75,0,0,1,0-1.5h5a.75.75,0,1,1,0,1.5Z'
                        transform='translate(1.249 2.25)'
                        fill='currentColor'
                      />
                    </svg>
                    <span className='ml-2 hidden md:inline-block'>Narratives</span>
                  </a>
                </li>
                <li>
                  <a className='flex items-center hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                    <svg
                      className='h-8'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      id='_24x24_On_Light_Mic'
                      data-name='24x24/On Light/Mic'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect id='view-box' width='24' height='24' fill='none' />
                      <path
                        id='Shape'
                        d='M4.75,19a.75.75,0,1,1,0-1.5H7V15.464A7.749,7.749,0,0,1,0,7.75a.75.75,0,0,1,1.5,0,6.25,6.25,0,1,0,12.5,0,.75.75,0,1,1,1.5,0,7.749,7.749,0,0,1-7,7.714V17.5h2.25a.75.75,0,1,1,0,1.5ZM3,7.75v-3a4.75,4.75,0,1,1,9.5,0v3a4.75,4.75,0,0,1-9.5,0Zm1.5-3v3a3.25,3.25,0,0,0,6.5,0v-3a3.25,3.25,0,0,0-6.5,0Z'
                        transform='translate(4.25 2.25)'
                        fill='currentColor'
                      />
                    </svg>
                    <span className='ml-2 hidden md:inline-block'>Social Voices</span>
                  </a>
                </li>
                <li>
                  <a className='flex items-center hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                    <svg
                      className='h-8'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      id='_24x24_On_Light_Play'
                      data-name='24x24/On Light/Play'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect id='view-box' width='24' height='24' fill='none' />
                      <path
                        id='Shape'
                        d='M0,9.75A9.75,9.75,0,1,1,9.75,19.5,9.761,9.761,0,0,1,0,9.75Zm1.5,0A8.25,8.25,0,1,0,9.75,1.5,8.259,8.259,0,0,0,1.5,9.75Zm5.75-3.8,7,3.8-7,3.8Z'
                        transform='translate(2.25 2.25)'
                        fill='currentColor'
                      />
                    </svg>
                    <span className='ml-2 hidden md:inline-block'>Watch</span>
                  </a>
                </li>
              </ul>
              <div className='ml-4 hidden md:inline-block'>
                <button className='text-center px-7 py-3 bg-red-700 text-white rounded-full shadow-md hover:bg-red-800 transition duration-300 ease-in-out'>
                  See Archives
                </button>
              </div>
            </div>
          </div>
          <div className='flex-grow flex flex-col'>{children}</div>
        </div>

        <div className='hidden md:block relative col-span-3 bg-white pr-5 scrollbar-hide h-screen overflow-y-scroll sticky top-0'>
          <LatestStories />
          <div className='border-b border-gray-100 py-5 mb-2'>
            <h1 className='uppercase font-semibold mb-3'>ADS</h1>
            <img
              className='w-full'
              src='https://paikaftab.com/wp-content/uploads/2021/06/banner-1.jpg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
