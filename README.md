# Your First Angular Application

## 4. Component Creation

So we already applied a lot of concepts to our application, now it's time to go a little more in depth. Let's start creating our own component 📦.

In Stackblitz:

1. Right click in the `app` folder
2. Select `Angular Generator`
3. And then click `component`. Name it whatever you want. For example: `my-component`

![stackblitz](gen.png)

A component is generally composed of:

- 🔧 **Component:** `my-component.component.ts`
- 🎨 **Styles:** `my-component.component.css`
- 📱 **Template:** `my-component.component.html`
- 📋 **Tests:** `my-component.component.specs.ts`

> A component is a way to have a more maintanable application (i.e. this is very useful when you are app grows).

The **template** holds something like this by default:

```html
<p>my-component works!</p>
```

1. Now, let's open our component: `my-component.component.ts`
2. Pay attention to the selector tag, it should be something like: `app-my-component`

> The `selector` is the tag you can use to render your component inside another template.

So now that we know our component tag we can use it inside our app component (**the original component we worked on**).

1. Go to `app.component.html` and add this at the bottom: `<app-my-component></app-my-component>`
2. Check your app in the browser! 💕
3. If you see **my-component** redenderd, then you nailed it! 💪

## Your mission! ⏳

Move the logic, the template, and the styles from the **app** component to **my-component**.

### Tips 👇

1. The application should remain working
2. Migrate everything except the `<app-my-component></app-my-component>` tag, it is necessary to render **my-component**.

## You are done! 👏

You have created a super maintanable application! 👏👏👏

Find the solution **[here](https://stackblitz.com/edit/first-angular-application)**

This is it! Thanks for holding on! See you soon!

![Once there was a repository and you gave it a star](https://i.imgflip.com/1q7vwr.jpg)
