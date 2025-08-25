// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Active menu highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Back to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) backToTop.style.display = "block";
  else backToTop.style.display = "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Schedule search
const scheduleItems = document.querySelectorAll("#schedule li");
const searchInput = document.getElementById("scheduleSearch");

searchInput.addEventListener("keyup", () => {
  const text = searchInput.value.toLowerCase();
  scheduleItems.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(text)
      ? "block"
      : "none";
  });
});

// Speakers modal
const modal = document.getElementById("modal");
const modalName = document.getElementById("modalName");
const modalBio = document.getElementById("modalBio");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".speaker-card").forEach((card) => {
  card.addEventListener("click", () => {
    modalName.textContent = card.dataset.name;
    modalBio.textContent = card.dataset.bio;
    modal.style.display = "flex";
  });
});
closeModal.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target == modal) modal.style.display = "none";
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target[0].value.trim();
  const email = e.target[1].value.trim();
  const msg = e.target[2].value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name.length < 3)
    return (formMessage.textContent = "Name must be at least 3 characters!");
  if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email))
    return (formMessage.textContent = "Invalid email!");
  if (msg.length < 10)
    return (formMessage.textContent = "Message must be at least 10 chars!");

  formMessage.textContent = "✅ Message sent successfully!";
  formMessage.style.color = "green";
  e.target.reset();
});
