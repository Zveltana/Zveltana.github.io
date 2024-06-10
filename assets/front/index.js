$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $('#chevron').removeClass('hidden');
    } else {
        $('#chevron').addClass('hidden');
    }
});

if (window.location.pathname === '/index.html'){
    document.addEventListener('DOMContentLoaded', () => {
        const curtain = document.getElementById('curtain');

        function closeCurtain(callback) {
        curtain.classList.remove('opening');
        curtain.classList.add('closing');
        setTimeout(() => {
            callback();
        }, 1000); // Durée de l'animation
        }

        function setColorAndCloseCurtain(color, href) {
        curtain.style.backgroundColor = color;
        curtain.style.display = 'block'; // Afficher le rideau immédiatement
        closeCurtain(() => {
            window.location.href = href;
            setTimeout(() => {
            curtain.style.display = 'none';
            }, 500);
        });
        }

        document.getElementById('pinkPart').addEventListener('click', (e) => {
        e.preventDefault();
        setColorAndCloseCurtain('#e4bab0', 'realisations.html');
        });

        document.getElementById('greenPart').addEventListener('click', (e) => {
        e.preventDefault();
        setColorAndCloseCurtain('#51665D', 'about.html');
        });
    });
}

if (window.location.pathname === '/realisations.html'){
    function openModal(container) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    const image = container.querySelector('img'); 
    modalImage.src = image.src;  // Charge l'image cliquée dans le modal
    modal.classList.remove('hidden');  // Affiche le modal
    modal.classList.add('flex');  // Affiche le modal avec flex pour centrer l'image
    modal.classList.remove('scale-90'); // Anime l'ouverture de l'image

    document.body.classList.add('modal-open');
    }

    // Ajouter openModal à window pour le rendre accessible globalement
    window.openModal = openModal;

    function closeModal() {
        const modal = document.getElementById('imageModal');
        modal.classList.add('hidden');  // Cache le modal
        modal.classList.remove('flex'); // Enlève le display flex

        document.body.classList.remove('modal-open');
    }

    // Ajouter closeModal à window pour le rendre accessible globalement
    window.closeModal = closeModal;
}
