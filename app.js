var g = Grtr();

console.log(g);

g.greet().setLang('es').greet(true).log();
// g.setLang('fr');

document.querySelector('.btn').addEventListener('click', function() {
    var grtr = Grtr('divine', 'Lush');

    var lang = document.querySelector('.lang').value;
    grtr
        .setLang(lang)
        .HTMLGreeting('.greeting', true)
        .log();
});
