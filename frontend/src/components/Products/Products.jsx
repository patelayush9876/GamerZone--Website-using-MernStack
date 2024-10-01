

import { useLoaderData } from 'react-router-dom'

function Products() {
  const data = useLoaderData()

  return (
    <div className='grid grid-cols-4 gap-3 p-9'>
      <a href="#" className="rounded-md group relative block overflow-hidden">
        <button
          className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        >
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src="/src/assets/images/headphones.webp"
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900">ReadGear Headsets B550</h3>

          <p className="mt-1.5 text-sm text-gray-700">$14.99</p>

          <form className="mt-4">
            <button
              className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
            >
              Add to Cart
            </button>
          </form>
        </div>
      </a>
      {/* card2 */}
      <a href="#" className="rounded-md group relative block overflow-hidden">
        <button
          className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        >
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src="/src/assets/images/cat-camera.webp"
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900">ANT Esporst Headphones</h3>

          <p className="mt-1.5 text-sm text-gray-700">$15.99</p>

          <form className="mt-4">
            <button
              className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
            >
              Add to Cart
            </button>
          </form>
        </div>
      </a>
      {/* card3 */}
      <a href="#" className="rounded-md group relative block overflow-hidden">
        <button
          className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        >
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src="/src/assets/images/MK1300-MINIThuminal-Ant-Esports-CABINET-2.webp"
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900">ANT ESPOSRTS Keyboard</h3>

          <p className="mt-1.5 text-sm text-gray-700">$10.99</p>

          <form className="mt-4">
            <button
              className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
            >
              Add to Cart
            </button>
          </form>
        </div>
      </a>
      {/* card4 */}
      <a href="#" className="rounded-md group relative block overflow-hidden">
        <button
          className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        >
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src="/src/assets/images/OIP.jpeg"
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900">The Gammers Combo</h3>

          <p className="mt-1.5 text-sm text-gray-700">$20.09</p>

          <form className="mt-4">
            <button
              className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
            >
              Add to Cart
            </button>
          </form>
        </div>
      </a>
{/* card */}
      <a href="#" className="rounded-md group relative block overflow-hidden">
        <button
          className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        >
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src="/src/assets/images/ps.jpeg"
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900">PlayStation 4</h3>

          <p className="mt-1.5 text-sm text-gray-700">$355.99</p>

          <form className="mt-4">
            <button
              className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
            >
              Add to Cart
            </button>
          </form>
        </div>
      </a>
      {/* card5 */}
      <a href="#" className="rounded-md group relative block overflow-hidden">
        <button
          className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        >
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src="/src/assets/images/streaming.jpeg"
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900">Stream Modules Combo-pack</h3>

          <p className="mt-1.5 text-sm text-gray-700">$105.99</p>

          <form className="mt-4">
            <button
              className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
            >
              Add to Cart
            </button>
          </form>
        </div>
      </a>
      {/* card6 */}
      <a href="#" className="rounded-md group relative block overflow-hidden">
        <button
          className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        >
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src="/src/assets/images/set gears.jpg"
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900">ROG Gaming Gear</h3>

          <p className="mt-1.5 text-sm text-gray-700">$200.99</p>

          <form className="mt-4">
            <button
              className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
            >
              Add to Cart
            </button>
          </form>
        </div>
      </a>
      {/* card7 */}
      <a href="#" className="rounded-md group relative block overflow-hidden">
        <button
          className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        >
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src="/src/assets/images/cpu.jpeg"
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900">McLaren Built CPU(i9-1357H)</h3>

          <p className="mt-1.5 text-sm text-gray-700">$754.99</p>

          <form className="mt-4">
            <button
              className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
            >
              Add to Cart
            </button>
          </form>
        </div>
      </a>
    </div>
  )
}

export default Products;

// export const githubInfoLoader = async () => {
//   const response = await fetch('https://api.github.com/users/patelayush9876')

//   return response.json()
// } 