
import supabase from "@/components/supabase/sbclient";
// -----------------------------------------
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
// -----------------------------------------
import { NextResponse } from "next/server";

export async function GET(request) {
    const supabase = createServerComponentClient({ cookies });

    const { data: sessionData, error: sessionError }
        = await supabase.auth.getSession();

    // We receive "sessionData" and "sessionError"
    console.log(`sessionData=`, sessionData);
    // "sessionData" is a Object ::

    console.log(`user_id=`, sessionData?.session?.user?.id);
    // It contain only one Object :: "session"
    // "session" Object contains :: "user" Object
    // "user" object :: "id" object :: known as "user_id"

    console.log(`sessionError= ${sessionError}`);
    console.log(`\n\n`);

    // ------------------------------------------------
    // Step 11.10  :: "sessionData?.session" :: Two Options ::
    // 1) Object 2) null

    // "sessionData?.session" :: 1) Object
    if (sessionData?.session !== null) {
        // If it is not null, Then User is Logged in....

        var user = sessionData.session.user;
        // ------------------------------------------------
        // -------------------------------------------------------
        console.log(`sessionData.session=`, sessionData.session);

        console.log(`
          Now, sessionData.session  is an "Object"... 
          So, sessionData.session is not "null \n 
          So, Yes, "sessionData.session" is there..
          So, by "sessionData.session", We econclude that \n
          Yes, User is Logged in..`);
        console.log(`\n\n`);
        // So, from "session" in "sessionData" ,  
        // We determines that "User is Logged in"
        // ---------------------------------------------------------
    }

    // "sessionData?.session" :: 2) null 
    if (sessionData.session == null) {
        // If it is null, Then User is Logged Out....

        // ----------------------------------------------------
        console.log(`sessionData.session=`, sessionData.session);

        console.log(`
                Now, sessionData.session is "null"...
                So, No, There is no "sessionData.session"...
                So, by "sessionData.session", We econclude that \n
                No, User is not Logged in...
                `);

        console.log(`\n\n`);
        // ----------------------------------------------------
    }




    // Find by user_id
    // -------------------
    // const { data: findUserProfileData, error: findUserProfileError } = await supabase
    //     .from('profiles')
    //     .select()
    //     .eq('email_id', 'iampritesh13@gmail.com');



    return NextResponse.json({
        success: true,
        message: "User Read Successfully...",
        updateUserData,
        // sessionData: sessionData,
        user: user,
        // findUserProfileData: findUserProfileData
    });

}







