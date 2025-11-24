document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        const section = document.querySelector(link.getAttribute('href'));

        section.classList.add('bg-gray-100');

        setInterval(() => {
            section.classList.remove('bg-gray-100');
        }, 1000);
    });
});