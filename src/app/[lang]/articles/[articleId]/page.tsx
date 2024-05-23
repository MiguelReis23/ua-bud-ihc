import ArticleData from "@/data/articles.json";
import React from "react";
import NotFound from "../../not-found";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/lib/get-dictionary";
import { SiteFooter } from "@/components/site-footer";

export default async function ArticleID({
  params,
}: {
  params: { lang: string; articleId: string };
}) {
  const dictionary = await getDictionary(params.lang);
  const ID = Number(params.articleId);
  const articleID = ArticleData.find((article) => article.id === ID);

  //return nextjs default 404 page if articleID is not found
  if (!articleID) return <NotFound lang={params.lang} />;

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <SiteHeader dictionary={dictionary} />
        <div className="container px-4 py-12 flex-1 max-w-screen-2xl max-w-7-xl mx-auto sm:px-6 lg:px-8">
          <article className="prose prose-gray dark:prose-invert">
            <h1 className="text-4xl font-bold tracking-tight">
              {articleID.title}
            </h1>
            <p className="font-light text-gray-500 mt-4">
              {dictionary.articleSubtitle}
            </p>
            <br />
            <p className="font-light ">{articleID.description}</p>
          </article>
        </div>
        <SiteFooter dictionary={dictionary} />
      </div>
    </>
  );
}
