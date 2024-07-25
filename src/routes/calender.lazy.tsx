import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { formatDate } from "../common/functions";

export const Route = createLazyFileRoute("/calender")({
  component: Calender,
});

function Calender() {
  const [selected, setSelected] = useState<Date>(new Date());
  console.log(`${formatDate(new Date(selected))}`);
  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="bg-[#d8d7d9] flex flex-col gap-2 rounded-3xl w-[40%] max-w-[380px] items-center">
        <div className="w-full flex flex-col p-6 pb-0 pl-1">
          <div className="flex justify-start text-sm text-gray-700 font-medium">
            <div className="ml-9">Select Date</div>
          </div>
          <div className="w-full pt-2 pl-8 flex justify-between items-center">
            <h1 className="text-3xl font-medium">
              {formatDate(new Date(selected))}
            </h1>
          </div>
        </div>
        <div className="w-full border-b-2 border-b-[#cac4d0]" />
        <DayPicker
          captionLayout="dropdown-years"
          required
          mode="single"
          selected={selected}
          onSelect={setSelected}
          className="p-4 pt-0 min-w-max"
          classNames={{
            weekdays: `${defaultClassNames.weekdays} text-xl`,
            week: `text-base`,
            month_caption: `${defaultClassNames.month_caption} items-center mx-2`,
            caption_label: "text-lg",
            nav: `${defaultClassNames.nav} p-0`,
            chevron: `${defaultClassNames.chevron} w-[18px] h-[18px]`,
          }}
          footer={
            <div className="mt-2 flex justify-end gap-x-4 text-blue-800 font-medium text-base">
              <button className="footer-btn">Cancel</button>
              <button className="footer-btn">OK</button>
            </div>
          }
        />
      </div>
    </div>
  );
}
