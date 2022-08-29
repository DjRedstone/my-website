$.getJSON("portfolio/data.json", (data) => {
	for (i = 0; i < data.length; i++) {
		const projectData = data[i];
		const project = `<div class="project">
											<img class="project-img" src="${projectData.image}">
											<h1 class="project-title">${projectData.name}</h1>
											<p class="project-description">${projectData.description}</p>
											<a class="project-link link" href="${projectData.link}">Lien du project</a>
											<a class="project-repository-link link" href="${projectData.repositoryLink}">Lien du code source</a>
										</div>`;
		$("#projects").append(project);
	}
});