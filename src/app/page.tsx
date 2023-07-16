"use client";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Feedbar from "@/components/Feedbar";
import Login from "@/components/Login";

import { getSession, getProviders, useSession } from "next-auth/react";

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();
  // if (!session) return <Login providers={providers} />;

  return (
    <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto text-white space-x-3">
      <Sidebar />
      <Feedbar />
      {/*Widgets*/}
      {/*Modal*/}
    </main>
  );
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );

  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );

  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}
