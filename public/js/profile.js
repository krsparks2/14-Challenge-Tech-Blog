const newFormHandler = async (event) => {
  event.preventDefault();

  const blog_title = document.querySelector('#blog_title').value.trim();
  const blog_post = document.querySelector('#blog_post').value.trim();

  if (blog_title && blog_post) {
    const response = await fetch(`/api/blog`, {
      method: 'POST',
      body: JSON.stringify({ blog_title, blog_post }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }
};

document
  .querySelector('#newBlogBtn')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);
