import {
	javascript,
	html,
	css,
	reactjs,
	tailwind,
	git,
	figma,
	docker,
	threejs,
	c,
	cpp,
	drapeau,
	concierge,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "À propos",
	},
	{
		id: "work",
		title: "Mes Projets",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "c",
		icon: c,
	},
	{
		name: "cpp",
		icon: cpp,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];



const projects = [
	{
		name: "FDF",
		description:
			"Le projet FDF (fil de fer) consiste à créer une representation graphique en 3 dimensions d'une carte en relief. Le logiciel lit un fichier contenant les coordonnées d'une série de points et les affiche en utilisant une projection en perspective. L'objectif est de pratiquer les concepts de la programmation graphique tels que la manipulation de la matrice de transformation et l'affichage de primitives graphiques simples.",
		tags: [
			{
				name: "C",
				color: "blue-text-gradient",
			},
			{
				name: "miniLibX",
				color: "text-yellow-200",
			},
			{
				name: "42",
				color: "pink-text-gradient",
			},
		],
		image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*wCElM3ErppHD6-cEb3yeiw.png",
		source_code_link: "https://github.com/Thpham-v/fdf_linux",
	},
	{
		name: "Cub3d",
		description:
			"Au cours de ce projet, nous avons du développer un jeu en 3D en utilisant les fonctionnalités de la bibliothèque miniLibX, notamment les fonctions de dessin de lignes, de tracé de formes géométriques et de gestion de la mémoire. Il est également nécessaire de mettre en place des algorithmes pour gérer les mouvements et les interactions du joueur avec l'environnement et donc de comprendre le fonctionnement du raycasting.",
		tags: [
			{
				name: "C",
				color: "blue-text-gradient",
			},
			{
				name: "raycasting",
				color: "green-text-gradient",
			},
			{
				name: "miniLibX",
				color: "text-yellow-200",
				
			},
			{
				name: "42",
				color: "pink-text-gradient",
			},
		],
		image: "https://playminigames.net/content/gameimagecontent/wolf3d_4614a1e14779414ca9329670367b642d.png",
		source_code_link: "https://github.com/Thpham-v/cub3d",
	},
	{
		name: "Philosophers",
		description:
			"Philosophers est un projet de développement de programme qui a pour objectif de simuler l'exécution concurrente d'un groupe de philosophes. Les philosophes passent leur temps à réfléchir et à manger à une table avec des couverts. Le but du projet est de gérer la synchronisation entre les philosophes(gestion de multi threads) pour éviter les conflits d'accès aux ressources (couverts) et éviter les problèmes tels que les décès de faim et la boucle d'attente.",
		tags: [
			{
				name: "C",
				color: "blue-text-gradient",
			},
			{
				name: "multithreads",
				color: "green-text-gradient",
			},
			{
				name: "42",
				color: "pink-text-gradient",
			},
		],
		image: "https://42.fr/wp-content/uploads/2021/08/42.jpg",
		source_code_link: "https://github.com/Thpham-v/philosophers",
	},
	{
		name: "Site Drapeau",
		description:
			"Site de pays qui permet aux utilisateurs de découvrir les drapeaux du monde entier et les informations sur leurs populations. Avec des options de tri par continent ou par ordre croissant / décroissant. Récupération et utilisation d'une API publique pour afficher les drapeaux ou d'autres données.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "api",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "text-yellow-200",
			},
			{
				name: "javascript",
				color: "pink-text-gradient",
			},
		],
		image: drapeau,
		source_code_link: "https://thpham-v.github.io/drapeau/#/",
	},
	{
		name: "Inception",
		description:
			"Le projet inception consiste à mettre en place une mini-infrastructure de différents services en utilisant Docker et Docker Compose.",
		tags: [
			{
				name: "dockerfile",
				color: "blue-text-gradient",
			},
			{
				name: "docker",
				color: "green-text-gradient",
			},
			{
				name: "42",
				color: "pink-text-gradient",
			},
		],
		image: "https://jolicode.com/media/original/2013/10/homepage-docker-logo.png",
		source_code_link: "https://github.com/Thpham-v/Inception",
	},
	{
		name: "Site Conciergerie",
		description:
			"Maquette de la page d'accueil que j'ai créée en React JS pour une petite entreprise qui ouvrira bientôt ses portes",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "html",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "text-yellow-200",
			},
			{
				name: "javascript",
				color: "pink-text-gradient",
			},
		],
		image: concierge,
		source_code_link: "https://www.linkedin.com/feed/update/urn:li:activity:7054118853282295808/",
	},
];

export { technologies, projects };