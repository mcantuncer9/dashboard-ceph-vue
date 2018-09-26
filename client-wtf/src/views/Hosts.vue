<template>
  <div class="hosts">
    <div class="container">
      <label for="staticEmail" class="col-sm-2 col-form-label">Date: </label>
        <div class="col-sm-10">
          <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" v-model="currentDate">
        </div>
    <div class="jumbotron">
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
    </div>
  </div>
</template>
<script>

import bTable from '../../node_modules/bootstrap-vue/es/components/table/table';

export default {
  components: {
    'bTable' : bTable
  },
  data() {
      return {
          currentDate: new Date().getDate() + "/" + new Date().getMonth() +  "/" + new Date().getFullYear(),
          fields: [
              {
                  key: 'first_name',
                  sortable: true
              },
              {
                  key: 'last_name',
                  sortable: true
              },
              {
                  key: 'age',
                  sortable: true
              }
              ],
          items: [
              { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
              { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
              { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
              { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
          ]
    };
  },
};

</script>

<style lang="scss">
    .jumbotron{
      background-color: white;
    }
</style>
