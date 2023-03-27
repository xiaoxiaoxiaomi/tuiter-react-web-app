import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {updateProfile} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    bio: profile.bio,
    location: profile.location,
    website: profile.website,
    dateOfBirth: profile.dateOfBirth
  });
  const handleSave = () => {
    dispatch(
        updateProfile({
          firstName: formData.firstName,
          lastName: formData.lastName,
          profilePicture: profile.profilePicture,
          bannerPicture: profile.bannerPicture,
          bio: formData.bio,
          location: formData.location,
          dateOfBirth: formData.dateOfBirth,
        })
    );
    navigate("/tuiter/profile");
  };
  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
      <div className="border rounded">
        <div className="row py-2">
          <div
              className="col-2 d-flex align-items-center justify-content-center">
            <Link to="/tuiter/profile" className="text-dark"><FontAwesomeIcon
                icon={faXmark}/></Link>
          </div>
          <div className="col-8 p-0 d-flex align-items-center">
            <div className="fw-bold">Edit profile</div>
          </div>
          <Link to="/tuiter/profile" className="col-2">
            <button className="btn btn-dark rounded-pill" onClick={handleSave}>
              Save
            </button>
          </Link>
        </div>
        <div className="row">
          <img src={`/images/${profile.bannerPicture}`} alt="#"/>
        </div>
        <div className="px-4">
          <img className="rounded-circle wd-profile-img"
               src={`/images/${profile.profilePicture}`} alt="#"
               width={140} height={140}/>
          <form style={{position: "relative", top: "-40px"}}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First
                name</label>
              <input id="firstName" name="firstName" className="form-control"
                     value={formData.firstName} onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last name</label>
              <input id="lastName" name="lastName" type="text"
                     className="form-control" value={formData.lastName}
                     onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">Bio</label>
              <textarea id="bio" name="bio" type="text" className="form-control"
                        value={formData.bio} onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input id="location" name="location" type="text"
                     className="form-control" value={formData.location}
                     onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="website" className="form-label">Website</label>
              <input id="website" name="website" type="text"
                     className="form-control" value={formData.website}
                     onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="dateOfBirth" className="form-label">Birth
                date</label>
              <input id="dateOfBirth" name="dateOfBirth" type="text"
                     className="form-control" value={formData.dateOfBirth}
                     onChange={handleChange}/>
            </div>
          </form>
        </div>
      </div>
  );
};

export default EditProfileComponent;