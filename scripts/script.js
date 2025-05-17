


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
            const item = document.createElement('li');
            item.className = 'project';
            item.innerHTML = `<h1>${project.name}</h1><p>${project.desc}</p>`;
            container.appendChild(item);
        });
    })
    .catch(err => {
        console.error('Error loading JSON:', err);
    });