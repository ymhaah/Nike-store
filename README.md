# nike store
#[link]([https://your-live-site-url.com](https://ymhaah.github.io/Nike-store/))
## Table of contents

-   [Overview](#overview)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
-   [Author](#author)

## Overview

An example of a nike store

### Screenshot

![hero of hte page](./design/screenshot.png)
![products section](./design/products.png)
![product](./design/product.png)

### Links

-   Icon website: [svgrepo](https://www.svgrepo.com/)
-   Live Site URL: [link]([https://your-live-site-url.com](https://ymhaah.github.io/Nike-store/))

## My process

I focused on using the Animation that appears with the download of the page on this site and I used this site as an example on a Nike shoe store

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   animation
-   Mobile-first workflow

### What I learned

```html
<meta name="color-scheme" content="dark light" />
<section aria-labelledby="Introduction to page"></section>
<img src="#" alt="#" class="#" loading="lazy" />
<p>copy right &copy;</p>
```

```css
img {
	transform: rotateY(180deg) rotate(300deg);
	filter: drop-shadow(0 20px 15px rgba(10, 10, 10, 0.9)) brightness(90%)
		contrast(110%) grayscale(10%);
}
h3 {
	writing-mode: vertical-rl;
}
p {
	font-size: calc(2rem + 1vw);
}
```

```js
let options = {
	root: null,
	threshold: 0,
	rootMargin: "",
};
let observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach(function (entry) {
		if (entry.isIntersecting) {
			turnBrowne.classList.add("turn-browne");
		} else {
			turnBrowne.classList.remove("turn-browne");
		}
	});
}, options);
```

### Continued development

-   html seo
-   css animation
-   js observer

## Author

-   Website - [youssef hafnawi](https://github.com/ymhaah)
-   Twitter - [@hafanwi](https://twitter.com/hafanwi)
