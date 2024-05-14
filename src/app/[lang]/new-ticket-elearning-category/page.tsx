import { SiteHeader } from "@/components/site-header";
import { CardWithIcon } from "@/components/custom-card";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { Plus, Waypoints } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader dictionary={dictionary} />
      <main className="flex-1">
        <div className="flex-1 w-full py-5">
          <h1 className="text-4xl text-center font-bold text-gray-900 dark:text-gray-100">
            New Ticket
          </h1>
        </div>
        <div className="flex justify-center space-x-20">
          <Link href={`/${lang}/new-ticket`}>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Link href={`/${lang}/new-ticket-elearning-details`}>
              <CardWithIcon
                title="Create an area in Moodle"
                description="Creation and configuration of virtual learning spaces."
                icon={<Plus size={48} />}
              />
            </Link>
            <CardWithIcon
              title="Associate user to area in Moodle"
              description="Creation and configuration of virtual learning spaces."
              icon={<Waypoints size={48} />}
            />
          </div>
        </div>
      </main>
      <SiteFooter dictionary={dictionary} />
    </div>
  );
}
