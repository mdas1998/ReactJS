"use client"

import Image from "next/image";
import { POST } from "./api/add/route";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Micheal",
      age: 27,
      role: "Coder"
    }
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    console.log(res);
  };
  return (
    <div>
      <h1>Next JS API Routes Demo</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
