import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useState, useEffect } from "react";
import {
  Session,
  useSupabaseClient,
  useUser
} from "@supabase/auth-helpers-react";
import { FaWhatsapp } from "react-icons/fa";
import { Database } from "@/types/database.types";
import { useRouter } from "next/router";
import { Profiles, UserProfile } from "@/types";
import waitlist from '@zootools/waitlist-js';

const Account = ({ session }: { session: Session }) => {
  const arjunWhatsAppNumber = process.env.NEXT_PUBLIC_ARJUN_WHATSAPP_NUMBER;

  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [fullName, setFullName] = useState<Profiles["full_name"]>(null);
  const [phoneNumber, setPhoneNumber] = useState<Profiles["phone_number"]>(
    null
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshToken, setRefreshToken] = useState<
    Profiles["google_refresh_token"]
  >(null);
  const [waitlistStatus, setWaitlistStatus] = useState<Profiles["waitlist_status"]>(false);

  const router = useRouter();

  useEffect(
    () => {
      getProfile();
    },
    [session, getProfile]
  );

  async function getProfile() {
    try {
      if (!user) {
        router.push("/");
        return;
      }

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, phone_number, avatar_url, google_refresh_token, waitlist_status`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setPhoneNumber(data.phone_number);
        setFullName(data.full_name);
        setWaitlistStatus(data.waitlist_status);

        if (session.provider_refresh_token != null) {
          if (data.google_refresh_token !== null) {
            if (data.google_refresh_token !== session.provider_refresh_token) {
              setRefreshToken(session.provider_refresh_token);
              await updateProfile({
                refreshToken: session.provider_refresh_token
              });
            }
          } else {
            setRefreshToken(session.provider_refresh_token);
            await updateProfile({
              refreshToken: session.provider_refresh_token
            });
          }
        }
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }

  async function updateProfile({
    phoneNumber,
    refreshToken
  }: {
    phoneNumber?: Profiles["phone_number"];
    refreshToken?: Profiles["google_refresh_token"];
  }) {
    try {
      if (!user) {
        router.push("/");
        return;
      }

      if (phoneNumber || refreshToken) {
        const updates: UserProfile = {
          id: user.id,
          updated_at: new Date().toISOString()
        };

        if (phoneNumber !== null && phoneNumber !== undefined) {
          updates.phone_number = phoneNumber;
        }

        if (refreshToken !== null && refreshToken !== undefined) {
          updates.google_refresh_token = refreshToken;
        }

        let { error } = await supabase.from("profiles").upsert(updates);
        if (error) throw error;
        if (phoneNumber != undefined && phoneNumber != null) {
          alert("Profile updated!");
        }
      } else {
        console.log("Nothing to update");
        return;
      }
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setEditMode(false);
    }
  }

  if (!waitlistStatus) {
    return (
      <div className="max-w-xl px-5 xl:px-0 flex-col">
        <p
          className="mt-6 text-gray-500 text-justify text-decoration-italic mb-2"
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
            We apologize, but at this time you do not have access to Arjun. However, we would be happy to add you to our waitlist to gain access to the superpowers of Arjun. If you have already joined the waitlist, kindly await our email notification. Thank you for your patience and understanding.
          </span>
        </p>
        <div className="flex items-center justify-center">
          <button
            onClick={() => waitlist.openPopup("OUX9PACcT4P8hGW8uztt")}
            className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
          >
            Join the waitlist
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl px-5 xl:px-0">
      <h1
        className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold  text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem]"
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
          Hi {fullName || "There"},
        </span>
      </h1>
      <p
        className="mt-6 text-center text-gray-500 md:text-xl"
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
          Manage your schedule from WhatsApp by chatting with Arjun.
        </span>
      </p>
      <div className="m-4">
        <label className="block text-gray-700 font-bold mb-2">
          Your phone number
        </label>
        <div className="flex items-center gap-1">
          <PhoneInput
            country={"us"}
            value={phoneNumber}
            onChange={phone => {
              setPhoneNumber(phone);
            }}
            disabled={!editMode}
            placeholder="Your WhatsApp number to chat with Arjun."
          />
          <button
            onClick={() =>
              editMode ? updateProfile({ phoneNumber }) : setEditMode(true)}
            className="rounded-full border border-black bg-white p-1.5 px-4 text-sm text-black transition-all hover:bg-black hover:text-white self-center"
          >
            {editMode ? "Save" : "Edit"}
          </button>
        </div>
      </div>

      <div
        className="mx-auto mt-6 flex items-center justify-center space-x-5"
        style={{ opacity: 1, transform: "none" }}
      >
        <a
          href={`https://wa.me/+91${arjunWhatsAppNumber}?text=Hi+Arjun`}
          className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black flex"
        >
          <FaWhatsapp className="mr-2" size={20} /> Chat with Arjun
        </a>
      </div>
    </div>
  );
};

export default Account;
