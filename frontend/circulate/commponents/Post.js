
import { formatDistanceToNow , format  } from 'date-fns';
import dynamic from "next/dynamic";


const Post = (data) => {
    const title = data.title
    const usename = data.author.username
    const createdAt = data.created_at
    const body = data.body
    const tags = data.tags
    const Usercreated_at = data.author.created_at
    const pathAvatar =  data.author.avatar_path;


    


      const formatDateDistance = (dateString) => {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
      };
      
      const dateStr = '2024-04-14T23:45:28.554+00:00';
      const formattedDateDistance = formatDateDistance(createdAt);
      console.log(createdAt); // Output: "2 days ago"
     


    //   function formatDate(dateString) {
    //     const date = new Date(dateString);
      
    //     const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        
    //     const day = date.getDate();
    //     const month = months[date.getMonth()];
    //     const year = date.getFullYear();
      
    //     return `Joined ${day} ${month} ${year}`;
    //   }
      
      
    //   const formattedDate = formatDate(Usercreated_at);
       // Output: Joined 1 MAY 2023
       const formattedDate = format(new Date(Usercreated_at), "'Joined' d MMM yyyy")
       console.log("joined :",Usercreated_at);
      
    
    return (
        <div className="flex mb-2 bg-white overflow-hidden shadow-lg rounded-lg   md:mx-auto  max-w-md md:max-w-2xl ">
            <div className="flex items-start px-4 py-6">
                <img className="w-14 h-14 rounded-full object-cover mr-4 shadow" src={pathAvatar} alt="avatar" />
                <div className="w-auto">
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-semibold text-gray-900 pr-2 -mt-1">@{usename} </h2>
                        <small className="text-sm text-gray-700">{formattedDateDistance}</small>
                    </div>
                    <p className="text-sm text-gray-700">{formattedDate}</p>
                    <p className="mt-2 text-black font-bold text-lg ">
                        {title}
                    </p>
                    <p className="mt-2 text-gray-700  text-md ">
                        {body}
                    </p>
                    <div className="mt-2">
                        <div className="rounded-full w-auto items-center ">
                            <h1 className="text-md w-auto text-gray-700 font-semibold">{tags}</h1>

                        </div>
                    </div>

                    <div className="mt-4 flex items-center">
                        <div className="flex mr-2 text-gray-700 text-sm mr-3">
                            <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>12</span>
                        </div>
                       
                        <div className="flex mr-2 text-gray-700 text-sm mr-4">
                            <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            <span>share</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default dynamic(() => Promise.resolve(Post), { ssr: false })

