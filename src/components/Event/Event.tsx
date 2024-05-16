"use client";
import { getEvents } from "@/app/registration/actions";
import { useEffect, useState } from "react";
// import { EventType } from "@/@types";

interface IEvent {
  id?: string;
  title: string;
  description: string;
  organizer: string;
  eventDate?: Date;
}

export default function Event() {
  const initialState = {
    id: "",
    title: "Title1",
    description: "Text1",
    organizer: "Krokus",
  };

  const [events, setEvents] = useState<IEvent | null>(null);

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
      {events &&
        events.map(({ id, title, eventDate, description }) => (
          <div key={id} className="flex flex-wrap justify-center mt-10 ">
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
                    {title}
                  </h2>
                  <h2 className="text-white dark:text-white text-lg font-light">
                    {eventDate}
                  </h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <p className="leading-relaxed text-base text-white dark:text-gray-300">
                    {description}
                  </p>
                  <div className="flex flex-row justify-between flex-grow">
                    <a
                      href={`registration/event?id=${id}`}
                      className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
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
                      // href="/view"
                      href={`view/event?id=${id}`}
                      className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
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
        ))}
    </>
  );
}
