import Adobe from '@svicons/simple-icons/adobe.svelte';
import Autodesk from '@svicons/simple-icons/autodesk.svelte';
import Blender from '@svicons/simple-icons/blender.svelte';
import Bootstrap from '@svicons/simple-icons/bootstrap.svelte';
import Canva from '@svicons/simple-icons/canva.svelte';
import Css3 from '@svicons/simple-icons/css3.svelte';
import Figma from '@svicons/simple-icons/figma.svelte';
import Firebase from '@svicons/simple-icons/firebase.svelte';
import Flask from '@svicons/simple-icons/flask.svelte';
import Git from '@svicons/simple-icons/git.svelte';
import Html5 from '@svicons/simple-icons/html5.svelte';
import Java from '@svicons/simple-icons/java.svelte';
import Javascript from '@svicons/simple-icons/javascript.svelte';
import Jquery from '@svicons/simple-icons/jquery.svelte';
import Mongodb from '@svicons/simple-icons/mongodb.svelte';
import Mysql from '@svicons/simple-icons/mysql.svelte';
import Nextdotjs from '@svicons/simple-icons/nextdotjs.svelte';
import Nodedotjs from '@svicons/simple-icons/nodedotjs.svelte';
import Python from '@svicons/simple-icons/python.svelte';
import React from '@svicons/simple-icons/react.svelte';
import Sass from '@svicons/simple-icons/sass.svelte';
import Svelte from '@svicons/simple-icons/svelte.svelte';
import Tailwindcss from '@svicons/simple-icons/tailwindcss.svelte';
import Typescript from '@svicons/simple-icons/typescript.svelte';
import Vuedotjs from '@svicons/simple-icons/vuedotjs.svelte';

import FaDrum from 'svelte-icons/fa/FaDrum.svelte';
import FaPenSquare from 'svelte-icons/fa/FaPenSquare.svelte';
import FaGuitar from 'svelte-icons/fa/FaGuitar.svelte';
import GiPianoKeys from 'svelte-icons/gi/GiPianoKeys.svelte';
import type { SvelteComponent } from 'svelte';

import Instagram from '@svicons/simple-icons/instagram.svelte';
import Facebook from '@svicons/simple-icons/facebook.svelte';
import Linkedin from '@svicons/simple-icons/linkedin.svelte';
import Github from '@svicons/simple-icons/github.svelte';
import Email from '@svicons/simple-icons/gmail.svelte';

type Social = {
	icon: typeof SvelteComponent;
	href: string;
};

export const socials: Social[] = [
	{
		icon: Instagram,
		href: 'https://www.instagram.com/sne.k152/'
	},
	{
		icon: Facebook,
		href: 'https://www.facebook.com/snehilkakani/'
	},
	{
		icon: Linkedin,
		href: 'https://linkedin.com/in/snehilkakani'
	},
	{
		icon: Github,
		href: 'https://github.com/snek152'
	},
	{
		icon: Email,
		href: 'mailto:kakanisnehil@gmail.com?body=%0A%0A%0A%0A%0A%0A%0ASent from snehilkakani.me: the official website of Snehil Kakani.'
	}
];

type NavLink = {
	title: string;
	href: string;
};

export const navLinks: NavLink[] = [
	{
		title: 'Home',
		href: '/'
	},
	{
		title: 'About',
		href: 'about'
	},
	{
		title: 'Expertise',
		href: 'expertise'
	},
	{
		title: 'Projects',
		href: 'projects'
	},
	{
		title: 'Contact',
		href: 'contact'
	}
];

type Skill = {
	name: string;
	progress: number;
	learning?: boolean;
	icon: typeof SvelteComponent;
};

export const codingSkills: Skill[] = [
	{
		name: 'React',
		progress: 95,
		icon: React
	},
	{
		name: 'Next.js',
		progress: 95,
		icon: Nextdotjs
	},
	{
		name: 'HTML',
		progress: 95,
		icon: Html5
	},
	{
		name: 'Git',
		progress: 90,
		icon: Git
	},
	{
		name: 'Tailwind',
		progress: 90,
		icon: Tailwindcss
	},
	{
		name: 'CSS',
		progress: 90,
		icon: Css3
	},
	{
		name: 'Svelte',
		progress: 90,
		icon: Svelte
	},
	{
		name: 'Javascript',
		progress: 90,
		icon: Javascript
	},
	{
		name: 'Typescript',
		progress: 90,
		icon: Typescript
	},
	{
		name: 'Bootstrap',
		progress: 85,
		icon: Bootstrap
	},
	{
		name: 'Firebase',
		progress: 85,
		icon: Firebase
	},
	{
		name: 'jQuery',
		progress: 80,
		icon: Jquery
	},
	{
		name: 'Python',
		progress: 80,
		icon: Python
	},
	{
		name: 'Java',
		progress: 80,
		icon: Java
	},
	{
		name: 'Node.js',
		progress: 70,
		icon: Nodedotjs
	},
	{
		name: 'Sass',
		progress: 70,
		icon: Sass
	},
	{
		name: 'Flask',
		progress: 70,
		icon: Flask
	},
	{
		name: 'Vue.js',
		progress: 50,
		icon: Vuedotjs
	},
	{
		name: 'MongoDB',
		progress: 15,
		learning: true,
		icon: Mongodb
	},
	{
		name: 'MySQL',
		progress: 15,
		learning: true,
		icon: Mysql
	}
];

