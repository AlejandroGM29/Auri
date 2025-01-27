// Seleccionamos los contenedores
const starsContainer = document.getElementById("stars");
const shootingStarsContainer = document.getElementById("shooting-stars");
var audio = document.getElementById("audio");
audio.onplay = function () {
  updateStage();
};

async function updateStage() {
  await mostrarMensajeConDuracion(
    "Sé que nos conocemos prácticamente nada",
    4 * 1000
  );
  await mostrarMensajeConDuracion(
    "Que nos conocemos muy poco, que hemos interactuado poco, y que faltan cosas por saber aún de uno sobre el otro.",
    9 * 1000
  );
  await mostrarMensajeConDuracion(
    "Pero eso no quita que, la verdad, me gustes.",
    4 * 1000
  );
  await mostrarMensajeConDuracion(
    "Aún falta mucho por saber sobre ti, pero quiero saber todo lo que pueda. Quiero aprender a quererte, aprender sobre ti.",
    10 * 1000
  );
  await mostrarMensajeConDuracion(
    "Quiero saber tus gustos, entenderlos, saber qué cosas te emocionan, qué cosas te enojan.",
    7 * 1000
  );
  await mostrarMensajeConDuracion(
    "Quiero saber qué platillo te hace bailar de emoción cada vez que lo pruebas, conocer tus postres favoritos, y tus climas preferidos.",
    11 * 1000
  );
  await mostrarMensajeConDuracion(
    "Quiero conocer tus sueños, saber qué es lo que quieres lograr, y acompañarte el día que los cumplas.",
    8 * 1000
  );
  await mostrarMensajeConDuracion(
    "Porque me gustas. Porque, a pesar de que aún falta muchísimo por conocer sobre ti, todo lo que he conocido hasta hoy me ha encantado.",
    11 * 1000
  );
  await mostrarMensajeConDuracion(
    "Me encantan tus ojitos color café preciosos, me encantan tus pestañas tan bonitas, me encanta tu nariz hermosa y, ¡por Dios!, tus cachetitos y tu cejas tan bonitas.",
    14 * 1000
  );
  await mostrarMensajeConDuracion(
    "Me encanta tu cabello rizado sin definición, me encanta cómo lo llevas, ya sea suelto o amarrado. Adoro cómo te maquillas, me encantan tus delineados.",
    13 * 1000/* 10 */
  );
  await mostrarMensajeConDuracion(
    "ME ENCANTAS TÚ.",
    3 * 1000
  );
  await mostrarMensajeConDuracion(
    "Ni hablar de tu personalidad, tu forma de ser.",
    4 * 1000
  );
  await mostrarMensajeConDuracion(
    "A pesar de todo, nunca te has rendido. Has seguido adelante, eres una persona fuerte, inteligente y trabajadora.",
    9 * 1000
  );
  await mostrarMensajeConDuracion(
    "Eres de verdad una persona maravillosa, de la cual sé que cualquiera estaría orgulloso de tener a su lado.",
    8 * 1000
  );
  await mostrarMensajeConDuracion(
    "Por eso quiero conocerte, aprender y saber de ti. Porque lo vales, vales totalmente la pena.",
    7 * 1000
  );
  await mostrarMensajeConDuracion(
    "Me gustas, Auri, y quiero gustarte. No quiero que las cosas sean incómodas, pero no podría perdonarme no intentarlo, teniendo a alguien tan maravillosa como tú enfrente.",
    13 * 1000
  );
  await mostrarMensajeConDuracion(
    "Aunque no lo creas, tienes una luz muy bonita, algo que me inspira confianza, y cada vez que veo una foto tuya me da muchísima paz.",
    8.5 * 1000
  );
  await mostrarMensajeConDuracion(
    "Te quiero mucho, Auri preciosa. Quiero saber sobre ti, aprender sobre ti, y conocerte de todas las maneras posibles.",
    8 * 1000
  );
  await mostrarMensajeConDuracion(
    "Me gustas, y no me cansaré de decirte lo hermosa que eres, la paz que me das, y sobre todo las ganas de salir adelante que inspiras en quienes te rodean.",
    13 * 1000
  );
  /*  */
  await mostrarMensajeConDuracion(
    "Quiero que me cuentes tus dias, como te la pasas, que tanto haces, que cosas te molestaron y que cosas te alegraron.",
    10 * 1000
  );
  await mostrarMensajeConDuracion(
    "Quiero saber como estas, cuando estes feliz o triste, quiero que tengas siempre la confianza de poder desahogarte en cualquier situacion conmigo.",
    10 * 1000
  );
  await mostrarMensajeConDuracion(
    "Quiero aportarte, no quiero ser una molestia, un estorbo ni una perdida de tiempo, quiero dar todo de mi para que te sientas realizada al estar conmigo.",
    10 * 1000
  );
  await mostrarMensajeConDuracion(
    "Quiero hacerte feliz, pero sobre todo quiero verte ser feliz.",
    10 * 1000
  );
  await mostrarMensajeConDuracion(
    "Se que aun hay mucho por hacer, se que no llevas una vida tranquila y encontrar un espacio libre en tus dias para alguien es complicado.",
    10 * 1000
  );
  await mostrarMensajeConDuracion(
    "Y lo entiendo, no quiero hacerte la vida mas complicada de lo que ya la tienes, quiero encontrar la manera de apoyarte.",
    10 * 1000
  );
  await mostrarMensajeConDuracion(
    "Quiero estar para ti Auri, quiero verte triunfar y salir adelante, quiero que estes bien y puedas conseguir estar orgullosa de ti misma en algun momento.",
    10 * 1000
  );

  /*  */
  await mostrarMensajeConDuracion(
    "No sé qué más decirte, pero te quiero mucho y de verdad quiero poder verte completamente feliz algún día.",
    8 * 1000
  );
  await mostrarMensajeConDuracion(
    "¡TE QUIERO MUCHO, NIÑA HERMOSAAAAAAA!",
    6 * 1000
  );
}



