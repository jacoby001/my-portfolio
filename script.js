document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message, Jacob will get back to you soon!");
  this.reset();
});
