### Links

-   Live Site URL: [Click here to see webpage](https://eduardionescu.github.io/interactive-card-details-form-main/)

# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).

## Table of contents

-   [Overview](#overview)

    -   [The challenge](#the-challenge)

-   [My process](#my-process)

    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)

-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   Fill in the form and see the card details update in real-time
-   Receive error messages when the form is submitted if:
    -   Any input field is empty
    -   The card number, expiry date, or CVC fields are in the wrong format
-   View the optimal layout depending on their device's screen size
-   See hover, active, and focus states for interactive elements on the page

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Sass
-   Mobile-first workflow
-   JavaScript

### What I learned

I've learned how to throw some cool errors and validate input.

This code adds zeros at the and of a string until it reaches length == 16 .
I learned later that I could've done the same with `inputValue.padEnd(16, " ")`.

```js
if (inputValue.length < 16) {
	const zeros = "0".repeat(16 - inputValue.length);
	inputValue += zeros;
}
```

### Continued development

I'd like to further improve my Form Validation skills by learning more RegExp and to how to throw better errors.

## Author

-   Website - [EduardIonescu](https://ionescueduard.netlify.app)
-   Frontend Mentor - [@EduardIonescu](https://www.frontendmentor.io/profile/EduardIonescu)
