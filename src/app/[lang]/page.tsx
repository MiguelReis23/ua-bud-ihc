import { LandingCarousel } from "@/components/landing-carousel"
import { SiteHeader } from "@/components/site-header"
import { getDictionary } from "@/lib/get-dictionary"

export default async function Home({ params: { lang } }: { params: { lang: string } }) {

    const dictionary = await getDictionary(lang)

    return (
        <>
            <SiteHeader dictionary={dictionary} />
            <main className="flex-1">
                <LandingCarousel dictionary={dictionary} />
            </main>
        </>
    )
}