import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/lib/get-dictionary"
import { Icons } from "@/components/icons";
import TicketsData from "@/data/tickets.json";
import Link from "next/link";

export default async function Tickets({ params: { lang } }: { params: { lang: string } }) {
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

  const dictionary = await getDictionary(lang)

  return (
    <>
      <SiteHeader dictionary={dictionary} />
      <main className="flex flex-col items-center h-screen py-12">
        <div className="w-full max-w-4xl px-4 md:px-6">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              MyTickets
            </h1>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="w-full">
              <div className="grid grid-cols-7 gap-4 bg-gray-200 dark:bg-gray-800">
                <div className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </div>
                <div className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Priority
                  <Icons.arrowupdown className="w-6 h-4 inline-block" />
                </div>
                <div className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Date
                  <Icons.arrowupdown className="w-6 h-4 inline-block" />
                </div>
                <div className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Requester
                </div>
                <div className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Responsible
                </div>
                <div className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Status
                </div>
                <div className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Last Message
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {ticketInfo
                .filter(ticket => ticket.requester === "Kushwaha Chopra")
                .map((ticket, index) => (
                  <Link href={`/tickets/${ticket.id}`}>
                    <div
                      key={ticket.id}
                      className={`grid grid-cols-7 gap-4 ${
                        index % 2 === 0
                          ? "bg-gray-100 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                          : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600"
                      }`}
                    >
                      <div className="px-4 py-4">{ticket.subject}</div>
                      <div className="px-4 py-3">{ticket.priority}</div>
                      <div className="px-4 py-3">{ticket.date}</div>
                      <div className="px-4 py-3">{ticket.requester}</div>
                      <div className="px-4 py-3">{ticket.responsible}</div>
                      <div className="px-4 py-3">{ticket.status}</div>
                      <div className="px-4 py-3">{ticket.lastMessage}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
