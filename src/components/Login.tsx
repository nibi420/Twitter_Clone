"use client";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="bg-black min-h-screen">
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />
      <div>
        <div key={providers.name}>
          {/* https://devdojo.com/tailwindcss/buttons#_ */}
          <button
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            onClick={() => signIn(providers.id, { callbackUrl: "/" })}
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Sign in with {providers.name}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

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
