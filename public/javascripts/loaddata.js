//http://codepen.io/anon/pen/edqmKW
var liftVolumes = [
    { date: "10-03-2016", squat: 155, deadlift: 155, bench: 115 },
    { date: "10-05-2016", squat: 165, press: 85},
    { date: "10-10-2016", squat: 170, deadlift: 225, bench: 125},
    { date: "10-12-2016", squat: 175, press: 90},
    { date: "10-17-2016", squat: 180, deadlift: 240, bench: 135},
    { date: "10-19-2016", squat: 185, press: 95 },
    { date: "10-24-2016", squat: 190, deadlift: 255, bench: 145},
    { date: "10-26-2016", squat: 195, press: 100 },
    { date: "10-31-2016", squat: 200, deadlift: 270, bench: 155},
];

var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var parseDate = d3.timeParse("%m-%d-%Y");
var x = d3.scaleTime().rangeRound([0, width]);
var y = d3.scaleLinear().rangeRound([height, 0]);

var squatLine = d3.line().x(
    function(d) {
        return x(parseDate(d.date));
    }).y(function(d) {
        return y(d.squat);
    });

var deadliftLine = d3.line().x(
    function(d) {
        return x(parseDate(d.date));
    }).y(function(d) {
        return y(d.deadlift);
    });

var benchLine = d3.line().x(
    function(d) {
        return x(parseDate(d.date));
    }).y(function(d) {
        return y(d.bench);
});

var pressLine = d3.line().x(
    function(d) {
        return x(parseDate(d.date));
    }).y(function(d) {
    return y(d.press);
});

var plotChart = function(data) {
    x.domain(d3.extent(data, function(d) {
        return parseDate(d.date);
    }));
    y.domain([80, 300]);
    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .style("text-anchor", "end")
        .text("Weight (lbs)");

    g.append("path")
        .datum(data)
        .attr("class", "squat")
        .attr("d", squatLine);
    g.append("path")
        .datum(data.filter(function(d) {
            if(d != null && d.deadlift != null) {
                return d;
            }
        }))
        .attr("class", "deadlift")
        .attr("d", deadliftLine);
    g.append("path")
        .datum(data.filter(function(d) {
            if(d != null && d.bench != null) {
                return d;
            }
        }))
        .attr("class", "bench")
        .attr("d", benchLine);
    g.append("path")
        .datum(data.filter(function(d) {
            if(d != null && d.press != null) {
                return d;
            }
        }))
        .attr("class", "press")
        .attr("d", pressLine);
}

plotChart(liftVolumes);