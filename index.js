


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none"; 
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('btn1').addEventListener('click', function() {
        console.log('btn1 clicked');
        displayNewButtons('Asian Cuisine', 'btn1');
    });

    document.getElementById('btn2').addEventListener('click', function() {
        console.log('btn2 clicked');
        displayNewButtons('Cakes and Desserts', 'btn2');
    });

    function displayNewButtons(message, btnClicked) {
        const newButtonsContainer = document.getElementById('new-buttons-container');
        console.log('displayNewButtons called with message:', message);
        
        newButtonsContainer.innerHTML = '';

        const newButton1 = document.createElement('button');
        newButton1.className = 'bouton';
        newButton1.textContent = message;

        let newButton2, newButton3, newButton4, newButton5, newButton6, newButton7, newButton8;

       if (btnClicked === 'btn2') {
            newButton2 = createButton('Pies');
            newButton3 = createButton('Pastries');
            newButton4 = createButton('Breads');
            newButton5 = createButton('Cookies and Biscuits');
        } else if (btnClicked === 'btn1') {
            newButton6 = createButton('European Cuisine');
            newButton7 = createButton('Oriental Cuisine');
            newButton8 = createButton('American cuisine');
        }
        
        newButtonsContainer.appendChild(newButton1);
         if (newButton2) newButtonsContainer.appendChild(newButton2);
         if (newButton3) newButtonsContainer.appendChild(newButton3);
         if (newButton4) newButtonsContainer.appendChild(newButton4);
         if (newButton5) newButtonsContainer.appendChild(newButton5);
         if (newButton6) newButtonsContainer.appendChild(newButton6);
         if (newButton7) newButtonsContainer.appendChild(newButton7);
        if (newButton8) newButtonsContainer.appendChild(newButton8);
        
        newButtonsContainer.scrollIntoView({ behavior: 'smooth' });
    }

   function createButton(text) {
        const newButton = document.createElement('button');
        newButton.className = 'bouton';
        newButton.textContent = text;
        return newButton;
    }
});


