import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {

  const supabase = createServerComponentClient({ cookies });
  const { data: tweets } = await supabase.from("tweets").select();
  // wait for data from supabase's "tweets" table...

  

  return (
    <div className="">

      <div className="">
   
        

      </div>
    </div>
  )
}