import instagramlogo from "../../assets/instalogofull.png";
import {AiOutlineSearch,AiOutlineDown} from "react-icons/ai"; 
import {FiHeart} from "react-icons/fi";

export default function Header(){
    return(
        <>
            <header className= "h-16 w-full md:hidden fixed top-0 z-10 bg-white">
                <div className="w-full h-full flex flex-row items-center justify-between p-4 border-b-0.5 border-solid border-neutral-200 gap-1">
                    <button className="flex items-center gap-2  hover:bg-neutral-200 duration-300">
                        <img src={instagramlogo} alt="logo instagram"
                        className="w-32"/>
                        <i><AiOutlineDown className="text-base"/></i>
                    </button>
                    <div className="flex gap-4 flex-1">
                        <label className="bg-neutral-200 flex items-center gap-2 p-1 rounded-md text-neutral-500 w-full">
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