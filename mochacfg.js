require.extensions['.png'] = function(){ return null; }

//Configure adapter for enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

describe("mochacfg", function () {
    beforeEach(function () {
      // console.log("Start test");
    });
    importTest('buttonTest', './test/atoms/buttonTest');
    importTest('ChatAndInfoWindowTest', './test/organisms/ChatAndInfoWindowTest');
    importTest('SidebarTest','./test/organisms/SidebarTest');
    importTest('SearchPageTest', './test/pages/SearchPageTest'); //search button yet to be implemented
    importTest("GamePageTest", './test/pages/GamePageTest'); //works but throws an error. bug report written
    importTest("MediaWindowTest", './test/molecules/MediaWindowTest');
    importTest('HomePageTest', './test/pages/HomePageTest'); //works but throws an error. bug report written
    after(function () {
        console.log("\n Tests completed \n Summary:");
    });
});

/*
outdated tests:
importTest("infoWindowTest", './test/molecules/infoWindowTest'); outdated*/
