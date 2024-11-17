import "./NextVidsSection.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function NextVidsSection({ videos }) {
  return (
    <div className="next-video">
      <h4 className="next-video__heading">NEXT VIDEOS</h4>
      <ul className="next-video__list">
        {videos.map(({ id, image, title, poster, channel }) => (
          <Link to={`/${id}`} key={id || ""} className="next-video__item">
            <div className="next-video__item-container">
              <div className="next-video__image-container">
                <img
                  className="next-video__image"
                  src={image}
                  alt={title}
                  poster={poster}
                />
              </div>
              <div className="next-video__content">
                <h3 className="next-video__title">{title || ""}</h3>
                <p className="next-video__channel">{channel || ""}</p>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
