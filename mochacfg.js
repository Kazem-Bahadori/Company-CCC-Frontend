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
    importTest('SidebarTest','./test/organisms/SidebarTest');
    importTest("MediaWindowTest", './test/molecules/MediaWindowTest');
    importTest('HomePageTest', './test/pages/HomePageTest'); //works but throws an error. bug report written
    importTest('SearchPageTest', './test/pages/SearchPageTest');
    importTest('ChatAndInfoWindowTest', './test/organisms/ChatAndInfoWindowTest');
    importTest('GameInfoTest', './test/molecules/GameInfoTest');
    importTest("GamePageTest", './test/pages/GamePageTest'); //works but throws an error. bug report written
    importTest('ThumbnailTest', './test/atoms/ThumbnailTest');
    after(function () {
        console.log("\n Tests completed \n Summary:");
    });
});

/*
outdated tests:
importTest("infoWindowTest", './test/molecules/infoWindowTest'); outdated*/
