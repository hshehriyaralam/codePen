"use server"
import { createClient } from "@/lib/supabase/server"


export async function getPublicProjects(){   
    const supabase =  await createClient()
    const { data : projects, error} = await supabase.from("projects")
    .select("*",)
    .eq('is_public', true)
    if(error){
        console.log("failed to fetch Projects", error.message)
        return
    }
    return{ 
        success : true,
        projects : projects
    }
}