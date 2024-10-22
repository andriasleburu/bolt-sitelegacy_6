"use client"

import React from 'react';
import { Bell, MessageSquare, Search, User, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"

const Topbar = () => {
  const { setTheme } = useTheme()

  return (
    <div className="flex items-center justify-between h-16 px-4 border-b bg-background">
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 w-full"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <Button variant="ghost" size="icon">
          <MessageSquare className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">Conservation Specialist</p>
                <p className="text-xs leading-none text-muted-foreground">UNESCO</p>
                <p className="text-xs leading-none text-muted-foreground">United States</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              My Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              Theme
              <DropdownMenu>
                <DropdownMenuTrigger className="ml-auto">
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Language
              <DropdownMenu>
                <DropdownMenuTrigger className="ml-auto">
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>French</DropdownMenuItem>
                  <DropdownMenuItem>Spanish</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </DropdownMenuItem>
            <DropdownMenuItem>
              My Subscription
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Topbar;