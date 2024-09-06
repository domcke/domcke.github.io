fetch('pubs.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('publication-container');
        data.forEach(publication => {
            const card = `
                <div class="content-box">
                    <h2><a href="${publication.fulltext}" target="_blank" class="full-text-link">${publication.title}</a></h2>
                    <div class="content-image" style="width: ${publication.imageWidth}px; height: 150px;">
                        <img src="${publication.image}" alt="${publication.title}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="content-text">
                        <p>${publication.description}</p>
                    </div>
                </div>`;
            container.innerHTML += card;
        });
    })
    .catch(error => console.error('Error loading publication data:', error));
