const boton = document.getElementById('clicBoton');
const papelito = document.getElementById('papelito');
const sonidoClick = document.getElementById('sonidoClick');
const sonidoAbrir = document.getElementById('sonidoAbrir');
const sonidoPapel = document.getElementById('sonidoPapel');

const razones = [
"Te amo porque siempre quieres protegerme y cuidarme, incluso a la distancia.",
"Te amo porque tu paciencia conmigo es algo que no cualquiera tiene.",
"Te amo porque te preocupas genuinamente por mí.",
"Te amo porque siempre quieres lo mejor para mí.",
"Te amo porque tus ojos y tu sonrisa alegran mis días.",
"Te amo porque tu risa es el sonido más bonito para mí.",
"Te amo porque aunque estemos lejos, siento tu presencia.",
"Te amo porque me haces sentir tu calorcito.",
"Te amo porque contigo me siento feliz.",
"Te amo porque admiro todo lo que eres.",
"Te amo porque has llegado tan lejos sin ayuda de nadie.",
"Te amo porque siempre buscas ser mejor.",
"Te amo porque admiro tus sueños.",
"Te amo porque aun cansado me dedicas tiempo.",
"Te amo porque me eliges cada día.",
"Te amo porque siempre me escuchas.",
"Te amo porque aunque no sepas qué decir, estás conmigo.",
"Te amo porque tu presencia me acompaña.",
"Te amo porque cuando estoy triste no te vas.",
"Te amo porque me hablas con paciencia.",
"Te amo porque me das aliento cuando lo necesito.",
"Te amo porque me tratas con cuidado.",
"Te amo porque me transmites tranquilidad.",
"Te amo porque escucharte con sueñito me da paz.",
"Te amo porque oírte dormir me hace sentir cerca.",
"Te amo porque sueño dormir contigo.",
"Te amo porque imaginarlo me hace feliz.",
"Te amo porque tu determinación me inspira.",
"Te amo porque tu cariño se siente real.",
"Te amo porque contigo me siento en casa.",
"Te amo porque tus ojos me atrapan.",
"Te amo porque tu mirada dice mucho.",
"Te amo porque tus manos me hacen sentir segura.",
"Te amo porque tu voz me encanta.",
"Te amo porque tu risa me alegra el alma.",
"Te amo porque todo en ti me gusta.",
"Te amo porque me pareces guapísimo.",
"Te amo porque tu pecho me hace sentir protegida.",
"Te amo porque casi todos los días me dices te amo.",
"Te amo porque no te cansas de recordármelo.",
"Te amo porque imagino una vida contigo.",
"Te amo porque sueño esperarte en casa.",
"Te amo porque quiero dormir abrazada a ti.",
"Te amo porque siempre estás en mis pensamientos.",
"Te amo porque cuando me cuidas me siento amada.",
"Te amo porque eres cariñoso sin ser empalagoso.",
"Te amo porque sabes amar bonito.",
"Te amo porque tu holaaaa me hace sonreír.",
"Te amo porque me llamas amor.",
"Te amo porque no quiero que dejes de hacerlo.",
"Te amo porque cuando dices princesa me derrito.",
"Te amo porque me haces sentir especial.",
"Te amo porque tus mensajes me tranquilizan.",
"Te amo porque saber que llegaste bien me da paz.",
"Te amo porque me importas en lo pequeño.",
"Te amo porque cada palabra tuya cuenta.",
"Te amo porque tu te amo no se explica.",
"Te amo porque lo nuestro se siente real.",
"Te amo porque te esfuerzas por nuestro futuro.",
"Te amo porque quieres que no me falte nada.",
"Te amo porque quieres verme crecer.",
"Te amo porque crees en mí.",
"Te amo porque casi nunca me dices que no.",
"Te amo porque siempre buscas hacerme feliz.",
"Te amo porque sueño celebrarte.",
"Te amo porque quiero sorprenderte.",
"Te amo porque no me dejaste sola.",
"Te amo porque tuviste paciencia conmigo.",
"Te amo porque no te rendiste.",
"Te amo porque deseo verte cumplir tus sueños.",
"Te amo porque tu felicidad es la mía.",
"Te amo porque quiero un futuro contigo.",
"Te amo porque te elijo todos los días."
];

boton.addEventListener('click', () => {
    sonidoClick.play();

    boton.disabled = true;
    setTimeout(() => {
        sonidoAbrir.play();
        const randomIndex = Math.floor(Math.random() * razones.length);
        papelito.textContent = razones[randomIndex];
        papelito.style.display = "block";
        sonidoPapel.play();
        boton.disabled = false;
    }, 300);
});
