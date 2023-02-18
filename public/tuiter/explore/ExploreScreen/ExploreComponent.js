import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
    <!-- search bar -->
    <div class="d-flex justify-content-between mb-2">
      <div class="input-group border rounded-pill bg-white">
        <span class="input-group-text bg-transparent border-0">
          <i class="fas fa-search text-muted"></i>
        </span>
        <input type="text" class="form-control border-0 rounded-pill" placeholder="Search Twitter">
      </div>
      <button class="btn"><i class="fas fa-cog text-primary"></i></button>
    </div>
    <!-- tabs -->
    <ul class="nav nav-tabs mb-2">
      <li class="nav-item">
        <a class="nav-link active" href="#">For you</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sports</a>
      </li>
      <li class="nav-item d-none d-md-block">
        <a class="nav-link" href="#">Entertainment</a>
      </li>
    </ul>
    <!-- image with overlaid text -->
    <div class="position-relative">
      <img src="../images/starship.jpg" alt="SpaceX's Starship" class="img-fluid">
      <h2 class="position-absolute bottom-0 start-0 m-2">SpaceX's Starship</h2>
    </div>
    ${PostSummaryList()}
  `);
}
export default ExploreComponent;
