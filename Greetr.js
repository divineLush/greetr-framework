(function (global, $) {
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    Greetr.prototype = {};

    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || 'John';
        self.lastName = lastName || 'Doe';
        self.language = language || 'en';
    }

    // any object created with function greet should point at
    // Greetr.prototype for its prototype chain
    Greetr.init.prototype = Greetr.prototype;

    // expose the Greetr function
    global.Greetr = global.G$ = Greetr;
})(window, jQuery);
