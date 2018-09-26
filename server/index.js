const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');
const https = require('https');
var parser = require('xml2json');
const request = require('request');
const http = require('http');
const str2json = require('string-to-json');

const app = express();

var healthDB = require('./db/health_control');
var osdperfDB = require('./db/osdperf');

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.set('Accept', 'application/json');
    next();
});

//app.post('/api/status', function (req, res, next) {
    // your code goes here
//});

module.exports = app;
app.get('/', (req, res) => {
    res.json({
      message: 'Ceph Dashboard v2'
    });
});

const port = process.env.PORT || 5000;

var server = app.listen(port, () => {
   console.log(`listening on ${port}`);
});

process.on('uncaughtException', function () {
    server.close();
});

process.on('SIGTERM', function () {
    server.close();
});


app.get('/health', (req, res) => {
    axios.get('http://192.168.2.245:5000/api/v0.1/health').then(response => {
        console.log(response.data.output.status);
        healthInfo.health = response.data.output.status;
        //console.log(response.config);
    }).then( () => {
        healthDB.addHealthInfo(healthInfo);
    }).catch(error => {
        console.log(error);
    });

    healthDB.checkHealth().then((healthInfo) => {
        res.json(healthInfo);
    });
});

/*
const options = {
    path: '/api/v0.1/health',
    port: 5000,
    hostname: '192.168.2.245',
    method: 'GET',
    headers: {
      'accept': 'application/json'
    }
};
*/

/*const req = http.request(options, function (res) {
    console.log('Connected');
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on('end'    , function () {
        console.log(data);
    })
});

*/

var healthInfo = {
    health: ''
};


//FULL CORRECT CODE BLOCK.
axios.defaults.headers.common['Accept'] = 'application/json';

app.get('/osdperf', (req, res) => {
    axios.get('http://192.168.2.245:5000/api/v0.1/osd/perf').then(response => {

        //Change the response depends on data.

        healthInfo.health = response.data;


    }).then(() => {
        //push the data to DB
        osdperfDB.addOSDPerfInfo(response.data);
        //healthDB.addHealthInfo(healthInfo);
    }).catch(error => {
        console.log(error);
    });

    osdperfDB.checkOSDPerf().then()
});
//const url = "http://192.168.2.245:5000/api/v0.1/health";

/*
axios.get(url, res => {

    let body = "";
    res.on("data", data => {
        body += data;
    });
    res.on("end", () => {
        //body = JSON.parse(body);
        //var json = parser.toJson(body);
        //var out = str2json.convert(body);
        console.log(body);

    });
});
*/
/*
const getBreeds = () => {
    try {
        return axios.get(url)
    } catch (error) {
        console.error(error)
    }
}

const countBreeds = async () => {
    const breeds = getBreeds()
        .then(response => {
            if (response.data) {
                console.log(
                    response.data
                )
            }
        })
        .catch(error => {
            console.log(error)
        })
}

countBreeds()


http.get(url, res => {
    res.setEncoding("utf8");
    //res.writeHead(200, { 'Accept': 'application/json' });
    let body = "";
    res.on("data", data => {
        body += data;
    });
    res.on("end", () => {
        //body = JSON.parse(body);
        //var json = parser.toJson(body);
        //var out = str2json.convert(body);
        console.log(body);
        var healthInfo = {
            health: body
        }

        app.post('/health', (req,res) => {
            healthDB.removeHealthInfos();
            healthDB.addHealthInfo(healthInfo);
            console.log('Health info added!');
        });

        axios.post('/health', {
            health: body
        }).then(function (response) {
            console.log(response);
        }).catch(function (err) {
            console.log(err);
        })
    });
});

*/
