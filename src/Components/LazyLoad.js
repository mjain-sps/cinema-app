import React from "react";
import { useEffect, useRef, useState } from "react";
import { IMG_URL } from "../Constants/";
import "../CSS/grid.css";
import lazyLoaderImage from "../Assets/lazy-loader.gif";
function LazyLoad({ img, children }) {
  const imgRef = useRef();

  //setState of lazyLoader.
  const [imgSrc, setImageSrc] = useState(lazyLoaderImage);

  //useEffect to see the intersection observer of every image which gets rendered
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setImageSrc(`${IMG_URL}/${img.backdrop_path}`);
        }
      },
      { root: null, rootMargin: "200px", threshold: [0] }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [imgRef]);
  return (
    <>
      <div
        ref={imgRef}
        className="grid-element"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default LazyLoad;
