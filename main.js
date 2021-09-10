var htu = 1
var pt = 1
var ki = 1
var er = 1
var de = 1

document.getElementById("divHowtouseTitle").onclick = function () {
    htu = htu + 1
    if (htu % 2 == 0) {
        document.getElementById("divHowtouseContent").style.display = "block";
    } else {
        document.getElementById("divHowtouseContent").style.display = "none";
    }
};

document.getElementById("divPatchnoteTitle").onclick = function () {
    pt = pt + 1
    if (pt % 2 == 0) {
        document.getElementById("divPatchnoteContent").style.display = "block";
    } else {
        document.getElementById("divPatchnoteContent").style.display = "none";
    }
};

document.getElementById("divKnownissueTitle").onclick = function () {
    ki = ki + 1
    if (ki % 2 == 0) {
        document.getElementById("divKnownissueContent").style.display = "block";
    } else {
        document.getElementById("divKnownissueContent").style.display = "none";
    }
};

document.getElementById("divErrorTitle").onclick = function () {
    er = er + 1
    if (er % 2 == 0) {
        document.getElementById("divErrorContent").style.display = "block";
    } else {
        document.getElementById("divErrorContent").style.display = "none";
    }
};

document.getElementById("divDownloadErrorTitle").onclick = function () {
    de = de + 1
    if (de % 2 == 0) {
        document.getElementById("divDownloadErrorContent").style.display = "block";
    } else {
        document.getElementById("divDownloadErrorContent").style.display = "none";
    }
};