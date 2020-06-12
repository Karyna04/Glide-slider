const glide = new Glide(".content", {
  type: "carousel",
  perView: 7,
  focusAt: "center",
  breakpoints: {
    800: {
      perView: 4
    },
    480: {
      perView: 2
    }
  }
});

glide.mount();
