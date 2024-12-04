"use client";

import { AngleNextIcon } from "@/components/Icons";

export default function Home() {
  const handleClick = () => {
    window.open("https://github.com/gigigihuhuhu/next-demo");
  };
  return (
    <div className="flex flex-row gap-8 items-center justify-start pl-20">
      <div className="text-3xl font-semibold">Not yet!</div>
      <button
        onClick={handleClick}
        className="group transition-colors duration-200 text-lg text-gray-900 font-semibold px-4 py-2 border border-solid border-blue-300 rounded-xl hover:border-blue-700 hover:bg-blue-100 flex flex-row items-center"
      >
        Go check sourcecode
        <AngleNextIcon className="transition-transform duration-200 group-hover:translate-x-1"></AngleNextIcon>
      </button>
    </div>
  );
}
