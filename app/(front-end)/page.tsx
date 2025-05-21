import Image from "next/image";
import Link from "next/link";
import Hero from '@/components/frontend/Hero';
import MarketList from '@/components/frontend/MarketList';
import CategoryList from '@/components/frontend/CategoryList';
import CommunityTraining from '@/components/frontend/CommunityTraining';
import Footer from '@/components/frontend/Footer';
import { getData } from "@/lib/getData";
export default async function Home() {
  const categories = await getData('categories') // route to the categories
  return (

    <div className="min-h-screen">
     
      <div className="text-white py-8">
         <Hero />
        <MarketList/>


    {categories.map((category, i) =>
  category.products && category.products.length > 0 ? (
    <div key={i} className="">
      <CategoryList category={category} />
    </div>
  ) : null
)}   


     

        <div className="py-8">
          <CommunityTraining/>
        </div>

        <div className="py-8">
          <Footer/>
        </div>
      </div>
     
      <h2 className="text-4xl">Ecommerce</h2>
      <Link className="my-4 underline" href="/register-farmer">Become a farmer/vendor/supplier </Link>
    </div>
   
  );
}