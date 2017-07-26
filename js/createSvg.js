function addSvg() {
  var exports;

  exports = {};

  exports.frame = d3.select("#container")
    .append("svg")
    .attr("width",1280)
    .attr("height",720)
    .style("background-color","black")
    .style("border","1px solid black");

  exports.defs = exports.frame
    .append("defs");

  exports.glow = exports.defs
    .append("filter")
    .attr("id","glow");

  exports.blurVal = exports.glow
    .append("feGaussianBlur")
    .attr("stdDeviation","10")
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


  return exports;
}
