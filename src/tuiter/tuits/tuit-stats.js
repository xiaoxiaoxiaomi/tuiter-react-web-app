import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart as farHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faRetweet,
  faHeart,
  faShare
} from "@fortawesome/free-solid-svg-icons";

const TuitStats = ({replies, retuits, likes, liked, handleLike}) => {
  return (
      <div className="row mt-2 text-dark">
        <div className="col-3">
          <FontAwesomeIcon icon={faComment} className="me-2"/>
          <span>{replies}</span>
        </div>
        <div className="col-3">
          <FontAwesomeIcon icon={faRetweet} className="me-2"/>
          <span>{retuits}</span>
        </div>
        <div className="col-3">
          <FontAwesomeIcon icon={liked ? faHeart : farHeart}
                           className={["me-2", liked ? "text-danger" : ""].join(
                               " ")} onClick={handleLike}/>
          <span>{likes}</span>
        </div>
        <div className="col-3">
          <FontAwesomeIcon icon={faShare} className="me-2"/>
        </div>
      </div>
  )
}

export default TuitStats;