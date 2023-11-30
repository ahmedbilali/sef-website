emailjs.init("t047amDYCXQt1Qbd5");

document.getElementById("sub-button").addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.getElementById("yname");
  const email = document.getElementById("yemail");
  const message = document.getElementById("ymessage");

  if (name.value === "" || email.value === "" || message.value === "") {
    alert("Please enter all values!");
  } else {
    emailjs
      .sendForm(
        "sakinaedu_emailservice",
        "sakina_edu_template_1",
        event.target,
        "t047amDYCXQt1Qbd5"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please try again later.");
        }
      );

    name.value = "";
    email.value = "";
    message.value = "";
  }
});
