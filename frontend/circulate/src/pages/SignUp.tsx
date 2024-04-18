import type { NextPage } from 'next'

import React, { useEffect, useState } from 'react'

import dynamic from "next/dynamic";

import Cookies from "js-cookie"
import { useRouter } from 'next/router';
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
    cache: new InMemoryCache()
});


interface SignInData {
    signUp: {
        id: string;
        username: string;
        password: string;
        name: string;
        email: string;
    }
}

interface SignInVariables {
    userInput:{
        username: string;
        password: string;
        name: string;
        email: string;
    }
   
}

const SignUp: NextPage = () => {

    const SIGN_UP = gql`
    mutation SignUp($userInput: UserInput) {
            signUp(userInput: $userInput) {
                username
                password
                name
                email
  }
}
    `;


    const router = useRouter();
    const [name, setFullName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailFill, setEmailFill] = useState(false);
    const [passFill, setPassFill] = useState(false);

    const [signUpUser, { loading, error, data }] = useMutation<SignInData, SignInVariables>(SIGN_UP);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (email == '') {
                setEmailFill(true)
                return
            }
            if (password == '') {
                setPassFill(true)
                return
            }
            const result = await signUpUser({ variables:{userInput: {   username:username, password:password,name:name,email:email }} });
            console.log('Signed in user:', result.data?.signUp);
            if (result) {
                router.push('/login')
                // Cookies.set('userDataC', JSON.stringify(result.data?.signUp), {
                //     expires: 7, // Set the cookie to expire after 7 days
                //     secure: false, // Ensure the cookie is sent over HTTPS only
                //     httpOnly: false, // Prevent JavaScript access to the cookie (enhances security)
                //     sameSite: 'Lax',
                // });
            }
            // Handle successful sign-in (e.g., redirect user)
        } catch (error: any) {
            console.error('Sign-in error:', error.message);
            // Handle sign-in error (e.g., display error message)
        }
    };

    return (
        <ApolloProvider client={client}>
            <section className="bg-cover bg-center bg-no-repeat   backdrop-blur-lg" style={{ backgroundImage: 'url("/bgC.jpg")' }} >
                <div className="flex  backdrop-blur-sm flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img className="w-8 h-8 mr-2" src="logoC.png" alt="logo" />
                                Circulate
                            </a>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create a Circulate acount !
                            </h1>
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
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input onChange={(event) => setPassword(event.target.value)} type="password" value={password} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {password && <p className='text-[#aa3131] text-sm'>field required!</p>}
                                </div>
          
                                {loading && <p>Loading...</p>}
                                {error && <p>Error: {error.message}</p>}
                                <button type="submit" onClick={handleSubmit} className="w-full text-white bg-[#2563EB] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create Acount</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    i already have an account ! <a href="#" className="font-medium text-[#2563EB] hover:underline dark:text-primary-500">Sign in</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </ApolloProvider>
    )
}


export default dynamic(() => Promise.resolve(SignUp), { ssr: false })
