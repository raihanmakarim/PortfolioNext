"use client";

import style from "./style.module.scss";
import Image from "next/image";
import { useRef, useEffect, useState, useLayoutEffect } from "react";

import HorizontalScroll from "react-scroll-horizontal";
import websiteimg from "./websiteimg.png";

const HorizontalScrolling = () => {
  const { background, page, page2, container, image, content } = style;
  const ref = useRef();

  const [slide, setSlide] = useState(null);
  useEffect(() => {
    const handle = (e) => {
      setSlide(() => {
        ref.current;
      });
    };
  }, []);

  setSlide(ref.current);

  slide.addEventListener("mousemove", function (e) {
    // Get dimensions of slide element
    const r = getBoundingClientRect();

    // Set x and y values prop values based on center of slide element
    style.setProperty("--x", e.clientX - (r.left + Math.floor(r.width / 2)));
    style.setProperty("--y", e.clientY - (r.top + Math.floor(r.height / 2)));
  });

  slide.addEventListener("mouseleave", function () {
    // Reset x and y prop values when no longer hovering
    this.style.setProperty("--x", 0);
    this.style.setProperty("--y", 0);
  });

  document.body.addEventListener("mousemove", function (e) {
    // Have coordinate values follow the user's cursor
    tooltip.style.left = e.pageX - 15 + "px";
    tooltip.style.top = e.pageY - 70 + "px";
  });

  return (
    <div className={page}>
      <HorizontalScroll reverseScroll="true">
        <div className={background} style={{ background: "red" }}>
          <div className={container} id="example" ref={ref}>
            <Image src={websiteimg} className={image} />
            <div className={content}>
              <h1>Website IMG</h1>
            </div>
          </div>
        </div>
        <div className={background} style={{ background: "blue" }}>
          <h1>Page</h1>
          <p>Page content</p>
        </div>
        <div className={background} style={{ background: "green" }}>
          <h1>Page</h1>
          <p>Page content</p>
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default HorizontalScrolling;
