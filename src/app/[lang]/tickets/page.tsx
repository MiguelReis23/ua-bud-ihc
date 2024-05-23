import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/lib/get-dictionary";
import { Icons } from "@/components/icons";
import TicketsData from "@/data/tickets.json";
import Link from "next/link";

import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { taskSchema } from "@/data/tasksSchema";
import { columns } from "@/components/ui/columns";
import { DataTable } from "@/components/ui/data-table";

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function Tickets({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const ticketInfo = TicketsData.map((ticket, index) => ({
    id: ticket.id,
    subject: ticket.subject,
    priority: ticket.priority,
    date: ticket.date,
    requester: ticket.requester,
    responsible: ticket.responsible,
    status: ticket.status,
    lastMessage: ticket.lastMessage,
  }));

  const dictionary = await getDictionary(lang);

  const tasks = await getTasks();

  return (
    <>
      <SiteHeader dictionary={dictionary} />
      <main className="flex flex-col items-center h-screen py-12 container">
        <div className="w-full px-4 md:px-6">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold">{dictionary.myTickets}</h1>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </main>
    </>
  );
}
