import {AiFillHome, AiOutlineVideoCamera, AiOutlinePlusSquare,
AiOutlineMessage,AiOutlineMenu, AiOutlineInstagram, AiOutlineHeart, AiOutlineSearch} from "react-icons/ai";
import {MdOutlineExplore,  } from "react-icons/md";
export default function Nav(){
    return(
        <>
            <nav className="bg-white w-full h-12 fixed bottom-0 border-t-0.5 border-neutral-300 border-solid md:w-16 md:h-screen">
                <div className="w-full h-full flex p-4 items-center justify-between md:flex-col md:border-r-0.5 md:py-6">
                    <button className="hidden md:block hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md">
                        <i><AiOutlineInstagram/></i>
                    </button>

                    <ul className="h-full w-full flex items-center flex-row justify-around md:flex-col
                    md:justify-center md:gap-4">
                        <li className="hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md">
                            <a><AiFillHome/></a>
                        </li>
                        <li className="hidden md:block hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md">
                            <a><AiOutlineSearch/></a>
                        </li>
                        <li className="hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md">
                            <a><MdOutlineExplore/></a>
                        </li>
                        <li className="hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md">
                            <a><AiOutlineVideoCamera/></a>
                        </li>

                        <li className="md:hidden hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md">
                            <a><AiOutlinePlusSquare/></a>
                        </li>

                        <li className="hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md">
                            <a><AiOutlineMessage/></a>
                        </li>

                        <li className="hidden md:block hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md">
                            <a><AiOutlineHeart/></a>
                        </li>

                        <li className="hidden md:block hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md">
                            <a><AiOutlinePlusSquare/></a>
                        </li>


                    </ul>

                    <button className="hidden md:block hover:scale-110 duration-300 md:hover:bg-neutral-200 p-2 rounded-md">
                        <i><AiOutlineMenu/></i>
                    </button>
                </div>
            </nav>
        </>
    )
}