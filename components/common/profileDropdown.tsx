"use client"

import {  LogOut,  User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Spinner } from "../ui/spinner"

const ProfileDropDown = ({userName, userEmail, navigatation,handleSignOut} :any) => (
  <DropdownMenu  >
    <DropdownMenuTrigger asChild>
      <Button className="relative h-10 w-10 rounded-full" variant="ghost">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback><Spinner  className="w-4 h-5"  /></AvatarFallback>
          </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel className="font-normal">
        <div className="flex flex-col space-y-1  text-black font-medium font-quicksand">
          <p className=" text-sm leading-none">{userName}</p>
          <p className="text-black  text-xs leading-none">{userEmail}</p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem
      className="text-black font-medium font-quicksand"
      onClick={navigatation}
      >
        <User />
        Profile
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem
      className="text-black font-medium font-quicksand"
      onClick={handleSignOut}
      variant="destructive">
        <LogOut />
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)

export default ProfileDropDown
