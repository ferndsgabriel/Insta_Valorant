import {AiFillHome, AiOutlineVideoCamera, AiOutlinePlusSquare,
AiOutlineMessage, AiOutlineMenu, AiOutlineInstagram, AiOutlineHeart, AiOutlineSearch} from "react-icons/ai";
import {MdOutlineExplore,  } from "react-icons/md";
import logo from "../../assets/instalogofull.png";
import logoWhite from "../../assets/instalogofullwhite.png";
import { my } from "../../Api";

export default function Nav(){
    return(
        <>
            <nav className="bg-white w-full h-12 fixed bottom-0 border-t-0.5 border-neutral-300 border-solid md:border-r-0.5
            md:w-16 md:h-screen xl:w-64 dark:bg-black dark:border-neutral-800">

                <div className="w-full h-full flex p-4 items-center justify-between md:flex-col  md:py-6 xl:items-start">
                    <button className="hidden md:flex items-center hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md

                    dark:md:hover:bg-neutral-800">
                        <i className="xl:hidden"><AiOutlineInstagram className="text-3xl"/></i>
                        <img src={logo} alt="logo instagram"
                        className="hidden xl:block  xl:dark:hidden w-24 "/>
                        <img src={logoWhite} alt="logo instagram"
                        className="hidden xl:dark:block w-24"/>
                    </button>

                    <ul className="h-full w-full flex items-center flex-row justify-around md:flex-col
                    md:justify-center md:gap-4 xl:items-start">
                        <li className="hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md xl:w-full  dark:md:hover:bg-neutral-800">
                            <a className="flex w-full items-center gap-4">
                                <AiFillHome/><span className="hidden xl:block font-medium">Home</span>
                            </a>
                        </li>
                        <li className="hidden md:block hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md  xl:w-full  dark:md:hover:bg-neutral-800">
                            <a className="flex w-full items-center gap-4">
                                <AiOutlineSearch/><span className="hidden xl:block">Search</span>
                            </a>
                        </li>
                        <li className="hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md xl:w-full  dark:md:hover:bg-neutral-800">
                            <a className="flex w-full items-center gap-4">
                                <MdOutlineExplore/><span className="hidden xl:block">Explorer</span>
                                </a>
                        </li>
                        <li className="hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md xl:w-full  dark:md:hover:bg-neutral-800">
                            <a className="flex w-full items-center gap-4">
                                <AiOutlineVideoCamera/><span className="hidden xl:block">Reels</span>
                            </a>
                        </li>

                        <li className="md:hidden hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md">
                            <a><AiOutlinePlusSquare/></a>
                        </li>

                        <li className="hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md xl:w-full  dark:md:hover:bg-neutral-800">
                            <a className="flex w-full items-center gap-4 ">
                                <AiOutlineMessage/><span className="hidden xl:block">Messages</span>
                            </a>
                        </li>

                        <li className="hidden md:block hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md xl:w-full  dark:md:hover:bg-neutral-800">
                            <a className="flex w-full items-center gap-4">
                                <AiOutlineHeart/><span className="hidden xl:block">Notifications</span>
                            </a>
                        </li>

                        <li className="hidden md:block hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md xl:w-full  dark:md:hover:bg-neutral-800">
                            <a className="flex w-full items-center gap-4">
                                <AiOutlinePlusSquare/><span className="hidden xl:block">Create</span>
                            </a>
                        </li>

                        <li className="hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md xl:w-full  dark:md:hover:bg-neutral-800">
                            <a className="flex w-full items-center gap-4">
                                <div  className="w-8 aspect-square">
                                    <img src={my.account.perfil}
                                    className="w-full h-full rounded-full object-cover"/>
                                </div>
                                    <span className="hidden xl:block">Profile</span>
                            </a>
                        </li>
                    </ul>

                    <button className="hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md xl:w-full  dark:md:hover:bg-neutral-800">
                            <a className="flex w-full items-center gap-4">
                                <AiOutlineMenu/><span className="hidden xl:block">More</span>
                            </a>
                    </button>    
                </div>
            </nav>
        </>
    )
}