import { Rate } from "antd";
import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaCloudSun } from "react-icons/fa";
import ReviewCard from "./ReviewCard";

export default function DrLightUvMirror() {
  return (
    <>
      <section className="bg-[#DAD5E3] py-20 mt-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
          <div className="leading-relaxed">
            <h1 className="md:text-[56px] text-[30px]  text-[#B229A8] font-semibold text-center md:text-start">
              Dr. Light UV Mirror
            </h1>
            <h3 className="md:text-[36px] text-[25px] font-semibold text-center md:text-start">
              Boost Your Sun Protection Routine
            </h3>
            <div className="py-5">
              <p className="text-[18px]  md:text-start text-center">
                Dr. Light UV Mirror is an innovative device that detects
                sunscreen application, highlighting areas where protection is
                applied or missed, ensuring even coverage and enhanced defense
                against harmful UV rays. Perfect for optimal sun safety.
              </p>
            </div>
            <div className="text-center md:text-start">
              <button className="rounded-none bg-black text-white px-3 py-2 hover:bg-[#F7AA0E] hover:text-black ">
                Order Now
              </button>
            </div>
          </div>
          <div className="md:text-end flex text-center">
            <Image
              src="/removebg-preview.png"
              alt="Descriptive text for the image"
              width={0}
              height={0}
              layout="responsive"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 text-center justify-center py-20">
        <h1 className="md:text-[40px] text-[30px] font-semibold pb-12">
          Benefit of UV Mirror
        </h1>
        <div className="grid md:grid-cols-8">
          <div className="grid grid-cols-2 col-span-3 gap-4">
            <div className="flex flex-col items-center leading-relaxed">
              <div className="bg-[#EAE7F1] w-20 h-20 flex rounded-full items-center justify-center">
                <FaCloudSun size={40} color="#8f8f8f" />
              </div>
              <p className="font-[urbanist] text-[#8f8f8f]">
                Helps users achieve more even and effective sun protection
              </p>
            </div>

            <div className="flex flex-col items-center leading-relaxed">
              <div className="bg-[#EAE7F1] w-20 h-20 flex rounded-full items-center justify-center">
                <FaCloudSun size={40} color="#8f8f8f" />
              </div>
              <p className="font-[urbanist] text-[#8f8f8f]">
                Reduces the risk of sunburn and other skin damage caused by UV
                rays
              </p>
            </div>
            <div className="flex flex-col items-center leading-relaxed">
              <div className="bg-[#EAE7F1] w-20 h-20 flex rounded-full items-center justify-center">
                <FaCloudSun size={40} color="#8f8f8f" />
              </div>
              <p className="font-[urbanist] text-[#8f8f8f]">
                Is easy to use and portable, making it ideal for everyday use
              </p>
            </div>
            <div className="flex flex-col items-center leading-relaxed">
              <div className="bg-[#EAE7F1] w-20 h-20 flex rounded-full items-center justify-center">
                <FaCloudSun size={40} color="#8f8f8f" />
              </div>
              <p className="font-[urbanist] text-[#8f8f8f]">
                Promotes healthy and youthful skin
              </p>
            </div>
          </div>
          <div className="md:col-span-2 col-span-12">
            <Image
              src="/2.png"
              alt="Descriptive text for the image"
              width={0}
              height={0}
              layout="responsive"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="grid grid-cols-2 col-span-3  gap-4">
            <div className="flex flex-col items-center leading-relaxed">
              <div className="bg-[#EAE7F1] w-20 h-20 flex rounded-full items-center justify-center">
                <FaCloudSun size={40} color="#8f8f8f" />
              </div>
              <p className="font-[urbanist] text-[#8f8f8f]">
                Compact and lightweight design for easy portability
              </p>
            </div>
            <div className="flex flex-col items-center leading-relaxed">
              <div className="bg-[#EAE7F1] w-20 h-20 flex rounded-full items-center justify-center">
                <FaCloudSun size={40} color="#8f8f8f" />
              </div>
              <p className="font-[urbanist] text-[#8f8f8f]">
                Built-in UV light to detect and highlight areas of sun
                protection
              </p>
            </div>
            <div className="flex flex-col items-center leading-relaxed">
              <div className="bg-[#EAE7F1] w-20 h-20 flex rounded-full items-center justify-center">
                <FaCloudSun size={40} color="#8f8f8f" />
              </div>
              <p className="font-[urbanist] text-[#8f8f8f]">
                Rechargeable battery for cordless use
              </p>
            </div>
            <div className="flex flex-col items-center leading-relaxed">
              <div className="bg-[#EAE7F1]  w-20 h-20 flex rounded-full items-center justify-center">
                <FaCloudSun size={40} color="#8f8f8f" />
              </div>
              <p className="font-[urbanist] text-[#8f8f8f]">
                Easy to use and clean
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 bg-[#F9F9FA] py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center justify-center">
          <div className="flex justify-center bg-[#DCD8E7]  rounded-3xl">
            <Image
              src="/3.png"
              alt="Descriptive text for the image"
              width={0}
              height={0}
              layout="responsive"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* <Image
              src="/3.png"
              alt="logo"
              loading="lazy"
              width={600}
              height={600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            /> */}
          </div>
          <div className="p-10">
            <h2 className="md:text-[40px] text-[30px]  font-semibold">
              Key Features
            </h2>
            <ul className="list-disc text-[#8f8f8f] font-[urbanist] leading-10 text-[20px]">
              <li>Apply sunscreen to your face and neck.</li>
              <li>
                Turn on the Dr. Light UV Mirror by pressing the power button.
              </li>
              <li>
                Hold the mirror up to your face and look at the reflection.
              </li>
              <li>
                Areas where sunscreen has been applied will appear black under
                the UV light.
              </li>
              <li>
                If you see any areas that are not covered in sunscreen, reapply
                sunscreen to those areas.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6  py-20">
        <div className="max-w-7xl mx-auto ">
          <div className="grid md:grid-cols-2 items-center justify-center">
            <div className="p-10 md:order-1 order-2">
              <h2 className="md:text-[40px] text-[30px] font-semibold">
                How to Use
              </h2>
              <ul className="list-disc text-[#8f8f8f] font-[urbanist] leading-10 text-[20px]">
                <li>
                  Helps users achieve more even and effective sun protection
                </li>
                <li>
                  Reduces the risk of sunburn and other skin damage caused by UV
                  rays
                </li>
                <li>Promotes healthy and youthful skin</li>
                <li>
                  Is easy to use and portable, making it ideal for everyday use
                </li>
                <li>Compact and lightweight design for easy portability</li>
                <li>
                  Built-in UV light to detect and highlight areas of sun
                  protection
                </li>
                <li>Rechargeable battery for cordless use</li>
                <li>Easy to use and clean</li>
              </ul>
            </div>
            <div className="flex justify-center bg-[#DCD8E7] rounded-3xl md:order-2 order-1">
              <Image
                src="/4.png"
                alt="logo"
                loading="lazy"
                width={600}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 bg-[#EAE7F1] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div>
            <h1 className="text-[#B229A8] font-[Urbanist] text-[26px] font-semibold">
              {" "}
              Basic Specifications
            </h1>
            <ul className="list-disc text-[#8f8f8f] font-[urbanist] leading-10 text-[20px]">
              <li>
                <strong>Type:</strong> Compact Mirror
              </li>
              <li>
                <strong>Interface:</strong> Type-C
              </li>
              <li>
                <strong>Operating Voltage:</strong>  5V
              </li>
              <li>
                <strong> Power:</strong> 1W
              </li>
              <li>
                <strong> Battery:</strong>  1000mAh (Lithium Battery)
              </li>
              <li>
                <strong>Supplementary Light:</strong>  365nm
              </li>
              <li>
                <strong>Dimensions:</strong> 9.79.71.8cm (Excluding Interface)
              </li>
              <li>
                <strong> Weight:</strong>  0.12KG
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#B229A8] font-[Urbanist] text-[26px] font-semibold">
              Safety Precautions:
            </h1>
            <ul className="list-disc text-[#8f8f8f] font-[urbanist] leading-10 text-[20px]">
              <li>
                <strong>Direct Eye Contact:</strong>
                Avoid looking directly at the product light within 5cm.
              </li>
              <li>
                <strong> Child Safety:</strong>
                Not designed for children; keep out of their reach.
              </li>
              <li>
                <strong> Disassembly Warning:</strong>
                Do not disassemble; fragile parts inside can cause harm.
              </li>
              <li>
                <strong> Shell Exposure:</strong>
                Avoid prolonged sun exposure to maintain color-changing shell
                function.
              </li>
              <li>
                <strong> Water Resistance:</strong>
                The product is not waterproof; keep away from water sources.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#B229A8] font-[Urbanist] text-[26px] font-semibold">
              Tips:
            </h1>
            <ul className="list-disc text-[#8f8f8f] font-[urbanist] leading-10 text-[20px]">
              <li>
                For best results, apply sunscreen evenly to all exposed skin,
                including your face, neck, ears, and hands.
              </li>
              <li>
                Reapply sunscreen every two hours, or more often if you are
                sweating or swimming.
              </li>
              <li>
                Remember to wear protective clothing, such as a hat and
                sunglasses, when you are outdoors.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 items-center gap-10">
          <div className="md:col-span-3 col-span-8">
            <Image
              src="/5.png"
              alt="Descriptive text for the image"
              width={0}
              height={0}
              layout="responsive"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="md:col-span-6 col-span-8 flex bg-slate-50 items-center justify-center">
            <iframe
              className="rounded-3xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Video Placeholder"
              width={"100%"}
              height="300"
              src="https://www.youtube.com/embed/XHOmBV4js_E?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fstage.bioxincosmeceuticals.com&amp;widgetid=1"
              id="widget2"
            ></iframe>
          </div>
          <div className="md:col-span-3 col-span-8">
            <Image
              src="/7.png"
              alt="logo"
              loading="lazy"
              width={600}
              height={600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="md:text-[40px] text-[30px] font-semibold pb-12">
          Client Reviews
        </h1>
        <div className="grid md:grid-cols-3 items-center gap-3">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>
    </>
  );
}
