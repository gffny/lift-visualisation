var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Lift' });
});

router.get('/squat', function(req, res, next) {

    //TODO pull data from data file and render the template
    var liftVolumes = [
        { date: "10-03-2016", squat: 155, deadlift: 155, bench: null, press: null },
        { date: "10-05-2016", squat: 165, deadlift: null, bench: null, press: null },
        { date: "10-10-2016", squat: 170, deadlift: 155, bench: null, press: null },
        { date: "10-12-2016", squat: 175, deadlift: null, bench: null, press: null },
        { date: "10-17-2016", squat: 180, deadlift: 155, bench: null, press: null },
        { date: "10-19-2016", squat: 185, deadlift: null, bench: null, press: null },
        { date: "10-24-2016", squat: 190, deadlift: 155, bench: null, press: null },
        { date: "10-26-2016", squat: 195, deadlift: null, bench: null, press: null },
        { date: "10-31-2016", squat: 200, deadlift: 155, bench: null, press: null },
        { date: "11-02-2016", squat: null, deadlift: null, bench: null, press: null },
        { date: "11-07-2016", squat: null, deadlift: 155, bench: null, press: null },
        { date: "11-09-2016", squat: null, deadlift: null, bench: null, press: null },
        { date: "11-14-2016", squat: null, deadlift: 155, bench: null, press: null },
        { date: "11-16-2016", squat: null, deadlift: null, bench: null, press: null },
        { date: "11-21-2016", squat: null, deadlift: 155, bench: null, press: null },
        { date: "11-23-2016", squat: null, deadlift: null, bench: null, press: null },
        { date: "11-28-2016", squat: null, deadlift: 155, bench: null, press: null },
        { date: "11-30-2016", squat: null, deadlift: null, bench: null, press: null }
    ];
    res.render('lift', { liftArray: liftVolumes });
});

module.exports = router;
