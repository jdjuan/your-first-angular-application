# Your First Angular Application

## 3. Event binding

Event binding allows us to attach events to elements or components e.g. Click, Keyup, among others ✌️

Let's start attaching our first event:

1. Go to `app.component.html` and erase all the content except for own component `app-my-component`.
2. Now let's create a button: `<button>Click me</button>` and verify in the browser 👌

3. Go to your `app.component.ts` file and create a new variable called **count** and initialized on **0**: `count = 0;`
3. Well, here is your first mission: Use **String Interpolation** to render our new variable. 🤡 Let the game begin.. 🤡

You ready? Cool! I knew you could! 💪

4. It's time to attach our event, go to our button and update it accordingly: `<button (click)="count = count + 1" >Click me</button>`

5. Go to the browser and test it!

6. Did it work? Was it easy? Cooool! 🎉🎉🎉

## You are done, now go to [Branch #4](https://github.com/jdjuan/your-first-angular-application/tree/4)
