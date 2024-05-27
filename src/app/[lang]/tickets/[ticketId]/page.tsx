import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/lib/get-dictionary";
import { Textarea } from "@/components/ui/textarea";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import TicketsData from "@/data/tickets.json";
import React from "react";
import NotFound from "../../not-found";
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
import { SiteFooter } from "@/components/site-footer";

export default async function TicketID({
  params,
}: {
  params: { lang: string; ticketId: string };
}) {
  const dictionary = await getDictionary(params.lang);

  const ID = Number(params.ticketId);
  const ticket = TicketsData.find((ticket) => ticket.id === ID);

  if (!ticket) {
    return <NotFound lang={params.lang} />;
  }

  function getPriority() {
    if (ticket?.priority === "1 - High") {
      //@ts-ignore
      return dictionary.ticketHighPriority;
    } else if (ticket?.priority === "2 - Medium") {
      //@ts-ignore
      return dictionary.ticketMediumPriority;
    } else if (ticket?.priority === "3 - Low") {
      //@ts-ignore
      return dictionary.ticketLowPriority;
    }
  }

  function getStatus() {
    if (ticket?.status === "Open") {
      //@ts-ignore
      return dictionary.ticketStatusOpen;
    } else if (ticket?.status === "In Progress") {
      //@ts-ignore
      return dictionary.ticketStatusInProgress;
    } else if (ticket?.status === "Closed") {
      //@ts-ignore
      return dictionary.ticketStatusClosed;
    }
  }

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col">
          <SiteHeader dictionary={dictionary} />
          <div className="w-full">
            <div className="flex flex-col container px-0">
              <header className="flex h-16 items-center border-b">
                <Link href="/tickets">
                  <Button variant="default">
                    <Icons.back className="mr-1" />{" "}
                    {
                      //@ts-ignore
                      dictionary.back
                    }
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
                          <b>
                            {
                              //@ts-ignore
                              dictionary.ticketSubject
                            }
                            :
                          </b>{" "}
                          {ticket.subject}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          <b>
                            {
                              //@ts-ignore
                              dictionary.ticketDate
                            }
                            :
                          </b>
                          {ticket.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center space-x-3">
                        <p className="font-medium">
                          <b>
                            {
                              //@ts-ignore
                              dictionary.ticketPriority
                            }
                            :
                          </b>
                        </p>
                        <Select value={ticket.priority} disabled>
                          <SelectTrigger className="w-30">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1 - High">
                              {
                                //@ts-ignore
                                dictionary.ticketHighPriority
                              }
                            </SelectItem>
                            <SelectItem value="2 - Medium">
                              {
                                //@ts-ignore
                                dictionary.ticketMediumPriority
                              }
                            </SelectItem>
                            <SelectItem value="3 - Low">
                              {
                                //@ts-ignore
                                dictionary.ticketLowPriority
                              }
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium">
                          <b>
                            {
                              //@ts-ignore
                              dictionary.ticketStatus
                            }
                            :
                          </b>
                        </p>
                        <Select value={ticket.status} disabled>
                          <SelectTrigger className="w-30">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Open">
                              {
                                //@ts-ignore
                                dictionary.ticketStatusOpen
                              }
                            </SelectItem>
                            <SelectItem value="In Progress">
                              {
                                //@ts-ignore
                                dictionary.ticketStatusInProgress
                              }
                            </SelectItem>
                            <SelectItem value="Closed">
                              {
                                //@ts-ignore
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
                              //@ts-ignore
                              dictionary.ticketRequester
                            }
                            :
                          </b>
                        </p>
                        <div className="flex items-center space-x-2">
                          <Avatar>
                            <AvatarImage
                              alt="Avatar"
                              src="/KC.jpg"
                            ></AvatarImage>
                            <AvatarFallback></AvatarFallback>
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
                      <div className="h-[300px] overflow-auto border border-gray-200 p-2 dark:border-gray-800">
                        {ticket.details.split("\n").map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
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
                        <p className="text-xs">
                          {
                            //@ts-ignore
                            dictionary.ticketHandler
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">
                    {
                      //@ts-ignore
                      dictionary.ticketConversation
                    }
                  </h2>
                  <div className="flex flex-col space-y-4 overflow-y-auto">
                    <ReceivedMessage
                      message="Hi, I'm sorry to hear you're having trouble. Can you please provide more details about the issue you're facing?"
                      timestamp="May 9, 2024 at 10:35 AM"
                      avatarSrc="/EC.jpg"
                      avatarFallback="EC"
                    />
                    <SentMessage
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
                        //@ts-ignore
                        dictionary.ticketTypeMessage
                      }
                    />
                    <Button>
                      {
                        //@ts-ignore
                        dictionary.ticketSend
                      }
                    </Button>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <SiteFooter dictionary={dictionary} />
        </div>
      </div>
    </>
  );
}
