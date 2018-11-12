require.extensions['.png'] = function(){ return null; }

function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

describe("mochacfg", function () {
    beforeEach(function () {
      // console.log("Start test");
    });
    importTest("buttonTest", './test/atoms/buttonTest');
    importTest("ChatAndInfoWindowTest", './test/organisms/ChatAndInfoWindowTest'); //does not work for now
    //importTest("infoWindowTest", './test/molecules/infoWindowTest'); FR036 removed from SRS
  //importTest("GamePageTest", './test/pages/GamePageTest'); //does not work for now
    after(function () {
        console.log("Tests completed");
    });
});
