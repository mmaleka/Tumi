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
</div>
</template>

<script>


export default {
  name: "Receive",
  data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
    }),
}
</script>

<style>

</style>