import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>


            <section
                // className=" relative bg-[url(https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg)] bg-cover bg-center bg-no-repeat"
                className=" relative bg-[url('/src/assets/images/homeimg.jpg')] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                            Let us find your

                            <strong className="block font-extrabold text-rose-500"> Perfect Gear. </strong>
                        </h1>

                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed font-bold">
                            Unleash the gamer in you <br /> and immerse into a new Reality
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Latest Arrivals
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products*/}

            <section>
                <div className=" mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-orange-600 sm:text-3xl">Product Collection</h1>

                        <p className="mx-auto mt-4 max-w-md text-gray-500">
                        Explore our vast collection of <span className='text-orange-400'>Gaming Gears</span>, designed to elevate your gaming experience to the next level! <br /> <span className='text-blue-700'> we've got you covered</span>.
                        </p>
                    </header>

                    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 rounded-md overflow-hidden shadow-xl">
                        <li className=' p-3 rounded-md shadow-xl' >
                            <a href="#" className=" group block overflow-hidden">
                                <img
                                    src="/src/assets/images/cat-headphones.webp"
                                    alt=""
                                    className="  h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg"
                                />

                                <div className="relative bg-white pt-3 border-solid ">
                                    <h3 className="font-bold text-m text-gray-700 group-hover:underline group-hover:underline-offset-4 ">
                                        RedGear Console Pro
                                    </h3>

                                    <p className="mt-2 ">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> Rs.2,999. </span>
                                    </p>
                                </div>
                            </a>
                            <span className="ml-14 inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
                                        <button
                                            className="inline-block bg-blue-800 text-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black focus:relative"
                                        >
                                            Know More
                                        </button>

                                        <button
                                            className="inline-block  bg-blue-400 text-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black focus:relative"
                                        >
                                            Add to cart
                                        </button>

                                        <button
                                            className="inline-block bg-orange-700 text-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black focus:relative"
                                        >
                                            Buy
                                        </button>
                                    </span>
                        </li>

                        <li className=' p-3 rounded-md shadow-xl'>
                            <a href="#" className="group block overflow-hidden">
                                <img
                                    src="/src/assets/images/cat-mouse.webp"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg"
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="font-bold text-m text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                        RedGear Gaming Mouse 
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> Rs.1399. </span>
                                    </p>
                                </div>
                            </a>
                            <span className="ml-14 inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
                                        <button
                                            className="inline-block bg-blue-800 text-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black focus:relative"
                                        >
                                            Know More
                                        </button>

                                        <button
                                            className="inline-block  bg-blue-400 text-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black focus:relative"
                                        >
                                            Add to cart
                                        </button>

                                        <button
                                            className="inline-block bg-orange-700 text-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black focus:relative"
                                        >
                                            Buy
                                        </button>
                                    </span>
                        </li>

                        <li className=' p-3 rounded-md shadow-xl '>
                            <a href="#" className="group block overflow-hidden">
                                <img
                                    src="/src/assets/images/cat-keyboard.webp"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg shadow-md"
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="font-bold text-m text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                        ReadGear Gaming Keyboard M400 RGB
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> Rs.1,899. </span>
                                    </p>
                                  
                                </div>
                            </a>
                            <span className="ml-14 inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
                                        <button
                                            className="inline-block bg-blue-800 text-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black focus:relative"
                                        >
                                            Know More
                                        </button>

                                        <button
                                            className="inline-block  bg-blue-400 text-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black focus:relative"
                                        >
                                            Add to cart
                                        </button>

                                        <button
                                            className="inline-block bg-orange-700 text-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black focus:relative"
                                        >
                                            Buy
                                        </button>
                                    </span>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="mx-auto w-full max-w-7xl">
                <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                    <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                            <h2 className="text-4xl font-bold sm:text-5xl">
                                Download Now
                                <span className="hidden sm:block text-4xl">Grab the latest Deals</span>

                            </h2>

                            <Link
                                className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                                to="/"
                            >
                                <svg
                                    fill="white"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"

                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>
                                &nbsp; GamerZone
                            </Link>
                        </div>
                    </div>

                    <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                        <img className="w-96" src="/src/assets/images/Designer.png" alt="image1" />
                    </div>
                </aside>

                <div className="grid  place-items-center sm:mt-20">
                    <img className="sm:w-96 w-96 rounded-lg" src="/src/assets/images/eat-sleep-play-soccer-repeat-college-mascot-designs.jpg" alt="image2" />
                </div>

                <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Your Game , Your Way</h1>

            </div>


        </>
    );
}