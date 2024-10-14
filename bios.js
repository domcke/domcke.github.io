fetch('bios.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('team-container');
        data.forEach(member => {
            const card = `
                <div class="content-box">
                    <div class="content-left">
                        <div class="content-image">
                            <img src="${member.image}" alt="${member.name}">
                        </div>
                        <h2>${member.name}</h2>
                        <h3>${member.role}</h3>
                        ${member.role === 'Principal Investigator' ? `<p style="color: rgb(94, 153, 168); margin-top: 0; text-align: center; font-size: 0.9em;">silvia.domcke[a]uzh.ch</p>` : ''}
                        <div class="social-links">
                            <a href="${member.linkedin}" target="_blank" class="social-link">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="${member.x}" target="_blank" class="social-link">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="${member.github}" target="_blank" class="social-link">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div class="content-text">
                        <p>${member.bio}</p>
                        <p>${member.extra}</p>
                    </div>
                </div>`;
            container.innerHTML += card;
        });
    })
    .catch(error => console.error('Error loading team data:', error));
