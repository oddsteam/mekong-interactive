import { useRef } from "react";

export default function TwentyThirdSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="h-screen relative w-full bg-[#171918] text-white flex flex-col justify-end items-center snap-start bg-top bg-no-repeat"
    ></section>
  );
}
