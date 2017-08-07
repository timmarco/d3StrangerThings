function randomizeOpacity(svg) {
  var newValue = Math.random() / 7;

  svg.darken
    .transition()
    .duration(svg.frameLength * 3)
    .attr("opacity",newValue)
    .on('end',function() { randomizeOpacity(svg); });
}
