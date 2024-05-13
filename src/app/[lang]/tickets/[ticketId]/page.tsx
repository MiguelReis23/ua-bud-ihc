import Link from 'next/link'
import { SiteHeader } from "@/components/site-header"
import { getDictionary } from "@/lib/get-dictionary"
import { Textarea } from "@/components/ui/textarea"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import TicketsData from "@/data/tickets.json"
import NotFound from "../../not-found"
import { Icons } from "@/components/icons"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { ReceivedMessage } from "@/components/received-message"
import { SentMessage } from "@/components/sent-message"


export default async function TicketID({params}:{params: {lang: string, ticketId: string}}) {
    const dictionary = await getDictionary(params.lang);

    const ID = Number(params.ticketId)
    const ticket = TicketsData.find(ticket => ticket.id === ID)
    
    if (!ticket) {
        return <NotFound />
    }
  return (
    <>
    <SiteHeader dictionary={dictionary} />
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-16 items-center border-b border-gray-200 px-4 md:px-6 dark:border-gray-800">
      <Link href="/tickets">
        <Button variant="default">
          <Icons.back className="mr-1" /> Back
        </Button>
      </Link>
        <div className="flex-1 text-center text-sm font-medium">Ticket #{ticket.id} </div>
      </header>
      <main className="flex-1 grid grid-cols-3 gap-6 p-4 md:p-6">
        <div className="col-span-2 space-y-4 border-r border-gray-200 pr-6 dark:border-gray-800">
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400"><b>Subject:</b> {ticket.subject}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 dark:text-gray-400"><b>Date:</b>{ticket.date}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center space-x-3">
                <p className="text-gray-500 dark:text-gray-400"><b>Priority:</b></p>
                <Select value={ticket.priority} disabled>
                  <SelectTrigger className="w-30">
                    <SelectValue placeholder= "Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1 - High">1 - High</SelectItem>
                    <SelectItem value="2 - Medium">2 - Medium</SelectItem>
                    <SelectItem value="3 - Low">3 - Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-gray-500 dark:text-gray-400"><b>Status:</b></p>
                <Select value={ticket.status} disabled>
                  <SelectTrigger className="w-30">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Open">Open</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <p className="text-gray-500 dark:text-gray-400"><b>Requester:</b></p>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage alt="Avatar" src="/KC.jpg"></AvatarImage>
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium">{ticket.requester}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
          <div className="space-y-2">
            <div className="h-[300px] overflow-auto border border-gray-200 p-2 dark:border-gray-800">
              {ticket.details}
            </div>
          </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage alt="Avatar" src="/EC.jpg" />
                <AvatarFallback>EC</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{ticket.responsible}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Ticket Handler</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Conversation</h2>
          <div className="flex flex-col space-y-4 overflow-y-auto">
            <ReceivedMessage message="Hi, I'm sorry to hear you're having trouble. Can you please provide more details about the issue you're facing?" 
            timestamp="May 9, 2024 at 10:35 AM" 
            avatarSrc="/EC.jpg" 
            avatarFallback="EC" />
            <SentMessage message="I'm having trouble with the app. It keeps crashing whenever I try to open it."
            timestamp="May 9, 2024 at 10:37 AM"
            avatarSrc="/KC.jpg"
            avatarFallback="KC" />
          </div>
          <div className="flex items-center space-x-2">
            <Textarea className="flex-1" placeholder="Type your message..." />
            <Button>Send</Button>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}
