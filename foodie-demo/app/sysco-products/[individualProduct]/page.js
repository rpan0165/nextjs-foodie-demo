'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

function page({params}) {
    
  const router = useRouter();

    // Check whether router.query is empty {} or not
    const str = params.individualProduct;
    const replaced = str.replace(/%20|%2C|%22/gi,' ');


    return (
        <div style={{marginTop:"9.5rem"}}>
            <div className='mx-auto mt-5 mb-5 py-5 border-5 border-gray-400 border-spacing-4 max-w-5xl'>
                <h2 className='text-3xl text-center mb-4'>Sysco Product Item - {replaced}</h2>
                <ul role="list" className="marker:text-sky-600 list-disc pl-5 space-y-3 text-slate-500  text-center">
                    <li>Title: {replaced}</li>
                    <li>SUPC: 2795896</li>
                    <li>Brand Description: IMPERIAL FRESH</li>
                </ul>
            </div>
        </div>
    )
}

export default page
