"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

export default function RedirectNotice() {
  useEffect(() => {
    toast("এই পেজ দেখতে আগে সাইন ইন করুন", { id: "auth-required", icon: "🔒" });
  }, []);

  return null;
}
