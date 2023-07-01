
const Header = () => {
    return (
        <>
            <header className="flex items-center justify-between py-4 px-8 bg-white text-white">
                <div className="flex items-center">
                    <img src="	https://www.goindiastocks.com/Content/assets/images/logewithname.png" alt="Logo" className="h-[54px] w-[75px] " />

                </div>
                <div className="flex items-center justify-center flex-1 mx-8">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="py-6 px-4 bg-gray-300 text-2xl text-gray-600 rounded-md w-2/3"
                    />
                    <svg
                        className="h-6 w-6 absolute top-0 right-0 mr-8 px-8 text-2xl  pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 15l-5-5 5-5"
                        />
                    </svg>
                </div>
                <div>
                    <button className="px-6 py-2 bg-white text-black mx-2 border-none">Contact us</button>
                    <button className="px-6 py-2 bg-white border border-gray-500 border-solid border-1 hover:bg-gray-300 hover:text-white text-black rounded-md">
                        Sign In
                    </button>
                    <button className="px-6 ml-2 py-2 bg-white border border-gray-500 border-solid border-1 hover:bg-gray-300 hover:text-white text-black rounded-md">
                        Sign In
                    </button>
                </div>

            </header>
            <div className="text-white bg-black p-4 mt-4 w-full">
                <marquee behavior="scroll" direction="left">
                    <span className="mr-8 px-8 text-2xl text-white">.50</span><span className="mr-8 px-8 text-2xl text-red-600">0.21% </span><span className="mr-8 px-8 text-2xl text-white">NIFTYBANK</span> <span className="mr-8 px-8 text-2xl text-white">6,485.50</span> <span className="mr-8 px-8 text-2xl text-green-400">0.69%</span> <span className="mr-8 px-8 text-2xl text-white">41.599.40</span> <span className="mr-8 px-8 text-2xl text-white">HINDUNILVR</span>  <span className="mr-8 px-8 text-2xl text-green-400">0.40%</span>  <span className="mr-8 px-8 text-2xl text-white">1659.10</span> <span className="mr-8 px-8 text-2xl text-white">BAJFINANCE</span>
                    <span className="mr-8 px-8 text-2xl text-white">.50</span><span className="mr-8 px-8 text-2xl text-red-600">0.21% </span><span className="mr-8 px-8 text-2xl text-white">NIFTYBANK</span> <span className="mr-8 px-8 text-2xl text-white">6,485.50</span> <span className="mr-8 px-8 text-2xl text-green-400">0.69%</span> <span className="mr-8 px-8 text-2xl text-white">41.599.40</span> <span className="mr-8 px-8 text-2xl text-white">HINDUNILVR</span>  <span className="mr-8 px-8 text-2xl text-green-400">0.40%</span>  <span className="mr-8 px-8 text-2xl text-white">1659.10</span> <span className="mr-8 px-8 text-2xl text-white">BAJFINANCE</span>
                </marquee>
            </div>
        </>

    )
}

export default Header
