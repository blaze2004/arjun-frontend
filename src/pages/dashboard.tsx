import Layout from "@/components/layout";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import Account from "@/components/account";
import GoogleButton from "react-google-button";
import { useRouter } from "next/router";
import { Database } from "@/types/database.types";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const session = useSession();
  const scopes = [
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/calendar.events",
    "https://www.googleapis.com/auth/tasks",
    "https://www.googleapis.com/auth/tasks.readonly",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile"
  ];
  const router = useRouter();
  const supabase = useSupabaseClient<Database>();

  const [isWaitlistedUser, setIsWaitlistedUser] = useState<boolean>(false);

  const isWaitlisted = async () => {
    try {
      if (!session) {
        return;
      }

      let { data, error, status } = await supabase
        .from("Testers")
        .select(`email`)
        .eq("email", session.user.email)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setIsWaitlistedUser(true);
        return;
      }
      return;
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }

  useEffect(() => {
    isWaitlisted();
  }, [session, isWaitlisted]);

  return (
    <Layout>
      <main className="flex w-full flex-col items-center justify-center py-32 h-screen">
        {!session
          ? <div className="max-w-xl px-5 xl:px-0 flex-col">
            <h1
              className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold  text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
              style={{ opacity: 1, transform: "none" }}
            >
              <span
                style={{
                  display: "inline-block",
                  verticalAlign: "top",
                  textDecoration: "inherit",
                  maxWidth: "541px"
                }}
              >
                Login
              </span>
            </h1>
            <p
              className="mt-6 text-gray-500 text-decoration-italic"
              style={{ opacity: 1 }}
            >
              <span
                style={{
                  display: "inline-block",
                  verticalAlign: "top",
                  textDecoration: "inherit",
                  maxWidth: "541px"
                }}
              >
                Calendar and Google Task permissions are compulsory for Arjun
                to be able to manage your schedule. We don&apos;t do anything
                with your calendar and only perform operations which you ask
                Arjun to perform. For more information on how we use you data
                see our <Link href="/privacy-policy">Privacy Policy</Link>
              </span>
            </p>
            <div className="flex items-center justify-center">
              <div className="border border-gray-200 bg-white text-black hover:bg-gray-50 flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none max-w-fit p-2 mt-5">
                <GoogleButton
                  onClick={() =>
                    router.push(
                      `${process.env
                        .NEXT_PUBLIC_SUPABASE_URL}/auth/v1/authorize?provider=google&scopes=${scopes.join(
                          " "
                        )}&redirect_to=${location.protocol}//${location.host}/dashboard&prompt=consent&access_type=offline`
                    )}
                />
              </div>
            </div>
          </div>
          : (isWaitlistedUser ? <Account session={session} /> :
            (
              <div className="max-w-xl px-5 xl:px-0 flex-col">
                <p
                  className="mt-6 text-gray-500 text-decoration-italic"
                  style={{ opacity: 1 }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      verticalAlign: "top",
                      textDecoration: "inherit",
                      maxWidth: "541px"
                    }}
                  >
                    You don&apos;t have access to Arjun yet. Join the waitlist to enjoy the superpowers of arjun.
                  </span>
                </p>
                <div className="flex items-center justify-center">
                  <Link
                    href="https://form.waitlistpanda.com/go/OUX9PACcT4P8hGW8uztt"
                    className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  >
                    Join the waitlist
                  </Link>
                </div>
              </div>
            ))}
      </main>
    </Layout>
  );
};

export default Dashboard;
