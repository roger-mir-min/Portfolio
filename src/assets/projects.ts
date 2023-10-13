export const iconsUrls = {
    html: "../../assets/logos/html.png",
    css: "../../assets/logos/css.png",
    scss: "../../assets/logos/sass.png",
    javascript: "../../assets/logos/javascript.png",
    typescript: "../../assets/logos/typescript-transp.png",
    angular: "../../assets/logos/angular.png",
    react: "../../assets/logos/react.png",
    wordpress: "../../assets/logos/wordpress.png",
    tailwind: "../../assets/logos/tailwind.png",
    bootstrap: "../../assets/logos/bootstrap.png",
    ngBootstrap: "../../assets/logos/ng-bootstrap.png",
    ngMaterial: "../../assets/logos/ng-material.png",
    ngKolkov: "../../assets/logos/ng-kolkov.png",
    leaflet: "../../assets/logos/leaflet.svg",
    karma: "../../assets/logos/karma.png",
    jasmine: "../../assets/logos/jasmine.png",
    node: "../../assets/logos/nodejs.png",
    express: "../../assets/logos/express-js-seeklogo.com.svg",
    ec2: "../../assets/logos/EC2.jpg",
    firebase: "../../assets/logos/firebase.png"
}

const i = iconsUrls;

interface project {
    name: string,
    description: string,
    url: string,
    imgUrl: string,
    iconsUrl: string[]
}

export const collaborativeProjects: project[] = [
    {
        name: "Oceans Gardens",
        description: "Winning project of the NASA SpaceApps Challenge 2023 (Barcelona Event), built by my team Galactic Space Coders. It's a game that aims to raise awareness among children about the importance of taking care of the oceans.",
        url: "https://github.com/roger-mir-min/NasaSpaceAppsChallengeOceanGardens",
        imgUrl: "../assets/images/nasa-challenge.png",
        iconsUrl: [i.angular, i.typescript, i.ngMaterial, i.tailwind, i.scss]
    },
    {
        name: "ITA Challenges",
        description: "Project I worked at as an internship at IT Academy (July 2023). It is a programming challenges website, aimed to be a useful tool for students at the academy. Still in progress.",
        url: "https://github.com/roger-mir-min/ita-challenges-frontend",
        imgUrl: "../assets/images/ITA-logo.jpeg",
        iconsUrl: [i.angular, i.typescript, i.ngBootstrap, i.jasmine, i.karma]
    },
];

export const individualProjects: project[] = [
    {
        name: "Activicat",
        description: "My main project (in progress). A website with exercises to practice Catalan. You can sign up as a student or teacher, or just practice.",
        url: "www.activicat.cat",
        imgUrl: "../assets/images/activicat.png",
        iconsUrl: [i.angular, i.ngBootstrap, i.ngMaterial]
    },
    {
        name: "Crearse - Psicología y arte",
        description: "Professional website for a psychologist. She can log as admin and modify almost all the text (+text format). For that I used Kolkov Angular Editor. Chore: Angular (full standalone, service workers), Tailwind, Firebase. I applied performance, SEO and accessibility criteria.",
        url: "crearse-a80cc.firebaseapp.com/",
        imgUrl: "../assets/images/crearse.png",
        iconsUrl: [i.angular, i.typescript, i.tailwind, i.ngKolkov]
    },
    {
        name: "El senyor de cada dia",
        description: "An app where you can create and store your own points of interest and routes in a map. Made with Leaflet and Angular: Angular Signals and Standalone Components :)",
        url: "https://roger-mir-min.github.io/elsenyorde/",
        imgUrl: "../assets/images/elsenyorde2.png",
        iconsUrl: [i.angular, i.typescript, i.ngBootstrap, i.leaflet]
    },
    {
        name: "Star Wars Starships",
        description: "An authentication process (localstorage) allows users to access informational cards about Star Wars movies, fetched from the APIs from https://swapi.dev/ and https://starwars-visualguide.com/#/)).",
        url: "https://roger-mir-min.github.io/ITAcademy-8-SW-Starships/",
        imgUrl: "../assets/images/sw.png",
        iconsUrl: [i.angular, i.typescript, i.ngBootstrap]
    },
    // {
    //     name: "Aventourer",
    //     description: "",
    //     url: "www.aventourer.com",
    //     imgUrl: "",
    //     iconsUrl: []
    // },
    // {
    //     name: "Shop-shop",
    //     description: "",
    //     url: "www.shop-shop.com",
    //     imgUrl: "",
    //     iconsUrl: []
    // },
];