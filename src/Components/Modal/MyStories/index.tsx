import {my } from "../../../Api";
import {AiOutlineRight,AiOutlineLeft,AiOutlineClose} from "react-icons/ai";
import {useState, useEffect} from "react";
import logo from "../../../assets/instalogofullwhite.png";

interface indexStories{
    closeStories:()=>void
}
export default function MyStories({closeStories}:indexStories){
    const [currentStories, setCurrentStories] = useState(0);

    function controlcurrentStories(value:number){
        console.log (my.account.stories.length)
        switch(value){
            case 1:{
                    if ((currentStories + 1) >= my.account.stories.length){
                        closeStories();
                    }
                    else{
                        setCurrentStories(currentStories + 1)
                    }
                break
            }
            case -1:{
                if ((currentStories - 1) < 0){
                    closeStories();
                }
                else{
                    setCurrentStories(currentStories - 1)
                }
                break
            }
        }
    }

    useEffect(()=>{
        let interval = setInterval (()=>{
            controlcurrentStories(1);
        },5000);

        return (()=>{
            clearInterval(interval);
        })
    },[currentStories])
    
    return(
        <>  
            <article className=" bg-neutral-900 h-screen w-full flex flex-col items-center justify-center overflow-hidden p-4 py-12 relative">
                <div className="w-full absolute top-2 flex items-center justify-between px-4">
                    <a>
                        <img src={logo} alt="instagram logo"
                        className="w-32"/>
                    </a>
                    <button onClick={closeStories}>
                        <AiOutlineClose className="text-white"/>
                    </button>
                </div>
                <div className=" w-full p-6 flex flex-row items-center justify-center max-w-4xl h-4/5 gap-4"> 

                    <div className="aspect-[9/16] overflow-hidden flex items-center justify-items-center
                    relative rounded-xl w-full max-w-xs">
                        <img src={my.account.stories[currentStories]}
                        className="object-cover w-full h-full"/>
                        <div className="absolute top-6 left-2 flex items-center gap-2">
                            <img src={my.account.perfil}
                            className="w-8 rounded-full"/>
                            <p className="text-white capitalize font-medium">
                                {my.account.name}
                            </p>
                        </div>
                        <div className="absolute rounded-full top-2 w-11/12
                        left-1/2 -translate-x-1/2 flex flex-row items-center justify-center gap-1">
                            {my.account.stories.map((item, index)=>{
                                return(
                                        <span className="h-2 flex-1 block bg-neutral-400 rounded-full relative overflow-auto">
                                            {index === currentStories?(
                                                <span className="absolute w-full h-full bg-white block left-0 top-0 animate-processStories"/>
                                            ):null}
                                            
                                        </span>
                                )
                            })}
                        </div>
                        <button onClick={()=>{controlcurrentStories(-1)}}
                        className="absolute left-2 bg-neutral-200 rounded-full p-1">
                            <AiOutlineLeft className="opacity-60 text-base text-black"/>
                        </button>     
                        <button onClick={()=>controlcurrentStories(1)}
                        className="absolute right-2 bg-neutral-200 rounded-full p-1">
                            <AiOutlineRight className="opacity-60 text-base  text-black"/>
                        </button>                       
                    </div>   

                </div>
            </article>
        </>
    )
}