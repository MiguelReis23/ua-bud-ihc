import { getDictionary } from "@/lib/get-dictionary"

export default async function handler(req, res) {
  const lang = req.query.lang;
  const dictionary = getDictionary(lang);
  res.status(200).json(dictionary);
}