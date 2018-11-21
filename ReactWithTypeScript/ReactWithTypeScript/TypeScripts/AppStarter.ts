
declare var requirejs;

function main(fileToLoad) {
    // Configuration
    requirejs({
        baseUrl: "/Scripts/CompiledTS",
        paths: {
            //"empty:" is a special key to inform requirejs to not include this dependecy in the optimized output
            "jquery": "/Scripts/Libraries/jQuery/jQuery-3.3.1",
            "promise": "/Scripts/Libraries/Promise Polyfill/polyfill",
            "react": "/Scripts/Libraries/react/react.development",
            "react-dom": "/Scripts/Libraries/react/react-dom.development",
        }
    });

    requirejs([fileToLoad], function (loadedModule) {
        console.assert(loadedModule != null, "TSAppStarter module could not be loaded!");
        console.log(loadedModule);
        loadedModule.default.main();
    });
}