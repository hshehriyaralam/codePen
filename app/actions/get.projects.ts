"use server"
import { createClient } from "@/lib/supabase/server"


export async function getAllProjects(){   
    const supabase =  await createClient()
    const {data :user , error : userError } = await supabase.auth.getUser()
    const userId = user?.user?.id

    const { data : projects, error} = await supabase.from("projects")
    .select("*")
    .eq("user_id",userId)

    if(error){
        console.log("failed to fetch Projects", error.message)
        return
    }
    return{ 
        success : true,
        projects : projects
    }
}