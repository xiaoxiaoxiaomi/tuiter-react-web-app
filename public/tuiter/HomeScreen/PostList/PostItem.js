const PostItem = (post) => {
  return (`
    <li class="list-group-item">
      <div class="row">
        <div class="col-2">
          <img class="img-fluid rounded-circle" src="${post.avatar}">
        </div>
        <div class="col-10 ps-0">
          <div class="row">
            <div class="col-11">
              <span class="fw-bold">${post.author}</span>
              <i class="fas fa-check-circle"></i>
              <span class="text-dark">${post.handle} &middot; ${post.time}</span>
            </div>
            <div class="col-1">
              <i class="fas fa-ellipsis-h text-dark"></i>
            </div>
          </div>
          <div>
            ${post.tweetText}
          </div>
          <div class="mt-2 border border-dark rounded-4 ${post.imageTitle ? ''
      : 'd-none'}">
            <img src="${post.image}" class="border-bottom border-dark img-fluid tweet-img">
            <div class="p-2">
              <div>${post.imageTitle}</div>
              <div class="text-dark">${post.imageContent}</div>
            </div>
          </div>
          <div class="mt-2 border border-dark rounded-4 ${post.imageTitle ? 'd-none' : ''}">
            <img src="${post.image}" class="img-fluid rounded-4">
          </div>
          <div class="row mt-2 text-dark">
            <div class="col-3">
              <i class="far fa-comment me-2"></i>
              <span>${post.reply}</span>
            </div>
            <div class="col-3">
              <i class="fas fa-retweet me-2"></i>
              <span>${post.retweet}</span>
            </div>
            <div class="col-3">
              <i class="far fa-heart"></i>
              <span>${post.like}</span>
            </div>
            <div class="col-3">
              <i class="fas fa-arrow-up"></i>
            </div>
          </div>
        </div>
      </div>
    </li>
  `);
}
export default PostItem;