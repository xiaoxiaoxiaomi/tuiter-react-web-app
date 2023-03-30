import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart as farHeart,
  faThumbsDown as farThumbsDown,
} from "@fortawesome/free-regular-svg-icons";
import {
  faRetweet,
  faHeart,
  faShare,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  return (
    <div className="row mt-2 text-dark">
      <div className="col-2">
        <FontAwesomeIcon icon={faComment} className="me-2" />
        <span>{tuit.replies}</span>
      </div>
      <div className="col-2">
        <FontAwesomeIcon icon={faRetweet} className="me-2" />
        <span>{tuit.retuits}</span>
      </div>
      <div className="col-2">
        <FontAwesomeIcon
          icon={tuit.liked ? faHeart : farHeart}
          className={["me-2", tuit.liked ? "text-danger" : ""].join(" ")}
          onClick={() => {
            if (tuit.liked) {
              dispatch(
                updateTuitThunk({
                  ...tuit,
                  likes: tuit.likes - 1,
                  liked: false,
                })
              );
            } else {
              dispatch(
                updateTuitThunk({
                  ...tuit,
                  likes: tuit.likes + 1,
                  liked: true,
                })
              );
            }
          }}
        />
        <span>{tuit.likes}</span>
      </div>
      <div className="col-2">
        <FontAwesomeIcon
          icon={tuit.disliked ? faThumbsDown : farThumbsDown}
          className={"me-2"}
          onClick={() => {
            if (tuit.disliked) {
              dispatch(
                updateTuitThunk({
                  ...tuit,
                  dislikes: tuit.dislikes - 1,
                  disliked: false,
                })
              );
            } else {
              dispatch(
                updateTuitThunk({
                  ...tuit,
                  dislikes: tuit.dislikes + 1,
                  disliked: true,
                })
              );
            }
          }}
        />
        <span>{tuit.dislikes}</span>
      </div>
      <div className="col-2">
        <FontAwesomeIcon icon={faShare} className="me-2" />
      </div>
    </div>
  );
};

export default TuitStats;
