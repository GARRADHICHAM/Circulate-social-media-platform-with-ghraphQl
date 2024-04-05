
import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
import Cookies from "js-cookie"

const LestSide = (data) => {
    
    const pathAvatar = 'https://tali3a-bucket.s3.amazonaws.com'+ data?.avatar_path;
    
    
    return (
        <div className="flex-col space-y-4 fixed">
            <div
                className="bg-white   shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] p-8 w-full rounded-lg font-[sans-serif] overflow-hidden mx-auto ">
                <div className="space-y-3">
                    <div className="items-center flex space-x-4">
                        <img className="w-5 h-5" src="homeVF.png" />
                        <h1 className="font-semibold">Home</h1>
                    </div>

                    <div className="items-center flex space-x-4">
                        <img className="w-5 h-5" src="newVF.png" />
                        <h1 className="font-semibold">New</h1>
                    </div>
                   
                </div>
                <button className="p-2 mt-8 w-full rounded-full bg-[#2492FF] text-white font-bold">Create Post</button>

            </div>
            <div
                className="bg-white   shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] p-4 w-auto justify-end justify-self-end rounded-lg font-[sans-serif] overflow-hidden mx-auto ">
                <div className=" p-8 flex-col items-center">
                    <div className="flex justify-center w-auto h-auto">
                        <img src={pathAvatar} className="w-24 h-24 rounded-full" />
                    </div>
                    <div className="mt-4">
                        <p className="text-xl  text-center text-[#333] font-extrabold">{data?.name}</p>
                        <p className="text-sm  text-center text-gray-500 mt-2">@{data?.username}</p>
                        <p className="text-sm text-gray-500 w-40 mt-2">{data?.about}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default dynamic(() => Promise.resolve(LestSide), { ssr: false })

