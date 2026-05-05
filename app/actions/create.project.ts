"use server"

import { createClient } from "@/lib/supabase/server"


export async function createProject({title, isPublic}  : {title : string, isPublic : boolean}){   
    const supabase =  await createClient()

    const {data :user , error : userError } = await supabase.auth.getUser()

    if(!user || userError){
        console.log("user not axist")
        return
    }
    

    const userId = user.user?.id
    const username = user?.user?.user_metadata?.name
    const { data ,error:createError} = await supabase.from("projects").insert([{
        user_id : userId,
        title : title,
        html  : '',
        css : '',
        js :  '',
        is_public : isPublic,
        username  : username,
    }]).select().single()

    if(createError){
        console.log("createError form server action", createError.message)
        return
    }

    return {
        success : true,
        projectId : data?.id
    }
}