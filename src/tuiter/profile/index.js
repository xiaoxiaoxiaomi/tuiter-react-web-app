import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faLocationDot,
  faBurn,
  faCalendarDays
} from '@fortawesome/free-solid-svg-icons';
import "./index.css";

const ProfileComponent = () => {
  const profile = useSelector(state => state.profile);
  return (
      <div className="border">
        <div className="row">
          <div
              className="col-2 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faArrowLeft}/>
          </div>
          <div className="col-10 p-0 fs-6">
            <div className="fw-bold">Jose Annunziato</div>
            <div className="text-secondary">6,114 Tweets</div>
          </div>
        </div>
        <div className="row">
          <img src={`/images/${profile.bannerPicture}`} alt="#"/>
        </div>
        <div className="px-4">
          <img className="rounded-circle wd-profile-img"
               src={`/images/${profile.profilePicture}`} alt="#"
               width={140} height={140}/>
          <Link to="/tuiter/edit-profile" className="float-end wd-edit-btn">
            <button
                className="btn rounded-pill fw-bold text-dark btn-outline-secondary">
              Edit profile
            </button>
          </Link>
          <div style={{position: "relative", top: "-40px"}}>
            <div
                className="fs-4 fw-bold">{profile.firstName} {profile.lastName}</div>
            <div className="fs-6 text-secondary">{profile.handle}</div>
            <div className="mt-3">{profile.bio}</div>
            <div className="text-secondary mt-3 d-flex">
              <div>
                <FontAwesomeIcon icon={faLocationDot} className="me-1"/>
                {profile.location}
              </div>
              <div className="ms-2">
                <FontAwesomeIcon icon={faBurn} className="me-1"/>
                Born {profile.dateOfBirth}
              </div>
              <div className="ms-2">
                <FontAwesomeIcon icon={faCalendarDays} className="me-1"/>
                Joined {profile.dateJoined}
              </div>
            </div>
            <div className="text-secondary mt-3 d-flex">
              <div>
                <span
                    className="text-dark fw-bold me-1">{profile.followingCount}</span>Following
              </div>
              <div className="ms-4">
                <span
                    className="text-dark fw-bold me-1">{profile.followersCount}</span>Followers
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfileComponent;