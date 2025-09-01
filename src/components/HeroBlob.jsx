import React from "react";

const HeroBlob = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-40 -left-24 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />
    <div className="absolute top-10 -right-20 h-[34rem] w-[34rem] rounded-full bg-pink-200/40 blur-3xl" />
    <div className="absolute bottom-[-6rem] left-1/3 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />
  </div>
);

export default HeroBlob;
