// Mobile menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// Contact form

const quoteForm = document.getElementById("quoteForm");

quoteForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const budget = document.getElementById("budget").value;
    const message = document.getElementById("message").value;


    const subject = encodeURIComponent(
        `Website Enquiry - ${service}`
    );


    const body = encodeURIComponent(
`Hello Muskan,

My name is ${name}.

I am interested in: ${service}

My budget: ${budget || "Not specified"}

Project details:
${message}

My email:
${email}
`
    );


   window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=muskanpal19082007@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    "_blank"
);

});