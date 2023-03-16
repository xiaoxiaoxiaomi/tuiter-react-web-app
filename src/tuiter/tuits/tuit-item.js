import React, {useState} from "react";
import TuitStats from "./tuit-stats";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = ({tuit}) => {
  const [liked, setLiked] = useState(tuit.liked);
  const [likes, setLikes] = useState(tuit.likes);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img className="img-fluid rounded-circle" alt=""
                 src={`/images/${tuit.image}`}/>
          </div>
          <div className="col-10 ps-0">
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tuit._id)}></i>
            <span className="fw-bold">{tuit.userName}</span>
            <FontAwesomeIcon icon={faCheckCircle}
                             className="ms-1 me-1 text-primary"/>
            <span
                className="text-dark">{tuit.handle} &middot; {tuit.time}</span>
            <div>{tuit.tuit}</div>
            <TuitStats
                replies={tuit.replies}
                retuits={tuit.retuits}
                likes={likes}
                liked={liked}
                handleLike={handleLike}
            />
          </div>
        </div>
      </div>
  );
};

export default TuitItem;