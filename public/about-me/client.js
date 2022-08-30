$.getJSON("about-me/data.json", (data) => {
	for (i = 0; i < data.length; i++) {
		const projectData = data[i];
		const project = `<div class="row row-${(i%2)+1}">
                            <section>
                                <div class="icon">
                                    <img class="icon-img" src="${projectData.icon}">
                                </div>
                                <div class="details">
                                    <span class="title">${projectData.year}</span>
                                </div>
                                <p>${projectData.description}</p>
                            </section>
                        </div>`;
		$("#timeline").append(project);
	}
});