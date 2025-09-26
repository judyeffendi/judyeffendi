// Define experiences data
let experiences = [
    {
        company: "University of Michigan Medicine",
        location: "Ann Arbor, MI",
        position: "Research Assistant, Department of Pathology",
        date: "July 2025–Present",
        responsibilities: [
            "Filtered and analyzed breast pathology data under the mentorship of Dr. Rouba Ali-Fehmi.",
            "Contributed to research on artificial intelligence and digital pathology in collaboration with Michigan Medicine faculty.",
            "Developed and maintained the GPALM (Global Pathology and Laboratory Medicine) website, supporting international collaboration.",
            "Prepared abstracts and manuscripts focused on global pathology, medical education, and AI applications in medicine."
        ]
    },
    {
        company: "NAAMA NextGen",
        location: "Ann Arbor, MI",
        position: "Web Developer & Research Lead, National Executive Board",
        date: "July 2025–Present",
        responsibilities: [
            "Developed and launched the NAAMA NextGen website using HTML, CSS, and JavaScript.",
            "Organized and moderated national panels on AI in Medicine with leaders in pathology and biomedical informatics.",
            "Led the design of research symposium rubrics, abstracts guidelines, and poster/oral presentation standards.",
            "Co-Led the 6th National Summit, managing logistics, budgets, and speaker coordination for 300+ attendees."
        ]
    },
    {
        company: "Institute of Athletic Medicine",
        location: "Auburn Hills, MI",
        position: "Medical Assistant",
        date: "August 2025–Present",
        responsibilities: [
            "Assisted physicians in patient intake, medical history documentation, and vitals collection.",
            "Supported orthopedic and sports medicine procedures, including injections and physical exams.",
            "Maintained and updated electronic health records (EHR), ensuring accuracy and HIPAA compliance.",
            "Provided patient education on rehabilitation protocols, injury prevention, and follow-up care."
        ]
    },
    {
        company: "Target Corp.",
        location: "Minneapolis, MN",
        position: "Software Engineer",
        date: "September 2023–Present",
        responsibilities: [
            "Developed a Kotlin-based module for Kafka to achieve seamless data mirroring from production to stage, ensuring adherence to Avro schema standards.",
            "Implemented robust redaction mechanisms to safeguard sensitive data from being propagated to output topics.",
            "Performed unit testing of endpoints to validate functionality and security measures for authorization mechanisms.",
            "Maintained and optimized PostgreSQL DB for efficient data storage and retrieval.",
            "Developed UI configuration screens for viewing all store data.",
            "Built backend fulfillment product with Kotlin, Micronaut, MongoDB, Kafka, capable of handling hundreds of transactions per second with low latency."
        ]
    },
    {
        company: "Bosch",
        location: "East Lansing, MI",
        position: "Software Engineer, Capstone Experience",
        date: "January 2023–April 2023",
        responsibilities: [
            "Developed a Web Interface for HIL (hardware-in-the-loop) Benches to centralize remote access for various teams across Bosch utilizing a Flask API for an instance of a HIL that sends HTTP requests to control CarMaker simulation.",
            "Increased Bosch’s productivity for engineers by over 50% by enabling easier access to CarMaker simulations for autonomous vehicle testing.",
            "Created Python automation test-suites to test vehicle control modules and collect logs to help teams identify defects and improve safety."
        ]
    },
    {
        company: "Target Corp.",
        location: "Remote",
        position: "Software Engineer Intern",
        date: "June 2022–August 2022",
        responsibilities: [
            "Leveraged Spark/Scala to develop an automated data comparator tool for the Data Engineering Stores Planning team, streamlining data analysis and validation.",
            "Implemented an enterprise product utilized by Target-Tech to analyze and deploy local data visualized through Grafana."
        ]
    },
    {
        company: "College of Engineering, MSU",
        location: "East Lansing, MI",
        position: "CSE Outreach Administrator",
        date: "August 2020–April 2023",
        responsibilities: [
            "Led as one of the administrators of local and international computer science outreach programs.",
            "Introduced Python programming and web development to diverse K–12 students, emphasizing empowering underrepresented groups."
        ]
    },
    {
        company: "Computer Science Department, MSU",
        location: "East Lansing, MI",
        position: "Undergraduate CSE ULA",
        date: "January 2022–April 2023",
        responsibilities: [
            "Guided a class of 30 students in debugging, labs, and projects.",
            "Enhanced student proficiency in Python programming concepts, from basic to advanced algorithms."
        ]
    },
    {
        company: "College of Engineering, MSU",
        location: "East Lansing, MI",
        position: "Ambassador, Women in Engineering",
        date: "January 2020–April 2023",
        responsibilities: [
            "Led K–12 outreach events like ‘Girls’ STEM Day’ and ‘Introduce a Girl to Engineering’ to inspire girls to pursue engineering careers.",
            "Organized and led a 6-week Leadership Series for 30+ undergraduate women in engineering, fostering professional growth."
        ]
    },
    {
        company: "Microsoft TEALS",
        location: "Remote/Bloomfield Hills, MI",
        position: "TEALS Teacher for AP Computer Science",
        date: "August 2024–Present",
        responsibilities: [
            "Teaching AP Computer Science (Java OOP) to junior and senior high school students."
        ]
    },
    {
        company: "Genysis Works",
        location: "Hybrid/Minneapolis, MN",
        position: "Mentor",
        date: "October 2023–Present",
        responsibilities: [
            "Guided high school students during their transition into tech-related fields.",
            "Provided underrepresented talent with technical training, resources, and networking opportunities.",
            "Maintained proactive communication to help mentees define and achieve career objectives."
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
            <p class="text location">${experience.location}</p>
            <p class="text position">${experience.position}</p>
            <p class="text date">${experience.date}</p>
            <ul>
                ${experience.responsibilities.map(responsibility => `<li class="text responsibility">${responsibility}</li>`).join('')}
            </ul>
        `;

        experienceContainer.appendChild(experienceDiv);
    });
}

// Call function to create experience sections
createExperienceSections();
