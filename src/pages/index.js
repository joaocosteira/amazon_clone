import { getSession } from "next-auth/react";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {


  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header/>

      <main className="max-w-screen-2xl mx-auto">
        {/** Banner */}
        <Banner/>
        {/** Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context){

  //usado para aquele bug de enquanto está a dar load da session na front end, a navbar 
  //perde o nome do utilizador que fez log in, se tratamos disso no lado do servidor esse
  //problema é resolvido
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    res => res.json()
  )

  return {
    props : { products, session }
  }
}
