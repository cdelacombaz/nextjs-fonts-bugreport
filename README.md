# Bug report description

I am using NextJS with styled-components and try to load a custom font. I tried different implementations and all of 
them are buggy. Am I doing something wrong or is there a bug somewhere?

## Font defined in GlobalStyles / styled-components  (main branch)

Font gets loaded 3 times and sometimes there is a short flash where the text disappears and appears again.

Check out this video (maybe slow it down to 0.25x): https://www.youtube.com/watch?v=tGsEaL8Ppvk

**Steps to reproduce:**

1. yarn run dev
2. visit http://localhost:3000
3. disable cache in your browser and reload the page (flash only happens sometimes)


## Font defined in global.css  (css branch)

