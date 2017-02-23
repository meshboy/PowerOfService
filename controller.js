/**
 * Created by meshboy on 2/23/17.
 */
(function () {

    angular.module('Test')
        .controller('TestController', TestController);

    TestController.$inject = ['TestService'];
    function TestController(TestService) {

        var ctrl = this;

        ctrl.list = TestService.getList();

        ctrl.addData = function () {
            TestService.addToList(ctrl.data);
        };

        ctrl.removeData = function (index) {
            TestService.removeItem(index);
        };
    }
})();