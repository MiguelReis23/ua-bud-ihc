import { SiteHeader } from '@/components/site-header'
import { getDictionary } from '@/lib/get-dictionary'
import Link from 'next/link'

 
export default async function NotFound(params: {lang: string}) {
  const dictionary = await getDictionary(params.lang)

  return (
    <>
      <SiteHeader dictionary={dictionary} />
      <div>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </>
  )
}