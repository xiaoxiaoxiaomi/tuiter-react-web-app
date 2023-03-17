import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faHome,
  faHashtag,
  faBell,
  faFileAlt,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons'

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  return (
      <div className="list-group">
        <a href="#top" className="list-group-item">Tuiter</a>
        <Link to="/tuiter/home"
              className={`list-group-item d-flex align-items-center 
              ${active === '' || active === 'home' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faHome}/>
          <span className="d-none d-xl-block ms-2">Home</span>
        </Link>
        <Link to="/tuiter/explore"
              className={`list-group-item d-flex align-items-center 
              ${active === 'explore' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faHashtag}/>
          <span className="d-none d-xl-block ms-2">Explore</span>
        </Link>
        <Link to="/" className="list-group-item d-flex align-items-center">
          <FontAwesomeIcon icon={faFileAlt}/>
          <span className="d-none d-xl-block ms-2">Labs</span>
        </Link>
        <a href="#top" className={`list-group-item d-flex align-items-center
           ${active === 'notifications' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faBell}/>
          <span className="d-none d-xl-block ms-2">Notifications</span>
        </a>
        <a href="#top" className={`list-group-item d-flex align-items-center
           ${active === 'messages' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faEnvelope}/>
          <span className="d-none d-xl-block ms-2">Messages</span>
        </a>
        <a href="#top" className={`list-group-item d-flex align-items-center
           ${active === 'bookmarks' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faBookmark}/>
          <span className="d-none d-xl-block ms-2">Bookmarks</span>
        </a>
        <a href="#top" className={`list-group-item d-flex align-items-center
           ${active === 'lists' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faList}/>
          <span className="d-none d-xl-block ms-2">Lists</span>
        </a>
        <Link to="/tuiter/profile"
              className={`list-group-item d-flex align-items-center 
              ${active === 'profile' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faUser}/>
          <span className="d-none d-xl-block ms-2">Profile</span>
        </Link>
        <a href="#top" className={`list-group-item d-flex align-items-center
           ${active === 'more' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faEllipsisH}/>
          <span className="d-none d-xl-block ms-2">More</span>
        </a>
      </div>
  );
};
export default NavigationSidebar;