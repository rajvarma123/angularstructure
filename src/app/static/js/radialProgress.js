$(document).ready(function(){
/*--d3-js for circle progressbar--*/
/*default radial progress js*/
function radialProgress(parent) {
    var _data=null,
        _duration= 1000,
        _selection,
        _margin = {top:0, right:0, bottom:51, left:0},
        __width = 49,
        __height = 49,
        _diameter=15,
        _label="",
        _fontSize=10;


    var _mouseClick;

    var _value= 0,
        _minValue = 0,
        _maxValue = 100;

    var  _currentArc= 0, _currentArc2= 0, _currentValue=0;

    var _arc = d3.svg.arc()
        .startAngle(0 * (Math.PI/180)); //just radians

    var _arc2 = d3.svg.arc()
        .startAngle(0 * (Math.PI/180))
        .endAngle(0); //just radians


    _selection=d3.select(parent);


    function component() {

        _selection.each(function (data) {

            // Select the svg element, if it exists.
            var svg = d3.select(this).selectAll("svg").data([data]);

            var enter = svg.enter().append("svg").attr("class","radial-svg").append("g");

            measure();

            svg.attr("width", __width)
                .attr("height", __height);


            var background = enter.append("g").attr("class","component")
                .attr("cursor","pointer")
                .on("click",onMouseClick);


            _arc.endAngle(360 * (Math.PI/180))

            background.append("rect")
                .attr("class","background")
                .attr("width", _width)
                .attr("height", _height);

            background.append("path")
                .attr("transform", "translate(" + _width/2 + "," + _width/2 + ")")
                .attr("d", _arc);

            background.append("text")
                .attr("class", "label")
                .attr("transform", "translate(" + _width/2 + "," + (_width + _fontSize) + ")")
                .text(_label);
           var g = svg.select("g")
                .attr("transform", "translate(" + _margin.left + "," + _margin.top + ")");


            _arc.endAngle(_currentArc);
            enter.append("g").attr("class", "arcs");
            var path = svg.select(".arcs").selectAll(".arc").data(data);
            path.enter().append("path")
                .attr("class","arc")
                .attr("transform", "translate(" + _width/2 + "," + _width/2 + ")")
                .attr("d", _arc);

            //Another path in case we exceed 100%
            var path2 = svg.select(".arcs").selectAll(".arc2").data(data);
            path2.enter().append("path")
                .attr("class","arc2")
                .attr("transform", "translate(" + _width/2 + "," + _width/2 + ")")
                .attr("d", _arc2);


            enter.append("g").attr("class", "labels");
            var label = svg.select(".labels").selectAll(".label").data(data);
            label.enter().append("text")
                .attr("class","label")
                .attr("y",_width/2+_fontSize/3)
                .attr("x",_width/2)
                .attr("cursor","pointer")
                .attr("width",_width)
                // .attr("x",(3*_fontSize/2))
                .text(function (d) { return Math.round((_value-_minValue)/(_maxValue-_minValue)*100) + "%" })
                .style("font-size",_fontSize+"px")
                .on("click",onMouseClick);

            path.exit().transition().duration(500).attr("x",1000).remove();


            layout(svg);

            function layout(svg) {

                var ratio=(_value-_minValue)/(_maxValue-_minValue);
                var endAngle=Math.min(360*ratio,360);
                endAngle=endAngle * Math.PI/180;

                path.datum(endAngle);
                path.transition().duration(_duration)
                    .attrTween("d", arcTween);

                if (ratio > 1) {
                    path2.datum(Math.min(360*(ratio-1),360) * Math.PI/180);
                    path2.transition().delay(_duration).duration(_duration)
                        .attrTween("d", arcTween2);
                }

                label.datum(Math.round(ratio*100));
                label.transition().duration(_duration)
                    .tween("text",labelTween);

            }

        });

        function onMouseClick(d) {
            if (typeof _mouseClick == "function") {
                _mouseClick.call();
            }
        }
    }

    function labelTween(a) {
        var i = d3.interpolate(_currentValue, a);
        _currentValue = i(0);

        return function(t) {
            _currentValue = i(t);
            this.textContent = Math.round(i(t)) + "%";
        }
    }

    function arcTween(a) {
        var i = d3.interpolate(_currentArc, a);

        return function(t) {
            _currentArc=i(t);
            return _arc.endAngle(i(t))();
        };
    }

    function arcTween2(a) {
        var i = d3.interpolate(_currentArc2, a);

        return function(t) {
            return _arc2.endAngle(i(t))();
        };
    }


    function measure() {
        _width=_diameter - _margin.right - _margin.left - _margin.top - _margin.bottom;
        _height=_width;
        _fontSize=_width*.2;
        _arc.outerRadius(_width/2);
        _arc.innerRadius(_width/2 * .75);
        _arc2.outerRadius(_width/2 * .75);
        _arc2.innerRadius(_width/2 * .80 - (_width/2 * .15));
    }


    component.render = function() {
        measure();
        component();
        return component;
    }

    component.value = function (_) {
        if (!arguments.length) return _value;
        _value = [_];
        _selection.datum([_value]);
        return component;
    }


    component.margin = function(_) {
        if (!arguments.length) return _margin;
        _margin = _;
        return component;
    };

    component.diameter = function(_) {
        if (!arguments.length) return _diameter
        _diameter =  _;
        return component;
    };

    component.minValue = function(_) {
        if (!arguments.length) return _minValue;
        _minValue = _;
        return component;
    };

    component.maxValue = function(_) {
        if (!arguments.length) return _maxValue;
        _maxValue = _;
        return component;
    };

    component.label = function(_) {
        if (!arguments.length) return _label;
        _label = _;
        return component;
    };

    component._duration = function(_) {
        if (!arguments.length) return _duration;
        _duration = _;
        return component;
    };

    component.onClick = function (_) {
        if (!arguments.length) return _mouseClick;
        _mouseClick=_;
        return component;
    }

    return component;

}
/*end default radialprogress js */

 var div1=d3.select(document.getElementById('jk'));
 var div2=d3.select(document.getElementById('jk1'));
 var div3=d3.select(document.getElementById('jk2'));
 var div4=d3.select(document.getElementById('jk3'));

 var div5=d3.select(document.getElementById('progress-1'));
 var div6=d3.select(document.getElementById('progress-2'));
 var div7=d3.select(document.getElementById('progress-3'));
 var div8=d3.select(document.getElementById('progress-4'));

 var div9=d3.select(document.getElementById('progress-5'));
 var div10=d3.select(document.getElementById('progress-6'));
 var div11=d3.select(document.getElementById('progress-7'));
 var div12=d3.select(document.getElementById('progress-8'));

 var div13=d3.select(document.getElementById('progress-9'));
 var div14=d3.select(document.getElementById('progress-10'));
 var div15=d3.select(document.getElementById('progress-11'));
 var div16=d3.select(document.getElementById('progress-12'));

 var div17=d3.select(document.getElementById('progress-13'));
 var div18=d3.select(document.getElementById('progress-14'));
 var div19=d3.select(document.getElementById('progress-15'));


    start();

    function onClick1() {
        deselect();
    }

    function labelFunction(val,min,max) {

    }

    function deselect() {
        div1.attr("class","radial");
		 div2.attr("class","radial");
		  div3.attr("class","radial");
		   div4.attr("class","radial");
		   div5.attr("class","radial");
		   div6.attr("class","radial");
		   div7.attr("class","radial");
		   div8.attr("class","radial");
		   
		    div9.attr("class","radial");
		   div10.attr("class","radial");
		   div11.attr("class","radial");
		   div12.attr("class","radial");
		    div13.attr("class","radial");
		   div14.attr("class","radial");
		   div15.attr("class","radial");
		   div16.attr("class","radial");
		    div17.attr("class","radial");
		   div18.attr("class","radial");
		   div19.attr("class","radial");
    }

    function start() {

        var rp1 = radialProgress(document.getElementById('jk'))
                .label("70")
                .onClick(onClick1)
                .diameter(100)
                .value(70)
                .render();
				
	var rp2 = radialProgress(document.getElementById('jk1'))
                .label("70")
                .onClick(onClick1)
                .diameter(100)
                .value(50)
                .render();
				
    var rp3 = radialProgress(document.getElementById('jk2'))
                .label("55")
                .onClick(onClick1)
                .diameter(100)
                .value(55)
				.render();
				
				
    var rp4 = radialProgress(document.getElementById('jk3'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();
	
	var rp5 = radialProgress(document.getElementById('progress-1'))
                .label("70")
                .onClick(onClick1)
                .diameter(100)
                .value(70)
                .render();
				
	var rp6 = radialProgress(document.getElementById('progress-2'))
                .label("70")
                .onClick(onClick1)
                .diameter(100)
                .value(50)
                .render();
				
    var rp7 = radialProgress(document.getElementById('progress-3'))
                .label("55")
                .onClick(onClick1)
                .diameter(100)
                .value(55)
                .render();
				
    var rp8 = radialProgress(document.getElementById('progress-4'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();

    var rp9 = radialProgress(document.getElementById('progress-5'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();

    var rp10 = radialProgress(document.getElementById('progress-6'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();
    var rp11 = radialProgress(document.getElementById('progress-7'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();
    var rp12 = radialProgress(document.getElementById('progress-8'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();
    var rp13 = radialProgress(document.getElementById('progress-9'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();
    var rp14 = radialProgress(document.getElementById('progress-10'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();
    var rp15 = radialProgress(document.getElementById('progress-11'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();
    var rp16 = radialProgress(document.getElementById('progress-12'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();

    var rp17 = radialProgress(document.getElementById('progress-13'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();
				
    var rp18 = radialProgress(document.getElementById('progress-14'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();
    var rp19 = radialProgress(document.getElementById('progress-15'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();
    var rp20 = radialProgress(document.getElementById('progress-16'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();
    var rp21 = radialProgress(document.getElementById('progress-17'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();
    var rp22 = radialProgress(document.getElementById('progress-18'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();
    var rp23 = radialProgress(document.getElementById('progress-19'))
                .label("35")
                .onClick(onClick1)
                .diameter(100)
                .value(35)
                .render();

				
    }

/*end d3.js progres bar */
})