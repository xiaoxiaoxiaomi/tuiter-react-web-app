const WhoToFollowListItem = (who) => {
  return(`
    <li class="list-group-item">
      <div class="row">
        <div class="col-2 d-flex align-items-center">
          <img src=${who.avatarIcon} class="img-fluid rounded-circle">
        </div>
        <div class="col-7 d-flex flex-column justify-content-between">
          <div>
            <span class="fw-bold">${who.userName}</span>
            <i class="fas fa-check-circle"></i>
          </div>
          <div>@${who.handle}</div>
        </div>
        <div class="col-3 d-flex align-items-center">
          <button type="button" class="btn btn-primary rounded-pill">Follow</button>
        </div>
      </div>  
    </li>
 `);
}
export default WhoToFollowListItem;
