import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Product from "@/components/Product";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main  className="font-roboto-condensed">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Footer />
    </main>
  );
}
