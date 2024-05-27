import { AdminHeader } from "@/components/admin-header";
import { SiteFooter } from "@/components/site-footer";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "next/link";

import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { taskSchema } from "@/data/tasksSchema";
import { columns } from "@/components/ui/columns";
import { DataTable } from "@/components/ui/data-table";
import { use, useEffect } from "react";

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/data/tickets.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function Tickets({
  params: { lang },
}: {
  params: { lang: any };
}) {
  const dictionary = await getDictionary(lang);

  const tasks = await getTasks();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <AdminHeader dictionary={dictionary} />
        <main className="container max-w-screen-2xl flex flex-1 flex-col items-center py-12">
          <div className="w-full px-4 md:px-6">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold">{dictionary.myTickets}</h1>
            </div>
          </div>
          <DataTable data={tasks} columns={columns} isAdmin={true} />
        </main>
        <SiteFooter dictionary={dictionary} />
      </div>
    </>
  );
}
