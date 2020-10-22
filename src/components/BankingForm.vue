<template>
    <v-card
        class="mx-auto"
        max-width=""
        tile
        elevation="3"
    >

    <v-card-title>
        Bank Manager
    </v-card-title>
    <v-card-subtitle>
        BANK ACCOUNT DETAILS
    </v-card-subtitle>

    <v-card-subtitle>
    <ValidationObserver ref="observer" v-slot="{ }">
        <form>
        <ValidationProvider v-slot="{ errors }" name="account_holder_name" rules="required|max:20">
            <v-text-field
            v-model="account_holder_name"
            :counter="20"
            :error-messages="errors"
            label="Account Holder Name"
            required
            ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="account_number" rules="required|max:20">
            <v-text-field
            v-model="account_number"
            :counter="20"
            :error-messages="errors"
            label="Account Number"
            required
            ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="name_of_bank" rules="required">
            <v-select
            v-model="name_of_bank"
            :items="items"
            :error-messages="errors"
            label="Name Of Bank"
            required
            ></v-select>
        </ValidationProvider>

        

        <v-btn block type="submit" @click="UpdateBank" value="Submit" color="warning" dark>Update Banking Details</v-btn>

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

export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
        accounr_holder_name: '',
        account_number: '',
        name_of_bank: null,
        items: [
            'ABSA Bank',
            'Capitec Bank',
            'FNB Bank',
            'Nedbank',
            'Standard Bank',
            'Tyme Bank'
        ],
    }),

    methods: {
      ...mapActions(['fetchProfile']),
      submit () {
        this.$refs.observer.validate()
    },
      UpdateBank(e){
          this.$refs.observer.validate()
          let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
          e.preventDefault();
            const UpdateBankData  = {
                account_holder_name: this.account_holder_name,
                account_number: this.account_number,
                name_of_bank: this.name_of_bank,
                user_id: user_id
            }
            this.$store.dispatch('updateBank', UpdateBankData)

      },
    },

    computed: mapGetters(['user_profile']),
    mounted() {
      let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
      this.fetchProfile(user_id);
      this.account_holder_name = this.$store.getters.user_profile.account_holder_name
      console.log("this.$store.getters.user_profile: ", this.$store.getters.user_profile);
      this.account_number = this.$store.getters.user_profile.account_number
      this.name_of_bank = this.$store.getters.user_profile.bank_name
    }
  }
</script>

<style>

</style>