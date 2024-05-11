import { LandingCarousel } from "@/components/landing-carousel"
import { AdminHeader } from "@/components/admin-header"
import { getDictionary } from "@/lib/get-dictionary"

export default async function Home({ params: { lang } }: { params: { lang: string } }) {

    const dictionary = await getDictionary(lang)

    return (
        <>
            <AdminHeader dictionary={dictionary} />
            <main className="flex-1">
                <LandingCarousel dictionary={dictionary} />
            </main>
        </>
    )
}