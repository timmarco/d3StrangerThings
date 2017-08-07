function linearGradient(options) {
  var gradient;

  gradient = options.svg.defs
    .append("linearGradient")
    .attr("id",options.id);

  options.stops.forEach(function(stop) {
    gradient
      .append("stop")
      .attr("stop-color",stop.color)
      .attr("offset",stop.offset);
  });
}
