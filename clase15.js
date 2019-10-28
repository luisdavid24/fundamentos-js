var signo= prompt("¿Cual es tu signo?")

switch(signo) {
    case "Aries":
        console.log("Será esencial para este día que empiece a controlar cada una de las emociones y así evitar que estas afecten de manera negativa su ánimo.")
        break
    case "Tauro":
        console.log("Durante este día, lo más probable es que toda su fuerza esté dirigida en la búsqueda de la orientación para su vocación o estudios específicos.")
        break
    case "Geminis":
    case "Géminis":
        console.log("En esta jornada deberá encontrar el equilibrio en su vida. Antes que nada, sepa que deberá determinar cuáles son las prioridades y lo más importante para usted.")
        break
    case "Cancer":
    case "Cáncer":
        console.log("Sepa que antes de fijar los objetivos deberá considerar los inconvenientes posibles y adecuar todas sus ideas a los recursos con lo que cuenta.")
        break
    case "Leo":
        console.log("Durante esta jornada, permita que su fantasía se libere y se convierta en la fuente de su inspiración. De esta forma, podrá darle un nuevo orden a su vida.")
        break
    case "Virgo":
        console.log("Nunca se olvide que lo primordial para alcanzar todos los objetivos, es estar siempre seguro de los deseos que uno quiere alcanzar. Sea constante.")
        break
    case "Libra":
        console.log("Si pretende obtener una rápida prosperidad material, sepa que dependerá de su excelente criterio intelectual y de su perseverancia en el trabajo.")
        break
    case "Escorpio":
        console.log("Será el momento justo para concentrarse en las obligaciones más urgentes y descartar los intereses superfluos. Sea más responsable en su vida.")
    case "Sagitario":
        console.log("Se despertará con el convencimiento de introducir nuevos cambios en su forma de actuar. No dude más, ya es el momento de hacerlo en su vida.")
        break
    case "Capricornio":
        console.log("Si pretende incentivar la creatividad, deberá poner en práctica las capacidades como la motivación y la innovación, características de su personalidad.")
        break
    case "Acuario":
        console.log("No desaproveche cada unas de las oportunidades que se le presentarán en el ámbito laboral. Su espíritu de lucha y ambición están en su mejor momento.")
        break
    case "Piscis":
        console.log("Sería oportuno que comience a implementar las soluciones convenientes a muchos de los obstáculos que se le han presentado en estos días. No se deje estar.")
    default:
        console.log("No sabes escribir bien.Vuelve a intentarlo")
        break
    }