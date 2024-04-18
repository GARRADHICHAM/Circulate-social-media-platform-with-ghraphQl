
import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
import Cookies from "js-cookie"
import EditProfile from './EditProfile'
import UploadAvatar from './UploadAvatar'

const LestSide = (data) => {

    const pathAvatar = data?.avatar_path;


    return (
        <div className="flex-col pl-6 space-y-4 fixed">
           
            <div
                className="bg-white   shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] p-2 w-full px-6  justify-end justify-self-end rounded-xl font-[sans-serif] overflow-hidden mx-auto ">
                
                <div className="  w-full py-4  flex-col items-center">

                    <div className="flex justify-center w-auto h-auto">
                        <UploadAvatar avatar={pathAvatar} />
                    </div>

                    <div className="mt-4">
                        <p className="text-xl  text-center text-[#333] font-extrabold">{data?.name}</p>
                        <p className="text-sm  text-center text-gray-500 mt-2">@{data?.username}</p>
                        <p className="text-sm text-gray-500 text-center w-auto mt-2">{data?.about}</p>
                    </div>
                    <EditProfile {...data}/>
                </div>

            </div>
        </div>
    )
}


export default dynamic(() => Promise.resolve(LestSide), { ssr: false })

