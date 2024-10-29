document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills-section');
    toggleButton.addEventListener('click', function () {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    });
});
