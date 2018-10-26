# Your First Angular Application

## 3. Property binding

Property binding allows us to set a property to our elements or components ✌️

Let's start using it 🤡:

1. Go to `app.component.html` and create an **img** tag like this: `<img>`
2. No image should be rendered because we are missing the `src` attribute. Instead of adding it directly, let's start using property binding!
3. Go to your `app.component.ts` file and create a variable called **imageSource** and assign the content like this: `imgSource = 'https://www.facevertizing.com/wp-content/uploads/2016/05/Nailed-It-Baby-Meme-06.jpg';`
4. The final step is update our img tag like this: `<img [src]="imgSource">`

Did it work!? Coool 💪 That's it! It's simple 😁

## Your mission

Create an `input` tag and enable it or disable it through the clicking of a button.

### Tips:

1. Don't forget you need a variable to make this work, I would call it: `enabled`
2. Use the `[disabled]` property
3. Use the `click` event binding to change the variable!

Good Luck! 🤡🤡🤡!

## When you finish, go to [The Final Branch](https://github.com/jdjuan/your-first-angular-application/tree/4#your-first-angular-application)
