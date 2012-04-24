({
    appDir: "../",
    baseUrl: "js/",
    dir: "../../app-build",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    optimize: "uglify",

    //optimizeCss: "standard.keepLines",
    optimizeCss: "standard",

    inlineText: true,

    paths: {
        "jquery": "libs/3rdparty/require-jquery"
    },

    modules: [
        //Optimize the require-jquery.js file by applying any minification
        //that is desired via the optimize: setting above.
        {
            name: "libs/3rdparty/require-jquery"
        },
        //Optimize the application files. Exclude jQuery since it is
        //included already in require-jquery.js
        {
            name: "main",
            exclude: ["jquery"]
        }
    ]
})
