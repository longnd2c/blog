import ArrowUpRightIcon from "@/assets/icons/ArrowUpRight";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

function OverviewBlock() {
  return (
    <div className="container mx-auto flex flex-col max-w-6xl px-4 md:px-6">
      <div className="flex flex-col py-24">
        <span className="font-semibold text-primary mb-3">Our blog</span>
        <span className="font-semibold text-5xl mb-6">
          Resources and insights
        </span>
        <span className="text-xl">
          The latest industry news, interviews, technologies, and resources.
        </span>
      </div>
      <div className="relative">
        <Image
          alt="cover"
          src={
            "https://wallpapers.com/images/hd/blogging-backdrop-8ifwoxtwf7mdg268.jpg"
          }
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-[720px] rounded-2xl"
        />
        <div
          className="h-[316px] absolute bottom-0 left-0 w-full flex rounded-b-2xl"
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)`,
          }}
        >
          <div className="p-8 text-white flex flex-col self-end w-full">
            <div className="flex justify-between items-start cursor-pointer">
              <div className="flex flex-col">
                <span className="text-2xl font-semibold mb-2">
                  Improve your design skills: Develop an "eye" for design
                </span>
                <span className="mb-6 font-light">
                  Tools and trends change, but good design is timeless. Learn
                  how to quickly develop an "eye" for design.
                </span>
              </div>
              <ArrowUpRightIcon width={24} />
            </div>
            <div className="flex items-start justify-between">
              <div className="flex gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Written by</span>
                  <div className="flex items-center justify-center gap-2">
                    <Avatar>
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-semibold">N Duy Long ne</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Published on</span>
                  <span className="text-md font-semibold h-10 content-center">
                    10 April 2025
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold">File under</span>
                <div className="flex gap-2 mt-1">
                  <Badge variant="outline" className="text-white">
                    Design
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewBlock;
