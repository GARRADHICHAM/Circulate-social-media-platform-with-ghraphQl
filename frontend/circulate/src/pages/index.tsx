import type { NextPage } from 'next'

import React, { useEffect, useState } from 'react'

import dynamic from "next/dynamic";
import Post from '../../commponents/Post'
import LestSide from '../../commponents/LeftSide'
import RightSide from '../../commponents/RightSide'
import NavBar from '../../commponents/NavBar'

import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
  cache: new InMemoryCache()
});

const Home: NextPage = () => {



  const GET_FEATURED_PRODUCTS = gql`
  query ListPosts($amount: Int) {
    listPosts(amount: $amount) {
      title
      tags
      id
      body
      author
    }
  }
  `;

  function Feed() {
    const { loading, error, data } = useQuery(GET_FEATURED_PRODUCTS, {
      variables: { amount: 10 },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log('data', data)
    return (
      <div>
       
        
          {data.listPosts.map((post: { _id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
            <Post {...post}/>
          ))}
        
        
      </div>
    )
  }




  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen bg-[#F0F2F5]">
        <NavBar />


        <main>
          <div className="mx-auto flex space-x-4 max-w-screen py-6 sm:px-6 lg:px-8">
            
            <div className='w-1/4'>
            <LestSide />
            </div>
            <div className='w-2/4 space-y-4'>
              
              <Feed />
              
            </div>
            <div className='w-1/4'>
            <RightSide/>
            </div>
          </div>
        </main>
      </div>
    </ApolloProvider>






  )
}


export default dynamic(() => Promise.resolve(Home), { ssr: false })
