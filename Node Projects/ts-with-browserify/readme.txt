Demonstrate using browserify - a library that combines all JS files into 1.

The resulting file is bundle.js, contains index.tsx that imports a method in method.tsx which imports a class in testclass.tsx
The browserify call is: browserify index.js -o bundle.js
  browserify expects the import format to be in UMD, that's why tsconfig.json is modified to use module=umd
