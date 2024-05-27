import { SiteHeader } from "@/components/site-header";
import { CardWithIcon } from "@/components/custom-card";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import ServiceData from "@/data/services.json";
import { Icons } from "@/components/icons";
import NotFound from "../../not-found";

export default async function Home({
  params,
}: {
  params: { lang: any; serviceID: Number };
}) {
  const dictionary = await getDictionary(params.lang);
  const ID = Number(params.serviceID);
  const serviceID = ServiceData.find((service) => service.id === ID);
  const categories = serviceID?.categories;

  if (!ID) return <NotFound lang={params.lang} />;

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader dictionary={dictionary} />
      <main className="flex-1">
        <div className="flex-1 w-full py-5">
          <h1 className="text-4xl text-center font-bold text-gray-900 dark:text-gray-100">
            {
              // @ts-ignore
              serviceID.name
            }
          </h1>
        </div>
        <div className="flex justify-center space-x-20">
          <Link href={`/${params.lang}/new-ticket`}>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black dark:bg-black dark:text-white border-2 border-black dark:border-white">
                <h1 className="text-xl">1</h1>
              </div>
              <span className="mt-1 font-medium">Sevice</span>
            </div>
          </Link>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white dark:bg-white dark:text-black">
              <h1 className="text-xl">2</h1>
            </div>
            <span className="mt-1 font-medium">Category</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black dark:bg-black dark:text-white border-2 border-black dark:border-white">
              <h1 className="text-xl">3</h1>
            </div>
            <span className="mt-1 font-medium">Details</span>
          </div>
        </div>
        <div className="container flex-1 max-w-screen-2xl max-w-7-xl mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
            {
              // @ts-ignore
              categories.map((category, index) => {
                // @ts-ignore
                const Icon = Icons[category.icon];
                return (
                  <Link
                    // @ts-ignore
                    href={`/${params.lang}/new-ticket/${serviceID.id}/${category.id}`}
                    key={index}
                  >
                    <CardWithIcon
                      title={category.name}
                      description={category.description}
                      icon={Icon ? <Icon size={48} /> : ""}
                    />
                  </Link>
                );
              })
            }
          </div>
        </div>
      </main>
      <SiteFooter dictionary={dictionary} />
    </div>
  );
}
