var serverip = "http://46.163.68.226:3001/";

document.getElementById("city").addEventListener("keypress", function(event){
    if(event.keyCode==13){
        var xhttp = new XMLHttpRequest();
        document.getElementById("city").blur();
        document.getElementById("preloader").style.display="block";
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                console.log(xhttp.responseText);
                document.getElementById("preloader").style.display="none";
                var code = JSON.parse(xhttp.responseText).code
                document.getElementById("image").style.display="block";
                document.getElementById("advicetext").innerHTML=JSON.parse(xhttp.responseText).advicetext;
                
                switch(parseInt(JSON.parse(xhttp.responseText).code)){
                    //Tornado, Hurricane, Tropical Storm
                    case 0:
                    case 1:
                    case 2:
                        document.getElementById("image").setAttribute("src", "http://image000.flaticon.com/icons/svg/110/110391.svg");
                        reload("Paired");
                        break;
                    //Thunderstorms    
                    case 3:
                    case 4:
                        document.getElementById("image").setAttribute("src", "http://image000.flaticon.com/icons/svg/134/134135.svg");
                        reload("RdGy");
                        break;
                    //Snow, rain, sleet
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 10:
                    case 18:
                    case 46:
                        document.getElementById("image").setAttribute("src", "http://image000.flaticon.com/icons/svg/130/130511.svg");
                        reload("PuBuGn");
                        break;
                    //Rain
                    case 9:  
                    case 11:
                    case 12:
                    case 45:
                        document.getElementById("image").setAttribute("src", "http://image000.flaticon.com/icons/svg/106/106059.svg");
                        reload("Blues");
                        break;
                    //Snow
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 41:
                    case 43:
                        document.getElementById("image").setAttribute("src", "http://image000.flaticon.com/icons/svg/157/157387.svg");
                        reload("Pastel1");
                        break;
                    //Hail
                    case 17:
                    case 35:
                        document.getElementById("image").setAttribute("src", "http://image000.flaticon.com/icons/svg/136/136611.svg");
                        reload("BuPu");
                        break;
                    //dust and co.
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                        document.getElementById("image").setAttribute("src", "http://image000.flaticon.com/icons/svg/134/134120.svg");
                        reload("Greys");
                        break;
                    //Windy
                    case 23:
                    case 24:
                        document.getElementById("image").setAttribute("src", "http://image000.flaticon.com/icons/svg/116/116720.svg");
                        reload("YlGnBu");
                        break;
                    //Cold
                    case 25:
                        document.getElementById("image").setAttribute("src", "http://image000.flaticon.com/icons/svg/70/70071.svg");
                        reload("GnBu");
                        break;
                    //Clouds
                    case 26:
                    case 27:
                    case 28:
                    case 29:
                    case 30:
                    case 44:
                        document.getElementById("image").setAttribute("src", "http://image000.flaticon.com/icons/svg/108/108556.svg");
                        reload("PuBu");
                        break;
                    //Nice    
                    case 31:
                    case 32:
                    case 33:
                    case 34:
                    case 36:
                        document.getElementById("image").setAttribute("src", "http://image000.flaticon.com/icons/svg/130/130671.svg");
                        reload("YlOrRd");
                        break;
                    //Scattered Rain or Thunderstorms
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                    case 42:
                    case 47:
                        document.getElementById("image").setAttribute("src", "http://image000.flaticon.com/icons/svg/120/120203.svg");
                        reload("BrBG");
                        break; 
                } 
            }
        };
        xhttp.open("GET", serverip+"advice/weather/"+document.getElementById("city").value, true);
        xhttp.send();
       
       
   }
     
});

var pattern = Trianglify({
    variance: "0.58",
    width: window.innerWidth,
    height: window.innerHeight,
    x_colors: 'random'
});
document.body.appendChild(pattern.canvas());

function reload(colors){
    document.getElementsByTagName("canvas").item(0).remove();
    var pattern = Trianglify({
        variance: "0.58",
        width: window.innerWidth,
        height: window.innerHeight,
        x_colors: colors
    });
    document.body.appendChild(pattern.canvas());
}
