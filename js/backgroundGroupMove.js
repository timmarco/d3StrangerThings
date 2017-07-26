function backgroundGroupMove(options) {
  var blurGroup,
    visibleGroup;

  blurGroup = options.blurGroup
    .append("g")
    .attr("transform",options.startTransform);


  blurGroup
    .transition()
    .ease(options.ease)
    .delay(options.delay * frameLength)
    .duration(options.duration * frameLength)
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
    .delay(options.delay * frameLength)
    .duration(options.duration * frameLength)
    .attr("transform",options.transform);

  visibleGroup
    .append("path")
    .attr("d",options.path)
    .attr("stroke","rgba(255,0,0,0.5)")
    .attr("stroke-width",options.strokeWidth);

}
