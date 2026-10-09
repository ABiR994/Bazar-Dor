"use client";

import { useState } from "react";
import Image from "next/image";

export default function Avatar({
  name,
  image,
  size = 32,
}: {
  name: string;
  image?: string | null;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);

  if (image && !failed) {
    return (
      <Image
        src={image}
        alt=""
        width={size}
        height={size}
        unoptimized
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        style={{ width: size, height: size }}
        className="shrink-0 rounded-full object-cover"
      />
    );
  }

  return (
    <span
      aria-hidden
      style={{ width: size, height: size }}
      className="grid shrink-0 place-items-center rounded-full bg-brand-soft font-semibold text-brand-dark"
    >
      {name.trim().charAt(0).toUpperCase()}
    </span>
  );
}