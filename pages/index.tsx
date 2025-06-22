import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Home from "@/components/home/Home";

type Product = {
  id: number;
  title: string;
  image: string;
  productName: string;
  price: string;
  colorName: string;
  color: string;
  size: string;
  textureExplain?: string;
  detailImages: {
    id: number;
    image: string;
  }[];
};

type Props = {
  products: Product[];
};

export default function IndexPage({ products }: Props) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visitedOnce");

    if (!hasVisited) {
      // sessionStorage.setItem("visitedOnce", "true");
      router.replace("/onboarding/splash");
    } else {
      setIsReady(true);
    }
  }, [router]);

  if (!isReady) return null;

  return <Home products={products} />;
}

export async function getServerSideProps() {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${baseURL}/products`);
    if (!res.ok) throw new Error("Failed to fetch products");

    const products = await res.json();

    return {
      props: {
        products,
      },
    };
  } catch (err) {
    console.error("getServerSideProps error:", err);
    return {
      props: {
        products: [],
      },
    };
  }
}
