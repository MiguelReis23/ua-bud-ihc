import { getDictionary } from "@/lib/get-dictionary"

export default async function Home({ params: { lang } } : { params: { lang: string } }) {

    const dictionary = await getDictionary(lang)

    return(
        <h1>Hello {dictionary.test}</h1>
    )
}