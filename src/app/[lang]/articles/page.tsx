import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ArticleCard } from "@/components/article-card"
import { getDictionary } from "@/lib/get-dictionary"
import { SiteHeader } from "@/components/site-header"
import ArticleData from "@/data/articles.json"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

export default async function ArticlePage({ params: { lang }, }: { params: { lang: string }; }) {
    const dictionary = await getDictionary(lang)
    return (
        <>
            <SiteHeader dictionary={dictionary} />
            <main className="flex flex-col items-center py-12">
                <div className="w-full max-w-4xl px-4 md:px-6">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold">{dictionary.articleTitle}</h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
                    {ArticleData.map((article) => (
                        <Link key={article.title} href={`/articles/${article.id}`}>
                        <ArticleCard
                            key={article.title}
                            title={article.title}
                            subtitle={article.subtitle}
                            description={article.description.substring(0, 100)}
                        />
                        </Link>
                    ))}
                </div>
            </main>
            <SiteFooter dictionary={dictionary} />
        </>
    )
};
