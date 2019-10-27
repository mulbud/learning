Demonstrate in tsconfig.json using module=commonjs

This is useful for Node since Node uses CommonJS (which is a specification, NOT a library) and thus imports work well.

If you want to use SystemJS, then tsconfig.json has to be modified to use module=system
Even though SystemJS implements CommonJS, the JS code produced is different and won't work with module=commonjs