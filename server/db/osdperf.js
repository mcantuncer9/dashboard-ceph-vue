const db = require('./connection')

const osdperf = db.get('osd-perf');

function checkOSDPerf() {
    return osdperf.findOne();
}
function removeOSDPerfInfos(){
    return osdperf.remove();
}

function addOSDPerfInfo(info){
    return osdperf.insert(info);
}

module.exports = {
    checkOSDPerf,
    removeOSDPerfInfos,
    addOSDPerfInfo
};
