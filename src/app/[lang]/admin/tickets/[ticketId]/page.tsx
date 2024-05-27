"use client";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import React from "react";
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
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

export default function TicketID({
  params,
}: {
  params: { lang: any; ticketId: string };
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
    80467951;
    fetchTickets();
  }, [params.ticketId]);

  useEffect(() => {
    if (initialPriority !== priority || initialStatus !== status) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [priority, status, initialPriority, initialStatus]);

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
      // @ts-ignore
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
    // @ts-ignore
    if (ticket.priority === "1 - High") {
      // @ts-ignore
      return dictionary.ticketHighPriority;
      // @ts-ignore
    } else if (ticket.priority === "2 - Medium") {
      // @ts-ignore
      return dictionary.ticketMediumPriority;
      // @ts-ignore
    } else if (ticket.priority === "3 - Low") {
      // @ts-ignore
      return dictionary.ticketLowPriority;
    }
  }

  function getStatus() {
    // @ts-ignore
    if (ticket.status === "Open") {
      // @ts-ignore
      return dictionary.ticketStatusOpen;
      // @ts-ignore
    } else if (ticket.status === "In Progress") {
      // @ts-ignore
      return dictionary.ticketStatusInProgress;
      // @ts-ignore
    } else if (ticket.status === "Closed") {
      // @ts-ignore
      return dictionary.ticketStatusClosed;
    }
  }

  const { toast } = useToast();

  return (
    <>
      {Object.keys(dictionary).length === 0 ? (
        <></>
      ) : (
        <>
          <div className="w-full">
            <div className="flex flex-col min-h-screen">
              <AdminHeader dictionary={dictionary} />
              <div className="flex flex-1 h-screen flex-col container">
                <header className="flex h-16 items-center border-b">
                  <Link href="/admin/tickets">
                    <Button variant="default">
                      <Icons.back className="mr-1" />{" "}
                      {
                        // @ts-ignore
                        dictionary.back
                      }
                    </Button>
                  </Link>
                  <div className="flex-1 text-center text-sm font-medium">
                    Ticket #
                    {
                      // @ts-ignore
                      ticket.id
                    }{" "}
                  </div>
                </header>
                <main className="flex-1 grid md:grid-cols-3 gap-6 w-full grid-cols-1 pt-4">
                  <div className="col-span-2 space-y-4 border-r pr-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <div className="">
                          <p className="font-medium">
                            <b>
                              {
                                // @ts-ignore
                                dictionary.ticketSubject
                              }
                              :
                            </b>{" "}
                            {
                              // @ts-ignore
                              ticket.subject
                            }
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">
                            <b>
                              {
                                // @ts-ignore
                                dictionary.ticketDate
                              }
                              :
                            </b>
                            {
                              // @ts-ignore
                              ticket.date
                            }
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-3">
                          <p className="font-medium">
                            <b>
                              {
                                // @ts-ignore
                                dictionary.ticketPriority
                              }
                              :
                            </b>
                          </p>
                          <Select
                            onValueChange={(value: any) => setPriority(value)}
                          >
                            <SelectTrigger className="w-30">
                              <SelectValue placeholder={getPriority()} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1 - High">
                                {
                                  // @ts-ignore
                                  dictionary.ticketHighPriority
                                }
                              </SelectItem>
                              <SelectItem value="2 - Medium">
                                {
                                  // @ts-ignore
                                  dictionary.ticketMediumPriority
                                }
                              </SelectItem>
                              <SelectItem value="3 - Low">
                                {
                                  // @ts-ignore
                                  dictionary.ticketLowPriority
                                }
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center space-x-2">
                          <p className="font-medium">
                            <b>Status:</b>
                          </p>
                          <Select
                            onValueChange={(value: any) => setStatus(value)}
                          >
                            <SelectTrigger className="w-30">
                              <SelectValue placeholder={getStatus()} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Open">
                                {
                                  // @ts-ignore
                                  dictionary.ticketStatusOpen
                                }
                              </SelectItem>
                              <SelectItem value="In Progress">
                                {
                                  // @ts-ignore
                                  dictionary.ticketStatusInProgress
                                }
                              </SelectItem>
                              <SelectItem value="Closed">
                                {
                                  // @ts-ignore
                                  dictionary.ticketStatusClosed
                                }
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-2">
                          <p className="font-medium">
                            <b>
                              {
                                // @ts-ignore
                                dictionary.ticketRequester
                              }
                              :
                            </b>
                          </p>
                          <div className="flex items-center space-x-2">
                            <Avatar>
                              <AvatarImage alt="Avatar" src="/KC.jpg" />
                              <AvatarFallback>KC</AvatarFallback>
                            </Avatar>
                            <p className="text-sm font-medium">
                              {
                                // @ts-ignore
                                ticket.requester
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-2">
                        <div className="h-[300px] overflow-auto border p-2">
                          {
                            // @ts-ignore
                            ticket.details.split("\n").map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))
                          }
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
                            {
                              // @ts-ignore
                              ticket.responsible
                            }
                          </p>
                          <p className="text-xs font-medium">
                            {
                              // @ts-ignore
                              dictionary.ticketHandler
                            }
                          </p>
                        </div>
                      </div>
                      <div className="space-x-2">
                        <Button
                          variant="default"
                          onClick={() => {
                            toast({
                              title: "Ticket updated",
                              description: "The ticket has been updated.",
                            });
                            handleUpdate();
                          }}
                          disabled={!hasChanges}
                        >
                          {
                            // @ts-ignore
                            dictionary.ticketUpdate
                          }
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-lg font-semibold">
                      {
                        // @ts-ignore
                        dictionary.ticketConversation
                      }
                    </h2>
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
                        placeholder={
                          // @ts-ignore
                          dictionary.ticketTypeMessage
                        }
                      />
                      <Button>
                        {
                          // @ts-ignore
                          dictionary.ticketSend
                        }
                      </Button>
                    </div>
                  </div>
                </main>
              </div>
              <SiteFooter dictionary={dictionary} />
            </div>
          </div>
        </>
      )}
      <Toaster />
    </>
  );
}
