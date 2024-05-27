"use client";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Link from "next/link";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import { CloudUpload } from "lucide-react";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export default function Home({
  params,
}: {
  params: { lang: any; serviceID: Number; categoryID: Number };
}) {
  const [dictionary, setDictionary] = useState({});
  const [category, setCategory] = useState({});
  const [service, setService] = useState({});
  const [fields, setFields] = useState([]);
  const [priority, setPriority] = useState("3 - Low");

  useEffect(() => {
    const fetchDictionary = async () => {
      const response = await fetch(`/api/get-dictionary?lang=${params.lang}`);
      const data = await response.json();
      setDictionary(data);
    };
    fetchDictionary();
  }, [params.lang]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      service: `${
        // @ts-ignore
        service.name
      }`,
      subject: `${
        // @ts-ignore
        category.name
      }`,
      details: fields
        .map((field) => {
          const [key, value] = Object.entries(field)[0];
          return `${key}: ${value}`;
        })
        .join("\n"),
      priority,
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
      location.href = `/${params.lang}/submit`;
    }
  };

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch("/api/services");
      const data = await response.json();
      const foundService = data.find((ser: any) => ser.id == params.serviceID);
      setService(foundService);
      const serviceCategory = foundService.categories.find(
        (cat: any) => cat.id == params.categoryID
      );
      setCategory(serviceCategory);
    };
    fetchServices();
  }, [params.serviceID, params.categoryID]);

  return (
    <>
      {Object.keys(dictionary).length === 0 ? (
        <></>
      ) : (
        <>
          <div className="flex flex-col min-h-screen">
            <SiteHeader dictionary={dictionary} />
            <main className="flex-1">
              <div className=" w-full py-5">
                <h1 className="text-4xl text-center font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {
                    // @ts-ignore
                    category?.name
                  }
                </h1>
              </div>
              <div className="flex justify-center space-x-20">
                <Link href={`/${params.lang}/new-ticket`}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black dark:bg-black dark:text-white border-2 border-black dark:border-white">
                      <h1 className="text-xl">1</h1>
                    </div>
                    <span className="mt-1 font-medium">Service</span>
                  </div>
                </Link>
                <Link href={`/${params.lang}/new-ticket/${params.serviceID}`}>
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
                    {
                      // @ts-ignore
                      category?.fields?.slice(0, 2).map((field, index) => {
                        return (
                          <div className="mb-4" key={index}>
                            <Label
                              className="text-xl font-medium"
                              htmlFor={field}
                            >
                              {field}:*
                            </Label>
                            <Input
                              className="mt-3"
                              id={field}
                              placeholder={`Enter ${field}`}
                              onChange={(e) => {
                                const newFields = [...fields];
                                // @ts-ignore
                                newFields[index] = { [field]: e.target.value };
                                setFields(newFields);
                              }}
                            />
                          </div>
                        );
                      })
                    }
                    <div className="mb-4 flex items-center">
                      <Label
                        className="text-xl font-medium mr-4 "
                        htmlFor="priority"
                      >
                        Priority: *
                      </Label>
                      <Select value={priority} onValueChange={setPriority}>
                        <SelectTrigger className="w-30">
                          <SelectValue placeholder="Select Priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1 - High">
                            {
                              // @ts-ignore
                              dictionary.ticketHighPriority
                            }
                          </SelectItem>
                          <SelectItem value="2 - Medium">
                            {
                              // @ts-ignore
                              dictionary.ticketMediumPriority
                            }
                          </SelectItem>
                          <SelectItem value="3 - Low">
                            {
                              // @ts-ignore
                              dictionary.ticketLowPriority
                            }
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="mb-4">
                      <Label className="text-xl font-medium" htmlFor="files">
                        Files:
                      </Label>
                      <div className="mt-3 border-dashed border-2 border-gray-300 rounded-md p-6 text-center">
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
                    {
                      // @ts-ignore
                      category?.fields?.slice(2).map((field, index) => {
                        return (
                          <div className="mb-4" key={index}>
                            <Label
                              className="text-xl font-medium "
                              htmlFor={field}
                            >
                              {field}:*
                            </Label>
                            <Input
                              id={field}
                              placeholder={`Enter ${field.toLowerCase()}`}
                              onChange={(e) => {
                                const newFields = [...fields];
                                // @ts-ignore
                                newFields[index + 2] = {
                                  [field]: e.target.value,
                                };
                                setFields(newFields);
                              }}
                            />
                          </div>
                        );
                      })
                    }
                    <div className="mb-4 flex-1 flex flex-col">
                      <Label
                        className="text-xl font-medium "
                        htmlFor="description"
                      >
                        Observations:
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Enter observations"
                        className="mt-3 flex-1"
                        onChange={(e) => {
                          const newFields = [...fields];
                          // @ts-ignore
                          newFields[category.fields.length] = {
                            observations: e.target.value,
                          };
                          setFields(newFields);
                        }}
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
