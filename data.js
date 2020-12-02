export const data = {
    navigation: {
        aboutMe: 'Sobre mí',
        experience: 'Experiencia profesional',
        projects: 'Proyectos personales',
        contact: 'Contacto'
    },
    introduction: {
        preTitle: 'Hola, mi nombre es ',
        title: 'Juan Antonio Martin',
        paragraph_1: 'Soy desarrollador fullstack Javascript viviendo en Madrid'
    },
    aboutMe: {
        title: 'Sobre mí',
        paragraph_1: 'Hola, soy Juan Antonio y soy desarrollador fullstack Javascript especialista en el stack MERN & React Native',
        paragraph_2: 'Apasionado por la tecnología desde que era un enano, después de obtener el grado en Administración de Empresas, vivir en Reino Unido y trabajar como contable e IT-Recruiter finalmente me decidí a estudiar en Enero 2020 aquello que me apasionaba desde pequeño.',
        paragraph_3: 'Por ello comencé mi experiencia en éste sector disfrutando de la experiencia IronHack.',
        paragraph_4: 'Trabajador, responsable, trabajador en equipo y resolutivo.Con muchas ganas de aprender y de desarrollarme profesionalmente!'
    },
    experience: {
        title: 'Experiencia profesional',
        experience: [
            {
                "id": 0,
                "jobTitle": "Fullstack Web & Mobile Developer",
                "company": "Clikalia",
                "from": "08/2020",
                "till": "10/2020",
                "description": [
                    'Stack: React, React Native, Redux, Microsoft Azure, CosmosDB',
                    'Desarrollo de una aplicación móvil desde cero con React Native',
                    'Metodología SCRUM',
                    'Trabajo realizado en un equipo compuesto por dos personas más, con mucha autonomía a la hora de desarrollar'
                ]
            },
            {
                "id": 1,
                "jobTitle": "IT Recruiter",
                "company": "Walters People",
                "from": "09/2019",
                "till": "12/2019",
                "description": [
                    'Proceso de selección al completo',
                    'Headhunter de perfiles de desarrollo web.',
                    'Técnicas comerciales con clientes potenciales, visitas y reuniones.',
                    'Uso de inglés diario.',
                    'Creación de informes de candidatos.'
                ]
            },
            {
                "id": 2,
                "jobTitle": "Contable de costes",
                "company": "Alhambra Eidos",
                "from": "06/2017",
                "till": "09/2019",
                "description": [
                    'Realización de la contabilidad analítica en cliente.',
                    'Tratamiento de información y análisis de datos.',
                    'Realización de informes y resolución de peticiones del cliente.',
                ]
            },
            {
                "id": 3,
                "jobTitle": "Dependiente",
                "company": "Subway UK",
                "from": "03/2017",
                "till": "06/2017",
                "description": [
                    'Atención al cliente',
                    'Gestión de stock',
                    'Gestión de compras'
                ]
            },
        ]
    },
    projects: {
        title: "Proyectos Personales",
        projects: [{
            "name": "Portfolio",
            "type": "Personal Project",
            "description": "Single ",
            "technologies": ["ReactJS", "HTML", "CSS", "Firebase"],
            "gitHub": "https://github.com/DonkeyKongJr/portfolio",
            // "url": "https://schadler.dev/",
            "backgroundImage": "portfolio.png"
        },
        {
            "name": "Goodboy",
            "type": "Personal Project",
            "description": "Aplicación para gestionar la educación de los perros, con lecciones paso a paso y videos explicativos.",
            "technologies": ["ReactJS", "Redux", "NodeJS", "MongoDB", "Cheerio"],
            "gitHub": "https://github.com/CoronaTeam1/proyect-goodboy",
            "url": "https://goodboyapp.herokuapp.com/",
            // "backgroundImage": "https://camo.githubusercontent.com/169c5ed02c1bf74a963b7c7e89f33f187cb3e18fa21581320b3b8d0887167600/68747470733a2f2f692e6962622e636f2f78684c665877422f53637265656e73686f742d323032302d30352d30382d61742d31382d30362d31352e706e67"
        },
        {
            "name": "NutriHealth",
            "type": "Personal Project",
            "description": "Tercer proyecto en IronHack. Single Page Application basada en ReactJS y NodeJS. La aplicación consiste en una plataforma de interacción social para nutricionistas y usuarios.En ella el usuario puede guardar su información personal y facilitarsela al nutricionista para que el nutricionista haga un menú semanal con las preferencias que el usuario le indique.",
            "technologies": ["ReactJS", "NodeJS", "MongoDB", "Express"],
            "gitHub": "https://github.com/JuanMrtt/Nutrihealth",
            "url": "https://nutrihealth.herokuapp.com/",
            // "backgroundImage": "https://camo.githubusercontent.com/8d23b1abf3ed4b004c360c1268374e0e143983a45bf0e532612a485216761541/68747470733a2f2f692e6962622e636f2f54594a587656532f436170747572612d64652d70616e74616c6c612d323032302d30332d31362d612d6c61732d31392d31342d33382e706e67"
        },
        {
            "name": "HarcodedNews",
            "type": "Personal Project",
            "description": "Segundo proyecto en pareja en IronHack. Una aplicación de noticias usando una API externa con las tecnologías de NodeJS, ExpressJS y Handlebars.",
            "technologies": ["Handlebars", "NodeJS", "MongoDB", "Express"],
            "gitHub": "https://github.com/HarcodedNews/HarcodedNews",
            "url": "https://harcodednews.herokuapp.com/",
            // "backgroundImage": "https://camo.githubusercontent.com/8d23b1abf3ed4b004c360c1268374e0e143983a45bf0e532612a485216761541/68747470733a2f2f692e6962622e636f2f54594a587656532f436170747572612d64652d70616e74616c6c612d323032302d30332d31362d612d6c61732d31392d31342d33382e706e67"
        },
        {
            "name": "The Island Game",
            "type": "Personal Project",
            "description": "Primer proyecto en IronHack. Videojuego multijugador utilizando Canvas y Vanilla JS.",
            "technologies": ["VanillaJS", "Canvas"],
            "gitHub": "https://github.com/JuanMrtt/the-island-game",
            // "url": "https://harcodednews.herokuapp.com/",
            // "backgroundImage": "https://camo.githubusercontent.com/8d23b1abf3ed4b004c360c1268374e0e143983a45bf0e532612a485216761541/68747470733a2f2f692e6962622e636f2f54594a587656532f436170747572612d64652d70616e74616c6c612d323032302d30332d31362d612d6c61732d31392d31342d33382e706e67"
        },
        ]
    },
    contact: {
        title: "Contacto",
        paragraph_1: "Mi email siempre esta abierto para nuevos contactos, cualquier consejo para cómo mejorar y para cualquier oportunidad laboral.",
        paragraph_2: "Dejame un mensaje o simplemente dime hola :)."
    },
    footer: {
        title: "Creado por Juan Antonio Martin",
        subtitle: "JuanMrtt @ GitHub",
        link: "https://github.com/JuanMrtt"
    }
}