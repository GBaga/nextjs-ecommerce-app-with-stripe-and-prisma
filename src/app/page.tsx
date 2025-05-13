// "use client";

import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div>
      {/* <h1 className="bg-red-400 mb-5">Hello</h1> */}
      {/* <ProductCard product={products[0]} /> */}

      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content items-start flex-col lg:flex-row lg:items-center">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={400}
            height={800}
            className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{products[0].name}</h1>
            <p className="line-clamp-3 py-6">{products[0].description}</p>
            <Link
              href={"/products/" + products[0].id}
              className="btn btn-primary"
            >
              Check it out
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* <ProductCard product={products[0]} /> */}
        {products.slice(1).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
