import type { NextPage } from 'next'

import React, { useEffect, useState } from 'react'

import dynamic from "next/dynamic";
import Post from '../../commponents/Post'
import LestSide from '../../commponents/LeftSide'
import RightSide from '../../commponents/RightSide'
import NavBar from '../../commponents/NavBar'
import Cookies from "js-cookie"
import { useRouter } from 'next/router';

import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
  cache: new InMemoryCache()
});

const Home: NextPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<Record<string, any> | undefined>(undefined);
  useEffect(() => {
    const datta = Cookies.get('userDataC');
    if (!datta) {
      router.push('/login');
    }
  }
    , [router]);

  useEffect(() => {
    const dataFromCookie = Cookies.get('userDataC');
    if (dataFromCookie) {
      setUserData(JSON.parse(dataFromCookie));
      console.log("userdatttta :", dataFromCookie)
    }
  }
    , []);


  const GET_FEATURED_PRODUCTS = gql`
  query ListPosts($amount: Int) {
    listPosts(amount: $amount) {
      title
      tags
      _id
      body
      author {   
        id
        username
        avatar_path
        created_at
    }
    created_at
    }
  }
  `;


      const GET_NEW_POSTES = gql`
            query Query($amount: Int) {
              listNew(amount: $amount) {
                  _id
                  title
                  body
                  tags
                  author {
                    id
                    username
                    avatar_path
                    created_at
                  }
                  pathfile
                  created_at
              }
    }
    `;

  function Feed() {
    const { loading, error, data } = useQuery(GET_FEATURED_PRODUCTS, {
      variables: { amount: 100 },
    });
    console.log("dataFeed :", data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
      <div>


        {data.listPosts.map((post: { _id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
          <Post {...post} />
        ))}


      </div>
    )
  }

  function NewFeed() {
    const { loading, error, data } = useQuery(GET_NEW_POSTES, {
      variables: { amount: 100 },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
      <div>


        {data.listNew.map((post: { _id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
          <Post {...post} />
        ))}


      </div>
    )
  }

  const [home, setHome] = useState(true)
  const [newP, setNew] = useState(false)



  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen bg-[#F0F2F5]">
        <NavBar  {...userData} />


        <main>
          <div className="mx-auto pt-20 flex space-x-4 max-w-screen py-6 sm:px-6 lg:px-8">

            <div className='w-1/4 '>
              <div className='justify-end flex'>
                <LestSide {...userData} />
              </div>
            </div>
            <div className='w-2/4 space-y-4'>
              <div className='bg-white p-2 space-x-6 w-full flex rounded-xl shadow-md'>
                <div onClick={() => { setHome(true), setNew(false) }} className={`items-center rounded-xl p-2 px-4 ${home ? ("bg-gray-800") : ('bg-white')}  cursor-pointer flex space-x-2`}>
                  {home ? (
                    <img className="w-5 h-5" src="HomeW.png" />
                  ) : (
                    <img className="w-5 h-5" src="homeVF.png" />
                  )}

                  <h1 className={`font-semibold ${home ? ("text-white") : ("text-black")}  `}>Home</h1>
                </div>

                <div onClick={() => { setHome(false), setNew(true) }} className={`items-center rounded-xl p-2 px-4 ${newP ? ("bg-gray-800") : ('bg-white')} cursor-pointer flex space-x-2`}>


                  {newP ? (
                    <img className="w-5 h-5" src="NewW.png" />
                  ) : (
                    <img className="w-5 h-5" src="newVF.png" />
                  )}
                  <h1 className={`font-semibold ${newP ? ("text-white") : ('text-black')}`}>New</h1>
                </div>

              </div>
              {home && (
                <Feed />
              )}
              {newP && (
                <NewFeed />
              )}


            </div>
            <div className='w-1/4'>
              <div className='justify-start flex'>
                {/* <RightSide /> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </ApolloProvider>






  )
}


export default dynamic(() => Promise.resolve(Home), { ssr: false })
