fetch('bios.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('team-container');
        data.forEach(member => {
            // Create social links HTML - only if the links exist
            const socialLinksHTML = `
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
                </div>`;
            const card = `
                <div class="content-box" style="display: flex; flex-direction: row; max-width: 900px; margin: 0 auto;">
                    <div class="content-left" style="flex: 0 0 250px; padding: 15px;">
                        <div class="content-image" style="width: 200px; height: 200px; overflow: hidden; margin: 0 auto; border-radius: 50%;">
                            <img src="${member.image}" alt="${member.name}">
                        </div>
                        <h2>${member.name}</h2>
                        <h3 style="width: 250px; margin: 0 auto; text-align: center;">${member.role}</h3>
                        <p style="color: white; margin-top: 0; text-align: center; font-size: 0.9em;">${member.email}</p>
                        ${socialLinksHTML}
                    </div>
                    <div class="content-text">
                        <p>${member.bio}</p>
                        <p>${member.extra}</p>
                    </div>
                </div>`;
            container.innerHTML += card;
        });
            // Add responsive CSS to maintain portrait mode stacking
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .content-box {
                    margin-bottom: 40px;
                    flex-direction: column !important;
                }
                .content-left {
                    flex: 1 !important;
                    width: 100% !important;
                }
                .content-text {
                    flex: 1 !important;
                    width: 100% !important;
                }
            }
        `;
        document.head.appendChild(style);
    })
    .catch(error => console.error('Error loading team data:', error));
