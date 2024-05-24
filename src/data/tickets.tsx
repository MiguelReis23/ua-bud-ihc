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
    value: "Communication Networks",
    label: "Communication Networks",
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
  }
];

export const status = [
  {
    value: "Closed",
    label: "Closed",
    icon: CheckCircledIcon
  },
  {
    value: "In Progress",
    label: "In Progress",
    icon: StopwatchIcon
  },
  {
    value: "Open",
    label: "Open",
    icon: CircleIcon
  },
];

export const priority = [
  {
    label: "Low",
    value: "Low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "Medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "High",
    icon: ArrowUpIcon,
  },
];

