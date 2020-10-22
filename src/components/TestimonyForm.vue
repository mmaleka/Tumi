<template>
    <v-container fluid>
        <v-row align="center" justify="center">
            <h3 class="blue-grey--text">WRITE A TESTIMONY</h3>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="8">
                <ValidationObserver ref="observer" v-slot="{ }">
                    <form>
                    <ValidationProvider v-slot="{ errors }" name="write_testimony" rules="required">
                        <v-textarea
                        v-model="testimony"
                        clearable
                        :error-messages="errors"
                        clear-icon="mdi-close-circle"
                        label="Write a testimony"
                        value="Write a testimony"
                        required
                      ></v-textarea>
                    </ValidationProvider>
                
                    <v-btn block type="submit" @click="Login" value="Submit" color="warning" dark>Submit Testimony</v-btn>

                    </form>
                </ValidationObserver>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  import { required, max } from 'vee-validate/dist/rules'
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
        testimony: '',
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()

      },
      Login(e){
          this.$refs.observer.validate()
          e.preventDefault();
            const TestimonyData  = {
                testimony: this.testimony,
            }
            console.log("TestimonyData: ", TestimonyData);

      },
    },
  }
</script>