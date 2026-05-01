"use client"
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClient"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const ProtectedRoute = ({children}:any) => {
    // const [user, setUser] = useState<any[]>([])
    const router = useRouter()
    const getUser = async () => {
        const supabase = getSupabaseBrowserClient()
        const { data } = await supabase.auth.getUser()
        if(data?.user === null){
            router.replace("/auth")
            router.refresh()
            return
        }
    }
    useEffect(() => {
        getUser()
    },[])
  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedRoute
