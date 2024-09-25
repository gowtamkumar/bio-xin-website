import { Rate } from "antd";
import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";

export default function ReviewCard() {
  return (
    <div className="bg-[#FFF5FE] rounded-xl p-4 gap-4 content-between">
      <div className="flex justify-between">
        <div>
          <Rate value={4} disabled style={{ color: "#B229A8" }} />
        </div>
        <div className="flex items-center">
          <div className="bg-[#B229A8] text-white rounded-full p-1 ">
            <AiOutlineLike />
          </div>
          <span>Testimonial</span>
        </div>
      </div>
      <p className="py-5 text-start">
        Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY
        recommend house rent to EVERYONE interested in running a successful
        online business!
      </p>
      <div className="max-w-sm mx-auto  rounded-xl space-y-2 py-4 flex items-center  space-x-6">
        <div className="h-10 w-10 rounded-full">
          <Image
            src="/7.png"
            alt="Descriptive text for the image"
            width={0}
            height={0}
            layout="responsive"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="space-y-2 md:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Erin Lindford</p>
            <p className="text-slate-500 font-medium">Product Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
