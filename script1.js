// Data (JS controls most of the site)
const data = {
  home: {
    title: "Welcome to Event Management System",
    content: "Plan, Organize & Manage Events Seamlessly"
  },
  about: {
    title: "About Us",
    content: "We create unforgettable experiences with world-class event management."
  },
  schedule: {
    title: "Event Schedule",
    items: [
      { time: "10:00 AM", event: "Registration & Welcome" },
      { time: "11:00 AM", event: "Opening Ceremony" },
      { time: "1:00 PM", event: "Workshop: Event Marketing" },
      { time: "3:00 PM", event: "Panel Discussion" },
      { time: "5:00 PM", event: "Closing Ceremony" }
    ]
  },
  speakers: {
    title: "Meet Our Speakers",
    items: [
      { name: "Alice Johnson", desc: "Expert in Event Tech & Logistics" },
      { name: "Michael Lee", desc: "Marketing Guru & Influencer" },
      { name: "Sophia Patel", desc: "Event Finance & Sponsorship Specialist" }
    ]
  },
  contact: {
    title: "Contact Us",
    form: `
      <form id='contactForm'>
        <input type='text' placeholder='Your Name' required>
        <input type='email' placeholder='Your Email' required>
        <textarea placeholder='Message'></textarea>
        <button type='submit'>Send</button>
      </form>
    `
  }
};

// Render sections dynamically
function renderSections() {
  for (let id in data) {
    const section = document.getElementById(id);
    const info = data[id];

    let html = `<h1>${info.title}</h1>`;
    if (info.content) html += `<p>${info.content}</p>`;

    // Special: schedule list
    if (info.items && id === "schedule") {
      html += "<div>";
      info.items.forEach(item => {
        html += `<div class='card'><b>${item.time}</b> - ${item.event}</div>`;
      });
      html += "</div>";
    }

    // Special: speakers
    if (info.items && id === "speakers") {
      html += "<div style='display:flex;gap:20px;flex-wrap:wrap;justify-content:center'>";
      info.items.forEach(sp => {
        html += `<div class='card' onclick='openModal("${sp.name}", "${sp.desc}")'>${sp.name}</div>`;
      });
      html += "</div>";
    }

    // Contact form
    if (info.form) html += info.form;

    section.innerHTML = html;
  }
}
renderSections();

// Modal handling
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

function openModal(title, desc) {
  modal.style.display = "flex";
  modalTitle.innerText = title;
  modalDesc.innerText = desc;
}
closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

// Contact form handler
document.addEventListener("submit", e => {
  e.preventDefault();
  alert("✅ Thank you! Your message has been sent.");
});
