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
                            PH Amount
                        </th>
                        <th class="text-left">
                            Paid
                        </th>
                        <th class="text-left">
                            Unpaid
                        </th>
                        <th class="text-left">
                            Status
                        </th>
                        <th class="text-left">
                            Last modified
                        </th>
                        <th class="text-left">
                            Action
                        </th>
                        <th class="text-left">
                            Action
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in desserts"
                        :key="item.name"
                        >
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
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
export default {
    name: "Transections"
}
</script>

<style>

</style>