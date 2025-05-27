import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add Product - E-commerce",
};

async function addProduct(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  return (
    <div>
      <h1 className=" text-lg mb-3 font-bold">Add Product</h1>

      <form action={addProduct} className="w-full">
        <input
          required
          name="name"
          type="text"
          placeholder="Name"
          className="input mb-3 w-full "
        />
        <textarea
          required
          name="description"
          placeholder="description"
          id=""
          className="textarea mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          type="url"
          placeholder="Image URL"
          className="input mb-3 w-full "
        />
        <input
          required
          name="price"
          type="number"
          placeholder="Price"
          className="input mb-3 w-full "
        />

        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
}
