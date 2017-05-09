<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>CityGo</title>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <script type="text/javascript" src="../d3/d3.min.js"></script>

</head>
<body>    
    <div id="option">
    <input name="updateButton" 
           type="button" 
           value="Start"
           class="button" 
           onclick="start()" />
    </div>
    <div id="grid"></div>
	<script>
  var data = new Array();
    var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
    var ypos = 1;
    var width = 100;
    var height = 100;
    var click = 0;

    // iterate for rows
    for (var row = 0; row < 6; row++) {
        data.push( new Array() );

        // iterate for cells/columns inside rows
        for (var column = 0; column < 6; column++) {
            data[row].push({
                x: xpos,
                y: ypos,
                width: width,
                height: height,
                click: click
            })
            // increment the x position. I.e. move it over by 50 (width variable)
            xpos += width;
        }
        // reset the x position after a row is complete
        xpos = 1;
        // increment the y position for the next row. Move it down 50 (height variable)
        ypos += height;
    }
    return data;
}

var gridData = gridData();
// I like to log the data to the console for quick debugging
console.log(gridData);

var grid = d3.select("#grid")
    .append("svg")
    .attr("width","1000px")
    .attr("height","1000px");

var row = grid.selectAll(".row")
    .data(gridData)
    .enter().append("g")
    .attr("class", "row");

var column = row.selectAll(".square")
    .data(function(d) { return d; })
    .enter().append("rect")
    .attr("class","square")
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y; })
    .attr("width", function(d) { return d.width; })
    .attr("height", function(d) { return d.height; })
    .style("fill", "#fff")
    .style("stroke", "#222")
    .on('dblclick',function(d){
        d3.select(this).style('fill','white');
    })
    .on('click', function(d) {

    d3.select(this).style("fill","yellow");
    
    });


  </script>
</body>
