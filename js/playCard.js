function addPlayCard(svg,soundTrack) {

  svg.playLayer
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",1280)
    .attr("height",240)
    .attr("fill","#333");

  svg.playLayer
    .append("text")
    .attr("x",71)
    .attr("y",80)
    .attr("text-anchor","central")
    .text("Stranger Things Title Recreated")
    .attr("font-weight","400")
    .attr("fill","white");

  svg.playLayer
    .append("text")
    .attr("x",71)
    .attr("y",140)
    .attr("text-anchor","central")
    .text("A d3.js / SVG Experiment by Tim Marco")
    .attr("font-size","0.5em")
    .attr("font-weight","200")
    .attr("fill","white");

  svg.playLayer
    .append("text")
    .attr("x",71)
    .attr("y",200)
    .attr("text-anchor","central")
    .text("Original title design by Imaginary Forces for Netflix")
    .attr("font-size","0.5em")
    .attr("font-weight","200")
    .attr("fill","white");

  svg.playLayer
    .append("rect")
    .attr("x",0)
    .attr("y",240)
    .attr("width",640)
    .attr("height",480)
    .attr("fill","#222");

  svg.playLayer
    .append("text")
    .attr("x",320)
    .attr("y",340)
    .attr("text-anchor","middle")
    .attr("font-size","0.33em")
    .text("Click Here To Watch The Re-Creation")
    .attr("fill","white");

  svg.playLayer
    .append("image")
    .attr("xlink:href","recreated.gif")
    .attr("x",80)
    .attr("y",360);

  svg.playLayer
    .append("text")
    .attr("x",960)
    .attr("y",340)
    .attr("text-anchor","middle")
    .attr("font-size","0.33em")
    .text("Click Here To Watch The Real Video")
    .attr("fill","white");

  svg.playLayer
    .append("image")
    .attr("xlink:href","original.gif")
    .attr("x",720)
    .attr("y",360);


  svg.playLayer
    .append("rect")
    .attr("x",0)
    .attr("y",240)
    .attr("width",640)
    .attr("height",780)
    .attr("cursor","pointer")
    .attr("fill","rgba(0,0,0,0)")
    .on('click',function() { playTitle(svg,soundTrack); });

  svg.playLayer
    .append("rect")
    .attr("x",640)
    .attr("y",240)
    .attr("width",640)
    .attr("height",780)
    .attr("cursor","pointer")
    .attr("fill","rgba(0,0,0,0)")
    .on('click',function() {
      window.open("https://vimeo.com/174870794");
    });
}
