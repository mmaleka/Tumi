<template>
    <v-card
        class="mx-auto"
        max-width=""
        tile
        elevation="3"
    >

    <v-card-title>
        My Account
    </v-card-title>
    <v-card-subtitle>
        PERSONAL INFORMATION 
    </v-card-subtitle>

    <v-card-subtitle>
    <ValidationObserver ref="observer" v-slot="{ }">
        <form>
        <ValidationProvider v-slot="{ errors }" name="first_name">
            <v-text-field
            v-model="first_name"
            :counter="20"
            :error-messages="errors"
            label="First Name"
            disabled=true
            ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="mobile">
            <v-text-field
            v-model="mobile"
            :counter="20"
            :error-messages="errors"
            label="mobile"
            ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="email">
            <v-text-field
            v-model="email"
            :error-messages="errors"
            label="Email"
            disabled=true
            ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="location">
            <v-text-field
            v-model="location"
            :error-messages="errors"
            label="Location"
            ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="about">
            <v-textarea
            v-model="about"
            clearable
            :error-messages="errors"
            clear-icon="mdi-close-circle"
            label="about"
            value="about"
            ></v-textarea>
        </ValidationProvider>

        

        <v-btn block type="submit" @click="UpdateProfile" value="Submit" color="warning" dark>Update Profile</v-btn>

        </form>
    </ValidationObserver>
    </v-card-subtitle>

    </v-card>
</template>


<script>
import { required, email, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import { mapGetters, mapActions } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode';
setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})

export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
        first_name: '',
        last_name: '',
        mobile: '',
        email: '',
        location: '',
        about: '',
    }),

    methods: {
      ...mapActions(['fetchProfile']),
      submit () {
        this.$refs.observer.validate()
    },
    
      UpdateProfile(e){
          this.$refs.observer.validate()
          let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
          e.preventDefault();
            const UpdateProfileData  = {
                mobile: this.mobile,
                email: this.email,
                location: this.location,
                about: this.about,
                user_id: user_id,
            }
            console.log("UpdateProfileData: ", UpdateProfileData);
            this.$store.dispatch('updateProfile', UpdateProfileData)

      },
    },

    computed: mapGetters(['user_profile']),
    mounted() {
      let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
      this.fetchProfile(user_id);
      this.first_name = this.$store.getters.user_profile.first_name
      this.mobile = this.$store.getters.user_profile.phone
      this.location = this.$store.getters.user_profile.address
      this.about = this.$store.getters.user_profile.about
      this.email = this.$store.getters.user_profile.user_email
    }
  }
</script>

<style>

</style>