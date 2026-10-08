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

export default function BanglaDate({ className = "" }: { className?: string }) {
  const date = useSyncExternalStore(subscribe, getDate, () => "");
  return <span className={`empty:invisible ${className}`}>{date}</span>;
}
