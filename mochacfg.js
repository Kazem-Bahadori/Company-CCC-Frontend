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
    //importTest("infoWindowTest", './test/molecules/infoWindowTest'); outdated
    importTest("GamePageTest", './test/pages/GamePageTest'); //works but gets an error message
    after(function () {
        console.log("\n Tests completed \n Summary:");
    });
});
