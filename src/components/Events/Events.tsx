import { format } from 'date-fns'
import { IEvents } from '@/models'

import Image from 'next/image'

export default function Events({ data }: { data: Array<IEvents> }) {
    return (
        <>
            <section className="  grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 justify-items-center  gap-y-10 gap-x-14">
                {data &&
                    data.map(({ id, title, description, eventDate, image }) => (
                        <div key={id} className="w-full h-full   rounded-lg border border-b border-primary  p-5    ">
                            <div className=" ">
                                <Image src={image} alt="image of event" width={500} height={50} object-fit="cover" />
                            </div>
                            <div className="flex flex-row justify-between pt-5">
                                <h2 className="text-lg font-medium ">{title}</h2>
                                <h2 className="text-lg font-light pl-5 text-nowrap ">{format(eventDate, "dd/MM/yyyy HH':'mm")}</h2>
                            </div>
                            <div>
                                <p className=" pt-5">{description}</p>
                            </div>

                            <div className="flex  justify-between ">
                                <a href={`registration/event?id=${id}`} className="mt-3 inline-flex items-center">
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
                                <a href={`view/event?id=${id}`} className="mt-3  inline-flex items-center">
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
    )
}
