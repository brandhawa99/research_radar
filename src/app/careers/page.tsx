"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Iconheader from "@/components/ui/iconheader";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  researchJob: z.string().min(1, {
    message: "Nothing entered into search field",
  }),
});
export default function page() {
  //1. Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      researchJob: "",
    },
  });

  //2. Define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    //Do stuff
    console.log(values);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between px-10 border-2 border-b-red-600 ">
        <Link href={"/"}>
          <Iconheader />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button>
                <Link href="/">
                  <NavigationMenuLink className="navigationMenuTriggerStyle()">
                    Sign Up
                  </NavigationMenuLink>
                </Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant={"outline"}>
                <Link href="/">
                  <NavigationMenuLink className="navigationMenuTriggerStyle()">
                    Sign In
                  </NavigationMenuLink>
                </Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col bg-red-200 space-y-8 justify-center align-middle"
      >
        <Input placeholder="Research assistant..."></Input>
        <Button type="submit" className="">
          Search
        </Button>
      </form>
    </div>
  );
}
