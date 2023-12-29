'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = () => {

    const supabase = createClientComponentClient();

    const [session, setSession] = useState();
    const [user, setUser] = useState(null);
    // ------------------------------
    const [userId, setUserId] = useState('');
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {

        const getAllUsers = async () => {

            const { data: sessionData, error: sessionError }
                = await supabase.auth.getSession();

            if (sessionData.session) {
                setUserId(sessionData.session.user.id);
                setUserEmail(sessionData.session.user.email);
            }
        }

        getAllUsers();

    }, [])




    return (
        <>
            <section className='min-h-screen bg-white text-black 
            p-8 flex flex-col gap-5'>


                <div className="flex gap-x-5 justify-between">
                    <span className="">Admin</span>

                    {(user) ?
                        <Link href='/login'>Login </Link> :
                        <Link href='/login'>Logout </Link>}
                </div>


                <div className="flex gap-x-6">
                    <div className="">
                        {`Your userId is ${userId}`}
                    </div>
                    <div className="">
                    {`Your userEmail is ${userEmail}`}
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default page