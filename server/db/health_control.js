const db = require('./connection');

const health = db.get('health_info');

function checkHealth() {
  return health.findOne();
}
function removeHealthInfos(){
  return health.remove();
}

function addHealthInfo(info){
  return health.insert(info);
}

module.exports = {
    checkHealth,
    removeHealthInfos,
    addHealthInfo
};

