// Define experiences data
let experiences = [
    {
        company: "Target Corp.",
        location: "Minneapolis, MN",
        position: "Software Engineer",
        date: "September 2023-present",
        responsibilities: [
            "Developed a Kotlin based module for Kafka to achieve seamless data mirroring from production to stage, ensuring adherence to Avro schema standards.",
            "Implemented robust redaction mechanisms to safeguard sensitive data from being propagated to output topics.",
            "Performed unit testing of endpoints to validate functionality and security measures for authorization mechanisms.",
            "Maintained and optimized PostgreSQL DB for efficient data storage and retrieval.",
            "Developed UI Configuration Screens for viewing all Store Data.",
            "Backend stores fulfillment product, tech stack of Kotlin, Micronaut, MongoDB, Kafka, built to handle hundreds of transactions per second while maintaining low latency."
        ]
    },
    {
        company: "Bosch",
        location: "East Lansing, MI",
        position: "Software Engineer, Capstone Experience",
        date: "January 2023-April 2023",
        responsibilities: [
            "Developed a Web Interface for HIL (hardware-in-the-loop) Benches to centralize remote access for various teams across Bosch utilizing a Flask API for an instance of a HIL that sends HTTP request to allow control over the CarMaker simulation.",
            "Increased Bosch’s productivity for their Engineers by over 50% by allowing an easier and straight-forward approach to access CarMaker Simulations for autonomous vehicle testing.",
            "Created and used python automation test-suites to test vehicle control modules and collect the necessary logs to enable development teams to fix defects and prevent safety issues in production."
        ]
    },
    {
        company: "Target Corp.",
        location: "Remote",
        position: "Software Engineer Intern",
        date: "June 2022-August 2022",
        responsibilities: [
            "Leveraged the power of Spark/Scala to develop a cutting-edge automated data comparator tool for the Data Engineering Stores Planning team, streamlining data analysis and validation processes.",
            "Implemented an end-to-end real-life enterprise product utilized by Target-Tech to analyze and deploy local data visualized through Grafana."
        ]
    },
    {
        company: "College of Engineering, MSU",
        location: "East Lansing, MI",
        position: "CSE Outreach Administrator",
        date: "August 2020-April 2023",
        responsibilities: [
            "Exemplified leadership as one of many lead admins of local and international computer science outreach programs.",
            "Introduced the dynamic fields of Python programming and Web Development among a team of mentors to a diverse range of students from 6th-12th grade, with an emphasis on empowering underrepresented demographics."
        ]
    },
    {
        company: "Computer Science Department, College of Engineering, MSU",
        location: "East Lansing, MI",
        position: "Undergraduate CSE ULA",
        date: "January 2022-April 2023",
        responsibilities: [
            "Actively guided a class of 30 students in debugging, problem-solving exercises, labs, and projects.",
            "Enhanced students’ proficiency in Python programming concepts, guiding them through the difficulty of simple to complex algorithms"
        ]
    },
    {
        company: "College of Engineering, MSU",
        location: "East Lansing, MI",
        position: "Ambassador, Women in Engineering",
        date: "January 2022-April 2023",
        responsibilities: [
            "Led and administrated K-12 outreach activities like ‘Girls’ Stem Day’ and ‘Introduce a Girl to Engineering’ to recruit and encourage girls to pursue careers within the engineering field.",
            "Encouraged opportunities for academic, personal, and professional growth by organizing, leading, and planning a 6-week Leadership Series for 30+ undergraduate Women in Engineering."
        ]
    },
    {
        company: "Microsoft Teals at Microsoft",
        location: "Remote/Bloomfield Hills, Michigan",
        position: "TEALS Teacher for AP Computer Science",
        date: "August 2024-",
        responsibilities: [
            "Teaching AP Computer Science Principles to Junior-Senior Students."
        ]
    },
    {
        company: "Genysis Works Mentor",
        location: "Hybrid/Minneapolis, MN",
        position: "Genysis Works Mentor",
        date: "October 2023-",
        responsibilities: [
            "Guiding high school students as a Genysys Works mentor during their transition into tech-related fields.",
            "Empowering underrepresented talent through the provision of valuable resources, technical training, and networking opportunities.",
            "Engaging in ongoing, proactive communication with mentees to assist them in defining and realizing their career objectives."
        ]
    }
];

// Function to create experience sections
function createExperienceSections() {
    const experienceContainer = document.querySelector('.experience-container');

    experiences.forEach(experience => {
        const experienceDiv = document.createElement('div');
        experienceDiv.classList.add('experience');

        experienceDiv.innerHTML = `
            <p>${experience.company}</p>
            <p class="location">${experience.location}</p>
            <p class="position">${experience.position}</p>
            <p class="date">${experience.date}</p>
            <ul>
                ${experience.responsibilities.map(responsibility => `<li class="responsibility">${responsibility}</li>`).join('')}
            </ul>
        `;

        experienceContainer.appendChild(experienceDiv);
    });
}

// Call function to create experience sections
createExperienceSections();
