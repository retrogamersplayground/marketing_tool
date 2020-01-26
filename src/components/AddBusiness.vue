<template>
  <div id="add-business">
    <h2>Add Business</h2>
    <div>
        <form @submit.prevent="saveBusiness" class="addBusinessForm" id="addBusinessForm">
            <input disabled type="hidden" v-model="businessId" id="businessId" required />
            <input type="text" v-model="industry" id="industry" placeholder="Industry" required />
            <input type="text" v-model="businessName" id="businessName" placeholder="Business Name" required />
            <input type="text" v-model="contactNameOne" id="contactNameOne" placeholder="Contact Name"/>
            <input type="text" v-model="contactNameTwo" id="contactNameTwo" placeholder="Second Contact Name"/>
            <input type="text" v-model="street" id="street" placeholder="Street Address"/>
            <input type="text" v-model="city" id="city" placeholder="City"/>
            <input type="text" v-model="state" id="state" placeholder="State"/>
            <input type="number" v-model="xip" id="zip" placeholder="Zip Code"/>
            <input type="tel" v-model="phone" id="phone" placeholder="Phone Number"/>
            <input type="email" v-model="emailOne" id="emailOne" placeholder="Email"/>
            <input type="email" v-model="emailTwo" id="emailTwo" placeholder="Email Two"/>
            <input type="text" v-model="website" id="website" placeholder="Website" />
            <input type="text" v-model="comments" id="comments" placeholder="Comments" />
            <button type="submit">Submit</button>
        </form>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'add-business',
  data () {
    return {
      businessId: 'businessId ' + Math.round(new Date().getTime() / 1000),
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
  methods: {
    saveBusiness () {
      db.collection('businesses')
        .add({
          businessId: this.businessId,
          industry: this.industry,
          businessName: this.businessName,
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
        .then(docRef => this.$router.push('/'))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
</style>
