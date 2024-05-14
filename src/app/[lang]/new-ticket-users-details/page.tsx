"use client";

import { SiteHeader } from "@/components/site-header";
import { CardWithIcon } from "@/components/custom-card";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import { CloudUpload } from "lucide-react";

import {
  AtSign,
  Globe,
  Video,
  GraduationCap,
  FileQuestion,
  Network,
  UserRound,
  Headset,
  Wrench,
} from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const [dictionary, setDictionary] = useState({});

  const [areaName, setAreaName] = useState("");
  const [usage, setUsage] = useState("");
  const [areaAdministrator, setAreaAdministrator] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchDictionary = async () => {
      const response = await fetch(`/api/get-dictionary?lang=${lang}`);
      const data = await response.json();
      setDictionary(data);
    };
    fetchDictionary();
  }, [lang]);

  const handleSubmit = async () => {
    const data = {
      subject: "Delegate project email account",
      details: `Who is this ticket for: ${areaName}\nProject / Event email account: ${usage}\nFiles: ${areaAdministrator}\nObservations: ${description}`,
    };

    const response = await fetch("/api/tickets/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch(() => null);

    if (response) {
      location.href = `/${lang}/tickets/`;
    }
  };

  return (
    <>
      {Object.keys(dictionary).length === 0 ? (
        <></>
      ) : (
        <>
          <div className="flex flex-col min-h-screen">
            <SiteHeader dictionary={dictionary} />
            <main className="flex-1">
              <div className="flex-1 w-full py-5">
                <h1 className="text-4xl text-center font-bold text-gray-900 dark:text-gray-100">
                  New Ticket
                </h1>
              </div>
              <div className="flex justify-center space-x-20">
                <Link href={`/${lang}/new-ticket`}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black dark:bg-black dark:text-white border-2 border-black dark:border-white">
                      <h1 className="text-xl">1</h1>
                    </div>
                    <span className="mt-1 font-medium">Service</span>
                  </div>
                </Link>
                <Link href={`/${lang}/new-ticket-elearning-category`}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black dark:bg-black dark:text-white border-2 border-black dark:border-white">
                      <h1 className="text-xl">2</h1>
                    </div>
                    <span className="mt-1 font-medium">Category</span>
                  </div>
                </Link>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white dark:bg-white dark:text-black">
                    <h1 className="text-xl">3</h1>
                  </div>
                  <span className="mt-1 font-medium">Details</span>
                </div>
              </div>
              <div className="container flex-1 max-w-screen-2xl max-w-7-xl mx-auto py-8">
                <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <section className="flex flex-col col-span-2 md:col-span-1">
                    <div className="mb-4">
                      <Label
                        className="text-xl font-medium "
                        htmlFor="area-name"
                      >
                        Whom is this ticket for?*
                      </Label>
                      <Input
                        id="area-name"
                        placeholder="User email"
                        onChange={(e) => setAreaName(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <Label className="text-xl font-medium " htmlFor="usage">
                        Project / Event email account:*
                      </Label>
                      <Input
                        id="usage"
                        placeholder="Enter email"
                        onChange={(e) => setUsage(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <Label className="text-xl font-medium " htmlFor="files">
                        Files:
                      </Label>
                      <div className="border-dashed border-2 border-gray-300 rounded-md p-6 text-center">
                        <CloudUpload className="mx-auto mb-2 h-6 w-6 text-gray-500" />
                        <Button variant="outline">
                          Choose files to Upload
                        </Button>
                        <p className="text-sm text-gray-500 mt-2">
                          or drag and drop them here
                        </p>
                      </div>
                    </div>
                  </section>
                  <section className="flex flex-col col-span-2 md:col-span-1">
                    <div className="mb-4 flex-1 flex flex-col">
                      <Label
                        className="text-xl font-medium "
                        htmlFor="description"
                      >
                        Observations:*
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Enter observations"
                        className="flex-1"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </section>
                  <section className="col-span-2 flex justify-end">
                    <Button
                      className="w-full md:w-auto"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </section>
                </form>
              </div>
            </main>
            <SiteFooter dictionary={dictionary} />
          </div>
        </>
      )}
    </>
  );
}
