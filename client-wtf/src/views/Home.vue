<template>
  <div class="home container">
    <h3 v-bind:class="'health_status_' + health.health">{{health.health}}</h3>
    <div class="jumbotron">
      Monitor STATUS
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="jumbotron col-lg-3">
          <p>Placement Groups -- Pie Chart -- </p>
        </div>
        <div class="jumbotron col-lg-3">
          <p>Available Capacity -- Bytes --</p>
        </div>
        <div class="jumbotron col-lg-3">
          <p>OSD Info -- IN-OUT / UP-DOWN</p>
        </div>
        <div class="col-lg-3">
          <div class="jumbotron">
            <p>Pools - Clean/Unclean</p>
          </div>

        <div class="jumbotron">
          <p>MDSs - up:in / up: standby / max</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navDash from '../components/Nav'

const API_URL_HEALTH = 'http://localhost:5000/health';
const API_URL_OSD_PERF = 'http://localhost:5000/osdperf';
/*const API_URL = 'http://localhost:5000/health';
const API_URL = 'http://localhost:5000/health';
*/
export default {
  name: 'navDash',
  components: {
    navDash,
  },
  data: () => ({
    healthCondition: '',
    health: ''
  }),
  mounted(){
      fetch(API_URL_HEALTH).then(response => response.json()).then((result) => {
          this.health = result;
      });

      fetch(API_URL_OSD_PERF).then(response => response.json()).then((result) => {
          this.health = result;
      });
  }
};
</script>

<style lang="scss">
  .health_status {
    /*
    height: 40px;width: 40px;border:solid 1px black;
    float:left;
    margin:10px;
    */

    border-radius: 25px;
    padding: 20px;
    width: 200px;
    height: 150px;

  }

  .health_status_HEALTH_OK {background-color: limegreen}
  .health_status_HEALTH_WARN {background-color: darkorange}
  .health_status_HEALTH_ERR {background-color: red}
  .health_status_HEALTH_UNKNOWN {background-color: lightgrey}
  .text_health_status_HEALTH_OK {color: limegreen}
  .text_health_status_HEALTH_WARN {color: darkorange}
  .text_health_status_HEALTH_ERR {color: red}
  .text_health_status_HEALTH_UNKNOWN {color: lightgrey}

  .jumbotron{
    background-color: darkorange;
  }
/*
  .jumbotron{
    background-repeat:no-repeat;
    background-position:200% 100%;
    padding:200px 0 140px 0;
    margin-bottom:70px;
  }
*/
  p {
    text-align: center;
  }
</style>
