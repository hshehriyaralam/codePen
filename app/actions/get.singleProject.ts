"use server"
import { createClient } from "@/lib/supabase/server"


export async function getSingleProjects({projectId} : {projectId :string}){   
    const supabase =  await createClient()
    const {data :user , error : userError } = await supabase.auth.getUser()
    const { data : project, error} = await supabase.from("projects")
    .select("*")
    .eq("id",projectId)
    if(error){
        console.log("failed to fetch Projects", error.message)
        return
    }
    return{ 
        success : true,
        project : project
    }
}