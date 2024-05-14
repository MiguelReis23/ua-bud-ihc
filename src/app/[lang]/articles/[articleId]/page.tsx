import ArticleData from "@/data/articles.json"
import React from "react"
import NotFound from "../../not-found"
import { SiteHeader } from "@/components/site-header"
import { getDictionary } from "@/lib/get-dictionary"


export default async function TicketID({params}:{params: {lang:string, articleId: string}}) {
    const dictionary = await getDictionary(params.lang)
    const ID = Number(params.articleId)
    const articleID = ArticleData.find(article => article.id === ID)
    
    //return nextjs default 404 page if articleID is not found
    if (!articleID) return <NotFound lang={params.lang} />

    return (
    <>
        <SiteHeader dictionary={dictionary}/>
        <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <article className="prose prose-gray dark:prose-invert">
            <h1 className="text-4xl font-bold tracking-tight">{articleID.title}</h1>
            <p className="font-light">By Luis Gouveia | May 3, 2013</p>
            <p className="font-medium ">
                {articleID.description}
            </p>
        </article>
        </div>
    </>
    )
}