import React from "react";
import "./index.css";
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faEllipsisH,
  faComment,
  faRetweet,
  faHeart,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PostItem = (
    {
      post = {}
    }
) => {
  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img className="img-fluid rounded-circle" alt=""
                 src={`/images/${post.avatar}`}/>
          </div>
          <div className="col-10 ps-0">
            <div className="row">
              <div className="col-11">
                <span className="fw-bold">{post.author}</span>
                <FontAwesomeIcon icon={faCheckCircle}/>
                <span
                    className="text-dark">{post.handle} &middot; {post.time}</span>
              </div>
              <div className="col-1">

                <FontAwesomeIcon icon={faEllipsisH}/>
              </div>
            </div>
            <div>{post.tweetText}</div>
            <div className={`mt-2 border border-dark rounded-4 ${post.imageTitle
                ? ''
                : 'd-none'}`}>
              <img src={`/images/${post.image}`} alt=""
                   className="border-bottom border-dark img-fluid tweet-img"/>
              <div className="p-2">
                <div>{post.imageTitle}</div>
                <div className="text-dark">{post.imageContent}</div>
              </div>
            </div>
            <div className={`mt-2 border border-dark rounded-4 ${post.imageTitle
                ? 'd-none' : ''}`}>
              <img src={`/images/${post.image}`} alt=""
                   className="img-fluid rounded-4"/>
            </div>
            <div className="row mt-2 text-dark">
              <div className="col-3">
                <FontAwesomeIcon icon={faComment}/>
                <span>{post.reply}</span>
              </div>
              <div className="col-3">
                <FontAwesomeIcon icon={faRetweet}/>
                <span>{post.retweet}</span>
              </div>
              <div className="col-3">
                <FontAwesomeIcon icon={faHeart}/>
                <span>{post.like}</span>
              </div>
              <div className="col-3">
                <FontAwesomeIcon icon={faArrowUp}/>
              </div>
            </div>
          </div>
        </div>
      </li>
  )
}
export default PostItem;