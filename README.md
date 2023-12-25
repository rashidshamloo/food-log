# Food Log

## Summary

Food Log is a web application that helps you keep track of your daily calorie intake and monitor your macronutrient intake. I made this application to learn and gain more experience with back-end technologies like databases, ORMs, RSC (react Server Components), Server Actions, and User Authentication.

Live Demo: [https://food-log.rashidshamloo.com/](https://food-log.rashidshamloo.com/)

## Database

I used Turso as the database for this project. At first, I wanted to use PlanetScale (MySQL) but it needed a credit card for creating the DB, Then I decided to use Vercel's PostgreSQL DB, but the limit is 1 per free acount and I'm already using one in another project. In the end, after some research, I decided to go with Turso as it has a generous free offering and is more than adequate for this project. I had to use WSL2 to run the Turso CLI, and ran into some problems like the Prisma Accelerate not being compatible with libSQL but I enjoyed using it and will continue to do so in my future projects.

## ORM

I used Prisma as the ORM and I enjoyed using it. even though Turso is a new technology, Prisma already had support for it and while the setup was more complicated than other DBs, after setting it up, it was easy to use. plus I could switch to an entire DB like MySQL or PostgreSQL and my code would still work.

## Backend / API

For CRUD operations, I used RSC (React Server Components) and Server Actions exclusively. There is no state stored on the client and the entries are retrieved and processed on the server using RSC and the final rendered HTML is set to the user. For modifying the data, I called server actions from inside client components to do the work on the server for faster processing and keeping the backend isolated from the user/front-end.

# Design/Layout

I used the Shadcn component library for the design/layout. I looked at several other component libraries but they all needed a provider added to the layout which forced all children components to be client components and interfered with what I wanted to achieve (I could import server components in the roort layout and prop drill them into client components but i didn't like that approach). I also liked the different components provided by shadcn and it's ease of use. I will use it again in future projects as well.

## Dark/Light Switch

While it sounds like a trivial task, with RSC (React Server Components), it's not easy to implement a them switch with no flashes on page load since the server can't know what each client has set as their preference and when the rendered HTML is different, it results in hydration errors. In order to solve the issue, I wrote my own theme switching code that works without any issues overall (inspired by the theme switching in Mantine).

## User Authentication

I used Clerk for user authentication. It's relatively easy to set up and provides simple React components you can add to your page to display the user button, sign-in/up form, etc. The only problem is that in production it requires you to have your own domain and set it up to be used by Clerk which fortunately I already had. I also customized how different Clerk UI elements look to match the design.

## Misc.

I used Object.groupBy() for grouping entries by date and displaying them, added loading icons in buttons to indicate when a Server Action is running, prevented the layout shift caused by scrollbars for a smooth user experience, added metadata for search engines, optimized the assets, etc.

## Conclusion

I enjoyed working with RSC (React Server Components) and Server Actions. When using them, there's no need for a state management library like Redux and the response time is fast since the processing is done on the server and the server has a much faster connection to the databse as well. I'm not sure if every part of a bigger application can be implemented using them but for this project, they worked great.

## Tech Stack
- TypeScript
- React
- Next.js v14
- Tailwind CSS
- Shadcn
- Prisma
- Turso
- Clerk

## Screenshots

## Author
Rashid Shamloo

- Portfolio - [rashidshamloo.com](https://www.rashidshamloo.com)
- Linkedin - [rashid-shamloo](https://www.linkedin.com/in/rashid-shamloo/)
- Dev.to - [@rashidshamloo](https://dev.to/rashidshamloo)
- Twitter - [@rashidshamloo](https://www.twitter.com/rashidshamloo)
- Email - [rashidshamloo@gmail.com](mailto:rashidshamloo@gmail.com)

