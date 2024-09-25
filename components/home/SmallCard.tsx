// "use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   EffectFade,
// } from "swiper/modules";
// import { SwiperNavButtons } from "../banner/SwiperNavButtons";

// export default function SmallCard({ categories }: any) {
//   const router = useRouter();

//   return (
//     <div className="md:w-8/12 mx-auto flex p-3 items-center justify-center bg-white ">
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
//         spaceBetween={5}
//         // navigation
//         breakpoints={{
//           // when window width is >= 640px
//           640: {
//             // width: 640,
//             slidesPerView: 2,
//           },
//           // when window width is >= 768px
//           768: {
//             // width: 768,
//             slidesPerView: 5,
//           },
//         }}
//         pagination={{ clickable: true, dynamicBullets: true }}

//         // pagination={{ clickable: true }}
//         // scrollbar={{ draggable: true }}
//         // onSwiper={(swiper) => console.log(swiper)}
//         // onSlideChange={() => console.log("slide change")}
//       >
//         {(categories?.data || []).map((item: any, idx: number) => {
//           return (
//             <SwiperSlide key={idx}>
//               <div className="w-8/12 mx-auto flex text-center items-center justify-center cursor-pointer">
//                 <div
//                   onClick={() => {
//                     router.push(`/products?categoryId=${item.id}&`);
//                   }}
//                 >
//                   <div className="rounded-full border flex justify-center p-5 text-center">
//                     <Image
//                       src={
//                         item.image
//                           ? `http://localhost:3900/uploads/${item.image}`
//                           : "/pos_software.png"
//                       }
//                       alt={item.image}
//                       loading="lazy"
//                       // fill
//                       width={70}
//                       height={70}

//                       // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     />
//                   </div>
//                   <p className="hover:underline">{item.name}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//         <SwiperNavButtons/>
//       </Swiper>
//     </div>
//   );
// }
