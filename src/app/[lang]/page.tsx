import { LandingCarousel } from "@/components/landing-carousel";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/lib/get-dictionary";
import { LandingCard } from "@/components/custom-card";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import ArticleData from "@/data/articles.json";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <SiteHeader dictionary={dictionary} />
      <main>
        <LandingCarousel dictionary={dictionary} />
        <div className="container flex-1 max-w-screen-2xl max-w-7-xl mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
            <section>
              <h3 className="text-2xl font-semibold mb-6">
                Artigos de Ajuda Populares
              </h3>
              {ArticleData.slice(0, 3).map((article) => (
                <Link key={article.title} href={`/articles/${article.id}`}>
                  <LandingCard
                    key={article.title}
                    title={article.title}
                    description={article.subtitle}
                  />
                </Link>
              ))}
              <Link
                className="block mt-4 text-blue-700 hover:text-blue-500"
                href="/articles"
              >
                {dictionary.seeAllArticles}
              </Link>
            </section>
            <section>
              <h3 className="text-2xl font-semibold mb-6">
                {dictionary.lastNews}
              </h3>
              <Link href="https://www.ua.pt/pt/noticias/11/86598">
                <LandingCard
                  title="Curso de Medicina com parecer favorável da Comissão de Avaliação Externa"
                  description="17 maio 2024"
                />
              </Link>
              <Link href="https://www.ua.pt/pt/noticias/11/86493">
                <LandingCard
                  title="António Raminhos abre Conferência Saúde e Bem-estar"
                  description="06 maio 2024"
                />
              </Link>
              <Link
                className="block mt-4 text-blue-700 hover:text-blue-500"
                href="https://www.ua.pt/pt/noticias"
              >
                {dictionary.seeAllNews}
              </Link>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter dictionary={dictionary} />
    </>
  );
}
