function filterProjects(category) {
  let projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    if (category === 'all' || project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
