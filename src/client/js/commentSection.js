const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const removeBtns = document.querySelectorAll(".video__comment-removeBtn");

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  span.innerText = ` ${text}`;
  const removeBtn = document.createElement("span");
  removeBtn.innerText = "❌";
  removeBtn.addEventListener("click", handleClickRemoveBtn);
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(removeBtn);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value.trim();
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
    }),
  });
  textarea.value = "";
  if (response.status === 201) {
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

const handleClickRemoveBtn = async (event) => {
  const comment = event.target.parentNode;
  const commentId = comment.dataset.id;
  const { status } = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });
  if (status === 200) {
    comment.remove();
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener("click", handleClickRemoveBtn);
  });
}
