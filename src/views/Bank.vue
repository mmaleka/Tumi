<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row align="center" justify="center">
        <v-col cols="8" class="pa-md-4 mx-lg-auto">
          <h3 class="blue-grey--text pa-4">Hello Keitumetse</h3>
          <v-divider></v-divider>
          <p class="blue-grey--text pa-16">
            Please update your banking details below
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


export default {
  name: 'Profile',
  components: {
    ProfileCard,
    BankingForm,
  },

}
</script>

<style>

</style>