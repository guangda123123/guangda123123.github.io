
function move(){
       // var svgctrl = d3.select('svg');

var x= $('#x').val();
var y= $('#y').val();
var svg =d3.select('svg');
var r=svg.append('rect');
var p1 = svg.append('polygon');
var p2 = svg.append('polygon');
var p3 = svg.append('polygon');
var p4 = svg.append('polygon');
var p5 = svg.append('polygon');
var p6 = svg.append('polygon');
var p7 = svg.append('polygon');
var p8 = svg.append('polygon');


r.attr('x',x).attr('y',y).attr('rx',2).attr('ry',2).attr('width',300).attr('height',220).attr('fill','white').attr('stroke-width',5).attr('stroke','black').attr('opacity',0.5);
p1.attr('points',(x*1+50)+','+(y*1+62)+' '+(x*1+50)+','+(y*1+162)+' '+(x*1+140)+','+(y*1+112) ).attr('fill','steelblue').attr('stroke','white').attr('stroke-width',1);
p2.attr('points',(x*1+50)+','+(y*1+62)+' '+(x*1+50)+','+(y*1+77)+' '+(x*1+70)+','+(y*1+62) ).attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p3.attr('points',(x*1+50)+','+(y*1+162)+' '+(x*1+50)+','+(y*1+147)+' '+(x*1+70)+','+(y*1+162)).attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p4.attr('points',(x*1+62)+','+(y*1+82)+' '+(x*1+62)+','+(y*1+142)+' '+(x*1+100)+','+(y*1+112)).attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p5.attr('points',(x*1+105)+','+(y*1+112)+' '+(x*1+250)+','+(y*1+12)+' '+(x*1+250)+','+(y*1+212)).attr('fill','steelblue').attr('stroke','steelblue').attr('stroke-width',1);
p6.attr('points',(x*1+252)+','+(y*1+10)+' '+(x*1+252)+','+(y*1+62)+' '+(x*1+218)+','+(y*1+32)).attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p7.attr('points',(x*1+252)+','+(y*1+214)+' '+(x*1+252)+','+(y*1+162)+' '+(x*1+218)+','+(y*1+192)).attr('fill','white').attr('stroke','white').attr('stroke-width',1);
p8.attr('points',(x*1+150)+','+(y*1+112)+' '+(x*1+215)+','+(y*1+62)+' '+(x*1+215)+','+(y*1+162)).attr('fill','white').attr('stroke','white').attr('stroke-width',1);

}
$('#test').bind('click',move)

p4.on("click",function(){
          d3.select(this)
                .attr("fill","wheat");
        });
p8.on("click",function(){
          d3.select(this)
                .attr("fill","wheat");
        });
        

function green(){
                 var svg =d3.select('svg');
                      var c4 = svg.append('circle');
    var a1 = Math.random()*200;
  var b1 = Math.random()*200;
  var d1 = Math.random()*100;
     c4.attr('cx',a1).attr('cy',b1).attr('r',d1).attr('fill','green')};
              function blue(){
                      var svg =d3.select('svg');
                       var r=svg.append('rect');
    var a1 = Math.random()*500;
  var b1 = Math.random()*500;
  var d1 = Math.random()*100;
r.attr('x',a1).attr('y',b1).attr('rx',2).attr('ry',2).attr('width',d1).attr('height',d1).attr('fill','white').attr('stroke-width',5).attr('stroke','black').attr('opacity',0.5);
}  