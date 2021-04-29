//test
//test2
Promise.all([d3.csv("drug_reduced.csv"),d3.json("zipcode.geojson")])
    .then(function(data){ 
      ready(data[0],data[1])
    })

    var width = 800
    var height = 200
    var margin = 50
    var startYear = 2016
    var startMonth = 1
    var startDay = 1
   var startDate = new Date(startYear,startMonth,startDay)
	var endYear = 2020
   var endDate = new Date(endYear, 12, 31)
var x = d3.scaleTime()
      .domain([startDate, endDate])
      .rangeRound([0, width]);
       var max = 600
	  
var y = d3.scaleLinear()
      .domain([0,max])
      .range([height, 0]);
    //var weeks = (endDate-startDate)/ (7 * 24 * 60 * 60 * 1000)
    var weeks = 5*12	  
	  
function ready(ems,geo) {
    
   var byB = filterByZip(ems,startDate)
 //
 //   for(var b in byB){
 //     if(b!="UNKNOWN"){
 //       drawChart(b,byB[b],startDate,endDate)
 //     }
 //   }
 //  // setthe ranges
        d3.select("#dateRange").html(startYear+"."+startMonth+"."+startDay+" to 2021.1.1")
        var byB = filterByZip(ems,startDate)
        //console.log(byB)
        drawOutline(geo,byB,startDate,endDate) //call the draw outline function from below 
    var weeks = endYear-startYear*12
    
  var svg = d3.select("#line").append("svg")  .attr("id","chart")
      .attr("width", width+margin*2)
      .attr("height", height+margin*2)
      .append("g")
    svg.append("text").text("By Zipcode").attr("x",10).attr("y",margin-5)  
 
 for(var b in byB){
    // console.log(b)
     drawLine(b,byB[b],startDate,endDate,svg)
 }

svg.append("g")
      .attr("transform", "translate("+margin+"," + (height+margin) + ")")
      .call(d3.axisBottom(x).ticks(10));    
	  
svg.append("g")
      .attr("transform", "translate("+margin+","+margin+")")
      .call(d3.axisLeft(y).ticks(4));
          

 // drawChart("ALL BOROUGHS",ems,startDate,endDate)
  
};

function drawOutline(geo,ems,startDate,endDate){
    //console.log(geo)
    var width = 500
    var height = 500    
    var svg = d3.select("#map")
        .append("svg")
        .attr("width",width)
        .attr("height", height);  
    
    var padding = 10

    var projection = d3.geoAlbers()
            .fitExtent([[padding,padding],[width-padding,height-padding]],geo)
    
    var path = d3.geoPath().projection(projection);
   
   var max = d3.max(Object.keys(ems), function(d) { return ems[d].length; })
   var min = d3.min(Object.keys(ems), function(d) { return ems[d].length; })

    var c = d3.scaleLinear().domain([0,min,max]).range(["#ffffff","#dafff3","#00b25d"])
svg.append("g")
    .selectAll("path")
    .data(geo.features)
    .enter()
    .append("path")
      // draw each country
      .attr("d", d3.geoPath()
        .projection(projection)
      )
	  .attr("class","map")
      // set the color of each country
      .attr("fill", function (d) {
          var population = d.properties.POPULATION
          var zipcode = d.properties.ZIPCODE
         // console.log(cases)
          if(ems[zipcode]==undefined){
              var cases = 0
          }
          else{
              var cases = ems[zipcode].length
          }
          return c(cases)
          
          //          var rate = cases/population
// if(cases==undefined || population==0){
//               cases = 0
//               rate = 0
//           }
//           console.log([cases,rate,population])
//           return "#aaa"
//         d.total = data.get(d.id) || 0;
//         return colorScale(d.total);
      })
      .on("mouseover",function(event, d){
          console.log(d.properties.ZIPCODE)
         // drawLine(label, data, startDate,endDate)
		  d3.selectAll(".map").attr("stroke-opacity",0)
          d3.select(this).attr("stroke","#000").attr("stroke-opacity",1)
          
          d3.selectAll(".line").attr("opacity",.01)
          d3.selectAll("#_"+d.properties.ZIPCODE).attr("stroke","red").attr("opacity",1)
          d3.select("#rollover").html(
              "zipcode: "+d.properties.ZIPCODE+"<br>"
              +"population: "+ d.properties.POPULATION
              +"<br>cases: "+ ems[d.properties.ZIPCODE].length
          )
      })
      .on("mouseout",function(event, d){
         // console.log(d.properties)
          d3.select(this).attr("stroke-opacity",0)
         d3.select("#rollover").html("")
          d3.selectAll(".line").attr("opacity",.1).attr("stroke","black")
		  
      })
    
    
}

