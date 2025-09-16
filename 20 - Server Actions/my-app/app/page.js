"use client"
import {submitAction} from "./actions/form"
import { useRef } from "react";


export default function Home() {
  let ref = useRef()
  return (
    <form ref={ref} className="flex flex-col gap-10  w-2/4 mx-auto my-20 text-white text-xl" action={(e) => {submitAction(e); ref.current.reset()}}>
      <div className="w-2/3 mx-auto">
        <label htmlFor="name">Name</label>
        <input id="name" name="name"  type="text" />
      </div>
      <div className="w-2/3 mx-auto">
        <label htmlFor="address">Address</label>
        <input id="address" name="address"   type="text" />
      </div>
      <div className="w-2/3 mx-auto">
      <button className="border border-white" type="submit">Submit</button>
      </div>
    </form>
  );
}
