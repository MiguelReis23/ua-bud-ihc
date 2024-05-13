import fs from 'fs';
import path from 'path';

export function GET() {
	const data = fs.readFileSync(path.resolve('src', 'data', 'tickets.json'), 'utf-8');
	const tickets = JSON.parse(data);
	return Response.json(tickets);
}

export async function POST(request) {
	const { id, priority, status } = await request.json();
	const data = fs.readFileSync(path.resolve('src', 'data', 'tickets.json'), 'utf-8');

	const tickets = JSON.parse(data);
	const ticketIndex = tickets.findIndex(t => t.id === id);

	if (ticketIndex === -1) return Response.json({ status: 'not found' });

	if (priority) tickets[ticketIndex].priority = priority;
	if (status) tickets[ticketIndex].status = status;

	const updatedData = JSON.stringify(tickets, null, 4);
	fs.writeFileSync(path.resolve('src', 'data', 'tickets.json'), updatedData);

	return Response.json({ status: 'updated' });
}