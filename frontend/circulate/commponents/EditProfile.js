// components/LoginModal.js
import { useRouter } from 'next/router';

import { useState } from 'react';


const EditProfile = () => {
    const [name, setFullName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [about, setAbout] = useState('');
    const [phone, setPhone  ] = useState('');
    const [emailFill, setEmailFill] = useState(false);
    const [passFill, setPassFill] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleModal = () => {
        setShowDropdown(!showDropdown);
    };








    return (
        <>

            <svg onClick={toggleModal} className='justify-end hover:bg-slate-200 cursor-pointer ' viewBox="0 0 24 24" width="24px" height="24px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#878787">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g
                ><g id="SVGRepo_iconCarrier">
                    <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                        stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                        stroke="#878787" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g></svg>
            {showDropdown && (


                <div className="fixed  inset-0 z-10 flex  items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-50">
                    <div className="bg-white shadow-lg border sm:w-2/5 p-2   relative rounded-lg">
                        <div className="bg-white px-4 pb-4 pt-5 rounded-lg ">
                            <div className="">
                                <div className=" p-2 space-y-4 md:space-y-6 ">
                                   
                                    
                                    <form className="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
                                            <input onChange={(event) => setFullName(event.target.value)} type="text" value={name} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" />
                                            {emailFill && <p className='text-[#aa3131] text-sm' >field required!</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your userName</label>
                                            <input onChange={(event) => setUserName(event.target.value)} type="text" value={username} name="userName" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="UserName" />
                                            {emailFill && <p className='text-[#aa3131] text-sm' >field required!</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input onChange={(event) => setEmail(event.target.value)} type="email" value={email} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                            {emailFill && <p className='text-[#aa3131] text-sm' >field required!</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="about" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About</label>
                                            <textarea onChange={(event) => setAbout(event.target.value)} type="email" value={about} name="about" id="about" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hi , this is me ans my postes collection!!" />
                                            
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
                                            <input onChange={(event) => setPhone(event.target.value)} type="email" value={phone} name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone number" />
                                          
                                        </div>
                                      


                                       
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" >Disconect</button>
                            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={toggleModal} >Cancel</button>
                        </div>
                    </div>


                </div>
            )}
        </>
    )
}

export default EditProfile;
