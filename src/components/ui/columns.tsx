"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { service, statuses, priorities } from "@/data/tickets";
import { Task } from "@/data/tasksSchema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">TICKET-{row.getValue("id")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
    enableColumnFilter: true,
  },
  {
    accessorKey: "service",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subject" />
    ),
    cell: ({ row }) => {
      const label = service.find(
        (service) => service.value === row.original.service
      );

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="secondary">{row.original.service}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.original["subject"]}
          </span>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "responsible",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Responsible" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-2">
          <span>{row.original.responsible}</span>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4" color={status.color} />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      );

      if (!priority) {
        return null;
      }

      return (
        <div className="flex items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{priority.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      if (!row.original.date) {
        return null;
      }

      return <div>{row.original.date}</div>;
    },
    sortingFn: (rowA: any, rowB: any, columnId) => {
      const parseDate = (dateString: any) => {
        const [datePart, timePart] = dateString.split(", ");
        const [day, month, year] = datePart.split("/");
        return new Date(`${year}-${month}-${day}T${timePart}`);
      };

      const dateA = parseDate(rowA.original[columnId]);
      const dateB = parseDate(rowB.original[columnId]);

      return dateA > dateB ? 1 : dateA < dateB ? -1 : 0;
    },
  },
  {
    accessorKey: "lastMessage",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Message" />
    ),
    cell: ({ row }) => {
      return <div>{row.original.lastMessage}</div>;
    },
    enableSorting: false,
  },
];
