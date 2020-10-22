<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row align="center" justify="center">
        <v-col xs sm="12" cols="8" class="pa-md-4 mx-lg-auto">
          <h3 class="blue-grey--text pa-4">{{ user_profile.user_name2 }}</h3>
          <v-divider></v-divider>
          <p class="blue-grey--text pa-16">
            Hi {{ user_profile.first_name }} welcome to your profile page, here you can edit your change your password, profile picture and so much more.
          </p>
        </v-col>
          
      </v-row>
      <v-row align="top" justify="center">
          <v-col xs sm="12" cols="8">
            <ProfileForm />
          </v-col>
          <v-col xs sm="12" cols="4">
            <ProfileCard />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard';
import ProfileForm from '@/components/ProfileForm';
import { mapGetters, mapActions } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode';


export default {
  name: 'Profile',

  components: {
    ProfileCard,
    ProfileForm,
  },

  data: () => ({
      first_name: '',
  }),

  methods: {
    ...mapActions(['fetchProfile']),
  },

  computed: mapGetters(['user_profile']),
  mounted() {
    let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
    this.fetchProfile(user_id);
  }


}
</script>

<style>

</style>