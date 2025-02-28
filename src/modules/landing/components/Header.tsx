import { AgentPulse } from "@/modules/core/components/AgentPulse";
import { Link } from "@/modules/translations/i18n/routing";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@heroui/react";

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <AgentPulse size="small" color="blue" />
          <Link href="/">
            <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Vidspire
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <SignedIn>
            <Link href="/manage-plan">
              <Button
                variant="light"
                className="text-blue-600 hover:text-blue-700"
              >
                Manage Plan
              </Button>
            </Link>
            <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full border bg-blue-100 border-blue-200">
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="bg-gradient-to-r from-blue-600 to to-blue-400 border-blue-400 shadow-blue-400 text-white shadow">
                Join waitlist
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};
