import Link from "next/link";

import { APP_TITLE } from "@/lib/constants";
import { RocketIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="px-2 py-4 lg:py-6">
      <div className="container flex items-center gap-2 p-0">
        <Link className="flex items-center justify-center text-xl font-medium" href="/">
          <RocketIcon className="mr-2 h-5 w-5" /> {APP_TITLE}
        </Link>
        <div className="ml-auto">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
