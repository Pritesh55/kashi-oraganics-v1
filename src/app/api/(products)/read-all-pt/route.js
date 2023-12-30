import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
// -----------------------------------------
import { NextResponse } from "next/server";

export async function GET(request) {

    const supabase = createServerComponentClient({ cookies });

    // const { data: insertProductData, error: insertProductError } = await supabase
    //     .from('products')
    //     .insert([
    //         {
    //             some_column: 'someValue',
    //             other_column: 'otherValue'
    //         },
    //     ])
    //     .select()


    let { data: products, error } = await supabase
        .from('products')
        .select('*')



    return NextResponse.json({
        success: true,
        message: "Products Read Successfully...",
        products: products
    });

}







