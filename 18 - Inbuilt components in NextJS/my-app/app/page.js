import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>I am home</h1>
      <Image
        src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
        alt="Hot air balloon"
        width={600}
        height={400}
      />
    </div>
  );
}
