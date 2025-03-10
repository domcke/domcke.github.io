fetch('bios.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('team-container');
        
        // Clear container first to ensure we don't have duplicate content
        container.innerHTML = '';
        
        data.forEach(member => {
            // Handle optional properties safely
            const socialLinks = `
                <div class="social-links">
                    ${member.linkedin ? `<a href="${member.linkedin}" target="_blank" class="social-link">
                        <i class="fab fa-linkedin"></i>
                    </a>` : ''}
                    ${member.x ? `<a href="${member.x}" target="_blank" class="social-link">
                        <i class="fab fa-twitter"></i>
                    </a>` : ''}
                    ${member.github ? `<a href="${member.github}" target="_blank" class="social-link">
                        <i class="fab fa-github"></i>
                    </a>` : ''}
                </div>
            `;
            
            const card = `
                <div class="content-box">
                    <div class="content-left">
                        <div class="content-image">
                            <img src="${member.image}" alt="${member.name || ''}">
                        </div>
                        <h2>${member.name}</h2>
                        <h3>${member.role}</h3>
                        ${member.email ? `<p style="color: white; margin-top: 0; text-align: center; font-size: 0.9em;">${member.email}</p>` : ''}
                        ${socialLinks}
                    </div>
                    <div class="content-text">
                        <p>${member.bio || ''}</p>
                        <p>${member.extra || ''}</p>
                    </div>
                </div>`;
                
            container.innerHTML += card;
        });
    })
    .catch(error => {
        console.error('Error loading team data:', error);
        // Show error message to user
        document.getElementById('team-container').innerHTML = '<p>Error loading team data. Please try again later.</p>';
    });