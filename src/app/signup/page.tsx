import { SignUp } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { clerkStylesSignupIn } from "@/styles/clerk";

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
