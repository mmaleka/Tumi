<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row align="center" justify="center">
        <v-col cols="8" class="pa-md-4 mx-lg-auto">
          <h3 class="blue-grey--text pa-4">Hello {{ user_profile.user_name2 }}</h3>
          <v-divider></v-divider>
          <p class="blue-grey--text pa-16">
            Hi {{ user_profile.first_name }} please update your banking details below
          </p>
        </v-col>
          
      </v-row>
      <v-row align="top" justify="center">
          <v-col cols="8">
            <BankingForm />
          </v-col>
          <v-col cols="4">
            <ProfileCard />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard';
import BankingForm from '@/components/BankingForm';
import { mapGetters, mapActions } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode';


export default {
  name: 'Profile',
  components: {
    ProfileCard,
    BankingForm,
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