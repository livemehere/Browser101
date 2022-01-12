# WebAPIs

## window size

```js
window.screen.availWidth; //화면 width
window.window.outerWidth; // 브라우저 width
window.innerWidth; // document + 스크롤바
document.documentElement.clientWidth; // only document
```

## coordinates(좌표)

### element의 client좌표, page좌표

```js
document.querySelector(".boxes").addEventListener("click", (e) => {
  console.log(e.target.getBoundingClientRect());
  console.log(`client: ${e.clientX}, ${e.clientY}`);
  console.log(`page: ${e.pageX}, ${e.pageY}`);
});
```

### scrollBy ,scrollTo, element.scrollIntoView()

```js
// 스크롤 이동
window.scrollBy(0, 100);

// 스크롤 특정 위치로 이동
window.scrollTo(0, 100);

// 요소의 위치로 이동하기 way 1
let targetY = document.querySelector(".active").getBoundingClientRect().top;
window.scrollTo(0, targetY);

// 요소의 위치로 이동하기way 2 🚀 🚀
let active = document.querySelector(".active");
active.scrollIntoView();
```

## Window load

```html
<script defer />
```

```js
// only document
window.addEventListener("DOMContentLoaded", () => {});
// after resurces (css,images)
window.addEventListener("load", () => {});
// before unload
window.addEventListener("beforeunload", () => {});
// resource is being unloaded
window.addEventListener("unload", () => {});
```
