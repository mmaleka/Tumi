<template>
  <div>
    <Dashboard1 />
    <DonateForm />
  </div>
</template>

<script>
import DonateForm from '@/components/DonateForm';
import Dashboard1 from '@/components/Dashboard1';
import { mapGetters } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode';


export default {
  name: 'Donate',
  components: {
    DonateForm,
    Dashboard1,
  },

  computed: mapGetters(['product_detail', 'userjwt']),
  created() {
    let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
    this.$store.dispatch('fetchDonate', user_id)
  },

}
</script>

<style>

</style>