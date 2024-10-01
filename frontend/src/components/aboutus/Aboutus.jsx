export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="/src/assets/images/Designer.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            GamerZone is carried out by passionate Gamers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Welcome to GamerZone, your ultimate destination for all things gaming! At GamerZone, we're not just a store—we’re a community of gamers dedicated to enhancing your gaming experience with top-of-the-line gear, accessories, and expert services.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Enhance  your gaming setup with our wide range of gaming peripherals, including gaming mice, keyboards, headsets,
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}