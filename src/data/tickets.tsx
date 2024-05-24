import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const service = [
  {
    value: "Email",
    label: "Email",
  },
  {
    value: "Web Hosting",
    label: "Web Hosting",
  },
  {
    value: "Audiovisual",
    label: "Audiovisual",
  },
  {
    value: "E-Learning",
    label: "E-Learning",
  },
  {
    value: "Online Surveys",
    label: "Online Surveys",
  },
  {
    value: "Networks",
    label: "Networks",
  },
  {
    value: "User Management",
    label: "User Management",
  },
  {
    value: "Helpdesk",
    label: "Helpdesk",
  },
  {
    value: "Report an Incident",
    label: "Report an Incident",
  },
];

export const statuses = [
  {
    value: "Closed",
    label: "Closed",
    icon: CheckCircledIcon,
    color: "green",
  },
  {
    value: "In Progress",
    label: "In Progress",
    icon: StopwatchIcon,
    color: "blue",
  },
  {
    value: "Open",
    label: "Open",
    icon: CircleIcon,
    color: "red",
  },
];

export const priorities = [
  {
    label: "3 - Low",
    value: "3 - Low",
    icon: ArrowDownIcon,
  },
  {
    label: "2 - Medium",
    value: "2 - Medium",
    icon: ArrowRightIcon,
  },
  {
    label: "1 - High",
    value: "1 - High",
    icon: ArrowUpIcon,
  },
];
