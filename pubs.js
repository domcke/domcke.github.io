// publication-script.js

document.addEventListener('DOMContentLoaded', function() {
    fetch('pubs.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('publication-container');
            data.forEach(publication => {
                let titleHtml = `<h2><a href="${publication.fulltext}" target="_blank" class="full-text-link">${publication.title}</a></h2>`;
                const card = `
                    <div class="content-box">
                        ${titleHtml}
                        ${publication.image ? `
                            <div class="content-image" style="width: ${publication.imageWidth}px; height: 150px;">
                                <img src="${publication.image}" alt="${publication.title}" style="width: 100%; height: 100%; object-fit: cover;">
                            </div>
                        ` : ''}
                        <div class="content-text">
                            <p>${publication.description}</p>
                        </div>
                    </div>`;
                container.innerHTML += card;
            });
        })
        .catch(error => console.error('Error loading publication data:', error));
});
