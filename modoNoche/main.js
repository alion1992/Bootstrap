const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
        const body = document.body;

        toggleDarkModeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            toggleDarkModeBtn.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Noche';
        });