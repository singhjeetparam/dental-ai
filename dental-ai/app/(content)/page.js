import Image from "next/image";
import { Hero, Features, Testimonials } from "@/components/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
}
