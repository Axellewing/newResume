funciton sendMail(contactForm) {
    emailjs.send("gmail", "axel", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        fucntion(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FALIED", error)
            return false;
        }
    );
}