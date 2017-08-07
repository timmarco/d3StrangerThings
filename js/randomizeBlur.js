function randomizeBlur(svg) {
  var newValue = 8 + Math.random() * 5;
  svg.blurVal
    .transition()
    .attr("stdDeviation",newValue)
    .duration(svg.frameLength * 12)
    .on('end',function() {
      randomizeBlur(svg);
    });
}
