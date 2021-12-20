//Optinal 1b: fetch products on the server side

// but with Incremental Static Regeneration(in getStaticProps)
// import Head from "next/head";
// import Link from "next/link";
// import Title from "../components/Title";
import Page from "../components/Page";
import { getProducts } from "../lib/products";
import ProductCard from "../components/ProductCard";

export async function getStaticProps() {
  console.log("[HomePage] getStaticProps");
  const products = await getProducts();

  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS), //second
  };
}

function HomePage({ products }) {
  console.log("[HomePage] render:", products);
  return (
    <Page title="Indoor Plants">
     
        <ul className="grid grid-cpls-1 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
    </Page>
  );
}

export default HomePage;