export const designSkills: Skill[] = [
	{
		name: 'Canva',
		progress: 90,
		icon: Canva
	},
	{
		name: 'TinkerCAD',
		progress: 85,
		icon: Autodesk
	},
	{
		name: 'Procreate',
		progress: 80,
		icon: FaPenSquare
	},
	{
		name: 'Figma',
		progress: 70,
		icon: Figma
	},
	{
		name: 'Blender',
		progress: 15,
		learning: true,
		icon: Blender
	},
	{
		name: 'Creative Cloud',
		progress: 15,
		learning: true,
		icon: Adobe
	}
];

export const musicSkills: Skill[] = [
	{
		name: 'Drums',
		progress: 85,
		icon: FaDrum
	},
	{
		name: 'GarageBand',
		progress: 75,
		icon: FaGuitar
	},
	{
		name: 'Piano',
		progress: 50,
		icon: GiPianoKeys
	}
];

type Testimonial = {
	testimonial: string;
	name: string;
};

export const testimonials: Testimonial[] = [
	{
		testimonial:
			"I've known Snehil for quite a while now, and he is very self-driven and someone who will consistently follow through on his word.  For the past year or so, he has helped me create the webpage for STEMist, dedicating hours each week to fixing bugs and improving the site.  His web development skills have made creating the webpage so much easier, because I can rely on him instead of some wacky online website builder.  He transformed the website from a weebly page to what it is today, implementing design requests as soon as I pointed out some error.  It's been great working with Snehil both as a friend and as a teamate!",
		name: 'Steve Yang, Founder and CEO of STEMist Education'
	},
	{
		testimonial:
			'I highly recommend Snehil Kakani as a website developer and designer. He has done an outstanding job designing the website for the nonprofit organization Care for our Common Home Foundation from scratch, capturing my vision perfectly and with an attention to detail that has resulted in a website that exceeds my expectations. Snehil is reliable, communicative, and a pleasure to work with. I am delighted with his work and I would not hesitate to collaborate with him again in the future.',
		name: 'Eleanor Koo, Founder and CEO of CFOCH Foundation'
	}
];

type Project = {
	image: string;
	title: string;
	description: string;
	url: string;
	buttonText: string;
	type: 'cs' | 'design' | 'music' | 'drama' | ('cs' | 'design' | 'music' | 'drama')[];
	chips?: string[];
};

export const professionalProjects: Omit<Project, 'type'>[] = [
	{
		title: 'Director of Technology - STEMist Education',
		description:
			'As Director of Technology at STEMist, I designed and constructed the website using React, Next.js, and Tailwind working with my subordinates, as well as leading several other tech projects.',
		image: '/images/stemist.webp',
		url: 'https://joinstemist.org',
		buttonText: 'check it out',
		chips: ['React', 'Next.js', 'Tailwind', 'Typescript']
	},
	{
		title: 'Website Developer and Designer - Care for our Common Home',
		description:
			'As a freelance web developer for CFOCH, my responsibility was to design and build a new website for their organization from scratch.',
		image: '/images/cfoch.webp',
		url: 'https://cfoch.org',
		buttonText: 'check it out',
		chips: ['React', 'Next.js', 'Tailwind', 'Figma', 'Typescript']
	},
	{
		title: 'Beat Box - Music Album',
		description:
			'My first album, produced entirely by me, is an amalgamation of my musical interests and inspirations. It is a collection of nine songs, each with a different genre and style.',
		image: '/images/beatbox.webp',
		url: 'https://soundcloud.com/snek152/sets/beat-box',
		buttonText: 'listen on soundcloud'
	}
];

