import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Icons } from '@/components/icons';

export function SiteHeader({ dictionary } : { dictionary: any }) {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" >
            <div className="container flex max-w-screen-2xl items-center py-2">
                <div className="flex flex-1 items-center justify-between space-x-2 md:jusitfy-end">
                    <Icons.logo className="h-full w-auto mt-1" />
                    <nav className="flex items-center space-x-4">
                        <Button variant="secondary">
                            <Icons.history className="mr-2" /> {dictionary.myTickets.toUpperCase()}
                        </Button>
                        <Button variant="default">
                            <Icons.add className="mr-1" /> {dictionary.newTicket.toUpperCase()}
                        </Button>
                        <Separator orientation="vertical" className="h-8" />
                        <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/38387065?v=4" />
                            <AvatarFallback>MV</AvatarFallback>
                        </Avatar>
                    </nav>
                </div>
            </div>
        </header>
    );
}