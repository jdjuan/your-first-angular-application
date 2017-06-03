# Your First Angular Application

## 4. Property binding

Property binding allows us to set a property to our elements or components ✌️

Let's start using it 🤡:

1. Go to `app.component.html` and create an **img** tag like this: `<img>`

2. No image should be rendered because we are missing the `src` attribute. Instead of adding it directly, let's start using property binding!

3. Go to your `app.component.ts` file and create a variable called **imageSource** and assing the content like this: `imgSource = './../favicon.ico';`

4. The final step is update our img tag like this: `<img [src]="imgSource">`

Did it work!? Coool 💪 That's it! It's simple 😁

## Your mission

Create an `input` tag and enable it or disable it through the clicking of a button.

### Tips:

1. Don't forget you need a variable to make this work, I would call it: `enabled`
2. Use the `[disabled]` property
3. Use the `click` event binding to change the variable!

Good Luck! 🤡🤡🤡 and thank you for your time!

![Once there was a repository and you gave it a star](https://i.imgflip.com/1q7vwr.jpg)