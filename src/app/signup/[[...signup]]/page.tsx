import { SignUp } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { clerkStylesSignupIn } from "@/styles/clerk";

export const runtime = "edge";

const page = () => {
  return (
    <div
      className={cn(
        "flex items-center justify-center self-stretch",
        clerkStylesSignupIn,
      )}
    >
      <SignUp />
    </div>
  );
};

export default page;
