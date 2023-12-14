import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

const AppInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <h2 className="text-[clamp(28px,20px_+_2vw,48px)] font-bold">
        Welcome to Food Log!
      </h2>

      <p>
        Are you looking to keep track of your daily calorie intake and monitor
        your macronutrient intake? Look no further than Food Log! Our web
        application is designed to help you achieve your health goals by
        providing you with the tools you need to track your daily calories,
        proteins, carbohydrates, and fats.
      </p>
      <Image
        src="/preview.png"
        alt="preview"
        width="1200"
        height="800"
        sizes="(min-width: 768px) 800px, 80vw"
        className="md:max-w-[70%]"
        priority
      />
      <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
        <Button className="text-lg" asChild>
          <Link href="/signup">Sign up and start using now!</Link>
        </Button>
        <Button variant="secondary" className="text-lg" asChild>
          <Link href="/signin">Sign in</Link>
        </Button>
      </div>
      <p>
        With Food Log, you can easily log your meals and snacks, and our app
        will automatically calculate the nutritional information for you. Our
        app is easy to use and is available on both desktop and mobile devices.
        Whether you’re at home or on the go, you can easily log your meals and
        track your progress with Food Log.
      </p>
      <p>
        So what are you waiting for? Sign up for Food Log today and start
        achieving your health goals!
      </p>
    </div>
  );
};

export default AppInfo;
