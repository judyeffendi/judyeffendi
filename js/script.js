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
            'strength-1': `
                Warm-Up (5 minutes):
                1. Dynamic Stretching (2 minutes)
                   - Leg swings (front to back): 30 seconds each leg
                   - Leg swings (side to side): 30 seconds each leg
                2. Bodyweight Exercises (3 minutes)
                   - Bodyweight squats: 1 minute
                   - Walking lunges: 1 minute
                   - High knees: 1 minute
        
                Leg Workout (25 minutes):
                1. Goblet Squats
                   - Medium Weight (15 pounds): 15 reps
                   - Heavy Weight (25 pounds): 25 reps
                   - Rest: 1 minute
                2. Step-Ups
                   - Medium Weight (15 pounds): 15 reps each leg
                   - Heavy Weight (25 pounds): 25 reps each leg
                   - Rest: 1 minute
                3. Romanian Deadlifts
                   - Medium Weight (15 pounds): 15 reps
                   - Heavy Weight (25 pounds): 25 reps
                   - Rest: 1 minute
                4. Lunges
                   - Medium Weight (15 pounds): 15 reps each leg
                   - Heavy Weight (25 pounds): 25 reps each leg
                   - Rest: 1 minute
                5. Calf Raises
                   - Medium Weight (15 pounds): 15 reps
                   - Heavy Weight (25 pounds): 25 reps
                   - Rest: 1 minute
        
                Cool Down (5 minutes):
                1. Static Stretching
                   - Hamstring stretch: 1 minute each leg
                   - Quad stretch: 1 minute each leg
                   - Calf stretch: 1 minute each leg
            `,
            'strength-2': `
                Warm-Up (5 minutes):
                1. Dynamic Stretching (2 minutes)
                   - Arm circles: 1 minute (30 seconds forward, 30 seconds backward)
                   - Shoulder shrugs: 1 minute
                2. Bodyweight Exercises (3 minutes)
                   - Push-ups: 1 minute
                   - Arm swings: 1 minute
                   - Jumping jacks: 1 minute
        
                Upper Body Workout (25 minutes):
                1. Lateral Raises
                   - Medium Weight (15 pounds): 25 reps
                   - Heavy Weight (25 pounds): 15 reps
                   - Rest: 1 minute
                2. Bicep Curls
                   - Medium Weight (15 pounds): 25 reps
                   - Heavy Weight (25 pounds): 15 reps
                   - Rest: 1 minute
                3. Hammer Curls
                   - Medium Weight (15 pounds): 25 reps
                   - Heavy Weight (25 pounds): 15 reps
                   - Rest: 1 minute
                4. Renegade Rows
                   - Medium Weight (15 pounds): 10 reps each arm
                   - Heavy Weight (25 pounds): 10 reps each arm
                   - Rest: 1 minute
                5. Push Ups (Bodyweight)
                   - 25 reps
                   - Rest: 1 minute
                6. Overhead Tricep Extensions
                   - Medium Weight (15 pounds): 25 reps
                   - Heavy Weight (25 pounds): 15 reps
                   - Rest: 1 minute
        
                Cool Down (5 minutes):
                1. Static Stretching
                   - Shoulder stretch: 1 minute each arm
                   - Tricep stretch: 1 minute each arm
                   - Bicep stretch: 1 minute each arm
            `,
            'strength-3': `
                Warm-Up (5 minutes):
                1. Dynamic Stretching (2 minutes)
                   - Arm circles: 1 minute (30 seconds forward, 30 seconds backward)
                   - Leg swings: 1 minute (30 seconds front to back, 30 seconds side to side)
                2. Bodyweight Exercises (3 minutes)
                   - Jumping jacks: 1 minute
                   - Bodyweight squats: 1 minute
                   - High knees: 1 minute
        
                Full Body Workout (25 minutes):
                1. Goblet Squats
                   - Medium Weight (15 pounds): 25 reps
                   - Heavy Weight (25 pounds): 15 reps
                   - Rest: 1 minute
                2. Push-Ups
                   - Bodyweight: 25 reps
                   - Rest: 1 minute
                3. Lateral Raises
                   - Medium Weight (15 pounds): 25 reps
                   - Heavy Weight (25 pounds): 15 reps
                   - Rest: 1 minute
                4. Bicep Curls
                   - Medium Weight (15 pounds): 25 reps
                   - Heavy Weight (25 pounds): 15 reps
                   - Rest: 1 minute
                5. Romanian Deadlifts
                   - Medium Weight (15 pounds): 25 reps
                   - Heavy Weight (25 pounds): 15 reps
                   - Rest: 1 minute
                6. Lunges
                   - Medium Weight (15 pounds): 25 reps each leg
                   - Heavy Weight (25 pounds): 15 reps each leg
                   - Rest: 1 minute
                7. Tricep Dips (Bodyweight)
                   - 25 reps
                   - Rest: 1 minute
                8. Overhead Tricep Extensions
                   - Medium Weight (15 pounds): 25 reps
                   - Heavy Weight (25 pounds): 15 reps
                   - Rest: 1 minute
                9. Hammer Curls
                   - Medium Weight (15 pounds): 25 reps
                   - Heavy Weight (25 pounds): 15 reps
                   - Rest: 1 minute
                10. Calf Raises
                   - Medium Weight (15 pounds): 25 reps
                   - Heavy Weight (25 pounds): 15 reps
                   - Rest: 1 minute
        
                Cool Down (5 minutes):
                1. Static Stretching
                   - Shoulder stretch: 1 minute each arm
                   - Tricep stretch: 1 minute each arm
                   - Bicep stretch: 1 minute each arm
                   - Hamstring stretch: 1 minute each leg
                   - Quad stretch: 1 minute each leg
                   - Calf stretch: 1 minute each leg
            `,
            'cardio-1': `
                Warm-Up (5 minutes):
                - 5 minutes of jogging at a moderate pace
        
                Long Intervals - Endurance Work (28 minutes):
                1. Interval 1
                   - 6 minutes of running at a challenging pace (70-80% effort)
                   - Rest: 2 minutes of walking or light jogging
                2. Interval 2
                   - 6 minutes of running at a challenging pace (70-80% effort)
                   - Rest: 2 minutes of walking or light jogging
                3. Interval 3
                   - 6 minutes of running at a challenging pace (70-80% effort)
                   - Rest: 2 minutes of walking or light jogging
                4. Interval 4
                   - 6 minutes of running at a challenging pace (70-80% effort)
        
                Cool Down (2 minutes
                    Cool Down (2 minutes):
                    - 2 minutes of slow jogging or walking to bring your heart rate down
                `,
                'cardio-2':  `
                Warm-Up (5 minutes):
                - 5 minutes of jogging at a moderate pace

                Sprint Intervals - Speed Work (25 Min)
                1. Sprint 1
                   - Sprint for 30 seconds at maximum effort (Speed 9-12)
                   - Rest: Walk or jog slowly for 1 minute to recover
                   Repeat the Sprint and Recovery Cycle for a total of 10 rounds. 
                2. Sprint 2
                   -  Stride for 1 minute at a fast, controlled pace
                   - Rest: Walk or jog slowly for 1 minute to recover
                   - Repeat the stride and recovery cycle for a total of 5 rounds.
        
                Cool Down (2 minutes
                    Cool Down (2 minutes):
                    - 2 minutes of slow jogging or walking to bring your heart rate down
                `, 
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
    const typewriter = new Typewriter("typing-text", "• Life-Long Learner •Traveler •Developer • 2026 Medical School Applicant");
    typewriter.typeWriter();
});
