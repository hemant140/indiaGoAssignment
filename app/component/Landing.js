"use client"
import { useState } from "react";
import Header from '../component/Header'
import Sidebar from "./Sidebar";
import { FaClock, FaEye, FaComment, FaShare, FaThumbsUp } from 'react-icons/fa';
const Landing = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const dummyData = [
        {
            id: 1,
            title: "Post Title 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit nec lacus convallis ullamcorper. lorem24",
            timeAgo: "3 min ago",
            likes: 15,
            views: 127,
            comments: 7,
        },
        {
            id: 2,
            title: "Post Title 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit nec lacus convallis ullamcorper. lorem24",
            timeAgo: "10 min ago",
            likes: 30,
            views: 98,
            comments: 12,
        },
        {
            id: 3,
            title: "Post Title 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit nec lacus convallis ullamcorper. lorem24",
            timeAgo: "10 min ago",
            likes: 30,
            views: 98,
            comments: 12,
        },
        {
            id: 4,
            title: "Post Title 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit nec lacus convallis ullamcorper. lorem24",
            timeAgo: "10 min ago",
            likes: 30,
            views: 98,
            comments: 12,
        },

    ];
    return (
        <div name="home" className="h-screen w-full ">
            <Header />
            <div className="w-full px-2 pl-3 py-4 text-red-500 bg-gray-100 text-4xl font-bold"> FEATURED COMPANIES</div>
            <div className="w-full  text-4xl font-bold"><img src="https://www.globalbenefits.ihg.com/images/ihg_brand_bar-854d1e9f73.jpg" alt="" /></div>
            <Sidebar />
            <div className="flex justify-evenly">
                <p className="text-red-500 text-4xl font-bold  ">DISCUSSION FORUMN</p>
                <p className="text-red-500 text-4xl font-bold ">MARKET STORIES</p>
            </div>
            <div className="flex  max-md:flex-col justify-evenly ">
                <div className=" ">
                    <p className="font-bold mb-3 text-xl text-black">Filter</p>
                    <div className="p-4 m-0 rounded-lg w-[650px] border bg-white shadow-md flex items-center">
                        <button className="rounded-full bg-blue-500 text-white px-9 py-1 mr-4">
                            Sector 1
                        </button>
                        <button className="rounded-full bg-green-500 text-white px-9 py-1 mr-4">
                            Sector 2
                        </button>
                        <button className="rounded-full bg-yellow-500 text-white px-9 py-1 mr-4">
                            Sector 3
                        </button>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border-2 border-gray-300 rounded-md px-4 py-2 w-full bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="h-[500px] overflow-y-auto">
                        <div className="w-[650px] mx-auto mt-3 bg-white rounded-lg overflow-hidden shadow-md mb-4">
                            <p className="px-2 py-1 mb-3 mt-0 text-right">
                                <span className="text-base  text-blue-800">
                                    <FaClock className="inline mr-1" />
                                    3 min ago
                                </span>
                            </p>
                            <div className="flex justify-center items-center">
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/infibeamavenues.png"
                                    alt="Post Image"
                                    className="center-image"
                                />
                            </div>
                            <div className="px-4 py-2">
                                <h2 className="text-xl font-bold mb-2">Post Title</h2>
                                <p className="text-gray-600"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit
                                    nec lacus convallis ullamcorper. lorem24</p>
                            </div>
                            <div className="px-4 py-6 flex items-center justify-between bg-gray-100">
                                <div className="flex items-center space-x-4">
                                    <FaThumbsUp className="text-gray-600" />
                                    <span className="text-sm text-gray-600"> likes</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaEye className="text-gray-600" />
                                    <span className="text-sm text-gray-600">views</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaComment className="text-gray-600" />
                                    <span className="text-sm text-gray-600">comments</span>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <FaShare className="text-gray-600" />
                                    <span className="text-sm text-gray-600">Share</span>
                                </div>
                            </div>
                        </div>
                        {dummyData.map((item) => (
                            <div
                                key={item.id}
                                className="w-[650px] mx-auto mt-3 bg-white rounded-lg overflow-hidden shadow-md mb-4"
                            >
                                <p className="px-2 py-1 mb-3 mt-0 text-right">
                                    <span className="text-base  text-blue-800">
                                        <FaClock className="inline mr-1" />
                                        {item.timeAgo}
                                    </span>
                                </p>
                                <div className="px-4 py-2">
                                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                                    <p className="text-gray-600">{item.content}</p>
                                </div>
                                <div className="px-4 py-6 flex items-center justify-between bg-gray-100">
                                    <div className="flex items-center space-x-4">
                                        <FaThumbsUp className="text-gray-600" />
                                        <span className="text-sm text-gray-600">{item.likes} likes</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <FaEye className="text-gray-600" />
                                        <span className="text-sm text-gray-600">{item.views} views</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <FaComment className="text-gray-600" />
                                        <span className="text-sm text-gray-600">{item.comments} comments</span>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <FaShare className="text-gray-600" />
                                        <span className="text-sm text-gray-600">Share</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className=" ">
                    <div className="flex flex-col space-y-4">
                        <div className="relative w-full h-64">
                            <img
                                src="https://w0.peakpx.com/wallpaper/532/146/HD-wallpaper-bombay-stock-exchange-bse.jpg"
                                alt="Card Image"
                                className="w-full h-full object-cover rounded-md"
                            />
                            <div className="absolute bottom-0 left-0 right-0  bg-opacity-70 bg-gray-900 rounded-b-md text-white">

                                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore autem quaerat, voluptatem modi accusamus</p>
                            </div>
                        </div>
                        <div className="relative w-full h-64">
                            <img
                                src="https://w0.peakpx.com/wallpaper/532/146/HD-wallpaper-bombay-stock-exchange-bse.jpg"
                                alt="Card Image"
                                className="w-full h-full object-cover rounded-md"
                            />
                            <div className="absolute bottom-0 left-0 right-0  bg-opacity-70 bg-gray-900 rounded-b-md text-white">

                                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore autem quaerat, voluptatem modi accusamus</p>
                            </div>
                        </div>
                        <div className="relative w-full h-64">
                            <img
                                src="https://w0.peakpx.com/wallpaper/532/146/HD-wallpaper-bombay-stock-exchange-bse.jpg"
                                alt="Card Image"
                                className="w-full h-full object-cover rounded-md"
                            />
                            <div className="absolute bottom-0 left-0 right-0  bg-opacity-70 bg-gray-900 rounded-b-md text-white">
                                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore autem quaerat, voluptatem modi accusamus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
