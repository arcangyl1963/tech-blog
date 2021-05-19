const commentFormHandler = async function (event) {
  event.preventDefault();
  const comment_body = document
    .querySelector('textarea[name="comment-body"]')
    .value;
  const post_id = document.querySelector('input[name="post-id"]').value;

  if (comment_body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_body,
      }),
      headers: { 'Content-Type': 'application/json', },
    });
    document.location.reload();
  }
};
document.querySelector('#new-comment-form').addEventListener('submit', commentFormHandler);
