const NavigationSidebar = (active) => {
  return (`
    <div class="list-group">
      <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>
      <!-- continue rest of list, e.g., Home, Explore, Notifications,  Messages, etc. -->
      <a href="../HomeScreen/index.html" class="list-group-item d-flex align-items-center ${active === 'home' ? 'active' : ''}">
        <i class="fas fa-home"></i>
        <span class="d-none d-xl-block ms-2">Home</span>
      </a>
      <a href="../explore/index.html" class="list-group-item d-flex align-items-center ${active === 'explore' ? 'active' : ''}">
        <i class="fas fa-hashtag"></i>
        <span class="d-none d-xl-block ms-2">Explore</span>
      </a>
      <a href="#" class="list-group-item d-flex align-items-center">
        <i class="fas fa-bell"></i>
        <span class="d-none d-xl-block ms-2">Notifications</span>
      </a>
      <a href="#" class="list-group-item d-flex align-items-center">
        <i class="fas fa-envelope"></i>
        <span class="d-none d-xl-block ms-2">Messages</span>
      </a>
      <a href="../../bookmarks/index.html" class="list-group-item d-flex align-items-center">
        <i class="fas fa-bookmark"></i>
        <span class="d-none d-xl-block ms-2">Bookmarks</span>
      </a>
      <a href="#" class="list-group-item d-flex align-items-center">
        <i class="fas fa-list"></i>
        <span class="d-none d-xl-block ms-2">Lists</span>
      </a>
      <a href="../../profile.html" class="list-group-item d-flex align-items-center">
        <i class="fas fa-user"></i>
        <span class="d-none d-xl-block ms-2">Profile</span>
      </a>
      <a href="#" class="list-group-item d-flex align-items-center">
        <span class="fa-stack fa-stack-sm d-flex align-items-center" style="width: 14px; height: 16px">
          <i class="fas fa-circle fa-stack-2x" style="font-size: 14px"></i>
          <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse" style="font-size: 10px"></i>
        </span>
        <span class="d-none d-xl-block ms-2">More</span>
      </a>
    </div>
    <div class="d-grid mt-2">
      <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
    </div>
 `);
}
export default NavigationSidebar;