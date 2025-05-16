


fetch('../content/index-content.json')
    .then(response => response.json())
    .then(data => {
        const aboutText = data.about.text.replace(/\n/g, '<br>')
        document.getElementById('bio').innerHTML = aboutText;
    })
    .catch(err => {
        console.error('Error loading JSON:', err);
    });