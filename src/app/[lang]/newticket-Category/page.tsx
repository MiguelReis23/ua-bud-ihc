import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/lib/get-dictionary";
import React from "react";
import Link from "next/link";
import pt from "../dictionaries/pt.json";
import { CircleLine } from "../../../components/ui/circle";
import Footer from "../../../components/footer";
import { LandingCard } from "../../../components/landing-card";

export default async function newTicket({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  const cards = Array.from({ length: 9 }, (_, i) => ({
    title: (pt as { [key: string]: string })[`title${i + 1}`],
    description: (pt as { [key: string]: string })[`description${i + 1}`],
  }));

  return (
    <>
      <SiteHeader dictionary={dictionary} />
      <main className="flex-1">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center">
          {pt.newTicket}
        </h1>
        <CircleLine activeCircle={1} />

        <Footer className="flex justify-between items-center p-4">
          <Link
            href="/newticket-Service"
            className="bg-gray-500 text-white rounded px-2 py-1 cursor-pointer"
          >
            {pt.previous}
          </Link>

          <Link
            href="/newticket-Category"
            className="bg-gray-500 text-white rounded px-2 py-1 cursor-pointer"
          >
            {pt.next}
          </Link>
        </Footer>
      </main>
    </>
  );
}
