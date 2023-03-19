import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Loading from "../components/loading";

function MyApp({
  Component,
  pageProps
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const handleStart = () => setIsLoading(true);
      const handleComplete = () => setIsLoading(false);

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);

      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
      };
    },
    [router]
  );

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      {isLoading ?
        <Loading /> :
        <>
          <Component {...pageProps} />
        </>
      }
    </SessionContextProvider>
  );
}
export default MyApp;
