# Bug report description

I am using NextJS with styled-components and try to load a custom font. I tried different implementations and all of 
them are buggy. Am I doing something wrong or is there a bug somewhere?

## font-face defined in GlobalStyles / styled-components  (main branch)

If I define the font-face in style/index.js, the font gets loaded 3 times and sometimes there is a short flash where 
the text disappears and appears again.

Check out this video (maybe slow it down to 0.25x): https://www.youtube.com/watch?v=tGsEaL8Ppvk

**Steps to reproduce:**

1. Clone repo
2. run `yarn install`
3. Ensure that you are on **main** branch
4. run `yarn run dev`
5. visit http://localhost:3000
6. disable cache in your browser and reload the page (flash only happens sometimes)


## font-face defined in global.css (css branch)

Defining everything in global.css works just fine. Also defining the font-face in global.css and assigning the 
font-family in styled components GlobalStyle works. But if I add `display: flex` or `display: flex` to the body tag in 
my global styles, the font is first displayed incorrectly and then switches to my custom font. If I use 
`display: absolute`, no problem, it works as intended.

I don't get why using flex or grid affects fonts. I did move this code in a global css in my project, so it works fine, 
but would like to find out the reason or the bug, in order to fix it or not make this mistake again in the future.

Check out this video (maybe slow it down to 0.25x): https://www.youtube.com/watch?v=mvxPKKQmrDA

**Steps to reproduce:**

1. Switch to **css** branch
2. run `yarn run dev`
3. visit http://localhost:3000
4. refresh the page
