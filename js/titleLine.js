function titleLine(where,options) {
  var exports;

  var frameLength = 1000 * (1 / 24);
  exports = {};

  exports.group = where
    .append("g");

  exports.textGroup = exports.group
    .append("g");

  exports.background = exports.textGroup.selectAll(".background")
    .data(options.crewName)
    .enter()
    .append("text")
    .attr("x",640)
    .attr("y",function(d,i) { return 360 + (i * 60);})
    .attr("text-anchor","middle")
    .attr("alignment-baseline","central")
    .attr("font-size",function(d,i) {
        if(!checkUpperCase(d) && i === 0) { return "28pt";}
        return "42pt";
    })
    .attr("font-weight",function(d,i) {
      if(!checkUpperCase(d) && i === 0) { return "400";}
      return "600";
    })
    .attr("opacity","0")
    .attr("fill","white")
    .text(function(d) { return d;});

  exports.text = exports.textGroup.selectAll(".foreground")
    .data(options.crewName)
    .enter()
    .append("text")
    .attr("x",640)
    .attr("y",function(d,i) { return 360 + (i * 60);})
    .attr("text-anchor","middle")
    .attr("alignment-baseline","central")
    .attr("font-size",function(d,i) {
        if(!checkUpperCase(d) && i === 0) { return "28pt";}
        return "42pt";
    })
    .attr("font-weight",function(d,i) {
      if(!checkUpperCase(d) && i === 0) { return "400";}
      return "600";
    })
    .attr("opacity","0")
    .attr("fill","rgb(193,193,193)")
    .text(function(d) { return d;});

  centerVertically(exports.textGroup);
  flashIn();
  repeatRandom();

  return exports;

  function checkUpperCase(string) {
    return string === string.toUpperCase();
  }

  function centerVertically(group) {
    var groupSize = group.node().getBBox();
    var yAdjust = 360 - (groupSize.y + 0.5 * groupSize.height);
    exports.textGroup
      .attr("transform","translate("+0+","+yAdjust+")");
  }

  function fadeIn() {

    //red at frame 17
    exports.text
      .transition()
      .duration(500)
      .attr("fill","rgb(166,161,161)")
      .attr("opacity","1");
  }

  function flashIn() {
    exports.background
      .transition()
      .delay(frameLength * options.startBackgroundFadeIn)
      .duration(frameLength * options.backgroundFadeInDuration)
      .attr("opacity",1)
      .attr("fill","rgb(91,20,31)")
      .transition()
      .delay(frameLength * options.backgroundDuration)
      .duration(frameLength * options.backgroundFadeOutDuration)
      .attr("opacity",0)
      .attr("fill","black")
      .on("end",function() {
        exports.group.remove();
      });
      //START AT 63 AND FADE UNTIL 71

      //FROM 60 to 63
    exports.text
      .transition()
      .delay(frameLength * options.foregroundStartFadeIn)
      .duration(frameLength * options.foregroundFadeInDuration)
      .attr("opacity","1")
      .transition()
      .delay(frameLength * options.foregroundDuration)
      .duration(frameLength * options.foregroundFadeoutDuration)
      .attr("opacity",0);

  }

  function repeatRandom() {
    var duration = 100 + Math.random() * 10;
    var randomFill = 186 + (Math.random() * 10);

    exports.group
      .transition()
      .duration(100 + Math.random() * 10)
      .attr("transform",function() {
        var x,y;

        x = Math.random() * 1.25;
        y = Math.random() * 1.25;

        return "translate("+x+","+y+")";
      })
      .on('end',repeatRandom);
  }
}
