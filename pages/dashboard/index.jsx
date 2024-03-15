"use client";
import CardContent from "../card";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function UserInfo() {
    const { data: session } = useSession();
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      }, []);
    return (
        <div className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
            <CardContent />

            <div className="grid place-items-center">
                <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
                    <div>
                        Name: <span className="font-bold">{session?.user?.name}</span>
                    </div>
                    <div>
                        Email: <span className="font-bold">{session?.user?.email}</span>
                    </div>
                    <button
                        onClick={() => signOut()}
                        className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}
