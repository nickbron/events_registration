"use client";
import { useState } from "react";

export default function Registration() {
  const [selectedValue, setSelectedValue] = useState("SocialMedia");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };
  console.log(selectedValue);
  return (
    <div className="h-screen bg-gray-800">
      <div className="pt-10 md:pt-20">
        <div className="p-4 md:p-8">
          <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">
            Registration
          </h1>
          <form className="flex flex-col items-center">
            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
              <div className="flex flex-col md:flex-row">
                <input
                  id="fName"
                  type="text"
                  placeholder="First Name"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  id="lName"
                  type="text"
                  placeholder="Last Name"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  id="email"
                  type="email"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Email"
                />
                <input
                  id="birthdate"
                  type="date"
                  placeholder="date of birth"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <h3 className="text-white text-center pt-8 font-light text-1xl md:text-3xl lg:text-3xl">
                Where did you hear about this event?
              </h3>
              <div>
                <label className="flex bg-gray-900 text-gray-300 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                  <input
                    type="radio"
                    id="socialMedia"
                    value="SocialMedia"
                    checked={selectedValue === "SocialMedia"}
                    onChange={() => handleRadioChange("SocialMedia")}
                  />
                  <i className="pl-2">Social media</i>
                </label>

                <label className="flex bg-gray-900 text-gray-300 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                  <input
                    type="radio"
                    id="friends"
                    value="Friends"
                    checked={selectedValue === "Friends"}
                    onChange={() => handleRadioChange("Friends")}
                  />

                  <i className="pl-2">Friends</i>
                </label>

                <label className="flex bg-gray-900 text-gray-300 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                  <input
                    type="radio"
                    id="foundMyself"
                    value="FoundMysels"
                    checked={selectedValue === "FoundMysels"}
                    onChange={() => handleRadioChange("FoundMysels")}
                  />
                  <i className="pl-2">Found myself</i>
                </label>
              </div>
            </div>
            <button className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
              Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
