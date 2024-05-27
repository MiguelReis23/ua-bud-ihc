import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { SearchBar } from "@/components/searchbar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { LocaleSwitcher } from "./locale-switcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AdminHeader({ dictionary }: { dictionary: any }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex max-w-screen-2xl items-center py-2">
        <div className="flex flex-1 items-center justify-between space-x-2 md:jusitfy-end">
          <div className="flex flex-row items-center space-x-6">
            <Link href={`/${dictionary.locale}/admin`}>
              <Icons.logo className="h-full w-auto mt-1" />
            </Link>
            <SearchBar placeholder={dictionary.search} />
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/admin/tickets">
              <Button variant="secondary">
                <Icons.history className="mr-2" />{" "}
                {dictionary.ManageTickets.toUpperCase()}
              </Button>
            </Link>
            <Link href="/admin/new-ticket">
              <Button variant="default">
                <Icons.add className="mr-1" />{" "}
                {dictionary.newTicket.toUpperCase()}
              </Button>
            </Link>
            <Separator orientation="vertical" className="h-8" />
            <ThemeSwitcher />
            <LocaleSwitcher />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="/EC.jpg" />
                  <AvatarFallback>EC</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <Link href={`/${dictionary.locale}/admin/profile`}>
                  <DropdownMenuItem>
                    <Icons.UserRound className="mr-2" />
                    Profile
                  </DropdownMenuItem>
                </Link>
                <Link href={`/login`}>
                  <DropdownMenuItem>
                    <Icons.LogOut className="mr-2" />
                    Logout
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}
