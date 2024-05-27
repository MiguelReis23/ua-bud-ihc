"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ArticleID() {
  const [accountType, setAccountType] = useState("");

  const handleLogin = () => {
    if (accountType === "admin") {
      window.location.href = `/admin`;
    } else {
      window.location.href = `/`;
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen h-full">
        <div className="w-full lg:grid lg:grid-cols-2 h-full h-screen">
          <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-balance text-muted-foreground">
                  Enter your UA username below to login to your account
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Select onValueChange={(value) => setAccountType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">
                        kupra@ua.pt (Normal User View)
                      </SelectItem>
                      <SelectItem value="admin">
                        emcosta@ua.pt (Admin View)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="https://id.ua.pt/escolha_reset.html"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input id="password" type="password" disabled />
                </div>
                <Button type="submit" className="w-full" onClick={handleLogin}>
                  Login
                </Button>
                <Button variant="outline" className="w-full" disabled>
                  Login with Chave Móvel Digital
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden bg-muted lg:block">
            <Image
              src="/landscape.jpg"
              alt="Image"
              width="1920"
              height="1080"
              className="h-full w-full object-cover dark:brightness-[0.9]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
