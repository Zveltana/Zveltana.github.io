/*// Sélectionnez le conteneur
const container = document.getElementById('realisation-container');

// Tableau des réalisations
const realisations = [
    {
        size: "row-span-2",
        imageSrc: "build/front/images/realisations/P25-femme.webp",
        alt: "P25 femme",
        title: "All in Padel Sports",
        fontSize: "2xl",
        description: " Réalisation d'une affiche pour un P25 Femmes.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-9 w-9",
    },
    {
        size: "h-40",
        imageSrc: "build/front/images/realisations/logo-akawaka.svg",
        alt: "logo akawaka",
        title: "AKAWAKA",
        fontSize: "xl",
        description: " Réalisation d'un logo ainsi que d'une identité graphique pour leur agence.",
        bodySize: "base",
        showAiSVG: true,
        showAiSVGSize: "h-8 w-8",
        showPsSVG: false,
    },
    {
        size: "col-span-2 row-span-6",
        imageSrc: "build/front/images/realisations/all-in-octobre.webp",
        alt: "all in octobre",
        title: "All in Padel Sports",
        fontSize: "3xl",
        description: " Réalisation d'une affiche pour leur programme du mois d'octobre. Création d'un QR code permettant d'accéder à toutes les informations sur le site web concernant l'événement halloween au sein du club.",
        bodySize: "xl",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-10 w-10",
    },
    {
        size: "h-40",
        imageSrc: "build/front/images/realisations/logo-ti-jan.webp",
        alt: "logo Ti Jan",
        title: "Ti Jan",
        fontSize: "2xl",
        description: " Réalisation d'un logo pour un musicien.",
        bodySize: "lg",
        showAiSVG: true,
        showAiSVGSize: "h-8 w-8",
        showPsSVGSVG: false,
    },
    {
        size: "row-span-2",
        imageSrc: "build/front/images/realisations/carte-visite-akawaka.webp",
        alt: "carte de visite akawaka",
        title: "AKAWAKA",
        fontSize: "2xl",
        description: " Réalisation de la carte de visite pour leur agence.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "row-span-2",
        imageSrc: "build/front/images/realisations/carte-visite-ti-jan.webp",
        alt: "carte de visite Ti Jan",
        title: "Ti Jan",
        fontSize: "2xl",
        description: " Réalisation de la carte de visite d'un musicien.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "row-span-2",
        imageSrc: "build/front/images/realisations/journee-porte-ouverte.webp",
        alt: "journée porte ouverte all in padel sports",
        title: "All in Padel Sports",
        fontSize: "2xl",
        description: " Réalisation d'une affiche pour la journée porte ouverte de l'académie de padel.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "row-span-2",
        imageSrc: "build/front/images/realisations/logo-amares.webp",
        alt: "logo amares",
        title: "Amares",
        fontSize: "2xl",
        description: " Réalisation d'un logo pour une nouvelle entreprise qui investit dans le sport.",
        bodySize: "lg",
        showAiSVG: true,
        showAiSVGSize: "h-8 w-8",
        showPsSVG: false,
    },
    {
        size: "row-span-3",
        imageSrc: "build/front/images/realisations/laura-clergue.webp",
        alt: "stage de Laura Clergue",
        title: "All in Padel Sports",
        fontSize: "2xl",
        description: " Réalisation d'une affiche pour un event avec Laura Clergue, leur ambassadrice.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "row-span-2",
        imageSrc: "build/front/images/realisations/all-in-aout.webp",
        alt: "all in aout",
        title: "All in Padel Sports",
        fontSize: "2xl",
        description: " Réalisation d'une affiche pour le programme du mois d'août.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "h-40",
        imageSrc: "build/front/images/realisations/declinaison-logo-amares.webp",
        alt: "déclinaison logo amares",
        title: "Amares",
        fontSize: "2xl",
        description: " Déclinaison du logo amares sur les différents fonds.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "col-span-2 row-span-5",
        imageSrc: "build/front/images/realisations/flyer-loto.webp",
        alt: "flyer loto",
        title: "All in Padel Sports",
        fontSize: "3xl",
        description: " Réalisation d'une affiche pour le loto du club.",
        bodySize: "xl",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "row-span-2",
        imageSrc: "build/front/images/realisations/carte-visite-rj.webp",
        alt: "carte de visite RJ electricité",
        title: "RJ Electricité",
        fontSize: "2xl",
        description: " Création d'une carte de visite.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "row-span-2",
        imageSrc: "build/front/images/realisations/logo-RJ.webp",
        alt: "logo RJ electricité",
        title: "RJ Electricité",
        fontSize: "2xl",
        description: " Réalisation d'un logo pour une entreprise d'éléctricité.",
        bodySize: "lg",
        showAiSVG: true,
        showAiSVGSize: "h-8 w-8",
        showPsSVG: false,
    },
    {
        size: "row-span-3",
        imageSrc: "build/front/images/realisations/stage-adulte-octobre.webp",
        alt: "stage adulte octobre",
        title: "All in Padel Sports",
        fontSize: "2xl",
        description: " Réalisation d'une affiche pour un stage adulte de padel.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "h-40",
        imageSrc: "build/front/images/realisations/declinaison-logo-rj.webp",
        alt: "déclinaison logo rj electricité",
        title: "RJ Electricité",
        fontSize: "2xl",
        description: " Déclinaison du logo RJ Eléctricité.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "h-40",
        imageSrc: "build/front/images/realisations/logo-artio-coaching.webp",
        alt: "logo artio coaching",
        title: "Artio Coaching",
        fontSize: "2xl",
        description: " Réalisation d'un logo pour un coach de sport.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "row-span-2",
        imageSrc: "build/front/images/realisations/stage-adulte-juillet.webp",
        alt: "stage adulte juillet",
        title: "All in Padel Sports",
        fontSize: "2xl",
        description: " Réalisation d'une affiche pour un stage adulte de padel.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "row-span-1",
        imageSrc: "build/front/images/realisations/carte-visite-artio-coaching.webp",
        alt: "carte de visite artio coaching",
        title: "Artio Coaching",
        fontSize: "2xl",
        description: " Réalisation d'une carte de visite pour un coach de sport.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "row-span-2",
        imageSrc: "build/front/images/realisations/all-in-mars.webp",
        alt: "all in mars",
        title: "All in Padel Sports",
        fontSize: "2xl",
        description: " Réalisation d'une affiche pour le programme du mois de mars.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "row-span-4",
        imageSrc: "build/front/images/realisations/plaquette-commerciale.webp",
        alt: "plaquette commerciale akawaka",
        title: "AKAWAKA",
        fontSize: "2xl",
        description: " Réalisation d'une plaquette commerciale.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "row-span-3",
        imageSrc: "build/front/images/realisations/stage-adulte-decembre.webp",
        alt: "stage adulte décembre",
        title: "All in Padel Sports",
        fontSize: "2xl",
        description: " Réalisation d'une affiche pour un stage adulte de padel.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "row-span-3",
        imageSrc: "build/front/images/realisations/all-in-juillet.webp",
        alt: "all in juillet",
        title: "All in Padel Sports",
        fontSize: "2xl",
        description: " Réalisation d'une affiche pour le programme du mois de juillet.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "row-span-3",
        imageSrc: "build/front/images/realisations/stage-enfant.webp",
        alt: "stage enfant",
        title: "All in Padel Sports",
        fontSize: "2xl",
        description: " Réalisation d'une affiche pour un stage enfant de padel.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "row-span-2",
        imageSrc: "build/front/images/realisations/tapis-de-souris.webp",
        alt: "tapis de souris akawaka",
        title: "AKAWAKA",
        fontSize: "2xl",
        description: " Réalisation de goodies pour des salons.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
    {
        size: "h-40",
        imageSrc: "build/front/images/realisations/etiquette-biere.webp",
        alt: "étiquette de bière akawaka",
        title: "AKAWAKA",
        fontSize: "2xl",
        description: " Création d'une étiquette de bière pour la bière de noël akawaka.",
        bodySize: "lg",
        showAiSVG: false,
        showPsSVG: true,
        showPsSVGSize: "h-8 w-8",
    },
];

container.innerHTML = "";

// Fonction pour générer le HTML d'une réalisation
realisations.forEach(realisation => {
    const realisationHTML = `
        <div class="relative group ${realisation.size} cursor-pointer" onclick="openModal(this)">
            <img src="${realisation.imageSrc}" alt="${realisation.alt}" class="h-full w-full object-cover">
            <div class="absolute px-3 inset-0 bg-gradient-to-r from-pink/90 to-green/90 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                <h3 class="text-center text-dark-green font-semibold text-${realisation.fontSize}">${realisation.title}</h3>
                <p class="text-dark-green mt-3 text-center ${realisation.bodySize}"><span class="underline">Demande client :</span> ${realisation.description}</p>
                <div class="flex justify-center mt-2 gap-x-2">
                    <!-- Condition pour afficher le SVG "realisation" -->
                    ${realisation.showAiSVG ? `
                        <svg class="${realisation.showAiSVGSize} text-dark-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79 79">
                            <path d="M75,4v71H4V4H75 M79,0H0v79h79V0L79,0z" fill="currentColor"/>
                            <path class="st0" d="M46.28,57.71l-4.44-11.35H27.53l-4.39,11.35h-4.2l14.11-35.84h3.49l14.04,35.84H46.28z M40.55,42.62
                                        L36.4,31.56c-0.54-1.4-1.09-3.12-1.66-5.15c-0.36,1.56-0.87,3.28-1.54,5.15L29,42.62H40.55z" fill="currentColor"/>
                            <path class="st0" d="M54.53,23.7c0-0.93,0.23-1.61,0.68-2.04c0.46-0.43,1.03-0.65,1.71-0.65c0.65,0,1.21,0.22,1.68,0.66
                                        c0.47,0.44,0.71,1.12,0.71,2.03c0,0.91-0.24,1.59-0.71,2.04c-0.47,0.45-1.03,0.67-1.68,0.67c-0.68,0-1.25-0.22-1.71-0.67
                                        C54.76,25.29,54.53,24.61,54.53,23.7z M58.93,57.71h-4.05V30.95h4.05V57.71z" fill="currentColor"/>
                        </svg>
                    ` : ''}
                    
                    <!-- Condition pour afficher le SVG "ps" -->
                    ${realisation.showPsSVG ? `
                        <svg class="${realisation.showPsSVGSize} text-dark-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79 79">
                                <path d="M75,4v71H4V4H75 M79,0H0v79h79V0L79,0z" fill="currentColor"/>
                                <path class="st0" d="M39.11,31.99c0,3.61-1.23,6.39-3.7,8.34c-2.47,1.95-5.99,2.92-10.58,2.92h-4.2v14.04h-4.15V21.59h9.25
                                            C34.65,21.59,39.11,25.06,39.11,31.99z M20.63,39.68h3.74c3.68,0,6.34-0.59,7.98-1.78c1.64-1.19,2.47-3.09,2.47-5.71
                                            c0-2.36-0.77-4.12-2.32-5.27c-1.55-1.16-3.96-1.73-7.23-1.73h-4.64V39.68z" fill="currentColor"/>
                                <path class="st0" d="M63.23,49.98c0,2.49-0.93,4.41-2.78,5.76c-1.86,1.35-4.46,2.03-7.81,2.03c-3.55,0-6.32-0.56-8.3-1.68v-3.76
                                            c1.29,0.65,2.67,1.16,4.14,1.54c1.47,0.37,2.89,0.56,4.26,0.56c2.12,0,3.74-0.34,4.88-1.01c1.14-0.68,1.71-1.7,1.71-3.09
                                            c0-1.04-0.45-1.93-1.35-2.67c-0.9-0.74-2.67-1.62-5.29-2.62c-2.49-0.93-4.26-1.74-5.31-2.43c-1.05-0.69-1.83-1.48-2.34-2.36
                                            s-0.77-1.93-0.77-3.15c0-2.18,0.89-3.9,2.66-5.16c1.77-1.26,4.21-1.89,7.3-1.89c2.88,0,5.7,0.59,8.45,1.76l-1.44,3.3
                                            c-2.69-1.11-5.12-1.66-7.3-1.66c-1.92,0-3.37,0.3-4.35,0.9c-0.98,0.6-1.46,1.43-1.46,2.49c0,0.72,0.18,1.33,0.55,1.83
                                            c0.37,0.5,0.96,0.98,1.77,1.44c0.81,0.46,2.38,1.12,4.69,1.98c3.17,1.16,5.32,2.32,6.43,3.49C62.67,46.74,63.23,48.21,63.23,49.98z" fill="currentColor"/>
                            </svg>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    // Injectez chaque réalisation directement dans le conteneur
    container.insertAdjacentHTML('beforeend', realisationHTML);
});*/

if (window.location.pathname === '/realisations.html'){
    function openModal(container) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    const image = container.querySelector('img'); 
    modalImage.src = image.src;  // Charge l'image cliquée dans le modal
    modal.classList.remove('hidden');  // Affiche le modal
    modal.classList.add('flex');  // Affiche le modal avec flex pour centrer l'image
    modal.classList.remove('scale-90'); // Anime l'ouverture de l'image

    const fleur = document.getElementById('fleur');
    fleur.classList.add('opacity-80');

    document.body.classList.add('modal-open');
    }

    // Ajouter openModal à window pour le rendre accessible globalement
    window.openModal = openModal;

    function closeModal() {
        const modal = document.getElementById('imageModal');
        modal.classList.add('hidden');  // Cache le modal
        modal.classList.remove('flex'); // Enlève le display flex

        const fleur = document.getElementById('fleur');
        fleur.classList.remove('opacity-80');

        document.body.classList.remove('modal-open');
    }

    // Ajouter closeModal à window pour le rendre accessible globalement
    window.closeModal = closeModal;
}