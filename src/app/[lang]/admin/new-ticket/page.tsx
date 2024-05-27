import { AdminHeader } from "@/components/admin-header";
import { CardWithIcon } from "@/components/custom-card";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { Icons } from "@/components/icons";
import { Separator } from "@radix-ui/react-separator";
import {
  AtSign,
  UserPlus,
  Globe,
  Forward,
  MailX,
  KeyRound,
  Video,
  GraduationCap,
  FileQuestion,
  Network,
  UserRound,
  Headset,
  Wrench,
} from "lucide-react";
import ServiceData from "@/data/services.json";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader dictionary={dictionary} />
      <main className="flex-1">
        <div className="flex-1 w-full py-5">
          <h1 className="text-4xl text-center font-bold text-gray-900 dark:text-gray-100">
            New Ticket
          </h1>
        </div>
        <div className="flex justify-center space-x-20">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white dark:bg-white dark:text-black">
              <h1 className="text-xl">1</h1>
            </div>
            <span className="mt-1 font-medium">Service</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black dark:bg-black dark:text-white border-2 border-black dark:border-white">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ServiceData.map((service, index) => {
              const Icon = Icons[service.icon];
              return (
                <Link
                  href={`/${lang}/admin/new-ticket/${service.id}`}
                  key={index}
                >
                  <CardWithIcon
                    title={service.name}
                    description={service.description}
                    icon={Icon ? <Icon size={48} /> : ""}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <SiteFooter dictionary={dictionary} />
    </div>
  );
}
