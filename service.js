/**
 * Created by meshboy on 2/23/17.
 */


(function () {
    angular.module('Test')
        .service('TestService', TestService);

    function TestService() {

        var service = this, list = [];

        service.addToList = function (data) {
            list.push(data);
        };

        service.removeItem = function (index) {
            list.splice(index, 1);
        };

        service.getList = function () {
            return list;
        };
    }
})();
