import Image from "next/image";
import Link from "next/link";
import Hero from '@/components/frontend/Hero';
import MarketList from '@/components/frontend/MarketList';

export default function Home() {
  return (

    <div className="min-h-screen">
      <Hero />
      <MarketList/>
      <h2 className="text-4xl">Ecommerce</h2>
      <Link className="my-4 underline" href="/register-farmer">Become a farmer/vendor/supplier </Link>
    </div>
   
  );
}