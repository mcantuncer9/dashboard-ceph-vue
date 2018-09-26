<template>
    <div>
    <div class="dash-nav mb-5">
        <a href="/">
            <img alt="Vue logo" src="../assets/logo-h.png">
        </a>
        <ul class="nav nav-pills">
            <div class="dropdown " v-for="listItem in listItems">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" >{{listItem.name}}</a>
                <ul class="dropdown-menu">
                    <li v-for="ddown in listItem.dropdown"><a v-bind:href="ddown.link">{{ddown.name}}</a></li>
                </ul>
            </div>
        </ul>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'DashNav',
        props: {
            msg: String,
        },
        data(){
            return {
                listItems: [
                    {name: 'Cluster', dropdown: [
                            {name: 'Hosts', link: 'hosts'},
                            {name: 'Cluster general flags', link: 'clustergeneralflags'},
                        ]
                    },
                    {name: 'OSD', dropdown: [
                            {name: 'OSDs states', link: 'osdstates'},
                            {name: 'OSDs used space', link: 'osdusedspace'},
                            {name: 'OSDs map', link: 'osdmap'},
                            {name: 'OSDs perf', link: 'osdperf'}
                        ]
                    },
                    {name: 'Pool', dropdown: [
                            {name: 'Pool management', link: 'poolmanagement'},
                            {name: 'Pools/Pgs/osds', link: 'poolpgosds'},
                        ]
                    },
                    {name: 'PG', dropdown: [
                            {name: 'Stuck pg list', link: 'stuckpglist'},
                            {name: 'Pools/Pgs/osds', link: 'poolpgosds'},
                        ]
                    },
                    {name: 'Block devices', dropdown: [
                            {name: 'Block device images', link: 'bdeviceimages'}
                        ]
                    },
                    {name: 'Rados Gateway', dropdown: [
                            {name: 'Users', link: 'users'},
                            {name: 'Buckets', link: 'buckets'},
                            {name: 'Object visualisation', link: 'objvisualisation'}
                        ]
                    },
                    {name: 'MDS', dropdown: [
                            {name: 'MDS status', link: 'mdstatus'},
                        ]
                    },
                    {name: 'Misc', dropdown: [
                            {name: 'Crush map', link: 'crushmap'},
                            {name: 'Erasure profiles', link: 'erasureprofiles'},
                            {name: 'Probe status', link: 'probestatus'},
                            {name: 'Object lookup', link: 'objectlookup'},
                        ]
                    },
                    {name: 'Logged as', dropdown: [
                            {name: 'Logout', link: 'logout'},
                            {name: 'About ekinoks-dash', link: 'about'},
                        ]
                    }
                ]
            }
        }
    };

    //['OSDs states', 'OSDs used space', 'OSDs map', 'OSDs perf']
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    div {
        margin: 40px 0 0;
        list-style-type: none;
        padding: 0;
        display: inline-block;
        margin: 0 10px;
        color: #42b983;
    }
  img{
      max-height: 70px;
  }
</style>
