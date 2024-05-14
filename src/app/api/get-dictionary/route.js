import { getDictionary } from "@/lib/get-dictionary"

export async function GET(req) {
  const lang = req.nextUrl.searchParams.get('lang');
  if (!lang) {
    return Response.json({ error: 'lang query parameter is required' }, { status: 400 });
  }
  
  const dictionary = await getDictionary(lang);
  return Response.json(dictionary);
}