import React from "react";
import TuitStats from "./tuit-stats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            className="img-fluid rounded-circle"
            alt=""
            src={`/images/${tuit.image}`}
          />
        </div>
        <div className="col-10 ps-0">
          <i
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}
          ></i>
          <span className="fw-bold">{tuit.userName}</span>
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="ms-1 me-1 text-primary"
          />
          <span className="text-dark">
            {tuit.handle} &middot; {tuit.time}
          </span>
          <div>{tuit.tuit}</div>
          <TuitStats key={tuit._id} tuit={tuit} />
        </div>
      </div>
    </div>
  );
};

export default TuitItem;
