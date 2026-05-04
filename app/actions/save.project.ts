"use server"
import { createClient } from "@/lib/supabase/server"


export async function saveProject({
    projectId,
    html,
    css,
    js,
} : {
    projectId :string,
    html : string,
    css : string
    js : string
}){   
    const supabase =  await createClient()
    const {data :user , error : userError } = await supabase.auth.getUser()
    if(!user || userError){
        console.log("user not Authenticated")
        return
    }
    const {data : projects, error:projectError} = await supabase.from("projects").update({
        html : html,
        css : css,
        js : js
    })
    .eq('id', projectId)
    .select()

    if(projectError){
        console.log("Project Update Error", projectError.message)
        return
    }

    return{
        success : true,
    }
}