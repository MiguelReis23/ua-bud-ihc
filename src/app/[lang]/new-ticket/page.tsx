import { SiteHeader } from "@/components/site-header";
import { CardWithIcon } from "@/components/custom-card";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import {
  AtSign,
  Globe,
  Video,
  GraduationCap,
  FileQuestion,
  Network,
  UserRound,
  Headset,
  Wrench,
} from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

export default async function Home({ params: { lang }, }: { params: { lang: string }; }) {
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
          <Link href={`/${lang}/new-ticket-users-category`}>
            <CardWithIcon
              title="Email"
              description="Web content hosting platform for projects, partnerships, UCs and personal pages."
              icon={<AtSign size={48} />}
            />
            </Link>
            <CardWithIcon
              title="Web Hosting"
              description="Web content hosting platform for projects, partnerships, UCs and personal pages."
              icon={<Globe size={48} />}
            />
            <CardWithIcon
              title="Audiovisual"
              description="Installation of equipment, management of the Educast platform and support for audiovisual productions."
              icon={<Video size={48} />}
            />
            <Link href={`/${lang}/new-ticket-elearning-category`}>
              <CardWithIcon
                title="E-Learning"
                description="Manage areas and users of the support platform for distance learning."
                icon={<GraduationCap size={48} />}
              />
            </Link>
            <CardWithIcon
              title="Online Surveys"
              description="Service to create forms and surveys for data collection within the scope of projects."
              icon={<FileQuestion size={48} />}
            />
            <Link href={`/${lang}/new-ticket-network-category`}>
              <CardWithIcon
                title="Communication Networks"
                description="Departmental data communications service, internet access, through wired and wireless network."
                icon={<Network size={48} />}
              />
            </Link>
              <CardWithIcon
                title="User Management"
                description="Management of the electronic identity of the academic community users: personal data"
                icon={<UserRound size={48} />}
              />
            <CardWithIcon
              title="Helpdesk"
              description="Technical support for face-to-face or video-call assistance."
              icon={<Headset size={48} />}
            />
            <CardWithIcon
              title="Report an Incident"
              description="Request assistance for a security, performance, or availability issue."
              icon={<Wrench size={48} />}
            />
          </div>
        </div>
      </main>
      <SiteFooter dictionary={dictionary} />
    </div>
  );
}
