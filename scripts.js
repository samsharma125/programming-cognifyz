document.addEventListener("DOMContentLoaded", function() {
    const colorButton = document.getElementById("colorButton");
    const postContainer = document.getElementById("postContainer");

    colorButton.addEventListener("click", function() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });

    // Fetch posts from the JSONPlaceholder API
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
});
