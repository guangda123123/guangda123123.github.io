var svg =d3.select('svg');
var r=svg.append('rect');
var p1 = svg.append('polygon');
var p2= svg.append('polygon');
var p3 = svg.append('polygon');
var p4= svg.append('polygon');
var p5 = svg.append('polygon');
var p6= svg.append('polygon');
var p7 = svg.append('polygon');
var p8= svg.append('polygon');

r.attr('x',50).attr('y',38).attr('rx',2).attr('ry',2).attr('width',300).attr('height',220).attr('fill','white').attr('stroke-width',5).attr('stroke','black').attr('opacity',0.5);
p1.attr('points','100,100 100,200 190,150').attr('fill','steelblue').attr('stroke','white').attr('stroke-width',1);
p2.attr('points','100,100 100,115 120,100').attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p3.attr('points','100,200 100,185 120,200').attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p4.attr('points','112,120 112,180 150,150').attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p5.attr('points','155,150 300,50 300,250').attr('fill','steelblue').attr('stroke','steelblue').attr('stroke-width',1);
p6.attr('points','302,48 302,100 268,70').attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p7.attr('points','302,252 302,200 268,230').attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p8.attr('points','200,150 265,100 265,200').attr('fill','white').attr('stroke','white').attr('stroke-width',1);



p4.on("click",function(){
          d3.select(this)
                .attr("fill","wheat");
        });
p8.on("click",function(){
          d3.select(this)
                .attr("fill","wheat");
        });