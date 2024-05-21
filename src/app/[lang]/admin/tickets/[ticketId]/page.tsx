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
    }).then(() => {
    setHasChanges(false);
    setInitialPriority(priority);
    setInitialStatus(status);
    });
  }

  function getPriority() {
    if (ticket.priority === "1 - High") {
      return dictionary.ticketHighPriority;
    } else if (ticket.priority === "2 - Medium") {
      return dictionary.ticketMediumPriority;
    } else if (ticket.priority === "3 - Low") {
      return dictionary.ticketLowPriority;
    }
  }

  function getStatus() {
    if (ticket.status === "Open") {
      return dictionary.ticketStatusOpen;
    } else if (ticket.status === "In progress") {
      return dictionary.ticketStatusInProgress;
    } else if (ticket.status === "Closed") {
      return dictionary.ticketStatusClosed;
    }
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
                  <Icons.back className="mr-1" /> {dictionary.back}
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
                        <b>{dictionary.ticketSubject}:</b> {ticket.subject}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        <b>{dictionary.ticketDate}:</b>
                        {ticket.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-3">
                      <p className="font-medium">
                        <b>{dictionary.ticketPriority}:</b>
                      </p>
                      <Select onValueChange={(value) => setPriority(value)}>
                        <SelectTrigger className="w-30">
                          <SelectValue placeholder={getPriority()} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1 - High">{dictionary.ticketHighPriority}</SelectItem>
                          <SelectItem value="2 - Medium">{dictionary.ticketMediumPriority}</SelectItem>
                          <SelectItem value="3 - Low">{dictionary.ticketLowPriority}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className="font-medium">
                        <b>Status:</b>
                      </p>
                      <Select onValueChange={(value) => setStatus(value)}>
                        <SelectTrigger className="w-30">
                          <SelectValue placeholder= {getStatus()} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Open">{dictionary.ticketStatusOpen}</SelectItem>
                          <SelectItem value="In progress">
                            {dictionary.ticketStatusInProgress}
                          </SelectItem>
                          <SelectItem value="Closed">{dictionary.ticketStatusClosed}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <p className="font-medium">
                        <b>{dictionary.ticketRequester}:</b>
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
                      <p className="text-xs font-medium">{dictionary.ticketHandler}</p>
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
                      {dictionary.ticketUpdate}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">{dictionary.ticketConversation}</h2>
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
                    placeholder={dictionary.ticketTypeMessage}
                  />
                  <Button>{dictionary.ticketSend}</Button>
                </div>
              </div>
            </main>
          </div>
        </>
      )}
    </>
  );
}
