import SignInButton from "@/components/SignInButton";
import { IconHome, IconSearch } from '@tabler/icons-react';
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function TopNav() {
  return (
    <div className="mb-3">
    <div className="rounded-md bg-zinc-950 flex flex-col md:flex-row justify-between items-center px-4 py-3 space-y-3 md:space-y-0">
        <h1 className="font-bold text-lg">
            Music Player App
        </h1>
        <div className="flex items-center space-x-4 w-full md:w-auto">
            <Link href={"/"}>
                <IconHome
                    size={24}
                    stroke={2}
                    strokeLinejoin="miter"
                />
            </Link>
            <SearchBar />
        </div>
        <div className="flex space-x-3 items-center">
            <SignInButton />
            <UserAvatar />
        </div>
    </div>
</div>

  );
}