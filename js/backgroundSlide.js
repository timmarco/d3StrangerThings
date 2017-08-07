function backgroundSlide(options) {
  var returns;

  returns = {};

  returns.blurGroup = options.svg.blurLayer
    .append("g");

  returns.blurGroup
    .attr("opacity",0)
    .attr("transform",options.transform)
    .attr("display","none")
    .transition()
    .delay(options.svg.frameLength * options.start)
    .duration(0)
    .attr("display","block")
    .transition()
    .duration(options.fadeIn ? options.svg.frameLength * options.fadeIn : 0)
    .attr("opacity",1)
    .transition()
    .delay(0)
    .ease(options.transformEase ? options.transformEase : d3.easeLinear)
    .duration(options.transformDuration ? options.svg.frameLength * options.transformDuration : 0)
    .attr("transform",options.endTransform ? options.endTransform : options.transform)
    .transition()
    .duration(options.fadeOut ? options.svg.frameLength * options.fadeOut : 0)
    .delay(options.svg.frameLength * options.duration)
    .attr("opacity",0)
    .transition()
    .duration(0)
    .delay(0)
    .attr("display","none");

  returns.elementGroup = options.svg.logoLayer
    .append("g");

  returns.elementGroup
    .attr("opacity",0)
    .attr("transform",options.transform)
    .attr("display","none")
    .transition()
    .delay(options.svg.frameLength * options.start)
    .duration(0)
    .attr("display","block")
    .transition()
    .duration(options.fadeIn ? options.svg.frameLength * options.fadeIn : 0)
    .attr("opacity",1)
    .transition()
    .delay(0)
    .ease(options.transformEase ? options.transformEase : d3.easeLinear)
    .duration(options.transformDuration ? options.svg.frameLength * options.transformDuration : 0)
    .attr("transform",options.endTransform ? options.endTransform : options.transform)
    .transition()
    .duration(options.fadeOut ? options.svg.frameLength * options.fadeOut : 0)
    .delay(options.svg.frameLength * options.duration)
    .attr("opacity",0)
    .transition()
    .duration(0)
    .delay(0)
    .attr("display","none");

  return returns;
}
