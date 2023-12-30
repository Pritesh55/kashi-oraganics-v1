'use client'
import Image from 'next/image';
// ------------

import React from 'react'
// step 02 :: swr :: import useSWR hook....
import useSWR from 'swr'

import axios from 'axios';
import Cre_pt from '@/components/client/product/admin/cre_pt';




const page = () => {
    // ----------------------------------------------------------
    // step 01 :: swr :: create a fetcher function
    const fetcher = (...args) => fetch(...args).then(res => res.json());

    // step 03 :: swr :: get data by useSwr function.... 
    const { data: ptData, error: ptDataError, isLoading: ptDataIsLoading } = useSWR('/api/read-all-pt', fetcher);

    // ---------------------------------------------------------
    console.log(`ptDataIsLoading =`, ptDataIsLoading);
    // ptDataIsLoading is an Boolean :: True or False...
    // Intially , It is 'true'..
    // When data comes, It becomes 'false' ::
    // ---------------------------------------------------------
    console.log(`ptData =`, ptData);
    // ptData is an simple Object :: 1) undefined , then 2) {...} 
    console.log(`ptDataError =`, ptDataError);
    // ptData is an simple Object :: 1) undefined , then 2) undefined...

    // --------------------------------------------------------------------


    return (
        <section className="bg-white min-h-screen"> {((ptDataIsLoading !== true) & (ptData !== undefined)) && <>


            <div className="xl:container px-5 py-10 mx-auto flex flex-col gap-y-10">

                <div className="">
                    <Cre_pt></Cre_pt>
      
                </div>
            </div>

        </>
        }


        </section >
    )
}

export default page