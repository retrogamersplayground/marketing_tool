<template>
    <div id="view-business">
        <!--<ul>
            <h1>View Business</h1>
            <li id="businessNameLi">
                <h2>{{ businessName }}</h2>
            </li>
            <li>Business Id#: {{ businessId }}</li>
            <li>Industry: {{ industry }}</li>
            <li>Contact Name One: {{ contactNameOne }}</li>
            <li>Contact Name Two: {{ contactNameTwo }}</li>
            <li>Street: {{ street }}</li>
            <li>City: {{ city }}</li>
            <li>State: {{ state }}</li>
            <li>Zip: {{ zip }}</li>
            <li>Phone: {{ phone }}</li>
            <li>Email One: {{ emailOne }}</li>
            <li>Email Two: {{ emailTwo }}</li>
            <li>Website: {{ website }}</li>
            <li>Comments: {{ comments }}</li>
        </ul>-->
        <h1>View Business</h1>
        <div>
            <h2>{{ businessName }}</h2>
            <form @submit.prevent="deleteBusiness" class="deleteBusinessForm" id="deleteBusinessForm">
                <label for="businessId">Business Id</label>
                <input disabled type="text" v-model="businessId" id="businessId" />
                <label for="industry">Industry</label>
                <input disabled type="text" v-model="industry" id="industry" />
                <label for="businessName">Business Name</label>
                <input disabled type="text" v-model="businessName" id="businessName" />
                <label for="contactNameOne">Contact Name One</label>
                <input disabled type="text" v-model="contactNameOne" id="contactNameOne" />
                <label for="contactNameTwo">Contact Name Two</label>
                <input disabled type="text" v-model="contactNameTwo" id="contactNameTwo" />
                <label for="street">Street</label>
                <input disabled type="text" v-model="street" id="street" />
                <label for="city">City</label>
                <input disabled type="text" v-model="city" id="city" />
                <label for="state">State</label>
                <input disabled type="text" v-model="state" id="state" />
                <label for="zip">Zip</label>
                <input disabled type="number" v-model="xip" id="zip" />
                <label for="phone">Phone</label>
                <input disabled type="tel" v-model="phone" id="phone" />
                <label for="emailOne">Email One</label>
                <input disabled type="email" v-model="emailOne" id="emailOne" />
                <label for="emailTwo">Email Two</label>
                <input disabled type="email" v-model="emailTwo" id="emailTwo" />
                <label for="website">Website</label>
                <input disabled type="text" v-model="website" id="website" />
                <label for="comments">Comments</label>
                <input disabled type="text" v-model="comments" id="comments" />
                <router-link to="/"><button class="home_button">Home</button></router-link>
                <button @click="deleteBusiness" class="delete_button" type="submit">Delete</button>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'view-business',
  data () {
    return {
      businessId: null,
      industry: null,
      businessName: null,
      contactNameOne: null,
      contactNameTwo: null,
      street: null,
      city: null,
      state: null,
      zip: null,
      phone: null,
      emailOne: null,
      emailTwo: null,
      website: null,
      comments: null
    }
  },
  beforeRouteEnter (to, from, next) {
    db.collection('businesses')
      .where('businessId', '==', to.params.businessId)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.businessId = doc.data().businessId
            vm.businessName = doc.data().businessName
            vm.industry = doc.data().industry
            vm.contactNameOne = doc.data().contactNameOne
            vm.contactNameTwo = doc.data().contactNameTwo
            vm.street = doc.data().street
            vm.city = doc.data().city
            vm.state = doc.data().state
            vm.zip = doc.data().zip
            vm.phone = doc.data().phone
            vm.emailOne = doc.data().emailOne
            vm.emailTwo = doc.data().emailTwo
            vm.website = doc.data().website
            vm.comments = doc.data().comments
          })
        })
      })
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData () {
      db.collection('businesses')
        .where('businessId', '==', this.$route.params.businessId)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.businessId = doc.data().businessId
            this.businessName = doc.data().businessName
            this.industry = doc.data().industry
            this.contactNameOne = doc.data().contactNameOne
            this.contactNameTwo = doc.data().contactNameTwo
            this.street = doc.data().street
            this.city = doc.data().city
            this.state = doc.data().state
            this.zip = doc.data().zip
            this.phone = doc.data().phone
            this.emailOne = doc.data().emailOne
            this.emailTwo = doc.data().emailTwo
            this.website = doc.data().website
            this.comments = doc.data().comments
          })
        })
    },
    deleteBusiness () {
      db
        .collection('businesses')
        .where('businessId', '==', this.$route.params.businessId)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete()
          })
        })
        .then(() => {
          this.$router.push({
            name: 'Dashboard'
          })
        })
    }
  }
}
</script>

<style scoped>
.delete_button {
  background-color: rgb(238, 73, 73);
  border: 1px solid rgb(238, 73, 73);
  display: inline-block;
  width: 20%;
}
.home_button {
  display: inline-block;
  width: 20%;
}
</style>
