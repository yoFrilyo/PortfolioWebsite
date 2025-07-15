// script.js
// Owen Gallegos



fetch('content/index-content.json')
    .then(res => res.json())
    .then(data => {
        // hero
        document.getElementById('hero-helper').innerHTML = data.hero.helper
        document.getElementById('name').innerHTML = data.hero.title;

        // about
        const aboutText = data.about.text.replace(/\n/g, '<br>')
        document.getElementById('bio').innerHTML = aboutText;

        // portfolio
        const container = document.getElementById('project-list');
        data.portfolio.forEach(project => {
            const outerItem = document.createElement('a');
            const innerItemLeft = document.createElement('div');
            const innerItemRight = document.createElement('div');
            outerItem.href = project.link;
            outerItem.target= "_blank";
            outerItem.rel="noopener noreferrer"
            outerItem.className = 'project hoverable';
            innerItemLeft.className = 'project-left';
            innerItemRight.className = 'project-right';
            innerItemLeft.innerHTML = `<h1 class="project-title">${project.name}</h1><p class="description">${project.desc}</p>`;
            innerItemRight.innerHTML = `<p class="project-date">${project.date}</p><img class="project-image rounded-image" src="${project.image}>`;
            
            outerItem.appendChild(innerItemLeft);
            outerItem.appendChild(innerItemRight);
            container.appendChild(outerItem);
        });

        // footer
        const footerContainer = document.getElementById('footer');
        const buildText = document.createElement('p');
        const versionText = document.createElement('p');
        const copyrightText = document.createElement('p');
        buildText.className = "footer-text";
        versionText.className = "footer-text";
        copyrightText.className = "footer-text";
        buildText.innerHTML = data.footer.build;
        versionText.innerHTML = `Version ${data.footer.version}`;
        copyrightText.innerHTML = data.footer.copyright;
        footerContainer.appendChild(buildText);
        footerContainer.appendChild(versionText);
        footerContainer.appendChild(copyrightText);
    })
    .catch(err => {
        console.error('Error loading JSON:', err);
    });



    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-direct");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
});



function adjustHomeHeight()
{
    const navHeight = document.querySelector('.flex-container-spread-row').offsetHeight;
    document.querySelector('.home').style.minHeight = `calc(100vh - ${navHeight}px)`;
}

window.addEventListener('DOMContentLoaded', adjustHomeHeight);
window.addEventListener('resize', adjustHomeHeight);



const modal = document.getElementById("contactModal");
const link = document.getElementById("contactLink");
const close = document.querySelector(".close");

link.onclick = (event) => {
    event.preventDefault();
    modal.style.display = "block";
    document.body.classList.add("modal-open");
};

close.onclick = () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open")
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
};