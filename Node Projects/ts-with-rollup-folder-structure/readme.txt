Demonstrate using rollup - a library that combines all JS files into 1.

Added directory structure.

The resulting file is bundle.js, contains index.tsx that imports a method in method.tsx which imports a class in testclass.tsx
The rollup call is: rollup index.js --file bundle.js --format iife
  which specifies the format of how the output needs to be (iife), which will run in a browser

tsconfig.json is modified to use module=ESNext, so it'll be in ES6 format (import {init} from "./method")

rollup understood that ES6 format and it'll change it into iife format (in a single file).