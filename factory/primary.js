$(document).ready(() => {
  const slideCount = $(".slider-image").length;
  const slideWidth = $(".slider-image:first-child").width();
  const imagesPerRow = 4;
  const rowCount = 2;
  let currentOffset = 0;
  $(".slider-wrapper").css("width", `${slideWidth * imagesPerRow}px`);
  const moveLeft = () => {
    $(".slider-row").each(function () {
      const $firstImage = $(this).find(".slider-image:first-child");
      $(this).append($firstImage);
    });
    $(".slider-row").css({
      transform: `translateX(${slideWidth}px)`,
      transition: "transform 0.2s ease-in-out",
    });
    setTimeout(() => {
      $(".slider-row").css("transform", "translateX(0)");
    }, 0);
    currentOffset = (currentOffset - 1 + rowCount) % rowCount;
    const $rightImages = $(".slider-row .slider-image:last-child");
    const $leftImages = $(".slider-row .slider-image:nth-last-child(4)");
    $rightImages.css("opacity", 0);
    $leftImages.css("opacity", 0);
    setTimeout(() => {
      $rightImages.css({
        transition: "opacity 0.2s",
        opacity: 1,
      });
      $leftImages.css({
        transition: "opacity 0.2s",
        opacity: 1,
      });
    }, 200);
  };
  const moveRight = () => {
    $(".slider-row").each(function () {
      const $lastImage = $(this).find(".slider-image:last-child");
      $(this).prepend($lastImage);
    });
    $(".slider-row").css({
      transform: `translateX(-${slideWidth}px)`,
      transition: "transform 0.4s",
    });
    setTimeout(() => {
      $(".slider-row").css("transform", "translateX(0)");
    }, 0);
    currentOffset = (currentOffset + 1) % rowCount;
  };
  $(".slider-left").click(() => {
    moveLeft();
  });
  $(".slider-right").click(() => {
    moveRight();
  });
});
