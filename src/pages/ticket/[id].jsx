import { useRouter } from 'next/router';
import ticketsData from '../../tickets.json';

export default function TicketPage() {
  const router = useRouter();
  const { id } = router.query;

  // Convert the id to a number before comparing it
  const ticketId = Number(id);

  // Find the ticket with the matching id
  const ticket = ticketsData.find(ticket => ticket.id === ticketId);

  // If the ticket is not found or the id is not available yet, render a loading message
  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Ticket: {ticket.id}</h1>
      <p>Subject: {ticket.subject}</p>
    </div>
  );
} 