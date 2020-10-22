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
        <ValidationProvider v-slot="{ errors }" name="accounr_holder_name" rules="required|max:20">
            <v-text-field
            v-model="accounr_holder_name"
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
      submit () {
        this.$refs.observer.validate()

      },
      UpdateBank(e){
          this.$refs.observer.validate()
          e.preventDefault();
            const UpdateBankData  = {
                accounr_holder_name: this.accounr_holder_name,
                account_number: this.account_number,
                name_of_bank: this.name_of_bank,
            }
            console.log("UpdateBankData: ", UpdateBankData);

      },
    },
  }
</script>

<style>

</style>