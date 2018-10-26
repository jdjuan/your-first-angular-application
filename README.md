# Your First Angular Application

## 2. Event binding

Event binding allows us to attach events to elements or components e.g. `Click`, `Keyup`, among others ✌️

Let's start attaching our first event:

1. Go to `app.component.html` and erase all the content.
2. Now let's create a button: `<button>Click me 💪</button>` and verify if it shows up 👌
3. Go to your `app.component.ts` file and create a new variable called **count**, and initialize it on **0**: `count = 0;`
4. Well, here is your first mission: Use **String Interpolation** to render our new variable. 🤡 Let the game begin... 🤡 Go ahead, do it.
5. ⏰⏰⏰
6. **You ready?** Cool! I knew you could! 💪
7. It's time to attach our event, go to our button and update it accordingly:

```html
<button (click)="count = count + 1" >Click me</button>
```

8. Go to the browser and test it!
9. Did it work? Was it easy? Cooool! 🎉🎉🎉

## You are done, now go to [Branch #3](https://github.com/jdjuan/your-first-angular-application/tree/3#your-first-angular-application)
