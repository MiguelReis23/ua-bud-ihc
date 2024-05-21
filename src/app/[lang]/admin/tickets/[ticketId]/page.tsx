"use client";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import NotFound from "../../../not-found";
import { Icons } from "@/components/icons";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { ReceivedMessage } from "@/components/received-message";
import { SentMessage } from "@/components/sent-message";
import { useState, useEffect } from "react";
import { AdminHeader } from "@/components/admin-header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TicketID({
  params,
}: {
  params: { lang: string; ticketId: string };
}) {
  const [ticket, setTicket] = useState({});
  const [priority, setPriority] = useState();
  const [status, setStatus] = useState();

  const [initialPriority, setInitialPriority] = useState();
  const [initialStatus, setInitialStatus] = useState();
  const [hasChanges, setHasChanges] = useState(false);
  const [dictionary, setDictionary] = useState({});

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch("/api/tickets");
      const data = await response.json();
      const foundTicket = data.find((t: any) => t.id == params.ticketId);
      setTicket(foundTicket);
      setPriority(foundTicket.priority);
      setStatus(foundTicket.status);
      setInitialPriority(foundTicket.priority);
      setInitialStatus(foundTicket.status);
    };

    fetchTickets();
  }, []);

  useEffect(() => {
    if (initialPriority !== priority || initialStatus !== status) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [priority, status]);

  useEffect(() => {
    const fetchDictionary = async () => {
      const response = await fetch(`/api/get-dictionary?lang=${params.lang}`);
      const data = await response.json();
      setDictionary(data);
    };
    fetchDictionary();
  }, [params.lang]);

  function handleUpdate() {
    const updatedTicket = {
      id: ticket.id,
      priority,
      status,
    };

    fetch(`/api/tickets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTicket),
    });
    setTicket(updatedTicket);

    setHasChanges(false);
  }

  return (
    <>
      {Object.keys(dictionary).length === 0 ? (
        <></>
      ) : (
        <>
          <AdminHeader dictionary={dictionary} />
          <div className="flex h-screen flex-col container">
            <header className="flex h-16 items-center border-b px-4 md:px-6">
              <Link href="/admin/tickets">
                <Button variant="default">
                  <Icons.back className="mr-1" /> Back
                </Button>
              </Link>
              <div className="flex-1 text-center text-sm font-medium">
                Ticket #{ticket.id}{" "}
              </div>
            </header>
            <main className="flex-1 grid grid-cols-3 gap-6 p-4 md:p-6">
              <div className="col-span-2 space-y-4 border-r pr-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">
                        <b>Subject:</b> {ticket.subject}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        <b>Date:</b>
                        {ticket.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-3">
                      <p className="font-medium">
                        <b>Priority:</b>
                      </p>
                      <Select onValueChange={(value) => setPriority(value)}>
                        <SelectTrigger className="w-30">
                          <SelectValue placeholder={ticket.priority} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1 - High">1 - High</SelectItem>
                          <SelectItem value="2 - Medium">2 - Medium</SelectItem>
                          <SelectItem value="3 - Low">3 - Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className="font-medium">
                        <b>Status:</b>
                      </p>
                      <Select onValueChange={(value) => setStatus(value)}>
                        <SelectTrigger className="w-30">
                          <SelectValue placeholder={ticket.status} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Open">Open</SelectItem>
                          <SelectItem value="In progress">
                            In Progress
                          </SelectItem>
                          <SelectItem value="Closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <p className="font-medium">
                        <b>Requester:</b>
                      </p>
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage alt="Avatar" src="/KC.jpg" />
                          <AvatarFallback>KC</AvatarFallback>
                        </Avatar>
                        <p className="text-sm font-medium">
                          {ticket.requester}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <div className="h-[300px] overflow-auto border p-2">
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
                      <p className="text-sm font-medium">
                        {ticket.responsible}
                      </p>
                      <p className="text-xs font-medium">Ticket Handler</p>
                    </div>
                  </div>
                  <ToastContainer style={{ marginTop: "50px" }} />
                  <div className="space-x-2">
                    <Button
                      variant="default"
                      onClick={() => {
                        toast("Ticket has been updated");
                        handleUpdate();
                      }}
                      disabled={!hasChanges}
                    >
                      Update
                    </Button>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Conversation</h2>
                <div className="flex flex-col space-y-4 overflow-y-auto">
                  <SentMessage
                    message="Hi, I'm sorry to hear you're having trouble. Can you please provide more details about the issue you're facing?"
                    timestamp="May 9, 2024 at 10:35 AM"
                    avatarSrc="/EC.jpg"
                    avatarFallback="EC"
                  />
                  <ReceivedMessage
                    message="I'm having trouble with the app. It keeps crashing whenever I try to open it."
                    timestamp="May 9, 2024 at 10:37 AM"
                    avatarSrc="/KC.jpg"
                    avatarFallback="KC"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Textarea
                    className="flex-1"
                    placeholder="Type your message..."
                  />
                  <Button>Send</Button>
                </div>
              </div>
            </main>
          </div>
        </>
      )}
    </>
  );
}
