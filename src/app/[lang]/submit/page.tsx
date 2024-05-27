import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/lib/get-dictionary";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home(params: { lang: string }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader dictionary={dictionary} />
      <main className="flex-1 flex justify-center items-center flex-col">
        <Icons.send width={400} height={400} />
        <p className="mt-4 text-center text-2xl font-bold">Success!</p>
        <p className="mt-2 text-center mb-4">
          Ticket sent, you will be notified once there&apos;s an update
        </p>
        <Link href={`/${dictionary.locale}/tickets`}>
          <Button variant="secondary">
            <Icons.history className="mr-2" />{" "}
            {dictionary.myTickets.toUpperCase()}
          </Button>
        </Link>{" "}
      </main>
    </div>
  );
}
