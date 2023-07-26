'use client';

import { selectAuthState, setAuthState } from "./redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

import type { NextPage } from "next";

import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";

const query = gql`query Now {
    now(id: "1")
}`;


const Home: NextPage = () => {
  // const { data } = await getClient().query({ query });
  // const authState = useSelector(selectAuthState);
  // const dispatch = useDispatch();
  // return <main>{data.now}</main>;
  return (
    <div>
      {/* <div>{authState ? "Logged in" : "Not Logged In"}</div>
      <button
        onClick={() =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? "Logout" : "LogIn"}
      </button> */}


    </div>
  );
};

// export async function getStaticProps() {
//   const { data } = await getClient().query({
//     query: gql`
//       query NextLaunch {
//         launchNext {
//           mission_name
//           launch_date_local
//           launch_site {
//             site_name_long
//           }
//         }
//       }
//     `,
//   });
//   return {
//     props: {
//       nextLaunch: data.launchNext,
//     },
//  };
// }

export default Home;

