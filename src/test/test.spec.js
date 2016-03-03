describe("A test suite", function() {
    var controller = 1;
    var scope;
    var expect = chai.expect;
    beforeEach(module('myApp'));
    beforeEach(inject(function ($controller, $rootScope){
        scope = $rootScope.$new();
        controller = $controller('testController', {
            $scope: scope
        });
    }));
    console.log('controller', controller);
    it('name is incorrect', function() {
        expect(scope.name).to.equal('hawari');
    });
    
});
