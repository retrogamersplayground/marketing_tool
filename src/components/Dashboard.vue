<template>
  <div class="dashboard" id="dashboard">
    <h1>{{ msg }}</h1>
    <router-link to="/AddBusiness">
      <button>Add Business</button>
    </router-link>
    <ul class="businessesUl" id="businessesUl">
      <li class="search">
        <input type="text" v-model="search" placeholder="Search for a Business">
      </li>
      <h2>Business</h2>
      <li v-for="business in filteredBusinesses" v-bind:key="business.id">
        <div>
          <h3>{{ business.businessName }}</h3>
          <router-link v-bind:to="{name:'view-business', params: {businessId: business.businessId}}">
          <button class="edit_button">View</button>
          </router-link>
          <router-link v-bind:to="{name:'edit-business', params: {businessId: business.businessId}}">
          <button class="view_button">Edit</button>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'Dashboard',
      businesses: [],
      search: ''
    }
  },
  created () {
    db
      .collection('businesses')
      .orderBy('businessName')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            businessId: doc.data().businessId,
            businessName: doc.data().businessName
          }
          this.businesses.push(data)
        })
      })
  },
  computed: {
    filteredBusinesses: function () {
      return this.businesses.filter((business) => {
        return business.businessName.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.edit_button {
  background-color: teal;
  border: 1px solid teal;
  display: inline-block;
  width: 20%;
}
.view_button {
  background-color: mediumvioletred;
  border: 1px solid mediumvioletred;
  display: inline-block;
  width: 20%;
}
</style>
