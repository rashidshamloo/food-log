import { Button } from "./ui/button";

const AppInfo = () => {
  return (
    <div className="space-y-8 text-center">
      <h2 className="text-5xl font-bold">Welcome to Food Log!</h2>

      <p>
        Are you looking to keep track of your daily calorie intake and monitor
        your macronutrient intake? Look no further than Food Log! Our web
        application is designed to help you achieve your health goals by
        providing you with the tools you need to track your daily calories,
        proteins, carbohydrates, and fats.
      </p>

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

      <Button className="text-xl">Sign up</Button>
    </div>
  );
};

export default AppInfo;
