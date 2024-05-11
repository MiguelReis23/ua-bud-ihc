import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

interface ProfileCardProps {
    avatarSrc: string;
    avatarAlt: string;
    avatarFallback: string;
    name: string;
    jobTitle: string;
    email: string;
    department: string;
  }
  
  export function ProfileCard({
    avatarSrc,
    avatarAlt,
    avatarFallback,
    name,
    jobTitle,
    email,
    department,
  }: ProfileCardProps) {
    return (
      <Card className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage alt={avatarAlt} src={avatarSrc} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="text-xl font-medium">{name}</div>
            <div className="text-gray-500 dark:text-gray-400">{jobTitle}</div>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 dark:text-gray-400">Title:</span>
            <span>{jobTitle}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 dark:text-gray-400">Email:</span>
            <span>{email}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 dark:text-gray-400">Department:</span>
            <span>{department}</span>
          </div>
        </div>
      </Card>
    )
}