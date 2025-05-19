


fetch('../content/index-content.json')
    .then(response => response.json())
    .then(data => {
        // hero
        document.getElementById('hero-helper').innerHTML = data.hero.helper
        document.getElementById('name').innerHTML = data.hero.title;

        //about
        const aboutText = data.about.text.replace(/\n/g, '<br>')
        document.getElementById('bio').innerHTML = aboutText;

        // portfolio
        const container = document.getElementById('project-list');
        data.portfolio.forEach(project => {
            const outerItem = document.createElement('li');
            const innerItemLeft = document.createElement('div');
            const innerItemRight = document.createElement('div');
            outerItem.className = 'project';
            innerItemLeft.className = 'project-left';
            innerItemRight.className = 'project-right';
            innerItemLeft.innerHTML = `<h1 class="project-title">${project.name}</h1><p class="description">${project.desc}</p>`;
            innerItemRight.innerHTML = `<p class="project-date">${project.date}</p><img class="project-image rounded-image" src="${project.image}>`;
            
            outerItem.appendChild(innerItemLeft);
            outerItem.appendChild(innerItemRight);
            container.appendChild(outerItem);
        });
    })
    .catch(err => {
        console.error('Error loading JSON:', err);
    });