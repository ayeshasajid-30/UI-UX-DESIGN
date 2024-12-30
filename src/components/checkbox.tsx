"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const checkboxColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-black",
];

export function CheckboxDemo() {
  return (
  <div>
       <h1 className="text-xl font-bold pl-5">Colors</h1>
      <div className="flex flex-wrap gap-1 px-5 mt-2">
        
        {checkboxColors.map((color, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox
              id={`checkbox-${index}`}
              className={`h-[37px] w-[37px] rounded-full ${color}`}
            />
            <label
              htmlFor={`checkbox-${index}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
          
            </label>
          </div>
        ))}
      </div>
  </div>
  );
}