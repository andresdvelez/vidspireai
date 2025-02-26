import { SignInButton } from "@clerk/nextjs";
import { Button } from "@heroui/react";

export const Footer = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Meet Your AI Agent & Transform Your Content?
          </h2>
          <SignInButton mode="modal">
            <Button
              endContent={
                <i
                  className="icon-[solar--arrow-right-linear] size-5"
                  role="img"
                  aria-hidden="true"
                />
              }
              className="bg-white text-blue-600 hover:bg-white/90 transition-colors duration-300"
              size="lg"
            >
              Join waitlist for Free
            </Button>
          </SignInButton>
        </div>
      </div>
    </section>
  );
};
