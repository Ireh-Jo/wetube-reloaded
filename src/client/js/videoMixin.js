const videoMixins = document.querySelectorAll(".video-mixin");

const focusIn = [{ transform: "none" }, { transform: "scale(1.1)" }];
const focusOut = [{ transform: "scale(1.1)" }, { transform: "none" }];
const timing = { duration: 200, fill: "forwards" };

const handleVideoMouseMove = (event) => {
  event.target.animate(focusIn, timing);
};

const handleVideoMouseLeave = (event) => {
  event.target.animate(focusOut, timing);
};

if (videoMixins.length > 0) {
  videoMixins.forEach((videoMixin) => {
    videoMixin.addEventListener("mouseenter", handleVideoMouseMove);
    videoMixin.addEventListener("mouseleave", handleVideoMouseLeave);
  });
}
