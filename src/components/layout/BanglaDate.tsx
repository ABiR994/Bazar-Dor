"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const getDate = () =>
  new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  });

export default function BanglaDate() {
  const date = useSyncExternalStore(subscribe, getDate, () => "");
  return <span className="block h-4 truncate text-[11px] text-gray-500 sm:text-xs">{date}</span>;
}
