"use client";

import { postApi } from "@/services/request";
import React, { useEffect, useState } from "react";
import { PostCard } from "../components";

function ListPostsBlock() {
  const [listPost, setListPost] = useState<any>([1, 2, 3, 4, 5, 6, 7, 8]);
  //   useEffect(() => {
  //     getListPost();
  //   }, []);
  //   const getListPost = async () => {
  //     const res = await postApi.getListPost();
  //     console.log("ghhee");
  //   };
  return (
    <div className="flex self-center max-w-6xl gap-8 flex-wrap items-center my-16 px-4 md:px-6">
      {listPost.map((item) => (
        <PostCard key={item} />
      ))}
    </div>
  );
}

export default ListPostsBlock;
