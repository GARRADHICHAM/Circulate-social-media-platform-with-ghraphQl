

import dynamic from "next/dynamic";


const RightSide = () => {


    return (

        <div
        className="bg-white  shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto ">
        <div className=" p-2 flex-col items-center">
          
          <div className=" text-center">
            <p className="text-xl text-[#333] font-extrabold">Create Post</p>
            <p className="text-sm text-gray-500 mt-2">What's your thoughts !</p>
          </div>
          <form className="mt-4 space-y-2">
            <input type="text" className="w-full border  rounded-md h-8 p-2" placeholder="Titre"></input>
            <textarea type="text" className="w-full border  rounded-md h-12 p-2 " placeholder="Body"></textarea>
            <input type="text" className="w-full border  rounded-md h-8 p-2" placeholder="# tags"></input>
            <button className="w-full bg-[#66B3F4] p-2 text-white font-semibold rounded-lg">Submit</button>
           
          </form>
        </div>
        
      </div>
    )
}


export default dynamic(() => Promise.resolve(RightSide), { ssr: false })