function filterByZip(data,startDate){
    console.log(data.length)
    console.log(startDate)
  var byB ={}
  var count =0
  for(var i in data){
      //console.log(data[i])
      if(data[i]["INCIDENT_DATETIME"]!=undefined){
          var date = data[i]["INCIDENT_DATETIME"].split(" ")[0]
          //console.log(date)
        // break
          var year = date.split("/")[2]
          var month = date.split("/")[1]
          var day = date.split("/")[0]
          var currentDate = new Date(year, month, day)
          if(currentDate>=startDate){
              count+=1
                var borough = data[i]["ZIPCODE"]
                if(Object.keys(byB).indexOf(borough)==-1){
                  byB[borough]=[]
                  byB[borough].push(data[i])
                }else{
                  byB[borough].push(data[i])
                }
            }
      }
  }
  console.log(count)
//console.log(byB)
  return byB
}

function drawLine(label, data, startDate,endDate,svg){
 // d3.select("#chart").remove()
    //console.log(data)
    
    var parseDate = d3.timeParse("%m/%d/%Y");
  
    // var x = d3.scaleTime()
   //        .domain([startDate, endDate])
   //        .rangeRound([0, width]);
   //  var y = d3.scaleLinear()
   //        .range([height, 0]);
   //       // console.log(max)
          
      var valueline = d3.line()
          .curve(d3.curveBasis)
          .x(function(d,i) {return x(d.x0); return x(d.date); })
          .y(function(d) {return y(d.length); });
                    
      var histogram = d3.bin()
          .value(function(d) {
            var dateOnly = d["INCIDENT_DATETIME"].split(" ")[0]
            return parseDate(dateOnly)
            return d["INCIDENT_DATETIME"]; })
          .domain(x.domain())
            .thresholds(x.ticks(weeks));
                //.thresholds(x.ticks(d3.timeMonth));

        var bins = histogram(data);
     // var max = d3.max(bins, function(d) { return d.length; })
//      var min = d3.min(bins, function(d) { return d.length; })        
        

  
   svg.append("path")
        .data([bins])
        .attr("class", "line")
        .attr("id","_"+label)
        .attr("d", valueline)
        .attr("fill","none")
        .attr("stroke","#000000")
        .attr("opacity",.1)
        .attr("transform", "translate("+margin+"," + margin + ")")
		
}


function drawChart(label,data, startDate,endDate){
d3.select("#chart").remove()
  console.log(data)
  var weeks = (endDate-startDate)/ (7 * 24 * 60 * 60 * 1000)
  var weeks = 15*12
  var parseDate = d3.timeParse("%m/%d/%Y");
  var width = weeks*5
  var height = 150
  var margin = 50
  
  var x = d3.scaleTime()
            .domain([startDate, endDate])
            .rangeRound([0, width]);
  var y = d3.scaleLinear()
            .range([height, 0]);
         

  // set the parameters for the histogram
  var histogram = d3.bin()
      .value(function(d) {
        var dateOnly = d["INCIDENT_DATETIME"].split(" ")[0]
        return parseDate(dateOnly)
        return d["INCIDENT_DATETIME"]; })
      .domain(x.domain())
        .thresholds(x.ticks(weeks));
            //.thresholds(x.ticks(d3.timeMonth));

    var bins = histogram(data);
    console.log(bins)
    
  //  y.domain([0,2625]);
  var max = d3.max(bins, function(d) { return d.length; })
  var min = d3.min(bins, function(d) { return d.length; })
  var c = d3.scaleLinear().domain([0,(min+max)/2,max]).range(["#aaa","#aaa","red"])
  console.log(max)
    y.domain([0, max]);
  //    console.log(d3.max(bins, function(d) { return d.length; }))
  // append the svg object to the body of the page
  // append a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select("body").append("svg")  .attr("id","chart")
      .attr("width", width+margin*2)
      .attr("height", height+margin*2)
      .append("g")
  
    svg.append("text").text(label).attr("x",10).attr("y",margin-2)
    
  svg.selectAll("rect")
    .data(bins)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", 1)
      .attr("transform", function(d) {
		      return "translate(" + (x(d.x0)+margin+1) + "," + (y(d.length)+margin) + ")"; })
      .attr("width", function(d) { return 5; return x(d.x1) - x(d.x0) -1 ; })
      .attr("height", function(d) { return height - y(d.length); })
        .attr("fill",function(d){
          return c(d.length)
          if(d.length==max){
            return "#3c7ae7"
          }else{
            return "#98dff7"
          }
        })
  
svg.append("g")
      .attr("transform", "translate("+margin+"," + (height+margin) + ")")
      .call(d3.axisBottom(x).ticks(30));
      
      
svg.append("g")
      .attr("transform", "translate("+margin+","+margin+")")
      .call(d3.axisLeft(y).ticks(4));
  // for(var i in data){
//
//     var date = Date.parse(data[i]["INCIDENT_DATETIME"])
//     console.log(date)
//     break
//   }
  
}