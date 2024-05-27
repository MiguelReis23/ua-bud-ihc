import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "next/link";

export default async function NotFound(params: { lang: any }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <SiteHeader dictionary={dictionary} />
      <div className="container flex-1 max-w-screen-2xl max-w-7-xl mx-auto py-8">
        <h2>Not Found</h2>
        <p>Could not find requested page.</p>
        <Link className="block mt-4 text-blue-700 hover:text-blue-500" href="/">
          {`Go back to home >`}
        </Link>
      </div>
    </>
  );
}
