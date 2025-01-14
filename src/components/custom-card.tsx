import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardIcon,
} from "@/components/ui/card";
import { HeartHandshake } from "lucide-react";

interface LandingCardProps {
  title: string;
  description: string;
}

export function LandingCard({ title, description }: LandingCardProps) {
  return (
    <div className="py-3 space-y-4">
      <Card className="w-full hover:bg-neutral-300 dark:hover:bg-neutral-800">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export function CardWithIcon({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="w-full flex flex-row p-4 cursor-pointer hover:shadow-lg dark:hover:shadow-[#FFFFFF15] transition-shadow h-full">
      <div className="flex-grow">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <p>{description}</p>
          </div>
        </CardContent>
      </div>
      <div className="flex-none flex items-center justify-center p-4">
        {icon}
      </div>
    </Card>
  );
}
