"use client"
import { useState } from "react";
import { FaUser } from 'react-icons/fa';
import { BsFillBellFill, BsFillChatLeftTextFill, BsFillCaretDownFill, BsFillCaretUpFill, BsCurrencyExchange, BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isTaskListOpen, setTaskListOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleTaskList = () => {
        setTaskListOpen(!isTaskListOpen);
    };
    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`fixed left-0 top-52 h-full bg-sidebar w-1/5 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-all duration-300 ease-in-out rounded-md`}
            >
                <div className={`bg-sidebar absolute -right-8 w-16 h-28 top-[20.75rem] rounded-md `} onClick={toggleSidebar}>{isSidebarOpen ? (
                    <span className="ml-2 -right-8 relative top-[2px] text-3xl text-white">
                        <BsFillCaretRightFill />
                    </span>
                ) : (
                    <span className="ml-2 -right-8 relative top-[2px] text-3xl text-white">
                        <BsFillCaretLeftFill />
                    </span>
                )}</div>

                {/* content Here  */}
                <p className="px-6 pb-5 mb-0 font-medium text-2xl text-white flex items-center justify-between border-b">
                    <span className="flex items-center">
                        <span className="mr-2"><FaUser /></span>Hello, User
                    </span>
                    <span className="ml-2"><BsFillBellFill /></span>
                </p>

                <p className={`cursor-pointer mb-2 mt-2 p-4 font-medium text-2xl ${!isTaskListOpen ? "bg-sidebarHover" : "bg-sidebar"} text-white flex items-center justify-between`} onClick={toggleTaskList}> <span className="flex items-center">
                    <span className="mr-2">
                        <BsFillChatLeftTextFill /></span> Discussion Fourm
                </span>
                    {!isTaskListOpen ? (
                        <span className="ml-2">
                            <BsFillCaretDownFill />
                        </span>
                    ) : (
                        <span className="ml-2">
                            <BsFillCaretUpFill />
                        </span>
                    )}
                </p>
                {!isTaskListOpen && (
                    <>
                        <ul className="font-medium text-2xl text-white mt=-4">
                            <li className="pl-4"> <span className="flex items-center">
                                <span className="mr-2">
                                    <BsCurrencyExchange /></span> Market Stories
                            </span></li>
                            <li className="p-4 ml-8 ">Sentiment</li>
                            <li className="p-4 ml-8 ">Market</li>
                            <li className="p-4 ml-8 ">Sector</li>
                            <li className="p-4 ml-8 ">Watchlist</li>
                            <li className="p-4 ml-8 ">Events</li>
                            <li className="p-4 ml-8 ">News/Interview</li>
                        </ul>
                    </>
                )}


            </div>
        </div>
    );
};

export default Sidebar;