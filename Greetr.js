;(function (global, document) {
    // 'new' an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    // these vars are hidden within the scope of the IIFE
    // and never directly accessible 
    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola',
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion',
    };

    Greetr.prototype = {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            // this will point to the object calling this function
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid language';
            };
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greetMessage: function(isFormal) {
            var message;

            if (isFormal) {
                message = this.formalGreeting();
            } else {
                message = this.greeting();
            }

            return message;
        },

        greet: function(isFormal) {
            if (console)
                console.log(this.greetMessage(isFormal));

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            // IE support
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        // change language on the fly
        setLang: function(newLang) {
            this.language = newLang;
            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, isFormal) {
            if (!selector)
                throw 'Missing jQuery selector';

            document.querySelector(selector).innerText = this.greetMessage(isFormal);

            return this;
        },
    };

    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || 'John';
        self.lastName = lastName || 'Doe';
        self.language = language || 'en';

        self.validate();
    }

    // any object created with function greet should point at
    // Greetr.prototype for its prototype chain
    Greetr.init.prototype = Greetr.prototype;

    // expose the Greetr function
    global.Greetr = global.Grtr = Greetr;
})(window, document);
