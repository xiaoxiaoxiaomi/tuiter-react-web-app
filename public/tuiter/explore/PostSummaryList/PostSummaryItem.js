const PostSummaryItem = (post) => {
  return (`
    <li class="list-group-item">
      <div class="row">
        <div class="col-9">
          <div class="text-secondary">
            ${post.topic}
          </div>
          <div class="fw-bold">
            ${post.userName}
            <i class="fas fa-check-circle"></i>
            <span class="text-secondary">- ${post.time}</span>
          </div>
          <div class="fw-bold">
            ${post.title}
          </div>
        </div>
        <div class="col-3 d-flex align-items-center">
          <img src="${post.image}" class="img-fluid bg-transparent rounded-4">
        </div>
      </div>
    </li>
 `);
}
export default PostSummaryItem;