var Greeter = (function () {
    function Greeter(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Greeter.prototype.showGreeting = function () {
        var row2 = window.document.getElementById("r1c2");
        row2.innerHTML = 'Hello' + this.firstName + '' + this.lastName + '.';
    };
    Greeter.prototype.resetGreeting = function () {
        console.log('from showGreeting function this.firstName: ', this.firstName, 'this.lastName: ', this.lastName);
        var row2 = window.document.getElementById("r1c2");
        console.log('row2', row2, 'document', document);
        row2.innerHTML = 'r1c2';
    };
    return Greeter;
})();
var greeter = new Greeter('J0se', 'Hernandez');
