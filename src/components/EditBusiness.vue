<template>
    <div id="edit-business">
        <h1>Edit Business</h1>
        <div>
            <h2>{{ businessName }}</h2>
            <form @submit.prevent="editBusiness" class="editForm" id="editForm">
                <label for="businessId">Business Id</label>
                <input disabled type="text" v-model="businessId" id="businessId" required />
                <label for="industry">Industry</label>
                <input type="text" v-model="industry" id="industry" required/>
                <label for="businessName">Business Name</label>
                <input type="text" v-model="businessName" id="businessName" required />
                <label for="contactNameOne">Contact Name One</label>
                <input type="text" v-model="contactNameOne" id="contactNameOne" />
                <label for="contactNameTwo">Contact Name Two</label>
                <input type="text" v-model="contactNameTwo" id="contactNameTwo" />
                <label for="street">Street</label>
                <input type="text" v-model="street" id="street" />
                <label for="city">City</label>
                <input type="text" v-model="city" id="city" />
                <label for="state">State</label>
                <input type="text" v-model="state" id="state" />
                <label for="zip">Zip</label>
                <input type="number" v-model="xip" id="zip" />
                <label for="phone">Phone</label>
                <input type="tel" v-model="phone" id="phone" />
                <label for="emailOne">Email One</label>
                <input type="email" v-model="emailOne" id="emailOne" />
                <label for="emailTwo">Email Two</label>
                <input type="email" v-model="emailTwo" id="emailTwo" />
                <label for="website">Website</label>
                <input type="text" v-model="website" id="website" />
                <label for="comments">Comments</label>
                <input type="text" v-model="comments" id="comments" />
                <router-link to="/"><button class="home_button">Home</button></router-link>
                <button @click="editBusiness" class="edit_button" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'edit-business',
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
    editBusiness () {
      db.collection('businesses')
        .where('businessId', '==', this.$route.params.businessId)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                businessId: this.businessId,
                businessName: this.businessName,
                industry: this.industry,
                contactNameOne: this.contactNameOne,
                contactNameTwo: this.contactNameTwo,
                street: this.street,
                city: this.city,
                state: this.state,
                zip: this.zip,
                phone: this.phone,
                emailOne: this.emailOne,
                emailTwo: this.emailTwo,
                website: this.website,
                comments: this.comments
              })
              .then(() => {
                this.$router.push({
                  name: 'Dashboard'
                })
              })
          })
        })
    }
  }
}
</script>

<style scoped>
.edit_button {
  background-color: rgb(64, 182, 64);
  border: 1px solid rgb(64, 182, 64);
  display: inline-block;
  width: 20%;
}
.home_button {
  display: inline-block;
  width: 20%;
}
</style>
