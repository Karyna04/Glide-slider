const glide = new Glide(".content", {
  type: "carousel",
  perView: 5,
  focusAt: "center",
  breakpoints: {
    800: {
      perView: 3
    },
    480: {
      perView: 2
    }
  }
});

glide.mount();
