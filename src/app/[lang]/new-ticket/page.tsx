import { SiteHeader } from "@/components/site-header";
import { LandingCard } from "@/components/landing-card";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <SiteHeader dictionary={dictionary} />
      <main className="">
        <div className="container flex-1 max-w-screen-2xl max-w-7-xl mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
            <LandingCard title="Teste" description="Teste de descrição" />
            <LandingCard title="Teste2" description="Teste de descrição" />
            <LandingCard title="Teste2" description="Teste de descrição" />
          </div>
        </div>
      </main>
      <SiteFooter dictionary={dictionary} />
    </>
  );
}