function mostrarMensajeConDuracion(mensaje, duracion) {
  return new Promise((resolve) => {
    escribirMensaje(mensaje); // Mostrar el mensaje

    setTimeout(function () {
      $("#texto").fadeOut("slow", function () {
        // Desvanecer el mensaje hacia arriba al finalizar la duración
        $(this).text("").show(); // Vaciar el contenido del div de texto y mostrarlo
        resolve(); // Resolver la promesa después de que termine la animación de desvanecimiento
      });
    }, duracion);
  });
}

function escribirMensaje(mensaje) {
  $("#texto").text(""); // Vaciar el contenido del div de texto

  var i = 0;
  var intervalo = setInterval(function () {
    $("#texto").append(mensaje.charAt(i)); // Agregar un carácter del mensaje
    i++;
    if (i > mensaje.length) {
      clearInterval(intervalo); // Detener la animación cuando se haya escrito todo el mensaje
    }
  }, 60); // Intervalo de tiempo entre cada carácter (velocidad de escritura)
}

// Función para crear estrellas fijas que parpadeen
function createStars() {
  const numStars = 200;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Establecemos tamaño y posición aleatoria
    const size = Math.random() * 2 + 1; // Tamaño entre 1px y 3px
    const xPos = Math.random() * 100; // Posición en porcentaje (0% - 100%)
    const yPos = Math.random() * 100; // Posición en porcentaje (0% - 100%)
    const delay = Math.random() * 1; // Retraso de la animación

    // Aplicamos estilos
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${xPos}%`;
    star.style.top = `${yPos}%`;
    star.style.animationDelay = `${delay}s`;

    // Añadimos al contenedor de estrellas
    starsContainer.appendChild(star);
  }
}

// Función para generar estrellas fugaces aleatoriamente
function createShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");

  // Posición inicial aleatoria en la parte superior del contenedor
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * (window.innerHeight / 2); // En la mitad superior

  shootingStar.style.left = `${startX}px`;
  shootingStar.style.top = `${startY}px`;

  // Añadimos al contenedor de estrellas fugaces
  shootingStarsContainer.appendChild(shootingStar);

  // Animamos la estrella fugaz
  shootingStar.style.animation = `shooting 1s ease-out forwards`;

  // Eliminamos la estrella fugaz después de la animación
  setTimeout(() => {
    shootingStar.remove();
  }, 1000);
}

// Crear múltiples estrellas fijas
createStars();

// Generar estrellas fugaces aleatoriamente cada X tiempo
setInterval(() => {
  createShootingStar();
}, 2000 + Math.random() * 3000); // Cada 2 a 5 segundos
