
function move() {
        // var svgctrl = d3.select('svg');

        var cx = $('#cx1').val();
        var cy = $('#cy1').val();
        var svg = d3.select('svg');
        var r = svg.append('rect');
        var p1 = svg.append('polygon');
        var p2 = svg.append('polygon');
        var p3 = svg.append('polygon');
        var p4 = svg.append('polygon');
        var p5 = svg.append('polygon');
        var p6 = svg.append('polygon');
        var p7 = svg.append('polygon');
        var p8 = svg.append('polygon');
        var x1 = cx*1+50;
        var x2 = cx*1+140;
        var y1 = cy*1+62;
        var y2 = cy*1+162;
        var y3 = cy*1+112;
        r.attr('x', cx).attr('y', cy).attr('rx', 2).attr('ry',2).attr('width',300).attr('height',220).attr('fill','white').attr('stroke-width',5).attr('stroke','black').attr('opacity',0.5);
        p1.attr('points', x1 + ',' + y1 + ' ' + x1 + ',' + y2 + ' ' +x2 + ',' + y3).attr('fill', 'steelblue').attr('stroke', 'white').attr('stroke-width', 1);
        p2.attr('points', (cx*1 + 50) + ',' + (cy*1 + 62) + ' ' + (cx*1 + 50) + ',' + (cy*1 + 77) + ' ' + (cx*1 + 70) + ',' + (cy*1 + 62) ).attr('fill', 'white').attr('stroke', 'white').attr('stroke-width', 1);
        p3.attr('points', (cx*1 + 50 )+ ',' + (cy*1 + 162) + ' ' + (cx*1 + 50) + ',' + (cy*1 + 147 )+ ' ' + (cx*1 + 70) + ',' + (cy*1 + 162) ).attr('fill', 'white').attr('stroke', 'white').attr('stroke-width', 1);
        p4.attr('points', (cx*1 + 62) + ',' + (cy*1 + 82) + ' ' + (cx*1 + 62) + ',' + (cy*1 + 142) + ' ' + (cx*1 + 100) + ',' + (cy*1 + 112) ).attr('fill', 'white').attr('stroke', 'white').attr('stroke-width', 1);
        p5.attr('points', (cx*1 + 105) + ',' + (cy*1 + 112) + ' ' + (cx*1 + 250) + ',' + (cy*1 + 12) + ' ' +( cx*1 + 250) + ',' + (cy*1 + 212) ).attr('fill', 'steelblue').attr('stroke', 'steelblue').attr('stroke-width', 1);
        p6.attr('points', (cx*1 + 252) + ',' + (cy*1 + 10 )+ ' ' + (cx*1 + 252) + ',' + (cy*1 + 62) + ' ' + (cx*1 + 218) + ',' + (cy*1 + 32) ).attr('fill', 'white').attr('stroke', 'white').attr('stroke-width', 1);
        p7.attr('points', (cx*1 + 252) + ',' + (cy*1 + 214) + ' ' + (cx*1 + 252 )+ ',' + (cy*1 + 162) + ' ' + (cx*1 + 218) + ',' + (cy*1 + 192) ).attr('fill', 'white').attr('stroke', 'white').attr('stroke-width', 1);
        p8.attr('points', (cx*1 + 150) + ',' + (cy*1 + 112 )+ ' ' + (cx*1 + 215) + ',' + (cy*1 + 62 )+ ' ' + (cx*1 + 215) + ',' + (cy*1 + 162) ).attr('fill', 'white').attr('stroke', 'white').attr('stroke-width', 1);

}
$('#test').bind('click', move)

p4.on("click", function () {
        d3.select(this)
                .attr("fill", "wheat");
});
p8.on("click", function () {
        d3.select(this)
                .attr("fill", "wheat");
});