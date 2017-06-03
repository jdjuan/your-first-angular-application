# Your First Angular Application

## 1. String interpolation

Your application is running and working. Good 👌, now it's time to start making some changes:

One cool feature of Angular is called **string interpolation**. It allows you to bind your variables to your template. So let's start:

1. Go to your `app.component.ts` file.
2. Find the `title` variable and replace its contents with something like: `"my application"`
3. Save the file and check the result rendered automatically in the browser 👌👌👌

Now let's do something more risky:

4. Let's add another variable to your `app.component.ts` file called `author`. 
5. Assign your name to it like this: `author = 'Juan Herrera';`
6. Save the file and go to the browser and make sure everything is still working.

Everything is working but our new created variable is not showing up 😢
Well we need to add it to your template 😅

7. Go to the `app.component.html` file and add the following to your `h1` tag: `Welcome to {{title}} by {{author}}`

5. Go to the browser and make sure your name is there! 💕

## You are done, now go to [Branch #2](https://github.com/jdjuan/your-first-angular-application/tree/2)
