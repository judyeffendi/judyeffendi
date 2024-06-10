const text = "• Life-Long Learner •Traveler •Developer";
const element = document.getElementById('typing-text');

function typeWriter(text, i, callback) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i, callback);
        }, 100); 
    } else {
        if (typeof callback === 'function') {
            callback();
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriter(text, 0);
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.collage-container img');
    
    images.forEach(image => {
        image.addEventListener('click', () => {
            console.log(`Image ${image.alt} clicked`);
            // Here you can add functionality to display the image in a modal, for example.
        });
    });
});
