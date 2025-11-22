document.addEventListener("DOMContentLoaded", () => {

  // ---------------- Typing Effect ----------------
  const text = "I am Kusum KC";
  const typingElement = document.getElementById("typing");
  if (typingElement) {
    let index = 0;
    let forward = true;

    function typeEffect() {
      if (forward) {
        typingElement.textContent = text.substring(0, index + 1) + ".";
        index++;
        if (index === text.length) forward = false;
      } else {
        typingElement.textContent = text.substring(0, index - 1) + ".";
        index--;
        if (index === 0) forward = true;
      }
      setTimeout(typeEffect, 200);
    }

    typeEffect();
  }

  // ---------------- Education Timeline ----------------
  const educationData = [
    {
      year: "2022 – 2026 (Expected)",
      institution: "CAFODAT College | Affiliated to Purbanchal University",
      location: "Patan, Lalitpur, Nepal",
      degree: "Bachelors of  Dairy Technology",
      link: "https://www.cafodat.edu.np/",
      note: "Key Modules: Dairy Processing & Technology, Food and Dairy  Microbiology, Food Safety & Quality Control, Dairy Chemistry"
    },
    {
      year: "2019 – 2021",
      institution: "Kabhre Higher Secondary School",
      location: "Banepa, Budol, Kavrepalanchok, Nepal",
      degree: "+2 , Science Stream | Aggregate Score: 3.85",
    },
    {
      year: "2006 – 2019",
      institution: "Arunodaya English Secondary School",
      location: "Panauti, Kavrepalanchok, Nepal",
      degree: "Secondary Education Examination (SEE) | Aggregate Grade: 3.85"
    }
  ];

  const education = document.getElementById("education");
  if (education) {
    educationData.forEach(edu => {
      const item = document.createElement("div");
      item.className = "timeline-item d-flex align-items-center";
      item.innerHTML = `
        <div class="timeline-date">${edu.year}</div>
        <div class="timeline-icon">
          <i class="fas fa-circle text-success"></i>
        </div>
        <div class="timeline-content">
          <h3>${edu.institution}</h3>
          <h3 style="font-weight: normal; font-size: 1.2rem;">${edu.location}</h3>
          <p class="fw-bold">${edu.degree}</p>
          ${edu.note ? `<p class="fst-italic">${edu.note}</p>` : ""}
          ${edu.link ? `<p><a href="${edu.link}" class="text-blue" target="_blank">${new URL(edu.link).hostname}</a></p>` : ""}
        </div>
      `;
      education.appendChild(item);
    });
  }

  // ---------------- Experience Timeline ----------------
  const experiencesdata = [
    {
      date: "  June 2022 – Present",
      organization: "Nepal Food Scientists and Technologists Association - NEFOSTA",
      location: "Babarmahal, Kathmandu, Nepal",
      role: "Office Secretary",
      description: "Coordinated meetings, events, and official programs of the organization.",
      link: "http://nefosta.org.np/"
    },
  ];

  const experience = document.getElementById("experience");
  if (experience) {
    experiencesdata.forEach(exp => {
      const item = document.createElement("div");
      item.className = "timeline-item d-flex align-items-center";
      item.innerHTML = `
        <div class="timeline-date">${exp.date}</div>
        <div class="timeline-icon">
          <i class="fas fa-circle text-success"></i>
        </div>
        <div class="timeline-content">
          <h3>${exp.organization}</h3>
          <h3 style="font-weight: normal; font-size: 1.2rem;">${exp.location}</h3>
          <p class="fw-bold">${exp.role}</p>
          <p class="fst-italic">${exp.description}</p>
          ${exp.link ? `<p><a href="${exp.link}" class="text-blue" target="_blank">${new URL(exp.link).hostname}</a></p>` : ""}
        </div>
      `;
      experience.appendChild(item);
    });
  }

  // ---------------- Projects Section ----------------
  const projects = [
    {
      id: "project1",
      title: "Hydrolysis of Whey Protein Using Plant-Derived Enzymes and Evaluation of Its Functional  Properties",
      duration: " November 2025– On going | CAFODAT College",
      description: "Expected Results: Improved solubility, foaming, and emulsifying properties of whey protein after enzymatic hydrolysis.",
      // tools: "ArcGIS Pro, QGIS, HEC-HMS, Google Earth Engine, WebGIS, PHP",
      // link: "https://antarikchya.org.np/visualization.php",
      // image: "image/apn_chair.jpg"
    },
  ];

  const projectContainer = document.getElementById("projects-container");
  const modalContainer = document.getElementById("modals-container");

  if (projectContainer && modalContainer) {
    projects.forEach(p => {
      const col = document.createElement("div");
      col.className = "col-md-4";
      const imgTag = p.image
        ? `<img src="${p.image}" alt="${p.title}" class="project-img mb-3 rounded-3">`
        : "";

      col.innerHTML = `
        <div class="project-card h-100 p-3 shadow-sm border rounded-4">
          ${imgTag}
          <h5 class="fw-bold">${p.title}</h5>
          <p class="text-muted small mb-2">${p.duration}</p>
          <p>${p.description.substring(0, 150)}...</p>
          <a href="#" data-bs-toggle="modal" data-bs-target="#${p.id}Modal" class="text-reset">Read More</a>
        </div>
      `;
      projectContainer.appendChild(col);

      modalContainer.innerHTML += `
        <div class="modal fade" id="${p.id}Modal" tabindex="-1" aria-labelledby="${p.id}Label" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title text-center fw-bold w-100" id="${p.id}Label">${p.title}</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <p><strong>Duration:</strong> ${p.duration}</p>
                <p><strong>Description:</strong> ${p.description}</p>
                <p><strong>Tools:</strong> ${p.tools}</p>
                <p><strong>Links:</strong> 
                  <a href="${p.link}" class="fst-italic small" target="_blank" rel="noopener noreferrer">${p.link}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }

  // ---------------- Skills Section ----------------
  const skillsData = [
    { name: "Microsoft 365", percentage: 90, color: "#04d415" },
    // { name: "AutoCAD", percentage: 45, color: "#71d16e" },
    // { name: "Differential GPS", percentage: 55, color: "#dbce11" },
    // { name: "Django", percentage: 50, color: "#e98007" },
    // { name: "ENVI", percentage: 35, color: "#e91a13" },
    // { name: "ERDAS Imagine", percentage: 35, color: "#04d415" },
    // { name: "Google Earth Engine", percentage: 90, color: "#71d16e" },
    // { name: "HEC-HMS / HEC-RAS", percentage: 65, color: "#dbce11" },
    // { name: "HTML/CSS/JS", percentage: 75, color: "#e98007" },
    // { name: "Microsoft 360", percentage: 80, color: "#e91a13" },
    // { name: "Plane Table", percentage: 50, color: "#04d415" },
    // { name: "PHP", percentage: 60, color: "#71d16e" },
    // { name: "Python", percentage: 70, color: "#dbce11" },
    // { name: "QGIS", percentage: 80, color: "#e98007" },
    // { name: "SNAP Desktop", percentage: 70, color: "#e91a13" },
    // { name: "TerrSet 2020", percentage: 55, color: "#04d415" },
    // { name: "Theodolite", percentage: 70, color: "#71d16e" },
    // { name: "Total Station", percentage: 75, color: "#dbce11" },
  ];

  const skillsBox = document.getElementById("skills-box");
  if (skillsBox) {
    skillsData.forEach(skill => {
      const skillDiv = document.createElement("div");
      skillDiv.className = "skill";
      skillDiv.innerHTML = `
        <h6>${skill.name}</h6>
        <div class="progress-bar">
          <div style="background: ${skill.color}; width:0%;">
            <span></span>
          </div>
        </div>
      `;
      skillsBox.appendChild(skillDiv);
    });

    // Animate on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const progressBars = skillsBox.querySelectorAll('.progress-bar div');
        if (entry.isIntersecting) {
          progressBars.forEach((bar, index) => {
            bar.style.width = skillsData[index].percentage + '%';
          });
        } else {
          progressBars.forEach(bar => bar.style.width = '0%');
        }
      });
    }, { threshold: 0.3 });

    observer.observe(skillsBox);
  }

  // ---------------- Gallery Section ----------------
  const galleryData = [

  ];

  const galleryRow = document.getElementById("gallery-row");
  if (galleryRow) {
    galleryData.forEach(item => {
      const colDiv = document.createElement("div");
      colDiv.className = "col-sm-6 col-md-4 col-lg-3 gallery-item";
      colDiv.innerHTML = `
        <img src="${item.src}" alt="${item.title}" class="gallery-img">
        <div class="gallery-title">${item.title}</div>
        <div class="gallery-dates">Date: ${item.dates}</div>
      `;
      galleryRow.appendChild(colDiv);
    });
  }

});



//  contact form submission
// Supabase credentials
const SUPABASE_URL = "https://dykgtaxikoexmgnrkgtq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5a2d0YXhpa29leG1nbnJrZ3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3MDQwMzksImV4cCI6MjA3ODI4MDAzOX0.2wjTsUi4FYfkcjgkCMILQhEKEOrFZpiOthrz2t-iAEM";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const comment = document.getElementById("comment").value.trim();

  status.textContent = "Submitting...";

  const { data, error } = await supabase
    .from("Kushal Portfolio Contact")
    .insert([{ name, email, comment }]);

  if (error) {
    console.error("Insert Error:", error);
    status.textContent = "❌ Failed to submit. Check console for details.";
  } else {
    status.textContent = "✅ Submitted successfully!";
    form.reset();

    // Hide the message after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      status.textContent = "";
    }, 5000);
  }

});