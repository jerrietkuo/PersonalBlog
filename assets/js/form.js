document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        alert('Please fill all fields!');
        return;
    }

    const formData = {
        username,
        title,
        content,
        date: new Date().toISOString()
    };

    const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    existingPosts.push(formData);
    localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

    window.location.href = 'blog.html';
});
