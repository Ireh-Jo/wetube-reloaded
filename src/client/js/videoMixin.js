const videoMixin = document.querySelector(".video-mixin");

const focusIn = [{ transform: "none" }, { transform: "scale(1.1)" }];
const focusOut = [{ transform: "scale(1.1)" }, { transform: "none" }];
const timing = { duration: 200, fill: "forwards" };

const handleVideoMouseMove = () => {
  videoMixin.animate(focusIn, timing);
};

const handleVideoMouseLeave = () => {
  videoMixin.animate(focusOut, timing);
};

if (videoMixin) {
  videoMixin.addEventListener("mouseenter", handleVideoMouseMove);
  videoMixin.addEventListener("mouseleave", handleVideoMouseLeave);
}
