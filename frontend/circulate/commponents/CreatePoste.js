// components/LoginModal.js
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

import Cookies from "js-cookie"
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
    cache: new InMemoryCache()
});
const CreatePoste = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState('');

    const [userData, setUserData] = useState({});
    const [succ, setSucc] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false);

    const delay = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));
    

    const toggleModal = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const dataFromCookie = Cookies.get('userDataC');
        if (dataFromCookie) {
          setUserData(JSON.parse(dataFromCookie));
          console.log("userdata :",dataFromCookie)
        }
      }
        , []);

    const CREATE_POST = gql`
    mutation CreatePost($postInput: PostInput) {
        createPost(postInput: $postInput) {
                _id
                title
                body
                tags
                    author {
                        avatar_path
                        created_at
                        id
                        username
                    }
                pathfile
                created_at
        }
}
    `;

const [createPost, { loading, error, data }] = useMutation(CREATE_POST);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (title == '') {
                setEmailFill(true)
                return
            }
            if (body == '') {
                setPassFill(true)
                return
            }
            const result = await createPost({ variables: { postInput: { body: body, tags: tags, title: title, author: {avatar_path:userData.avatar_path,id:userData._id,username:userData.username,created_at:userData.created_at} } } });
            if(result.data){
                setSucc(true)
                await delay(1000);
                setSucc(true)
                toggleModal()
            }
            console.log('data :', result.data);

            // Handle successful sign-in (e.g., redirect user)
        } catch (error) {
            console.error('error:', error.message);
            // Handle sign-in error (e.g., display error message)
        }


    }





    return (
        <ApolloProvider client={client}>
        <>
            <button onClick={toggleModal} className="  p-2  w-full rounded-full bg-[#2492FF] text-white font-bold">Create Post</button>


            {showDropdown && (


                <div className="fixed  inset-0 z-10 flex  items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-50">
                    <div className="bg-white shadow-lg border sm:w-2/5 p-2   relative rounded-lg">
                        <div className="bg-white px-4 pb-4 pt-5 rounded-lg ">
                            <div className=" p-2 flex-col items-center">

                                <div className=" text-center">
                                    <p className="text-xl text-[#333] font-extrabold">Create Post</p>
                                    <p className="text-sm text-gray-500 mt-2">What's your thoughts !</p>
                                </div>
                                <form className="mt-4 space-y-2">
                                    <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" className="w-full border  rounded-md h-8 p-2" placeholder="Titre"></input>
                                    <textarea value={body} onChange={(event) => setBody(event.target.value)} type="text" className="w-full border  rounded-md h-12 p-2 " placeholder="Body"></textarea>
                                    <input value={tags} onChange={(event) => setTags(event.target.value)} type="text" className="w-full border  rounded-md h-8 p-2" placeholder="# tags"></input>

                                    {succ && (
                                <button className='w-full  rounded-md  bg-lime-600 text-white text-base font-semibold items-center'>Post Created Successfully !!</button>
                            )}
                                </form>
                            </div>
                            
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button onClick={handleSubmit} type="button" className="inline-flex w-full justify-center rounded-md bg-[#66B3F4] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" >Submit</button>
                            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={toggleModal} >Cancel</button>
                        </div>
                    </div>


                </div>
            )}
        </>
        </ApolloProvider>
    )
}

export default CreatePoste;
