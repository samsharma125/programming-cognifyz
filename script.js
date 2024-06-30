document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        const formData = {
            name: name,
            email: email
        };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log('Success:', jsonResponse);
                alert('Form submitted successfully!');
            } else {
                console.error('Error:', response.statusText);
                alert('Failed to submit the form.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit the form.');
        }
    });
});
