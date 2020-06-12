const glide = new Glide(".content", {
  type: "carousel",
  perView: 3,
  focusAt: "center",
  breakpoints: {
    800: {
      perView: 2
    },
    480: {
      perView: 1
    }
  }
});

glide.mount();
