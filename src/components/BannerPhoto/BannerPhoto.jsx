import React from "react";
import { Link } from 'react-router-dom';
import './BannerPhoto.css'

const BannerPhoto = ({image}) => (
  <section className="hero">
    <img src={image} alt="(o - o)" className="hero__img" />
  </section>
);

export default BannerPhoto;