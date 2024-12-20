import ArrowUpRightIcon from "@/assets/icons/ArrowUpRight";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

function PostCard() {
  return (
    <div className="w-[346px] flex flex-col gap-5 my-4">
      <Image
        alt="post-1"
        src={
          "https://wallpapers.com/images/hd/blogging-backdrop-8ifwoxtwf7mdg268.jpg"
        }
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-[240px] rounded-2xl"
      />
      <div className="flex flex-col gap-2">
        <span className="text-primary">Design</span>
        <div className="cursor-pointer flex items-start justify-between">
          {" "}
          <span className="text-2xl font-semibold">
            UX review presentations
          </span>
          <div className="p-1">
            <ArrowUpRightIcon width={20} />
          </div>
        </div>
        <span className="font-light">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </span>
      </div>
      <div className="flex gap-2">
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">N Duy Long ne</span>
          <span className="text-sm font-light">20 Jan 2025</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
