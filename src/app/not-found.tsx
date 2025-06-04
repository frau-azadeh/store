import GoBackButton from "@/components/GoBackButton";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen mx-auto justify-center items-center">
      <Image
        width={400}
        height={400}
        alt="not found page"
        src="/images/not-found.png"
        className="rounded-lg shadow-md hover:scale-105 transition duration-300"
      />
      <GoBackButton />
    </div>
  );
}
