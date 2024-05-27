import fs from "fs";
import path from "path";

export async function POST(request) {
  const { service, subject, details, priority, requester } = await request.json();
  const data = fs.readFileSync(
    path.resolve("src", "data", "tickets.json"),
    "utf-8"
  );
  console.log(service)
  const tickets = JSON.parse(data);
  const lastTicketId = tickets[tickets.length - 1].id;

  const newTicket = {
    id: lastTicketId + 1,
    service,
    subject,
    priority,
    date: new Date().toLocaleString("pt-PT"),
    requester,
    responsible: "Emidio Costa",
    status: "Open",
    lastMessage: "Today",
    details,
  };

  tickets.push(newTicket);

  const updatedData = JSON.stringify(tickets, null, 4);
  fs.writeFileSync(path.resolve("src", "data", "tickets.json"), updatedData);

  return Response.json({ status: "updated" });
}
