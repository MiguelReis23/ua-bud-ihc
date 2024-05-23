import fs from "fs";
import path from "path";

export async function GET() {
	const data = fs.readFileSync(path.resolve('src', 'data', 'services.json'), 'utf-8');
	const services = JSON.parse(data);
	return Response.json(services);
}