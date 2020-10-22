<template>
    <v-container fluid>
        <v-row align="center" justify="center">
            <h3 class="blue-grey--text">Create Donation</h3>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="8">
                <ValidationObserver ref="observer" v-slot="{ }">
                    <form>
                    <ValidationProvider v-slot="{ errors }" name="PH_amount" rules="required|max:20">
                        <v-text-field
                        v-model="PH_amount"
                        :counter="20"
                        :error-messages="errors"
                        label="PH Limit (R300-R15000)"
                        required
                        ></v-text-field>
                    </ValidationProvider>

                    <ValidationProvider v-slot="{ errors }" name="plan" rules="required">
                        <v-select
                        v-model="select"
                        :items="items"
                        :error-messages="errors"
                        label="Select plan"
                        required
                        ></v-select>
                    </ValidationProvider>

                    <ValidationProvider v-slot="{ errors }" name="checkbox" rules="required">
                        <v-checkbox
                        v-model="checkbox"
                        :error-messages="errors"
                        label="By clicking 'Donate Now' you agree to our Terms and Conditions"
                        required
                        ></v-checkbox>
                    </ValidationProvider>

                    <v-btn block type="submit" @click="Donate" value="Submit" color="warning" dark>Donate Now</v-btn>

                    </form>
                </ValidationObserver>
            </v-col>
        </v-row>
    </v-container>
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
        PH_amount: '',
        select: null,
        items: [
            'Plan A (100% in 10 days)',
            'Plan B (150% in 15 days)',
        ],
        checkbox: false,
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()

      },
      Donate(e){
          this.$refs.observer.validate()
          e.preventDefault();
            const DonateData  = {
                PH_amount: this.PH_amount,
                select: this.select,
                checkbox: this.checkbox,
            }
            console.log("DonateData: ", DonateData);

      },
    },
  }
</script>