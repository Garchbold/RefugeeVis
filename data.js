
var data;
var data2;

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
$.ajax({
    url: "/data2.csv",
    async: false,
    success: function (csvd) {
        data2 = $.csv.toArrays(csvd);
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
            if(!(data[n][4] == "") && data[n][4].indexOf("*") < 0 ) {
                if(newgeo.features[i].properties.pendingStartYear == undefined){
                    newgeo.features[i].properties.pendingStartYear = parseInt(data[n][4]);
                } else {
                    newgeo.features[i].properties.pendingStartYear += parseInt(data[n][4]);
                }
            } else {
                if(newgeo.features[i].properties.pendingStartYear == undefined){
                    newgeo.features[i].properties.pendingStartYear = 0;
                }
            }
            if(!(data[n][6] == "") && data[n][6].indexOf("*") < 0 ) {
                if(newgeo.features[i].properties.applied == undefined){
                    newgeo.features[i].properties.applied = parseInt(data[n][6]);
                } else {
                    newgeo.features[i].properties.applied += parseInt(data[n][6]);
                }
            } else {
                if(newgeo.features[i].properties.applied == undefined){
                    newgeo.features[i].properties.applied = 0;
                }
            }
            if(!(data[n][7] == "") && data[n][7].indexOf("*") < 0 ) {
                if(newgeo.features[i].properties.recognized == undefined){
                    newgeo.features[i].properties.recognized = parseInt(data[n][7]);
                } else {
                    newgeo.features[i].properties.recognized += parseInt(data[n][7]);
                }
            } else {
                if(newgeo.features[i].properties.recognized == undefined){
                    newgeo.features[i].properties.recognized = 0;
                }
            }
            if(!(data[n][9] == "") && data[n][9].indexOf("*") < 0 ) {
                if(newgeo.features[i].properties.rejected == undefined){
                    newgeo.features[i].properties.rejected = parseInt(data[n][9]);
                } else {
                    newgeo.features[i].properties.rejected += parseInt(data[n][9]);
                }
            } else {
                if(newgeo.features[i].properties.rejected == undefined){
                    newgeo.features[i].properties.rejected = 0;
                }
            }
            if(!(data[n][10] == "") && data[n][10].indexOf("*") < 0 ) {
                if(newgeo.features[i].properties.otherwiseClosed == undefined){
                    newgeo.features[i].properties.otherwiseClosed = parseInt(data[n][10]);
                } else {
                    newgeo.features[i].properties.otherwiseClosed += parseInt(data[n][10]);
                }
            } else {
                if(newgeo.features[i].properties.otherwiseClosed == undefined){
                    newgeo.features[i].properties.otherwiseClosed = 0;
                }
            }
            if(!(data[n][12] == "") && data[n][12].indexOf("*") < 0 ) {
                if(newgeo.features[i].properties.pendingEndYear == undefined){
                    newgeo.features[i].properties.pendingEndYear = parseInt(data[n][12]);
                } else {
                    newgeo.features[i].properties.pendingEndYear += parseInt(data[n][12]);
                }
            } else {
                if(newgeo.features[i].properties.pendingEndYear == undefined){
                    newgeo.features[i].properties.pendingEndYear = 0;
                }
            }
            if(!(data[n][11] == "") && data[n][11].indexOf("*") < 0 ) {
                if(newgeo.features[i].properties.decisions == undefined){
                    newgeo.features[i].properties.decisions = parseInt(data[n][11]);
                } else {
                    newgeo.features[i].properties.decisions += parseInt(data[n][11]);
                }
            } else {
                if(newgeo.features[i].properties.decisions == undefined){
                    newgeo.features[i].properties.decisions = 0;
                }
            }
            if(!(data[n][13] == "") && data[n][13].indexOf("*") < 0 ) {
                if(newgeo.features[i].properties.UNHCRassisted == undefined){
                    newgeo.features[i].properties.UNHCRassisted = parseInt(data[n][13]);
                } else {
                    newgeo.features[i].properties.UNHCRassisted += parseInt(data[n][13]);
                }
            } else {
                if(newgeo.features[i].properties.UNHCRassisted == undefined){
                    newgeo.features[i].properties.UNHCRassisted = 0;
                }
            }
        }
    }
}



var i, n;
for(i = 0; i < geo.features.length; i++) {
    for(n = 0; n < data2.length; n++) {
        if (geo.features[i].properties.name == data2[n][1]) {
            if(!(data2[n][10] == "") && data2[n][10].indexOf("*") < 0 ) {
                if(newgeo.features[i].properties.totalRefugees == undefined){
                    newgeo.features[i].properties.totalRefugees = parseInt(data2[n][10]);
                } else {
                    newgeo.features[i].properties.totalRefugees += parseInt(data2[n][10]);
                }
            } else {
                if(newgeo.features[i].properties.totalRefugees == undefined){
                    newgeo.features[i].properties.totalRefugees = 0;
                }
            }
        }
    }
}

//calculated values for the graph
var i, n;
for(i = 0; i < geo.features.length; i++) {
    newgeo.features[i].properties.recSeek = parseInt(newgeo.features[i].properties.applied / newgeo.features[i].properties.recognized);
    newgeo.features[i].properties.rejSeek = parseInt(newgeo.features[i].properties.applied / newgeo.features[i].properties.rejected);
    newgeo.features[i].properties.seekPer = parseInt(newgeo.features[i].properties.pop_est / newgeo.features[i].properties.applied);
    newgeo.features[i].properties.seekGDP = parseInt(newgeo.features[i].properties.gdp_md_est / newgeo.features[i].properties.applied);
    newgeo.features[i].properties.totalPer = parseInt(newgeo.features[i].properties.pop_est / newgeo.features[i].properties.totalRefugees);
    newgeo.features[i].properties.totalGDP = parseInt(newgeo.features[i].properties.gdp_md_est / newgeo.features[i].properties.totalRefugees);
}
