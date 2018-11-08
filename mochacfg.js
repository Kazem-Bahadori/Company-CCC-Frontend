require.extensions['.png'] = function(){ return null; }

function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

//var common = require("./common");

describe("mochacfg", function () {
    beforeEach(function () {
       console.log("running something before each test");
    });
    importTest("buttonTest", './test/buttonTest');
    importTest("GamePageTest", './test/GamePageTest');
    //importTest("b", './b/b');
    after(function () {
        console.log("after all tests");
    });
});
