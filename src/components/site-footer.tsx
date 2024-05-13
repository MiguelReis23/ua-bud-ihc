import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";

export function SiteFooter({ dictionary }: { dictionary: any }) {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4">
      <section className="container max-w-screen-2xl items-center py-2 flex flex-col md:flex-row items-center justify-between mb-4">
        <div className="flex flex-col space-y-1 md:space-y-0 md:flex-row md:space-x-4">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            <a
              href="privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {dictionary.privacyPolicy}
            </a>
          </p>

          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            <a
              href="terms-of-service"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {dictionary.termsOfService}
            </a>
          </p>

          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            <a
              href="sitemap"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {dictionary.siteMap}
            </a>
          </p>
        </div>

        <div>
          <p className="mt-2 md:mt-0">
            © {new Date().getFullYear()} {dictionary.copyRight}
          </p>
        </div>
      </section>
      <section className="border-t border-border/40">
        <div className="container max-w-screen-2xl items-center py-2 flex flex-col">
          <Image
            className="invert dark:filter-none opacity-80"
            src={"/footer/sponsors.png"}
            alt={"Project sponsors"}
            objectFit="cover"
            quality={70}
            width={400}
            height={100}
          />
        </div>
      </section>
    </footer>
  );
}
