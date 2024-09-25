// import { getAllCategories } from "@/lib/apis/categories";
// import Image from "next/image";
// import Link from "next/link";

// const CategoryCard = async () => {
//   const categories = await getAllCategories();
//   return (
//     <section className="mb-8">
    
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 clear-both">
//         {/* Example Category Card: */}
//         {categories?.data.map((item: any) => (
//           <Link key={item.id} href={`/category/${item.id}`}>
//             <div className="bg-white rounded-lg shadow-md p-4">
//               <Image
//                 width={30}
//                 height={30}
//                 src="/product-02.jpg"
//                 alt="Category Image"
//                 className="w-full h-48 object-cover mb-4"
//               />
//               <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Shop Now
//               </button>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoryCard;
