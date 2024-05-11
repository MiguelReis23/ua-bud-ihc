import { LandingCarousel } from "@/components/landing-carousel"
import { SiteHeader } from "@/components/site-header"
import { getDictionary } from "@/lib/get-dictionary"
import { LandingCard } from "@/components/landing-card"
import Link from 'next/link'

export default async function Home({ params: { lang } }: { params: { lang: string } }) {

    const dictionary = await getDictionary(lang)

    return (
        <>
            <SiteHeader dictionary={dictionary} />
            <main className="flex-1">
                <LandingCarousel dictionary={dictionary} />
                <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                        <section>
                            <h3 className="text-2xl font-semibold mb-6">Artigos de Ajuda Populares</h3>
                            <LandingCard
                                title="Teste"
                                description="Teste de descrição" />
                            <LandingCard
                                title="Teste2"
                                description="Teste de descrição" />
                            <Link className="block mt-4 text-blue-700 hover:text-blue-500" href="#">
                                {`Ler mais artigos >`}
                            </Link>
                                
                        </section>
                        <section>
                            <h3 className="text-2xl font-semibold mb-6">Últimas Novidades</h3>
                            <LandingCard
                                title="Teste3"
                                description="Teste de descrição" />
                            <LandingCard
                                title="Teste4"
                                description="Teste de descrição" />
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}