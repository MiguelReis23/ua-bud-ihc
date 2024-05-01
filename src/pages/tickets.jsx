import React from 'react'
import "./../app/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ticketsData from "../tickets.json";

export default function Tickets () {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left bg-gray-950"> {}
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Priority</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Requester</th>
            <th className="px-4 py-2">Responsible</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2 color-red">Last Message</th>
          </tr>
        </thead>
        <tbody>
        {ticketsData.map((ticket) => (
          <tr 
            key={ticket.subject} 
            className="border-b bg-stone-250 hover:bg-gray-200 cursor-pointer"
            onClick={() => router.push(`/ticket/${ticket.id}`)}
          > 
            <td className="px-4 py-2">{ticket.subject}</td>
            <td className="px-4 py-2">{ticket.priority}</td>
            <td className="px-4 py-2">{ticket.date}</td>
            <td className="px-4 py-2">{ticket.requester}</td>
            <td className="px-4 py-2">{ticket.responsible}</td>
            <td className="px-4 py-2">{ticket.status}</td>
            <td className="px-4 py-2">{ticket.lastMessage}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}