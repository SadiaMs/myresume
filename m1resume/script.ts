document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsSection = document.getElementById('skills-section') as HTMLElement;

    toggleButton.addEventListener('click', () => {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    });
});