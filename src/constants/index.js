import {
	javascript,
	html,
	css,
	reactjs,
	docker,
	c,
	cpp,
	yassoua,
	amoneta,
	eteos,
	nodejs,
	postgresql,
	nextjs,
	redux,
	typescript,
	prisma,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "Qui suis-je",
	},
	{
		id: "work",
		title: "Mes projets",
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
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Next JS",
		icon: nextjs,
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
		name: "redux",
		icon: redux,
	},
	{
		name: "docker",
		icon: docker,
	},
	{
		name: "node js",
		icon: nodejs,
	},
	{
		name: "postgresql",
		icon: postgresql,
	},
	{
		name: "prisma",
		icon: prisma,
	},
];



const projects = [
	{
		name: "Eteos",
		description:
			"Développement d'une solution SaaS permettant de certifier l'authenticité des produits tout au long de leur cycle de vie. Conception de l'API, gestion de la base de données, et collaboration avec une équipe Agile. Coordination avec des équipes externes pour l'intégration mobile. Mise en production sur Clever Cloud.",
		tags: [
			{
				name: "NX",
				color: "blue-text-gradient"
			},
			{
				name: "Typescript",
				color: "green-text-gradient"
			},
			{
				name: "NodeJS",
				color: "orange-neon-gradient"
			},
			{
				name: "ExpressJS",
				color: "magenta-neon-gradient"
			},
			{
				name: "PostgreSQL",
				color: "aqua-neon-gradient"
			},
			{
				name: "Prisma",
				color: "teal-neon-gradient"
			},
			{
				name: "NextJS",
				color: "lime-neon-gradient"
			},
			{
				name: "React",
				color: "yellow-neon-gradient"
			},
			{
				name: "TailwindCSS",
				color: "pink-text-gradient"
			},

		],
		image: eteos,
		source_code_link: "https://moncertificat.fr/login",
	},
	{
		name: "Yassoua",
		description:
			"Création d'un site e-commerce Shopify from scratch avec une personnalisation avancée du thème pour répondre aux besoins spécifiques du client. Optimisation de l'interface utilisateur (UI) et amélioration de l'expérience utilisateur (UX). Intégration de fonctionnalités telles que la création d'un système de wishlist pour les produits et l’ajout rapide au panier.",
		tags: [
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
			{
				name: "CSS",
				color: "green-text-gradient",
			},
			{
				name: "Javascript",
				color: "yellow-neon-gradient",
			},
			{
				name: "Liquid",
				color: "pink-text-gradient",
			},
			{
				name: "Shopify API",
				color: "cyan-neon-gradient",
			},
			{
				name: "UI/UX",
				color: "teal-neon-gradient",
			},
			{
				name: "Responsive Design",
				color: "orange-neon-gradient",
			},
		],
		image: yassoua,
		source_code_link: "https://yassoua.com/",
	},
	{
		name: "Amoneta",
		description:
			"Conception, développement et déploiement d'un site WordPress pour Amoneta Diagnostics. Ce projet a inclus la création d'une interface utilisateur intuitive et la mise en place de fonctionnalités personnalisées pour répondre aux besoins spécifiques de l'entreprise.",
		tags: [
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
			{
				name: "CSS",
				color: "green-text-gradient",
			},
			{
				name: "WordPress",
				color: "yellow-neon-gradient",
			},
			{
				name: "UI/UX",
				color: "pink-text-gradient",
			},
			{
				name: "Déploiement",
				color: "orange-neon-gradient",
			},
		],
		image: amoneta,
		source_code_link: "https://amoneta-diagnostics.com/",
	},
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
];

export { technologies, projects };