"use server"
import { createClient } from "@/lib/supabase/server"


export async function getBothProjects(){   
    const supabase =  await createClient()
    const {data :user , error : userError } = await supabase.auth.getUser()
    const userId = user?.user?.id

    const { data : projects, error} = await supabase.from("projects")
    .select("*")
    .or(`user_id.eq.${userId}, is_public.eq.${true}`) 
    

    
  

    if(error){
        console.log("failed to fetch Projects", error.message)
        return
    }
    return{ 
        success : true,
        projects : projects
    }
}