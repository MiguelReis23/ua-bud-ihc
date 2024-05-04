import { Locale, getDictionary } from "@/lib/get-dictionary"

type Props = {
    params: {
        lang: Locale
    }
}

export default async function Home({ params: { lang } }: Props) {

    const intl = await getDictionary(lang)

    return(
        <h1>Hello {intl.test}</h1>
    )
}