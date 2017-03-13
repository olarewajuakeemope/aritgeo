'use strict'

module.exports = {

  aritGeo: function(arr) {
    var arthCount = 0;
    var geoCount = 0;
    if (arr.length === 0) {
      return 0;
    }
    var i;

    function isArith(i) {
      return (arr[i + 1] - arr[i] === arr[i + 2] - arr[i + 1])
    }

    function isGeo(i) {
      return (arr[i + 1] / arr[i] === arr[i + 2] / arr[i + 1])
    }

    for (i = 0; i < arr.length - 2; i++) {
      if (isArith(i)) {
        arthCount++;
      } else if (isGeo(i)) {
        geoCount++;
      } else return -1;
    }
    if (arthCount === arr.length - 2)
      return "Arithmetic";
    else if (geoCount === arr.length - 2)
      return "Geometric";
  }
}