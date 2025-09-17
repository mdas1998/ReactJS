"use client"

import { Langar } from "next/font/google";
import { useParams } from "next/navigation";

export default function Page() {
  // throw new error("Error hai nigga")
  const params = useParams(); // gives you route params like slug
  console.log(params);
  let languages = ["python", "c#", "java", "javascript"]
  if(languages.includes(params.slug)) {
    return <p>Post: {params.slug}</p>;
  }
  else {
    return <div>Post not found</div>
  }
}
