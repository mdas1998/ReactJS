"use server";
import fs from "fs/promises";

export const submitAction = async (e) => {
  console.log(e.get("name"), e.get("address"));
  let a = await fs.writeFile(
    "Micheal.txt",
    `Name: ${e.get("name")} and address is ${e.get("address")}`
  );
  console.log(a);
};
