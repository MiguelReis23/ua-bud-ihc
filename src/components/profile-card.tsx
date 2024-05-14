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
            <div className="font-light">{jobTitle}</div>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <span className="font-light">Title:</span>
            <span>{jobTitle}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-light">Email:</span>
            <span>{email}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-light">Department:</span>
            <span>{department}</span>
          </div>
        </div>
      </Card>
    )
}