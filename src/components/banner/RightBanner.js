import React from 'react'
// import { bannerImg } from "../../assets/index";
const RightBanner = () => {
  const portraitSrc = "/sai.png";
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={portraitSrc}
        alt="Sai Kumar Mothe portrait"
      />
      <div className="absolute bottom-0 w-[450px] h-[400px] lgl:w-[500px] lgl:h-[650px] bg-gradient-to-r from-[var(--color-panel-start)] to-[var(--color-card-end)] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner
