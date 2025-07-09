document.addEventListener('DOMContentLoaded', () => {
    console.log("SMARXX Blog is ready 🚀");
  });
  



window.addEventListener('scroll', () => {
    document.querySelectorAll('.about-text p, .about-image img').forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      } else {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
      }
    });
  });
  

  


  window.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
      const top = box.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        box.style.opacity = 1;
        box.style.transform = 'translateY(0)';
      } else {
        box.style.opacity = 0;
        box.style.transform = 'translateY(20px)';
      }
    });
  });

  


document.addEventListener('DOMContentLoaded', () => {
  console.log("SMARXX Blog is ready 🚀");
});



const contactForm = document.querySelector('.contact-form');
if (contactForm) {
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! We'll reply soon.");
  contactForm.reset();
});
}



window.addEventListener('scroll', () => {
  document.querySelectorAll('.about-text p, .about-image img').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
    }
  });
});





window.addEventListener('scroll', () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    const top = box.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      box.style.opacity = 1;
      box.style.transform = 'translateY(0)';
    } else {
      box.style.opacity = 0;
      box.style.transform = 'translateY(20px)';
    }
  });
});



// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
menuToggle.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
});

// Close menu when any nav link is clicked (mobile only)
document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    navLinks.classList.remove('active');
    menuToggle.textContent = '☰';
  }
});
});
const form = document.querySelector("form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.innerHTML = "✅ Message sent successfully!";
      form.reset();
    } else {
      const data = await response.json();
      if (data.errors) {
        status.innerHTML = "❌ " + data.errors.map(err => err.message).join(", ");
      } else {
        status.innerHTML = "❌ Something went wrong. Please try again.";
      }
    }
  } catch (error) {
    status.innerHTML = "❌ Error: " + error.message;
  }
});



document.addEventListener("DOMContentLoaded", () => {
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent normal form redirect

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        formMessage.style.display = "block";
        formMessage.textContent = "Thank you! Your message has been sent.";
      } else {
        formMessage.style.display = "block";
        formMessage.style.color = "red";
        formMessage.textContent = "Oops! Something went wrong. Try again.";
      }
    })
    .catch(() => {
      formMessage.style.display = "block";
      formMessage.style.color = "red";
      formMessage.textContent = "Network error. Please try again later.";
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
