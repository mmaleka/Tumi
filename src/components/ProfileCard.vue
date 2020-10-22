<template>
  <v-card
    class="mx-auto"
    max-width=""
    tile
    elevation="3"
  >
    <v-img
      height="100%"
      src="https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-03.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color=""
            size="164"
            tile
          >
            <v-img src="https://www.globalfundingexperts.co.za/user/asset/img/nopic.png"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
          >
            <v-list-item-content>
              <v-list-item-title class="title">
                {{ user_profile.first_name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode';

export default {
    name: "ProfileCard",

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