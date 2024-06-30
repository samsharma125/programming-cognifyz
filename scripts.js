document.addEventListener("DOMContentLoaded", function() {
    const colorButton = document.getElementById("colorButton");
    const postContainer = document.getElementById("postContainer");
    const contactForm = document.getElementById("contactForm");

    colorButton.addEventListener("click", function() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");

                const postTitle = document.createElement("h3");
                postTitle.textContent = post.title;

                const postBody = document.createElement("p");
                postBody.textContent = post.body;

                postElement.appendChild(postTitle);
                postElement.appendChild(postBody);
                postContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Failed to load posts.";
            postContainer.appendChild(errorMessage);
        });

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        let valid = true;

        if (name.value.trim() === "") {
            nameError.textContent = "Name is required.";
            valid = false;
        } else {
            nameError.textContent = "";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = "Invalid email address.";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        if (message.value.trim() === "") {
            messageError.textContent = "Message is required.";
            valid = false;
        } else {
            messageError.textContent = "";
        }

        if (valid) {
            alert("Form submitted successfully!");
            contactForm.reset();
        }
    });
});
