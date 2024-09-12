import { getSession } from "@/lib/axios/requests"
import {useLayoutEffect, useEffect, useState} from "react"


export function useAuth(){
const [isUser, setIsUser] = useState(false)
const [loading, setIsLoading] = useState(false)

useLayoutEffect(()=>{
    setIsLoading(true)
    getSession().then((data)=>{
        if(data.data.message === "Authenticated"){
            setIsUser(true)
        }
    }).catch((err)=>console.log(err)).finally(()=>setIsLoading(false))
}, [])

return {isUser, loading}

}