import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

interface ArticleCardProps {
    title: string;
    subtitle: string;
    description: string;
  }
  
  export function ArticleCard({
    title,
    subtitle,
    description,
  }: ArticleCardProps) {
    return (
      <Card className="flex flex-col gap-4 p-4 hover:bg-neutral-300 dark:hover:bg-neutral-800">
        <div className="flex items-center gap-4">
          <div className="space-y-1">
            <div className="text-xl font-medium">{title}</div>
            <div className="font-light text-gray-500">{subtitle}</div>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <span className="font-light">{description}</span>
          </div>
        </div>
      </Card>
    )
}