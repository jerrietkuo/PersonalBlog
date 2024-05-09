document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <small>Posted by ${post.username} on ${new Date(post.date).toLocaleDateString()}</small>
        `;
        postsContainer.appendChild(postElement);
    });

    document.getElementById('toggleTheme').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
