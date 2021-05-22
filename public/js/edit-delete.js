const editFormHandler = function (event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const postTitle = document.querySelector('input[name="post-title"]').value;
  const postBody = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      postTitle,
      postBody,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  document.location.replace('/dashboard');
};
const deletePostHandler = async function () {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE',
  });
  document.location.replace('/dashboard');
};
document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deletePostHandler);
