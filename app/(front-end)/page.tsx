import Image from "next/image";
import Link from "next/link";
import Hero from '@/components/frontend/Hero';
import MarketList from '@/components/frontend/MarketList';
import CategoryList from '@/components/frontend/CategoryList';
import CommunityTraining from '@/components/frontend/CommunityTraining';
export default function Home() {
  return (

    <div className="min-h-screen">
      <Hero />
      <div className="text-white py-8">
        <MarketList/>
        <div className="py-8">
          <CategoryList/>
        </div>

        <div className="py-8">
          <CategoryList/>
        </div>

        <div className="py-8">
          <CategoryList/>
        </div>

        <div className="py-8">
          <CommunityTraining/>
        </div>

      </div>
     
      <h2 className="text-4xl">Ecommerce</h2>
      <Link className="my-4 underline" href="/register-farmer">Become a farmer/vendor/supplier </Link>
    </div>
   
  );
}