function backgroundOne(svg) {
  var frameLength = 1000 / 24;
  var backgroundOne = svg.logoLayer
    .append("g")
    .attr("transform","translate(-640,0) scale(2)");

  backgroundOne
    .attr("opacity",1)
    .transition()
    .delay(79 * (1/24) * 1000)
    .duration(0)
    .attr("opacity",1)
    .transition()
    .duration(frameLength * (214-79))
    .ease(d3.easeLinear)
    .attr("transform","translate(-120,0) scale(1.1)")
    .transition()
    .duration(0)
    .attr("opacity",0)
    .on("end",function() {
      backgroundOne.remove();
    });


  var bgStage = backgroundOne
    .append("g")
    .attr("transform","translate(0,-360)");


    radialGradient({
      "svg":svg,
      "id":"leftFirstBackground",
      "cx":"30%",
      "cy":"70%",
      "stops":[
        {"offset":"0%","color":"rgb(225,195,68)"},
        {"offset":"20%","color":"rgb(229,87,40)"},
        {"offset":"100%","color":"rgb(186,33,33)"},
        {"offset":"100%","color":"rgb(112,20,20)"}
      ]
    });


    bgStage.append("rect")
      .attr("width",154.75223)
       .attr("height",738.06677)
       .attr("x",200.94965)
       .attr("y",333.09515)
       .attr("fill","url(#leftFirstBackground)")
       .attr("transform","matrix(1,0,-0.18610476,0.98252991,0,0)")
       .attr("filter","url(#glow)");

    bgStage.append("rect")
       .attr("width",154.75223)
       .attr("height",738.06677)
       .attr("x",-1079.5192)
       .attr("y",333.09515)
       .attr("fill","url(#leftFirstBackground)")
       .attr("transform","matrix(-1,0,0.18610476,0.98252991,0,0)")
       .attr("filter","url(#glow)");


}
