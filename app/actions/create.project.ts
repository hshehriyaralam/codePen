"use server"

import { createClient } from "@/lib/supabase/server"


export async function createProject({title}  : {title : string}){   
    const supabase =  await createClient()

    const {data :user , error : userError } = await supabase.auth.getUser()

    if(!user || userError){
        console.log("user not axist")
        return
    }
    const { data ,error:createError} = await supabase.from("projects").insert([{
        user_id : user.user?.id,
        title : title,
        html  : '',
        css : '',
        js :  '',
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