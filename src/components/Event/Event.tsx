import { format } from "date-fns";
import { IEvents } from "@/models";

export default function Event({ data }: { data: Array<IEvents> }) {
  return (
    <>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-2">Events</h1>
      </div>
      <section className="  grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 justify-items-center  gap-y-20 gap-x-14 m-5 ">
        {data &&
          data.map(({ id, title, description, eventDate }) => (
            <div
              key={id}
              className="w-full h-full  bg-white dark:bg-slate-800 rounded-lg  m-5 px-6 py-8 ring-1 ring-slate-900/5 shadow-x duration-500 hover:scale-105 hover:shadow-xl flex flex-col justify-between "
            >
              <div className="flex flex-row justify-evenly ">
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
                <h2 className="text-slate-900 dark:text-white text-lg font-medium">
                  {title}
                </h2>
                <h2 className="text-slate-500 dark:text-slate-400 text-lg font-light pl-5 text-nowrap">
                  {format(eventDate, "MM/dd/yyyy HH ':'mm ")}
                </h2>
              </div>

              <p className="text-slate-500 dark:text-slate-400 pt-5">
                {description}
              </p>
              <div className="flex flex-row justify-between  ">
                <a
                  href={`registration/event?id=${id}`}
                  className="mt-5 text-black dark:text-cyan-600 hover:text-blue-600 inline-flex items-center"
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
                  href={`view/event?id=${id}`}
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
          ))}
      </section>
    </>
  );
}
