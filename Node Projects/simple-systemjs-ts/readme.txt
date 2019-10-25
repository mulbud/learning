There are 2 examples:
1. index.html
2. index2.html

index.html uses a barest-bone approach:
- loads SystemJS
- Uses SystemJS to import index.js, which has an import of method.js
However we have to provide the js extension in our imports (e.g. import { init } from "./method.js") 

index2.html provides a configuration where the JS extension is automatically provided, so we can just do import { init } from "./method"
However, the configuration does NOT work with SystemJS 2 - we have to use the older version (0.21) which has that configuration.
