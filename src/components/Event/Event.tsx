"use client";
import { getEvents } from "@/app/registration/actions";
import { Key, ReactNode, useEffect, useState } from "react";
import { format } from "date-fns";

export default function Event() {
  const initialState = {
    id: "",
    title: "Title1",
    description: "Text1",
    organizer: "Krokus",
  };

  const [events, setEvents] = useState<any | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await getEvents();
      if (data) {
        setEvents(data);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-black text-center pt-8 font-light text-4xl md:text-5xl lg:text-6xl">
        Events
      </h1>
      {events &&
        events.map(
          (event: {
            description: ReactNode;
            eventDate: Date;
            title: ReactNode;
            id: Key | null | undefined;
          }) => (
            <div
              key={event.id}
              className="flex flex-wrap justify-center mt-10 "
            >
              <div className="p-4 max-w-sm">
                <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                  <div className="flex flex-row justify-between mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-white dark:text-white text-lg font-medium">
                      {event.title}
                    </h2>
                    <h2 className="text-white dark:text-white text-lg font-light">
                      {/* {event.eventDate} */}
                      {format(event.eventDate, "MM/dd/yyyy")}
                    </h2>
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <p className="leading-relaxed text-base text-white dark:text-gray-300">
                      {event.description}
                    </p>
                    <div className="flex flex-row justify-between flex-grow">
                      <a
                        href={`registration/event?id=${event.id}`}
                        className="mt-3 text-black dark:text-cyan-600 hover:text-blue-600 inline-flex items-center"
                      >
                        Registration Form
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <a
                        href={`view/event?id=${event.id}`}
                        className="mt-3 text-black dark:text-cyan-600 hover:text-blue-600 inline-flex items-center"
                      >
                        View
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
    </>
  );
}
