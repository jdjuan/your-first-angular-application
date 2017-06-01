# Your First Angular Application

## String interpolation

1. Let's start updating the `title` variable in your `app.component.ts` file. Save the file and you should see the result rendered automatically in the browser.

2. Let's do something more 'agressive', let's add another variable to your `app.component.ts` file called `author` and assign your name to it:
	- `author = 'Juan Herrera';`

3. Go to the browser and make sure everything is still working.

4. Now we will reference this new created variable inside our template. Go to the `app.component.ts` file and add the following to your `h1` tag:
	- `Welcome to {{title}} by {{author}}`

5. Go to the browser and make sure your name is there!

## You are finished, now go to Branch #2