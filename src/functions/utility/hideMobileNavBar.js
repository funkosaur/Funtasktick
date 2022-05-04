function mobileNavBarToggle() {
  if (window.screen.width < 1000) {
    leftNavigation.classList.toggle("leftNavTransform");
    leftNavigation.classList.toggle("leftNavTransformed");
  }
}

export default mobileNavBarToggle;
