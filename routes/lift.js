var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Lift' });
});

router.get('/squat', function(req, res, next) {

    //TODO pull data from data file and render the template
    var deadlift = [
        { date: "10-03-2016", lbs: 155 },
        { date: "10-10-2016", lbs: 225 },
        { date: "10-17-2016", lbs: 240 },
        { date: "10-24-2016", lbs: 255 },
        { date: "10-31-2016", lbs: 270 }
    ];
    res.render('line', { liftArray: deadlift });
});

module.exports = router;
