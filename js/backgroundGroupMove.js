function backgroundGroupMove(options) {
  var blurGroup,
    visibleGroup;

  if(!options.stroke) { options.stroke = "red";}


  blurGroup = options.blurGroup
    .append("g")
    .attr("transform",options.startTransform);

  blurGroup
    .transition()
    .ease(options.ease)
    .delay(options.delay * options.svg.frameLength)
    .duration(options.duration * options.svg.frameLength)
    .attr("transform",options.transform);

  blurGroup
    .append("path")
    .attr("d",options.path)
    .attr("stroke","red")
    .attr("stroke-width",options.strokeWidth);

  visibleGroup = options.elementGroup
    .append("g")
    .attr("transform",options.startTransform);


  visibleGroup
    .transition()
    .ease(options.ease)
    .delay(options.delay * options.svg.frameLength)
    .duration(options.duration * options.svg.frameLength)
    .attr("transform",options.transform);

  visibleGroup
    .append("path")
    .attr("d",options.path)
    .attr("stroke",options.stroke)
    .attr("stroke-width",options.strokeWidth)
    .attr("stroke-linejoin","miter");



}
