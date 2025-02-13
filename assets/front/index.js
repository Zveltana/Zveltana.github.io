$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $('#chevron').removeClass('hidden');
    } else {
        $('#chevron').addClass('hidden');
    }
});

if (window.location.pathname === '/'){
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
