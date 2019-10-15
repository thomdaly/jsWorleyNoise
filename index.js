var height = $(window).height();
var width = $(window).width();
var wait = ms => new Promise((r, j) => setTimeout(r, ms))
$("body").append("<canvas id='background' height=" + height + " width=" + width + "></canvas>")
$("body", "html").css({ "overflow": "hidden", "margin": "0" });
const ctx = document.getElementById("background").getContext("2d");
var u = height / 1000;
var pointNum = 5;
var points = [];

for (var i = 0; i < pointNum; i++) {
    points.push([]);
    for (var j = 0; j < pointNum; j++) {
        var x = Math.floor(Math.random() * ((width / pointNum) * (i + 1) - (width / pointNum) * i + 1)) + (width / pointNum) * i;
        var y = Math.floor(Math.random() * ((height / pointNum) * (j + 1) - (height / pointNum) * j + 1)) + (height / pointNum) * j;
        points[i].push([x, y]);
    }
}

console.log(points)

for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
        var dist = 100000;

        for (var l = Math.floor(i / (width / pointNum)) - 2; l < Math.floor(i / (width / pointNum)) + 2; l++) {
            for (var n = Math.floor(j / (height / pointNum)) - 2; n < Math.floor(j / (height / pointNum)) + 2; n++) {
                if (0 <= l && l < pointNum && 0 <= n && n < pointNum) {
                    if (Math.sqrt(Math.pow(points[l][n][0] - i, 2) + Math.pow(points[l][n][1] - j, 2)) <= dist) {
                        dist = Math.round(Math.min(Math.sqrt(Math.pow(points[l][n][0] - i, 2) + Math.pow(points[l][n][1] - j, 2)), 255));
                    }
                }
            }
        }
        ctx.fillStyle = "rgb(" + (255 - dist) + ", " + (255 - dist) + ", " + (255 - dist) + ")";
        ctx.fillRect(i, j, 1, 1);
    }
}

// ctx.strokeStyle = "red";
// for (var i = 0; i < pointNum; i++) {
//     for (var j = 0; j < pointNum; j++) {
//         ctx.strokeRect((width / pointNum) * i, (height / pointNum) * j, width / pointNum, height / pointNum);
//     }
// }

// ctx.fillStyle = "red";
// for (var i = 0; i < points.length; i++) {
//     for (var j = 0; j < points[i].length; j++) {
//         ctx.fillRect(points[i][j][0], points[i][j][1], 5, 5);
//     }
// }