import breachperfil from "../assets/perfis/Breach.jpg"; import jettperfil from "../assets/perfis/Jett.jpg"; 
import neonperfil from "../assets/perfis/Neon.jpg"; import phoenixperfil from "../assets/perfis/Phoenix.jpg";
import reynaperfil from "../assets/perfis/Reyna.jpg";import razeperfil from "../assets/perfis/Raze.jpg";
import sovaperfil from "../assets/perfis/Sova.jpg";import omenperfil from "../assets/perfis/Omen.jpg";
import kjperfil from "../assets/perfis/Kj.jpg";import sageperfil from "../assets/perfis/Sage.jpg"; 
import iperfil from "../assets/perfis/I.jpg"; 

import breachstories1 from "../assets/stories/Breach1.jpg"; import breachstories2 from "../assets/stories/Breach2.jpg";
import jettstories1 from "../assets/stories/Jett1.jpg"; import jettstories2 from "../assets/stories/Jett2.jpg";
import neonstories1 from "../assets/stories/Neon1.jpg"; import neonstories2 from "../assets/stories/Neon2.jpg";
import phoenixstories1 from "../assets/stories/Phoenix1.jpg"; import phoenixstories2 from "../assets/stories/Phoenix2.jpg";
import razestories1 from "../assets/stories/Raze1.jpg"; import razestories2 from "../assets/stories/Raze2.jpg";
import reynastories1 from "../assets/stories/Reyna1.jpg"; import reynastories2 from "../assets/stories/Reyna2.jpg";
import sovastories1 from "../assets/stories/Sova1.jpg"; import sovastories2 from "../assets/stories/Sova2.jpg";
import omenstories1 from "../assets/stories/Omen1.jpg"; import omenstories2 from "../assets/stories/Omen2.jpg";
import kjstories1 from "../assets/stories/Kj1.jpg"; import kjstories2 from "../assets/stories/Kj2.jpg";
import sagestories1 from "../assets/stories/Sage1.jpg"; import sagestories2 from "../assets/stories/Sage2.jpg";

import istories1 from "../assets/stories/I1.jpg";import istories2 from "../assets/stories/I2.gif";
import istories3 from "../assets/stories/I3.gif"; import istories4 from "../assets/stories/I4.gif";

import breachpost from "../assets/post/Breach.jpg";
import jettpost from "../assets/post/Jett.jpg";
import neonpost from "../assets/post/Neon.jpg";
import phoenixpost from "../assets/post/Phoenix.jpg";
import razepost from "../assets/post/Raze.jpg";
import reynapost from "../assets/post/Reyna.jpg";
import sovapost from "../assets/post/Sova.jpg";
import omenpost from "../assets/post/Omen.jpg";
import kjpost from "../assets/post/Kj.jpg";
import sagepost from "../assets/post/Sage.jpg";

import suggestedBrimstone from  "../assets/suggested/Brimstone.jpg";
import suggestedYoru from  "../assets/suggested/Yoru.jpg";
import suggestedDeadlock from  "../assets/suggested/Deadlock.jpg";
import suggestedGekko from  "../assets/suggested/Gekko.jpg";
import suggestedCypher from  "../assets/suggested/Cypher.jpg";


export const suggested = [
    {
        account:{
            name:'Brimstone', perfil:suggestedBrimstone,
        },
    },
    {
        account:{
            name:'Cypher', perfil:suggestedCypher,
        },
    },
    {
        account:{
            name:'Deadlock', perfil:suggestedDeadlock,
        },
    },
    {
        account:{
            name:'Gekko', perfil:suggestedGekko,
        },
    },
    {
        account:{
            name:'Yoru', perfil:suggestedYoru,
        },
    },
] 
export const my = 
    {
        account:{
            name:'Gabriel', perfil:iperfil,
            stories:[
                istories4, istories3,istories1
            ],
            post:[
                {
                }
            ]
        }
    }

export const users = [
    {
        account:{
            name:'Breach', perfil:breachperfil,
            stories:[
                breachstories1, breachstories2
            ],
            post:[
                {
                    legend:`Eu sou o terremoto`,
                    photo:breachpost,
                    likes:10
                }
            ]
        }
    },   
        {
        account:{
            name:'Jett', perfil:jettperfil,
            stories:[
                jettstories1, jettstories2
            ],
            post:[
                {
                    legend:`Rápida como o vento.`,
                    photo:jettpost,
                    likes:350
                }
            ]
        }
    },
    {
        account:{
            name:'Neon', perfil:neonperfil,
            stories:[
                neonstories1, neonstories2
            ],
            post:[
                {
                    legend:`Vocês são lerdos.`,
                    photo:neonpost,
                    likes:86
                }
            ]
        }
    },
    {
        account:{
            name:'Phoenix', perfil:phoenixperfil,
            stories:[
                phoenixstories1, phoenixstories2
            ],
            post:[
                {
                    legend:`Queime comigo, ou fique longe do fogo!`,
                    photo:phoenixpost,
                    likes:220
                }
            ]
        }
    },
    {
        account:{
            name:'Raze', perfil:razeperfil,
            stories:[
                razestories1, razestories2
            ],
            post:[
                {
                    legend:`Ninguém explodiu? O que está acontecendo?`,
                    photo:razepost,
                    likes:54
                }
            ]
        }
    },
    {
        account:{
            name:'Reyna', perfil:reynaperfil,
            stories:[
                reynastories1, reynastories2
            ],
            post:[
                {
                    legend:`Eu não posso morrer aqui.`,
                    photo:reynapost,
                    likes:280
                }
            ]
        }
    },
    {
        account:{
            name:'Sova', perfil:sovaperfil,
            stories:[
                sovastories1, sovastories2
            ],
            post:[
                {
                    legend:`Encontrei-os. E agora?`,
                    photo:sovapost,
                    likes:98
                }
            ]
        }
    },
    {
        account:{
            name:'Omen', perfil:omenperfil,
            stories:[
                omenstories1, omenstories2
            ],
            post:[
                {
                    legend:`Não fuja do inevitável.`,
                    photo:omenpost,
                    likes:12
                }
            ]
        }
    },
    {
        account:{
            name:'Killjoy', perfil:kjperfil,
            stories:[
                kjstories1, kjstories2
            ],
            post:[
                {
                    legend:`Sistema ativado.`,
                    photo:kjpost,
                    likes:194
                }
            ]
        }
    },
    {
        account:{
            name:'Sage', perfil:sageperfil,
            stories:[
                sagestories1, sagestories2
            ],
            post:[
                {
                    legend:`Curem essas feridas, pessoal.`,
                    photo:sagepost,
                    likes:194
                }
            ]
        }
    },
]