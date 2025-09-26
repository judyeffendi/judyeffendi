// js/experience.js

(function () {
  const data = [
    {
      org: "University of Michigan Medicine",
      role: "Research Assistant (Pathology)",
      location: "Ann Arbor, MI",
      start: "Jul 2025",
      end: "Present",
      link: "https://www.medicine.umich.edu/dept/pathology",
      logo: "images/logos/umich.png", // optional
      bullets: [
        "Filtered and structured breast pathology datasets for research use.",
        "Built and maintained GPALM website components and analytics."
      ],
      tags: ["Pathology", "Data", "Web"]
    },
    {
      org: "NAAMA NextGen",
      role: "Web Developer & Research Lead",
      location: "Ann Arbor, MI",
      start: "Jul 2025",
      end: "Present",
      link: "https://naama.org",
      logo: "images/logos/naama.png",
      bullets: [
        "Developed NextGen site with HTML/CSS/JS; led content & UX.",
        "Moderated AI-in-Medicine panel; coordinated research symposium."
      ],
      tags: ["Leadership", "Web", "AI-in-Med"]
    },
    {
      org: "IAM Institute of Athletic Medicine",
      role: "Medical Assistant",
      location: "Auburn Hills, MI",
      start: "Aug 2025",
      end: "Present",
      link: "",
      logo: "images/logos/iam.png",
      bullets: [
        "Supported clinicians in sports-medicine workflows and patient care.",
        "Documented visits and assisted with triage in a fast-paced clinic."
      ],
      tags: ["Clinical", "Sports Med"]
    }
  ];

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
      "text-xs inline-block rounded-full px-2 py-1 bg-gray-100 text-gray-700"
    , text);
  }

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
      `${item.location} • ${item.start} – ${item.end}`
    );

    const bullets = el("ul", "mt-3 space-y-2", item.bullets.map(b =>
      el("li", "text-sm text-gray-700 list-disc ml-5", b)
    ));

    const tags = item.tags?.length
      ? el("div", "mt-4 flex flex-wrap gap-2", item.tags.map(tagPill))
      : null;

    return el("article", "p-5 rounded-2xl shadow bg-white hover:shadow-md transition", [
      header,
      role,
      meta,
      bullets,
      tags
    ]);
  }

  function render() {
    const container = document.getElementById("experience-container");
    if (!container) return;

    // Clear fallback content
    container.innerHTML = "";

    // Render cards
    data.forEach(item => container.appendChild(card(item)));
  }

  // Run after DOM is ready (defer should handle it, but this is safe)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