export const projects: Project[] = [
	{
		title: 'Romeo and Juliet Spring Outdoor Show 2022 - LHS Studio 74',
		type: 'drama',
		image: '/images/romeojuliet2122.webp',
		description:
			"In Lynbrook High School Studio 74's Spring Outdoor show, I was cast as the County Paris in the play Romeo and Juliet, performing through May 2022.",
		url: 'https://youtu.be/ngWYAiN_Yh8',
		buttonText: 'watch the recording'
	},
	{
		title: 'JS Barrels - A CLI for Generating Javascript and Typescript Barrels',
		description:
			'JS-Barrels is a CLI to create barrel files, or files that re-export all the files in a directory, for Javascript and Typescript projects.',
		image: '/images/jsbarrels.webp',
		url: 'https://github.com/snek152/js-barrels',
		type: 'cs',
		buttonText: 'view on github',
		chips: ['Typescript', 'Node.js']
	},
	{
		title: 'Next.js Utilities - A Collection of Utilities for Next.js Projects',
		description:
			'Nextjs-utilities is a collection of helpers and utilities to simplify the Next.js developer experience in large and small scale projects alike.',
		image: '/images/nextjsutils.webp',
		url: 'https://github.com/snek152/nextjs-utilities',
		type: 'cs',
		buttonText: 'view on github',
		chips: ['Typescript', 'Next.js']
	},
	{
		title: 'Typescript Library Template - A Template for Creating Typescript Libraries with Ease',
		description:
			'TS-lib-template is an extremely powerful, batteries-included template for creating Typescript libraries with ease, including many utilities out of the box.',
		image: '/images/tslibtemplate.webp',
		url: 'https://github.com/snek152/ts-lib-template',
		type: 'cs',
		buttonText: 'view on github',
		chips: ['Typescript', 'Github Actions', 'Node.js']
	},
	{
		title: 'Drum Performance 2021',
		description:
			'As part of my annual drum live performance, I performed "Riff Raff" by AC/DC on my drumset with an audience of 100+.',
		image: '/images/riffraff.webp',
		url: 'https://drive.google.com/file/d/1AFItfeM42BsmTmQjFmsahRxzP16SVbEh/view?usp=sharing',
		buttonText: 'watch now',
		type: 'music'
	},
	{
		title: 'STEAM Force - Accessible and Interactive Education Platform',
		description:
			'As my Synopsys project in 2022 (winning an Honorable Mention in Physical Science and Engineering), the STEAM Force is a fast education platform optimized for third world countries.',
		image: '/images/steamforce.webp',
		url: 'https://steamforce.snehilkakani.me',
		buttonText: 'check it out',
		type: 'cs',
		chips: ['React', 'Next.js', 'Firebase', 'Typescript']
	},
	{
		title: "Check Please Valentine's Day Show 2022 - LHS Studio 74",
		type: 'drama',
		image: '/images/checkplease.webp',
		description:
			"In Lynbrook High School Studio 74's Valentine's Day show, I was cast as the young Tod in the play Check Please, which was performed in February 2022.",
		url: 'https://www.playscripts.com/play/202',
		buttonText: 'view on playscript'
	},
	{
		title: 'Sword Selection - A Minecraft Mod',
		type: 'cs',
		image: '/images/swordselection.webp',
		description:
			'My first mod for Minecraft with over 1.5k downloads, Sword Selection is a mod that adds all kinds of swords to the game such as daggers, longswords, sickles, and more!',
		url: 'https://swordselection.snehilkakani.me',
		buttonText: 'learn more',
		chips: ['Java', 'Minecraft Forge', 'Gradle']
	},
	{
		title: 'Georepair - An Open-Source Project',
		description:
			"As YoungWonks's 2021 Summer Open Source Project, GeoRepair is a geotagging web application and mobile app allowing users to scan broken public-owned objects.",
		chips: ['Bootstrap', 'Vue.js', 'Flask'],
		image: '/images/georepair.webp',
		url: 'https://github.com/youngwonks/ywsos2021_web',
		type: 'cs',
		buttonText: 'learn more'
	},
	{
		title: 'Drum Recording 2021',
		description:
			'As part of my annual drum showcase, I played "Whistle" by Flo Rida on my drumset.',
		image: '/images/drums2021.webp',
		url: 'https://youtu.be/oCek4xPO3yw',
		buttonText: 'watch now',
		type: 'music'
	},
	{
		title: 'YEI - Econ Concepts and Instagram Posts',
		type: 'design',
		image: '/images/econconcepts.webp',
		description:
			'As part of the YEI, I designed many econ concept posts for Instagram, as well as various stories and announcements.',
		url: 'https://drive.google.com/drive/folders/1p9jnuJM7ywy8azSGWwqjG6bF8lpHrp2B?usp=sharing',
		buttonText: 'view on drive'
	},
	{
		title: 'React Web Calculator',
		type: 'cs',
		image: '/images/calculator.webp',
		chips: ['React', 'Tailwind'],
		description:
			'Using React and Tailwind, I built a simple basic and scientific calculator for the web, optimized as a PWA.',
		url: 'https://calculator.snehilkakani.me',
		buttonText: 'check it out'
	},
	{
		title: 'Dook - An Opportunity App',
		description:
			"As part of Elevate the Future's Project Falcon, myself and other web developers created a website for Dook to promote their platform.",
		buttonText: 'check it out',
		image: '/images/dook.webp',
		url: 'https://dookapp.com',
		type: 'cs',
		chips: ['Bootstrap']
	},
	{
		title: 'Music Album Covers',
		description:
			'Using Canva, I designed a multidude of album covers for each song in my album Beat Box as if it were a single.',
		url: 'https://drive.google.com/drive/folders/19Uw374XJPUG6UCvEFpKNgzGgS0rzwi6G?usp=sharing',
		buttonText: 'view on drive',
		image: '/images/albumcovers.webp',
		type: 'design'
	}
];
