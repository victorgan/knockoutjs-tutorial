// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = "Bert";
    this.lastName = "Bertington";
    this.name = 'World';
    this.count = ko.observable(0);
    this.increment = function(){
        this.count(this.count() + 1);
    }
}


// Activates knockout.js
ko.applyBindings(new AppViewModel());


