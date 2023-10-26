import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import { users, my, suggested } from "../../Api";
import {AiOutlineRight, AiOutlineLeft,AiOutlineHeart,AiFillHeart} from "react-icons/ai";
import {BiMessageRounded} from "react-icons/bi";
import {MdSaveAlt} from "react-icons/md";
import {TbLocationShare} from "react-icons/tb";
import {useRef, useEffect, useState} from "react";
import Modal from "react-modal";
import Stories from "../../Components/Modal/Stories";
import MyStories from "../../Components/Modal/MyStories";

function Feed(){
    const storiesRef = useRef<HTMLDivElement>(null);
    const [userDate, setUserDate] = useState (users)
    const [buttonLeftStories, setButtonLeftStories] = useState(false);
    const [modalStories, setModalStories] = useState(false);
    const [modalMyStories, setModalMyStories] = useState(false);
    const [indexStories, setIndexStories] = useState(0);
    const [usersWithStories, setUsersWithStories] = useState(0);
    const [indexPostLiked, setIndexPostLiked] = useState([{users:'', post:0}]);
    

    function scrollStories(value:number){
        if (storiesRef.current !== null){
            storiesRef.current.scrollBy({
                behavior:'auto',
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
    
    function controlModalMyStories(){
        setModalMyStories(!modalMyStories);
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
    

    function likedPost(user:string, post:number){
        const isLiked = indexPostLiked.some((item) => item.users === user && item.post === post);
        if (isLiked) {
            const updatedIndexPostLiked = indexPostLiked.filter((item) => !(item.users === user && item.post === post));
            setIndexPostLiked(updatedIndexPostLiked);
        } else {
            const updatedIndexPostLiked = [...indexPostLiked, { users: user, post: post }];
            setIndexPostLiked(updatedIndexPostLiked);
        }
    }

    
    return(
        <>  
            {modalStories || modalMyStories ?(
            null
            ):( 
                <>
                    <Nav/>
                    <Header/>
                </>   
                )
            }
            
            <div className="w-full md:max-w-xl mx-auto px-2 py-10 mb-14 lg:max-w-2xl xl:max-w-none xl:w-desktop xl:ml-64
            flex flex-col xl:flex-row xl:px-8 xl:gap-14 overflow-x-hidden gap-8">

                <main className="flex flex-col gap-4 items-center">
                    <section className="w-full relative">   
                        <div className="flex items-center gap-6 overflow-auto scroll" ref={storiesRef}>
                            <button className="flex flex-col items-center justify-center flex-shrink-0 xl:hidden gap-1"
                            onClick={controlModalMyStories}>
                                <img src={my.account.perfil} alt={`Foto de perfil de ${my.account.name}`}
                                className="w-16 rounded-full aspect-square object-cover border-solid border-2 border-neutral-400 select-none"/>
                                <p className="text-neutral-500  dark:text-neutral-400 text-xs">Your</p>
                            </button>

                            {userDate.map((item,index)=>{
                                return(
                                    item.account.stories?(
                                        <button key={index} className="flex flex-col items-center justify-center flex-shrink-0 gap-1"
                                        onClick={()=>{controlModalStories(); setIndexStories(index)}}>
                                            
                                            <img src={item.account.perfil} alt={`Foto de perfil de ${item.account.name}`}
                                            className="w-16 rounded-full aspect-square object-cover border-solid border-2 border-green-500 select-none"/>
                                            <p className="text-xs" translate="no">{item.account.name}</p>
                                        </button>
                                    ):null
                                )
                            })}
                        </div>

                        {buttonLeftStories?(
                            <button className="bg-white p-1 rounded-full absolute top-1/3 -translate-y-1/3 left-2"
                            onClick={()=>scrollStories(-400)}>
                                <AiOutlineLeft className="text-base text-neutral-500"/>
                            </button>
                        ):null}

                        <button className="bg-white p-1 rounded-full absolute top-1/3 -translate-y-1/3 right-2"
                        onClick={()=>scrollStories(400)}>
                            <AiOutlineRight className="text-base text-neutral-500"/>
                        </button>
                    </section>
                    <Modal isOpen={modalMyStories}
                    onRequestClose={controlModalMyStories}
                    className={`w-full h-screen p-0`}>
                        <MyStories closeStories={controlModalMyStories}/>
                    </Modal>

                    <Modal isOpen={modalStories}
                    onRequestClose={controlModalStories}
                    className={`w-full h-screen p-0`}>
                        <Stories index={indexStories} closeStories={controlModalStories}
                        usersWithStories={usersWithStories}/>
                    </Modal>

                    <section className="w-full flex flex-col items-center">
                        {users.map((item, index)=>{
                            return(
                                users[index].account.stories?(
                                    <div key={index} className="flex flex-col gap-4 w-full max-w-md border-solid border-b-0.5 py-4
                                    dark:border-neutral-800">
                                        <div className="flex items-center gap-3 capitalize font-medium text-sm">
                                            <button
                                            onClick={()=>{controlModalStories(); setIndexStories(index)}}>
                                            <img src={item.account.perfil}
                                            className="w-10 rounded-full aspect-square object-cover select-none"/>
                                            </button>
                                            <p translate="no">{item.account.name}</p>
                                        </div>
                                        
                                        {users[index].account.post.map((postitem, postindex)=>{
                                            return(
                                                <div className="flex flex-col gap-4">
                                                    <button onDoubleClick={()=>likedPost(item.account.name, postindex)}>
                                                        <img src={postitem.photo}
                                                        className="w-full aspect-square object-cover rounded-md"/>
                                                    </button>
                                                    <span className="w-full flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <button onClick={()=>likedPost(item.account.name, postindex)} 
                                                            className="hover:text-neutral-400 duration-300">
                                                                {indexPostLiked.some((postLikedValue)=>postLikedValue.users === item.account.name && postLikedValue.post === postindex)?(
                                                                    <AiFillHeart className="text-red-500"/>
                                                                ):(
                                                                    <AiOutlineHeart/>
                                                                )}
                                                                
                                                            </button>
                                                            <button className="hover:text-neutral-400 duration-300"><BiMessageRounded/></button>  
                                                            <button className="hover:text-neutral-400 duration-300"><TbLocationShare/></button> 
                                                        </div>
                                                        <button className="hover:text-neutral-400 duration-300"><MdSaveAlt/></button>
                                                    </span>
                                                    {indexPostLiked.some((itemPostLiked)=>itemPostLiked.users === item.account.name && itemPostLiked.post === postindex)?(
                                                            <p>{postitem.likes + 1}</p>
                                                            ) : (
                                                                <p>{postitem.likes}</p>
                                                    )}
                                                    <h1 className="text-sm"><strong translate="no">{item.account.name}</strong> {postitem.legend}</h1>
                                                </div>
                                            )
                                        })}
                                    </div>
                                ):null
                            )
                        })}
                    </section>
                </main>
                
                <div className="w-[480px] flex flex-col gap-8">
                    <article className=" w-full flex-col gap-4 hidden lg:flex">
                        <div className="flex items-center justify-between gap-2">
                            <button className="flex flex-row items-center gap-4 flex-shrink-0"
                            onClick={controlModalMyStories}>
                                <img src={my.account.perfil} alt={`Foto de perfil de ${my.account.name}`}
                                className="w-16 rounded-full aspect-square object-cover border-solid border-2 border-neutral-400 select-none"/>
                                <p className="font-medium text-sm" translate="no">{my.account.name}</p>
                            </button>
                            <button className="text-xs text-blue-500">
                                Switch
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-medium text-neutral-500 text-sm">Suggested for you</h3>
                                <button className="text-sm hover:text-neutral-400 duration-300">See All</button>
                            </div>
                            <div className="flex flex-col gap-4">
                                {suggested.map((item,index)=>{
                                    return(
                                        <button key={index} className="flex items-center justify-between">
                                            <div className="flex flex-row items-center gap-2">
                                                <img src={item.account.perfil} alt={`Foto de perfil ${item.account.name}`}
                                                className="w-8 rounded-full aspect-square object-cover"/>
                                                <p className="text-sm font-medium" translate="no">{item.account.name}</p>
                                            </div>
                                            <button className="text-blue-500 hover:text-blue-800 duration-300 text-xs">
                                                Follow
                                            </button>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </article>

                    <footer className="w-full flex flex-col gap-4 p-4 xl:p-0">
                        <ul className="text-xs text-neutral-300 flex items-center flex-wrap  gap-2 dark:text-neutral-500">
                            <li className="hover:underline cursor-pointer">About</li>
                            <li className="hover:underline cursor-pointer">Help</li>
                            <li className="hover:underline cursor-pointer">Press</li>
                            <li className="hover:underline cursor-pointer">API</li>
                            <li className="hover:underline cursor-pointer">Jobs</li>
                            <li className="hover:underline cursor-pointer">Privacy</li>
                            <li className="hover:underline cursor-pointer">Terms</li>
                            <li className="hover:underline cursor-pointer">Locations</li>
                            <li className="hover:underline cursor-pointer">Language</li>
                            <li className="hover:underline cursor-pointer">Meta Verifield</li>
                            <li className="hover:underline cursor-pointer">Jobs</li>
                        </ul>
                        <span className="text-xs text-neutral-300 dark:text-neutral-500">© 2023 INSTAGRAM FROM META </span>
                    </footer>
                </div>
            </div>
        </>
    )
}

export  default Feed;