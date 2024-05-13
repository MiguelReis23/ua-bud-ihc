"use client";

import * as React from "react";
import { Earth } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LocaleSwitcher() {
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");

    if (pathParts.length > 1 && ["en", "pt", "es"].includes(pathParts[1])) {
      pathParts[1] = locale;
    } else {
      pathParts.splice(1, 0, locale);
    }

    const newPath = pathParts.join("/");
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Earth className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("pt")}>
          Portuguese
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("es")}>
          Spanish
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
