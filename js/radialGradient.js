function radialGradient(options) {
  var gradientToAdd;

  gradientToAdd = options.svg.defs
    .append("radialGradient")
    .attr("id",options.id)
    .attr("cx",options.cx)
    .attr("cy",options.cy);

  options.stops.forEach(function(stop) {
    gradientToAdd
      .append("stop")
      .attr("offset",stop.offset)
      .attr("stop-color",stop.color);
  });

}
