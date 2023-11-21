 // Load external data and boot
        d3.queue()
        .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson") //topo
        .defer(d3.json, "http://localhost:3000/datacapitA") //data1
        .defer(d3.json, "http://localhost:3000/dataocean")//data2
        .defer(d3.json, "http://localhost:3000/datatotal")//data3
        .await(ready);

  //kolonner i hvert dataset udvælges og knyttes til en
            let showData1 = data1.data;
            showData1.forEach(element => {
                dataMap1.set(element.code, +element.mismanaged);
            });

            let showData2 = data2.data;
            showData2.forEach(element => {
                dataMap2.set(element.code, +element.mismanaged);
            });

            let showData3= data3.data;
            showData3.forEach(element => {
                dataMap3.set(element.code, +element.mismanaged);
            });

            dataMapToShow = dataMap1;

//Funktion der kaldes på når dataen loader ind
        function ready(error, topo, data1, data2, data3) {
            console.log(topo);
            console.log(data1);
            console.log(data2);
            console.log(data3);
            console.log(dataMapToShow);

 // Data map for hvert dataset
        var dataMapToShow = []; //Map til at blive vist
        var dataMap1 = d3.map(); //Map for datasæt 1
        var dataMap2 = d3.map(); //Map for datasæt 2
        var dataMap3 = d3.map(); //Map for datasæt 3
