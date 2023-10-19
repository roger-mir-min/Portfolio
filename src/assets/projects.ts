export const iconsUrls = {
    html: { iconUrl: "../../assets/logos/html.png", class:"html"},
    css: {iconUrl: "../../assets/logos/css.png", class:"css"},
    scss: {iconUrl: "../../assets/logos/sass.png", class:"scss"},
    javascript: { iconUrl: "../../assets/logos/javascript.png", class:"js" },
    typescript: { iconUrl: "../../assets/logos/typescript-transp.png", class:"ts" },
    angular: { iconUrl: "../../assets/logos/angular.png", class:"ng" },
    react: { iconUrl: "../../assets/logos/react.png", class:"react" },
    wordpress: { iconUrl: "../../assets/logos/wordpress.png", class:"wordpress" },
    tailwind: { iconUrl: "../../assets/logos/tailwind.png", class:"tw" },
    bootstrap: { iconUrl: "../../assets/logos/bootstrap.png", class:"bs" },
    ngBootstrap: { iconUrl: "../../assets/logos/ng-bootstrap.png", class:"ng-bs" },
    ngMaterial: { iconUrl: "../../assets/logos/ng-material.png", class:"ng-material" },
    ngKolkov: { iconUrl: "../../assets/logos/ng-kolkov.png", class:"kolkov" },
    leaflet: { iconUrl: "../../assets/logos/leaflet.svg", class:"leaflet" },
    karma: {iconUrl: "../../assets/logos/karma.png", class:"karma" },
    jasmine: { iconUrl: "../../assets/logos/jasmine.png", class:"jasmine" },
    node: { iconUrl: "../../assets/logos/nodejs.png", class:"node"},
    nodeSvg: { iconUrl: "../../assets/logos/nodejs-horizontal.svg", class:"node-svg"},
    express: { iconUrl: "../../assets/logos/express-js-seeklogo.com.svg", class:"exp"},
    ec2: { iconUrl: "../../assets/logos/ec2.png", class: "ng-bs" },
    ec2Horizontal: { iconUrl: "../../assets/logos/EC2.jpg", class: "ng-bs" },
    aws: {iconUrl: "../../assets/logos/AWS.png", class:"aws"},
    mysql: {iconUrl: "../../assets/logos/mysql.png", class: "mysql"},
    firebase: {iconUrl: "../../assets/logos/firebase.png", class:"firebase"}
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
        iconsUrl: [i.angular.iconUrl, i.typescript.iconUrl, i.ngMaterial.iconUrl, i.tailwind.iconUrl, i.scss.iconUrl]
    },
    {
        name: "ITA Challenges",
        description: "Project I worked at as an internship at IT Academy (July 2023). It is a programming challenges website, aimed to be a useful tool for students at the academy. Still in progress.",
        url: "https://github.com/roger-mir-min/ita-challenges-frontend",
        imgUrl: "../assets/images/ITA-logo.jpeg",
        iconsUrl: [i.angular.iconUrl, i.typescript.iconUrl, i.ngBootstrap.iconUrl, i.jasmine.iconUrl, i.karma.iconUrl, i.mysql.iconUrl]
    },
];

export const individualProjects: project[] = [
    {
        name: "Activicat",
        description: "My main project (in progress). A website with exercises to practice Catalan. You can sign up as a student or teacher, or just practice.",
        url: "www.activicat.cat",
        imgUrl: "../assets/images/activicat.png",
        iconsUrl: [i.angular.iconUrl, i.ngBootstrap.iconUrl, i.ngMaterial.iconUrl, i.nodeSvg.iconUrl, i.aws.iconUrl, i.mysql.iconUrl]
    },
    {
        name: "Crearse - Psicología y arte",
        description: "Professional website for a psychologist. She can log as admin and modify almost all the text (+text format). For that I used Kolkov Angular Editor. Chore: Angular (full standalone, service workers), Tailwind, Firebase. I applied performance, SEO and accessibility criteria.",
        url: "crearse-a80cc.firebaseapp.com/",
        imgUrl: "../assets/images/crearse.png",
        iconsUrl: [i.angular.iconUrl, i.typescript.iconUrl, i.tailwind.iconUrl, i.ngKolkov.iconUrl]
    },
    {
        name: "El senyor de cada dia",
        description: "An app where you can create and store your own points of interest and routes in a map. Made with Leaflet and Angular: Angular Signals and Standalone Components :)",
        url: "https://roger-mir-min.github.io/elsenyorde/",
        imgUrl: "../assets/images/elsenyorde2.png",
        iconsUrl: [i.angular.iconUrl, i.typescript.iconUrl, i.ngBootstrap.iconUrl, i.leaflet.iconUrl]
    },
    {
        name: "Star Wars Starships",
        description: "An authentication process (localstorage) allows users to access informational cards about Star Wars movies, fetched from the APIs from https://swapi.dev/ and https://starwars-visualguide.com/#/)).",
        url: "https://roger-mir-min.github.io/ITAcademy-8-SW-Starships/",
        imgUrl: "../assets/images/sw.png",
        iconsUrl: [i.angular.iconUrl, i.typescript.iconUrl, i.ngBootstrap.iconUrl]
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