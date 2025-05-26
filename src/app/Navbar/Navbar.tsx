import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import { redirect } from "next/navigation";
import ShoppingCartButton from "./ShoppingCartButton";
import { getCart } from "@/lib/db/cart";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

async function Navbar() {
  const cart = await getCart();

  return (
    <div className="bg-base-100">
      <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
        <div className="flex-1 ">
          <Link href="/" className="btn btn-ghost text-xl normal-case">
            <Image src={logo} height={40} width={40} alt="Flowmazon-logo" />
            Flowmazon
          </Link>
        </div>
        <form action={searchProducts}>
          <input
            name="searchQuery"
            placeholder="Search"
            className="input input-bordered w-full min-w-[100px]"
          />
        </form>
        <ShoppingCartButton cart={cart} />
      </div>
    </div>
  );
}

export default Navbar;
