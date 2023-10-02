'use client';
import { gql, useQuery } from "@apollo/client";
// import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const query = gql`
  query GetUsers {
    getUsers {
        id
        email
    }
  }
`;

interface Response {
  getUsers: { id: number; email: string }[];
  loading: boolean;
error: any;

}

export default function ListUsers() {
  const {data:session} = useSession();


  useEffect(() => {}, [session]);

  const { loading, error, data } = useQuery(query, {
    skip: !session?.user,
  });
   
      return (

    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        {session?.user ? 
        (<>
        <h5>logged in as: {session?.user?.email}</h5>
            <button onClick={() => signOut()}>Sign out</button>
        </>      
        ): <button onClick={() => signIn()}>Sign in</button>}
        </div>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : !data?.getUsers ? (
        <p>Loading...</p>
      ) : data?.getUsers ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data?.getUsers.map((user:any) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.email}
                style={{ height: 180, width: 180 }}
              />
              <h3>{user.email}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}
