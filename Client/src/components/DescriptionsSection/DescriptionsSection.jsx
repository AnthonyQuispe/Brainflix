import React from "react";
import likeImage from "../../assets/images/icons/likes.svg";
import viewImage from "../../assets/images/icons/views.svg";
import "./DescriptionsSection.scss";

export default function DescriptionsSection({
  title,
  channel,
  timestamp,
  views,
  likes,
  description,
}) {
  return (
    <section className="descriptions-section">
      <h2 className="descriptions-section__title">{title || ""}</h2>
      <div className="descriptions-section__container">
        <div className="descriptions-section__channel">
          <p className="descriptions-section__channel-name">
            By {channel || ""}
          </p>
          <p className="descriptions-section__timestamp">
            {new Date(timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="descriptions-section__icons">
          <p className="descriptions-section__icon-text">
            <img
              className="descriptions-section__icon-image"
              src={viewImage}
              alt="viewImage"
            />
            {views || ""}
          </p>
          <p className="descriptions-section__icon-text">
            <img
              className="descriptions-section__icon-image"
              src={likeImage}
              alt="likeImage"
            />
            {likes || ""}
          </p>
        </div>
      </div>
      <p className="descriptions-section__description">{description || ""}</p>
    </section>
  );
}
