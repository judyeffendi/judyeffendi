class Typewriter {
    constructor(elementId, text) {
        this.element = document.getElementById(elementId);
        this.text = text;
        this.i = 0;
    }

    typeWriter() {
        if (this.i < this.text.length) {
            this.element.innerHTML += this.text.charAt(this.i);
            this.i++;
            setTimeout(() => {
                this.typeWriter();
            }, 100);
        }
    }
}

class WorkoutDescription {
    constructor() {
        this.descriptions = {
            'strength-1': '3 squats',
            'strength-2': '5 push-ups',
            'strength-3': '10 lunges',
            'cardio-1': '5 minutes of running',
            'cardio-2': '10 minutes of cycling',
            'cardio-3': '15 minutes of jumping rope',
        };

        document.getElementById('strength-workout').addEventListener('change', (event) => this.displayDescription('strength'));
        document.getElementById('cardio-workout').addEventListener('change', (event) => this.displayDescription('cardio'));
    }

    displayDescription(type) {
        const selectElement = document.getElementById(type + '-workout');
        const selectedValue = selectElement.value;
        const descriptionText = this.descriptions[selectedValue] || 'Please select a workout to see the description.';
        
        // Check if description element already exists, if yes, update the text, else create new element
        let descriptionElement = document.getElementById('description-text');
        if (!descriptionElement) {
            descriptionElement = document.createElement('p');
            descriptionElement.id = 'description-text';
            descriptionElement.classList.add('description-text', 'text-black');
            document.querySelector('.container').appendChild(descriptionElement);
        }

        descriptionElement.innerText = descriptionText;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const workoutDescription = new WorkoutDescription();
});


document.addEventListener("DOMContentLoaded", function() {
    const typewriter = new Typewriter("typing-text", "• Life-Long Learner •Traveler •Developer");
    typewriter.typeWriter();
});
