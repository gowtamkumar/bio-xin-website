"use client";
import { useEffect, useState } from "react";
import {
  setProductFilter,
  setProductView,
} from "@/redux/features/global/globalSlice";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

export default function HeaderSearch({ setOpen }: any) {
  const [serach, setSearch] = useState({} as any);
  // hook
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const { Search } = Input;

  useEffect(() => {
    const ValidPath = ["products", "category"].includes(pathname.split("/")[1]);
    if (!ValidPath) {
      localStorage.removeItem("searchData");
    }
    dispatch(setProductFilter({}));
    dispatch(setProductView(false)); // this state use for product grid
  }, [pathname, dispatch]);

  const getData =
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage?.getItem("searchData") || "{}")
      : {};

  return (
    <div className="container mx-auto md:p-10 py-6">
      <Search
        // addonBefore={selectBefore}
        width={100}
        value={getData.search}
        size="large"
        onSearch={() => {
          let queryRouter = "";
          
          if (getData.search) {
            queryRouter += `search=${getData.search}&`;
          }
          router.push(`/products?${queryRouter}`);
          setOpen(false);
          
        }}
        onChange={({ target }) => {
          const getData = JSON.parse(
            localStorage.getItem("searchData") || "{}"
          );
          localStorage.setItem(
            "searchData",
            JSON.stringify({ ...getData, search: target.value })
          );
          setSearch({ ...serach, search: target.value });
        }}
      />
    </div>
  );
}
