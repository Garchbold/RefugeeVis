
var data;

var newgeo = geo;
$.ajax({
    url: "/data.csv",
    async: false,
    success: function (csvd) {
        data = $.csv.toArrays(csvd);
    },
    dataType: "text",
    complete: function () {
        // call a function on complete
    }
});
var i, n;
for(i = 0; i < geo.features.length; i++) {
    for(n = 0; n < data.length; n++) {
        if (geo.features[i].properties.name == data[n][1]) {
            if(!isNaN(data[n][4])) {
                if(newgeo.features[i].properties.pendingStartYear == undefined){
                    newgeo.features[i].properties.pendingStartYear = data[n][4];
                } else {
                    newgeo.features[i].properties.pendingStartYear += data[n][4];
                }
            }
            if(!isNaN(data[n][6])) {
                if(newgeo.features[i].properties.applied == undefined){
                    newgeo.features[i].properties.applied = data[n][6];
                } else {
                    newgeo.features[i].properties.applied += data[n][6];
                }
            }
            if(!isNaN(data[n][7])) {
                if(newgeo.features[i].properties.recognized == undefined){
                    newgeo.features[i].properties.recognized = data[n][7];
                } else {
                    newgeo.features[i].properties.recognized += data[n][7];
                }
            }
            if(!isNaN(data[n][9])) {
                if(newgeo.features[i].properties.rejected == undefined){
                    newgeo.features[i].properties.rejected = data[n][9];
                } else {
                    newgeo.features[i].properties.rejected += data[n][9];
                }
            }
            if(!isNaN(data[n][10])) {
                if(newgeo.features[i].properties.otherwiseClosed == undefined){
                    newgeo.features[i].properties.otherwiseClosed = data[n][10];
                } else {
                    newgeo.features[i].properties.otherwiseClosed += data[n][10];
                }
            }
            if(!isNaN(data[n][12])) {
                if(newgeo.features[i].properties.pendingEndYear == undefined){
                    newgeo.features[i].properties.pendingEndYear = data[n][12];
                } else {
                    newgeo.features[i].properties.pendingEndYear += data[n][12];
                }
            }
            if(!isNaN(data[n][11])) {
                if(newgeo.features[i].properties.decisions == undefined){
                    newgeo.features[i].properties.decisions = data[n][11];
                } else {
                    newgeo.features[i].properties.decisions += data[n][11];
                }
            }
            if(!isNaN(data[n][13])) {
                if(newgeo.features[i].properties.UNHCRassisted == undefined){
                    newgeo.features[i].properties.UNHCRassisted = data[n][13];
                } else {
                    newgeo.features[i].properties.UNHCRassisted += data[n][13];
                }
            }
        }
    }
}
