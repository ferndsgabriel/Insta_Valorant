import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import { users } from "../../Api";
import {AiOutlineRight, AiOutlineLeft,AiOutlineHeart} from "react-icons/ai";
import {BiMessageRounded} from "react-icons/bi";
import {MdSaveAlt} from "react-icons/md";
import {TbLocationShare} from "react-icons/tb";
import {useRef, useEffect, useState} from "react";
import Modal from "react-modal";
import Stories from "../../Components/Modal/Stories";

function Feed(){
    const storiesRef = useRef<HTMLDivElement>(null);
    const [buttonLeftStories, setButtonLeftStories] = useState(false);
    const [modalStories, setModalStories] = useState(false);
    const [indexStories, setIndexStories] = useState(0);
    const [usersWithStories, setUsersWithStories] = useState(0);
    
    function scrollStories(value:number){
        if (storiesRef.current !== null){
            storiesRef.current.scrollBy({
                behavior:'smooth',
                top:0,
                left:value
            })
            if (storiesRef.current && storiesRef.current.scrollLeft > 0) {
                setButtonLeftStories(true);
            }else{
                setButtonLeftStories(false)
            }
        }
        
    }  

    function controlModalStories(){
        setModalStories(!modalStories);
    }

    function getAboutUsersStories(){
        var count = 0;
        for (var x = 0; x < users.length; x++){
            if (users[x].account.stories.length > 0){
                count++;  
            }   
        }
        setUsersWithStories(count)
    }
    
    useEffect(()=>{
        getAboutUsersStories()
    },[Feed])

    return(
        <>  
            {modalStories?(
            null
            ):( 
                <>
                    <Nav/>
                    <Header/>
                </>   
                )
            }
            
            <main
            className="w-full h-screenmobile md:h-screen p-2 flex flex-col gap-6 md:w-desktop items-center max-w-xl sm:mx-auto lg:max-w-2xl">
                <section className="w-full">
                    <div className="relative">    
                        <div className="flex items-center gap-6 overflow-auto scroll" ref={storiesRef}>
                            {users.map((item,index)=>{
                                return(
                                    item.account.stories?(
                                        <button key={index} className="flex flex-col items-center justify-center flex-shrink-0"
                                        onClick={()=>{controlModalStories(); setIndexStories(index)}}>
                                            <img src={item.account.perfil} alt={`Foto de perfil de ${item.account.name}`}
                                            className="w-16 rounded-full aspect-square object-cover border-solid border-2 border-green-500"/>
                                            <p>{item.account.name}</p>
                                        </button>
                                    ):null
                                )
                            })}
                        </div>
                        {buttonLeftStories?(
                            <button className="bg-white p-1 rounded-full absolute top-1/3 -translate-y-1/3 left-2"
                            onClick={()=>scrollStories(-50)}>
                                <AiOutlineLeft className="text-base text-neutral-500"/>
                            </button>
                        ):null}

                        <button className="bg-white p-1 rounded-full absolute top-1/3 -translate-y-1/3 right-2"
                        onClick={()=>scrollStories(50)}>
                            <AiOutlineRight className="text-base text-neutral-500"/>
                        </button>
                    </div>
                </section>
                <Modal isOpen={modalStories}
                onRequestClose={controlModalStories}
                className={`w-full h-screen p-0`}>
                    <Stories index={indexStories} closeStories={controlModalStories}
                    usersWithStories={usersWithStories}/>
                </Modal>

                <section>
                    <div className="">
                        {users.map((item, index)=>{
                            return(
                                users[index].account.stories?(
                                    <div key={index} className="flex flex-col gap-4 w-full max-w-md border-solid border-b-0.5 py-4">
                                        <div className="flex items-center gap-3 capitalize font-medium text-sm">
                                            <button
                                            onClick={()=>{controlModalStories(); setIndexStories(index)}}>
                                            <img src={item.account.perfil}
                                            className="w-10 rounded-full aspect-square object-cover"/>
                                            </button>

                                            <p>{item.account.name}</p>
                                        </div>

                                        {users[index].account.post.map((postitem,postindex)=>{
                                            return(
                                                <div className="flex flex-col gap-4">
                                                    <img src={postitem.photo}
                                                    className="w-full aspect-square object-cover rounded-md"/>
                                                    <span className="w-full flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <button className="hover:text-neutral-400 duration-300"><AiOutlineHeart/></button>
                                                            <button className="hover:text-neutral-400 duration-300"><BiMessageRounded/></button>  
                                                            <button className="hover:text-neutral-400 duration-300"><TbLocationShare/></button> 
                                                        </div>
                                                        <button className="hover:text-neutral-400 duration-300"><MdSaveAlt/></button>
                                                    </span>
                                                    {postitem.likes > 0 ?(
                                                        <span className="text-sm font-medium">{postitem.likes} likes</span>
                                                    ):null}
                                                    <h1 className="text-sm"><strong>{item.account.name}</strong> {postitem.legend}</h1>
                                                </div>
                                            )
                                        })}
                                    </div>
                                ):null
                            )
                        })}
                    </div>
                </section>
            </main>
        </>
    )
}

export  default Feed;