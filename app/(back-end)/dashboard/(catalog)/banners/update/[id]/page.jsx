
import FormHeader from '@/components/backoffice/FormHeader';
import {getData} from "@/lib/getData";
import NewBannerForm from '@/components/backoffice/forms/NewBannerForm';
export default async function updateBanner({ params }) {
  const { id } = params;
  const banner = await getData(`/banners/${id}`);

  return (
    <div>
      <FormHeader title="Update Banners" />
      <NewBannerForm updateData={banner} />
    </div>
  );
}
