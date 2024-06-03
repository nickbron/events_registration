'use client'
import { useSearchParams } from 'next/navigation'
import { addRegistration } from '@/api/addRegistration'

export default function RegistrationForm() {
    const searchParams = useSearchParams()
    const idEvent = searchParams.get('id')

    const updateEventId = addRegistration.bind(null, idEvent)

    return (
        <div className="h-screen bg-gray-800">
            <div className="pt-10 md:pt-20">
                <div className="p-4 md:p-8">
                    <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">Registration</h1>

                    <form className="flex flex-col items-center">
                        <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                            <div className="flex flex-col md:flex-row ">
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    className="my-2 py-2 px-4   rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Email"
                                />
                                <input
                                    id="birthDate"
                                    name="birthday"
                                    type="date"
                                    placeholder="date of birth"
                                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <h3 className="text-white text-center pt-8 font-light text-1xl md:text-3xl lg:text-3xl">
                                Where did you hear about this event?
                            </h3>
                            <div>
                                <fieldset>
                                    <label className="flex bg-gray-900 text-gray-300 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                                        <input id="socialMedia" type="radio" name="whereKnow" value="SocialMedia" />
                                        <i className="pl-2">Social media</i>
                                    </label>

                                    <label className="flex bg-gray-900 text-gray-300 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                                        <input id="friends" type="radio" name="whereKnow" value="Friends" />

                                        <i className="pl-2">Friends</i>
                                    </label>

                                    <label className="flex bg-gray-900 text-gray-300 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                                        <input id="foundMyself" type="radio" name="whereKnow" value="FoundMySelf" />
                                        <i className="pl-2">Found myself</i>
                                    </label>
                                </fieldset>
                            </div>
                        </div>
                        <button
                            formAction={updateEventId}
                            className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            Registration
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
