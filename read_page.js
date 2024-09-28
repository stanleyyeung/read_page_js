const fs = require('node:fs');
var UglifyJS = require("uglify-js");

fs.readFile('page1.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    
    var re = /var _pageData = (".*");/;
    var r  = data.match(re);
    if (r) {
        const ast = UglifyJS.parse(r[1]);
        const pageDataVar = JSON.parse(ast.start.value);
        const locationArr = pageDataVar[1][6][0][4][0][6];
        const detailArr = pageDataVar[1][6][0][12][0][13][0];

        // console.log(locationArr);

        // for(i=0; i < locationArr.length; i++) {
        //   console.log(locationArr[i]);
        // }

        // for(i=0; i < detailArr.length; i++) {
        //   console.log(detailArr[i][5][0]);
        //   console.log(detailArr[i][5][3]);
        //   console.log(detailArr[i][6]);
        //   console.log(detailArr[i][1]);
        //   console.log(detailArr[i][7]);
        // }
    }

});

const request = require('request');
request('https://www.google.com/maps/d/viewer?mid=1ajJqZDkUYSqW5JDGs554Z6C560SvXTBx', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  var re = /var _pageData = (".*");/;
  var r  = body.match(re);
  if (r) {
      const ast = UglifyJS.parse(r[1]);
      const pageDataVar = JSON.parse(ast.start.value);
      const locationArr = pageDataVar[1][6][0][4][0][6];
      const detailArr = pageDataVar[1][6][0][12][0][13][0];

      // console.log(locationArr);

      // for(i=0; i < locationArr.length; i++) {
      //   console.log(locationArr[i]);
      // }

      for(i=0; i < detailArr.length; i++) {
        console.log(detailArr[i][5][0]);
        console.log(detailArr[i][5][3]);
        console.log(detailArr[i][6]);
        console.log(detailArr[i][1]);
        console.log(detailArr[i][7]);
      }
  }

});