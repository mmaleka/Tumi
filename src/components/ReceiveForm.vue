<template>
<div>
    <v-container
      class="grey lighten-5 mb-6"
    >
      <v-row
        :align="align"
        no-gutters
        style="height: 150px;"
      >
        <v-col
        >
          <v-card
                class="mx-auto"
                elevation="4"
                outlined
                shaped
                tile
            >
                <v-card-text>
                <h3 class="text--primary">Maturing Transections</h3>

                
                <template>
                <v-simple-table
                    fixed-header
                >
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            PH Date
                        </th>
                        <th class="text-left">
                            Mature Date
                        </th>
                        <th class="text-left">
                            PH Amount
                        </th>
                        <th class="text-left">
                            Interest
                        </th>
                        <th class="text-left">
                            Bonus
                        </th>
                        <th class="text-left">
                            Total
                        </th>
                        <th class="text-left">
                            Action
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in user_donate.filter((item) => item.is_cancel === false)"
                        :key="item.name"
                        >
                        <td>{{ item.ph_date }}</td>
                        <td>{{ item.get_mature_day }}</td>
                        <td>{{ item.ph_amount }}</td>
                        <td>{{ item.get_interest }}</td>
                        <td>{{ item.bonus }}</td>
                        <td>{{ item.get_total }}</td>
                        <td> 
                            <v-btn
                            rounded
                            color="info"
                            dark
                            >
                            Withdraw
                            </v-btn>
                        </td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                </template>


                </v-card-text>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode';


export default {
    name: "Receive",
    data: () => ({
        alignments: [
        'start',
        'center',
        'end',
        ],
    }),

    computed: mapGetters(['user_donate', 'userjwt']),
    created() {
        let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
        this.$store.dispatch('fetchDonate', user_id)
    },

}
</script>

<style>

</style>