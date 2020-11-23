export const data = {
    navigation: {
        aboutMe: 'Sobre mí',
        experience: 'Experiencia profesional',
        projects: 'Proyectos personales',
        contact: 'Contacto'
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
            // "backgroundImage": "portfolio.png"
        }
        ]
    },
    contact: {

    },
}