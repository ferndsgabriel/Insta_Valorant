import instagramlogo from "../../assets/instalogofull.png";
import instagramlogowhite from "../../assets/instalogofullwhite.png";
import {AiOutlineSearch} from "react-icons/ai"; 
import {FiHeart} from "react-icons/fi";

export default function Header(){

    return(
        <>
            <header className= "h-16 w-full md:hidden fixed top-0 z-10 bg-white">
                <div className="w-full h-full 0 flex flex-row items-center justify-between p-4 border-b-0.5 border-solid border-neutral-200
                gap-4 dark:bg-black dark:border-neutral-800">
                    <button className="hover:bg-neutral-200 duration-300 dark:hover:bg-neutral-800">
                        <img src={instagramlogo} alt="logo instagram"
                        className="w-32 dark:hidden"/>
                        <img src={instagramlogowhite} alt="logo instagram"
                        className="w-32 hidden dark:block"/>
                    </button>
                    <div className="flex gap-4  w-full max-w-xs">
                        <label className="bg-neutral-200 flex items-center gap-2 p-1 rounded-md text-neutral-500 w-full
                        dark:bg-neutral-800">
                            <i><AiOutlineSearch/></i>
                            <span>Search</span>
                            <input type="text"
                            className="bg-transparent opacity-0 w-1"/>
                        </label>
                        <button className="hover:scale-110 duration-300">
                            <FiHeart/>
                        </button>

                    </div>
                </div>
            </header>
            <div className="w-full h-16 md:hidden"></div>
        </>
    )
}