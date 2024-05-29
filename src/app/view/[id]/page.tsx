'use client'
// import { useSearchParams } from "next/navigation";
// import { getParticipants } from "@/app/registration/actions";
// import { Key, ReactNode, useEffect, useState } from "react";
// import { format } from "date-fns";

export default function ViewPage() {
    // const searchParams = useSearchParams();
    // const idEvent = searchParams.get("id");

    // const [participants, setParticipants] = useState<any | null>(null);

    // useEffect(() => {
    //   async function fetchData() {
    //     const { data, error } = await getParticipants(idEvent);
    //     if (data) {
    //       setParticipants(data);
    //     }
    //   }
    //   fetchData();
    // }, []);
    // console.log("participants:", participants);

    return (
        <>
            <h1 className="text-black text-center pt-8 font-light text-4xl md:text-5xl lg:text-6xl">List of registered participants</h1>
            {/* {participants &&
        participants.map(
          ({
            id,
            firstName,
            lastName,
            email,
            birthday,
            whereKnow,
            created,
          }: {
            id: Key | null | undefined;
            firstName: ReactNode;
            lastName: ReactNode;
            email: ReactNode;
            birthday: Date;
            whereKnow: ReactNode;
            created: Date;
          }) => (
            <div key={id} className="flex flex-wrap justify-center mt-10 ">
              <div className="p-4 max-w-sm">
                <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                  <div className="flex flex-row justify-around mb-3">
                    <h2 className="text-white dark:text-white text-lg font-medium">
                      {firstName}
                    </h2>
                    <h2 className="text-white dark:text-white text-lg font-medium">
                      {lastName}
                    </h2>
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <h2 className="text-white dark:text-white text-lg font-light">
                      {format(birthday, "MM/dd/yyyy")}
                    </h2>
                    <p className="leading-relaxed text-base text-white dark:text-gray-300">
                      {email}
                    </p>
                    <p className="leading-relaxed text-base text-white dark:text-gray-300">
                      date of registration: {format(created, "dd/MM/yyyy")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        )} */}
        </>
    )
}
