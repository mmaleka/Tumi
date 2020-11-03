<template>
<v-container>

    <v-row align="center" justify="center">
        <v-col cols="12">
            <v-card
                class="mx-auto"
                elevation="4"
                outlined
                shaped
                tile
            >
                <v-card-text>
                <p class="text--primary">
                    PH Transections
                </p>

                
                <template>
                <v-simple-table
                    fixed-header
                >
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            #
                        </th>
                        <th class="text-left">
                            PH Date
                        </th>
                        <th class="text-left">
                            PH Amount
                        </th>
                        <th class="text-left">
                            Paid
                        </th>
                        <th class="text-left">
                            Interest
                        </th>
                        <th class="text-left">
                            Bonus
                        </th>
                        <th class="text-left">
                            Unpaid
                        </th>
                        <th class="text-left">
                            Total
                        </th>
                        <th class="text-left">
                            Mature Day
                        </th>
                        <th class="text-left">
                            Status
                        </th>
                        <th class="text-left">
                            Action
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in user_donate.filter((item) => item.is_cancel === false)"
                        :key="item.id"
                        >
                        <td>{{ item.id }}</td>
                        <td>{{ item.ph_date }}</td>
                        <td>{{ item.ph_amount }}</td>
                        <td>{{ item.paid }}</td>
                        <td>{{ item.get_interest }}</td>
                        <td>{{ item.bonus }}</td>
                        <td>{{ item.get_unpaid }}</td>
                        <td>{{ item.get_total }}</td>
                        <td>{{ item.get_mature_day }}</td>
                        <td v-if="item.get_mature_day === date_today"
                            class="blue--text"> 
                            Complete
                        </td>
                        <td v-else
                            class="red--text">
                            Pending
                        </td>
                        <td v-if="item.get_mature_day === date_today"> 
                            <v-btn
                            rounded
                            color="success"
                            dark
                            >
                            Withdraw
                            </v-btn>
                        </td>
                        <td v-else>
                            <v-btn
                            v-on:click="cancel_donation( item.id )"
                            rounded
                            color="warning"
                            dark
                            >
                            Cancel
                            </v-btn>
                        </td> 
                        <td>
                            
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
</template>

<script>
import { mapGetters } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode';

export default {
    name: "Transections",

    data: () => ({
        date_today: 'cvghfg',
    }),

    methods: {
        cancel_donation: function (item_id) {
            let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
            const donateData = {
                item_id: item_id,
                user_id: user_id
            }
            this.$store.dispatch('donationCancel', donateData)
        }
    },

    computed: mapGetters(['user_donate', 'userjwt']),
    created() {
        let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
        this.$store.dispatch('fetchDonate', user_id)
        let now = new Date()
        const date = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
        this.date_today = date
    },

}
</script>

<style>

</style>