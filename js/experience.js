// js/experience.js

(function () {
  // ===== 1) YOUR SOURCE DATA (unchanged structure) =====
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
        "Co-chaired the 6th National Summit, managing logistics, budgets, and speaker coordination for 300+ attendees."
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

  // ===== 2) OPTIONAL: known links/logos for nicer headers (edit paths as needed) =====
  const orgMeta = {
    "University of Michigan Medicine": {
      link: "https://www.medicine.umich.edu/dept/pathology",
      logo: "images/logos/umich.png",
      tags: ["Pathology", "Research", "AI-in-Med"]
    },
    "NAAMA NextGen": {
      link: "https://naama.org",
      logo: "images/logos/naama.png",
      tags: ["Leadership", "Web", "AI-in-Med"]
    },
    "Institute of Athletic Medicine": {
      link: "",
      logo: "images/logos/iam.png",
      tags: ["Clinical", "Sports Med"]
    },
    "Target Corp.": {
      link: "https://www.target.com",
      logo: "images/logos/target.png",
      tags: ["Backend", "Data", "Kafka"]
    },
    "Bosch": {
      link: "https://www.bosch.com",
      logo: "images/logos/bosch.png",
      tags: ["Automation", "Flask", "HIL"]
    },
    "College of Engineering, MSU": {
      link: "https://www.egr.msu.edu",
      logo: "images/logos/msu.png",
      tags: ["Outreach", "Leadership"]
    },
    "Computer Science Department, MSU": {
      link: "https://www.cse.msu.edu",
      logo: "images/logos/msu.png",
      tags: ["Teaching", "Mentorship"]
    },
    "Microsoft TEALS": {
      link: "https://www.microsoft.com/en-us/teals",
      logo: "images/logos/teals.png",
      tags: ["Teaching", "Java"]
    },
    "Genysis Works": {
      link: "https://genesisworks.org", // update if you prefer a different site
      logo: "images/logos/genysis.png",
      tags: ["Mentorship", "Community"]
    }
  };

  // ===== 3) UTILITIES =====
  function parseDateRange(dateStr = "") {
    // split on en dash, em dash, or hyphen
    const parts = dateStr.split(/–|—|-/).map(s => s.trim());
    if (parts.length >= 2) return { start: parts[0], end: parts[1] };
    // fallback: entire string as start
    return { start: dateStr, end: "" };
  }

  function el(tag, className = "", children = []) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (!Array.isArray(children)) children = [children];
    for (const c of children) {
      if (c == null) continue;
      if (typeof c === "string") node.appendChild(document.createTextNode(c));
      else node.appendChild(c);
    }
    return node;
  }

  function tagPill(text) {
    return el(
      "span",
      "text-xs inline-block rounded-full px-2 py-1 bg-gray-100 text-gray-700",
      text
    );
  }

  // ===== 4) TRANSFORM EXPERIENCES -> CARD DATA =====
  function toCardData(exp) {
    const { start, end } = parseDateRange(exp.date);
    const meta = orgMeta[exp.company] || {};
    // Basic, safe tag inference if none provided in orgMeta
    const inferredTags = meta.tags || (() => {
      const t = [];
      const p = (exp.position || "").toLowerCase();
      if (p.includes("software")) t.push("Software");
      if (p.includes("research")) t.push("Research");
      if (p.includes("medical assistant")) t.push("Clinical");
      if (p.includes("web")) t.push("Web");
      if (p.includes("mentor") || p.includes("teacher")) t.push("Teaching");
      return t;
    })();

    return {
      org: exp.company,
      role: exp.position,
      location: exp.location || "",
      start: start || "",
      end: end || "",
      link: meta.link || "",
      logo: meta.logo || "", // optional
      bullets: exp.responsibilities || [],
      tags: inferredTags
    };
  }

  // ===== 5) CARD RENDERER (matches your desired layout/styling) =====
  function card(item) {
    const header = el("div", "flex items-center gap-3");
    if (item.logo) {
      const img = el("img", "h-8 w-8 rounded object-cover");
      img.src = item.logo;
      img.alt = `${item.org} logo`;
      header.appendChild(img);
    }
    const titleWrap = el("div", "", [
      el(
        item.link ? "a" : "div",
        "font-semibold text-gray-900 hover:underline",
        item.org
      )
    ]);
    if (item.link) titleWrap.firstChild.href = item.link;
    header.appendChild(titleWrap);

    const role = el("div", "text-sm text-blue-900 font-medium mt-1", item.role);
    const meta = el(
      "div",
      "text-xs text-gray-500 mt-1",
      `${item.location}${item.location ? " • " : ""}${item.start}${item.end ? " – " + item.end : ""}`
    );

    const bullets = el("ul", "mt-3 space-y-2", (item.bullets || []).map(b =>
      el("li", "text-sm text-gray-700 list-disc ml-5", b)
    ));

    const tags = (item.tags && item.tags.length)
      ? el("div", "mt-4 flex flex-wrap gap-2", item.tags.map(tagPill))
      : null;

    return el(
      "article",
      "p-5 rounded-2xl shadow bg-white hover:shadow-md transition",
      [header, role, meta, bullets, tags]
    );
  }

  // ===== 6) RENDER =====
  function render() {
    const container = document.getElementById("experience-container");
    if (!container) return;

    // Clear fallback content
    container.innerHTML = "";

    // Transform and render
    const data = experiences.map(toCardData);
    data.forEach(item => container.appendChild(card(item)));
  }

  // Run after DOM is ready (defer should handle it, but this is safe)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
// End of js/experience.js