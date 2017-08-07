function playTitle(svg,soundTrack) {

  soundTrack.play();
  svg.playLayer.remove();

  randomizeOpacity(svg);

  addTitles(svg);
  backgroundOne(svg);
  backgroundTwo(svg);
  backgroundThree(svg);
  backgroundFour(svg);
  backgroundFive(svg);
  backgroundSeven(svg);
  backgroundSix(svg);
  backgroundEight(svg);

  randomizeBlur(svg);
}
