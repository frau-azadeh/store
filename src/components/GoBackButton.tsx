"use client";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <div className="mt-5 flex ">
      <button
        onClick={() => router.back()}
        className="flex gap-5 items-center text-gray-500 hover:text-blue-500 transition duration-300"
      >
        Go Back <ChevronLeftIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default GoBackButton;
