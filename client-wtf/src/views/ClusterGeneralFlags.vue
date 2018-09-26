<template>
    <div class="clus-gen-flags">
      <div>
          <div class="container-fluid">
              <div class="row">
                  <div class="jumbotron col-lg-6">
                    <div v-for="flag in flags">
                      <button @click="flag.selected = !flag.selected" v-bind:class="{selected: !flag.selected}" > {{ flag.name }}</button>
                    </div>
                  </div>
                  <div class="jumbotron col-lg-3 info">
                    <h2>About flags</h2>
                    <span v-for="flag in flags">
                        <h5> <strong>{{ flag.name }}</strong>: {{ flag.info }}</h5>
                    </span>
                    <span>
                        <h6>noin and noout prevent booting OSDs from being marked in (allocated data)
                            or protect OSDS from eventually being marked out (regardless of what the current value
                            for mon osd down out interval is).<br/>noup, noout and nodown are temporary in the sense that once
                        the flags are cleared, the action they were blocking should occur shortly after.
                        The noin flag, on the other hand, prevents OSDs from being marked in on boot, and any
                        daemons that started while the flag was set will remain that way.</h6>
                    </span>
                  </div>
              </div>
          </div>
      </div>
    </div>

</template>
<script>



    export default {
        components: {

        },
        data() {
            return {
                flags: [
                    {
                        name: 'pause',
                        selected: 'false',
                        info: 'if set, no IO requests will be sent to any OSD'
                    },
                    {
                        name: 'noup',
                        selected: 'false',
                        info: 'prevent OSDs from getting marked up'
                    },
                    {
                        name: 'nodown',
                        selected: 'false',
                        info: 'prevent OSDs from getting marked down'
                    },
                    {
                        name: 'noout',
                        selected: 'false',
                        info: 'prevent OSDs from getting marked out'
                    },
                    {
                        name: 'noin',
                        selected: 'false',
                        info: 'prevent OSDs from getting marked in'
                    },
                    {
                        name: 'nobackfill',
                        selected: 'false',
                        info: ''
                    },
                    {
                        name: 'norecover',
                        selected: 'false',
                        info: ''
                    },
                    {
                        name: 'noscrub',
                        selected: 'false',
                        info: ''
                    },
                    {
                        name: 'nodeep-scrub',
                        selected: 'false',
                        info: ''
                    },
                    {
                        name: 'notieragent',
                        selected: 'false',
                        info: 'This will pause tiering agent work'
                    }
                ]
            }
        }
    };
</script>

<style lang="scss">
    .jumbotron{
        background-color: white;
    }
    .selected {
        background-color: darkorange;
    }
    button{
        margin-bottom: 10px;
        width: 100px;
        height: 25px;

    }
    .info {
        border-radius: 25px;
        border: 2px solid #73AD21;
        padding: 20px;
        text-align: left;
    }
    p {
        text-align: left;
        font-size: 0.3em;
    }
    h5{
        margin-top: 15px;
    }
    h6{
        font-size: 12px;
    }
</style>
