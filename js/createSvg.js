function addSvg() {
  var exports;

  exports = {};

  exports.frameLength = 1000 / 24;

  exports.svg = d3.select("#container")
    .append("svg")
    .attr("width",960)
    .attr("height",540)
    .attr("viewbox","0 0 1280 720")
    .style("background-color","black");


  exports.frame = exports.svg
    .append("g")
    .attr("transform","scale(0.75)")
    .style("border","10px solid black");

  exports.defs = exports.svg
    .append("defs");

  exports.glow = exports.defs
    .append("filter")
    .attr("id","glow");

  exports.blurVal = exports.glow
    .append("feGaussianBlur")
    .attr("stdDeviation","45")
    .attr("result","glow");

  exports.feMerge = exports.glow
    .append("feMerge");

  exports.feMerge
    .append("feMergeNode")
    .attr("in","node");

  exports.blurLayer = exports.frame
    .append("g")
    .attr("filter","url(#glow)");

  exports.logoLayer = exports.frame
    .append("g");

  exports.crewLayer = exports.frame
    .append("g");

  exports.darken = exports.frame.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("height",720)
    .attr("width",1280)
    .attr("fill","black")
    .attr("opacity",0.1);

  exports.playLayer = exports.frame
    .append("g");


  return exports;
}
