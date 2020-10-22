<template>
<v-container>
    <v-row align="center" justify="center">
        <v-col cols="8">
            <h3>Welcome</h3>
        </v-col>
    </v-row>
    <v-row align="center" justify="center">
        <v-col xs="12" sm="8" md="3" lg="3" xl="3" cols="12">
            <v-card
            class="mx-auto"
            max-width=""
            outlined
            >
            <v-list-item three-line>
            <v-list-item-content>
                <div class="overline mb-4">
                EPG
                </div>
                <v-list-item-title class="headline mb-1">
                0
                </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar
                tile
                size="80"
                color="white"
            >
                <v-icon
                large
                color="green darken-2"
                >
                mdi-domain
                </v-icon>
            </v-list-item-avatar>
            </v-list-item>
            </v-card>
        </v-col>

        <v-col xs="12" sm="8" md="3" lg="3" xl="3" cols="12">
            <v-card
            class="mx-auto"
            max-width=""
            outlined
            >
            <v-list-item three-line>
            <v-list-item-content>
                <div class="overline mb-4">
                REF BONUS
                </div>
                <v-list-item-title class="headline mb-1">
                0
                </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar
                tile
                size="80"
                color="white"
            >
                <v-icon
                large
                color="green darken-2"
                >
                mdi-message-text
                </v-icon>
            </v-list-item-avatar>
            </v-list-item>
            </v-card>
        </v-col>


        <v-col xs="12" sm="8" md="3" lg="3" xl="3" cols="12">
            <v-card
            class="mx-auto"
            max-width="white"
            outlined
            >
            <v-list-item three-line>
            <v-list-item-content>
                <div class="overline mb-4">
                TOTAL PH
                </div>
                <v-list-item-title class="headline mb-1">
                0
                </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar
                tile
                size="80"
                color="white"
            >
                <v-icon
                large
                color="green darken-2"
                >
                    mdi-dialpad
                </v-icon>
            </v-list-item-avatar>
            </v-list-item>
            </v-card>
        </v-col>


        <v-col xs="12" sm="8" md="3" lg="3" xl="3" cols="12">
            <v-card
            class="mx-auto"
            max-width=""
            outlined
            >
            <v-list-item three-line>
            <v-list-item-content>
                <div class="overline mb-4">
                TOTAL GH
                </div>
                <v-list-item-title class="headline mb-1">
                0
                </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar
                tile
                size="80"
                color="white"
            >
                <v-icon
                large
                color="green darken-2"
                >
                mdi-arrow-up-bold-box-outline
                </v-icon>
            </v-list-item-avatar>
            </v-list-item>
            </v-card>
        </v-col>


    </v-row>


        <v-card
        class="d-flex justify-space-around mb-6"
        :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
        flat
        tile
        >
        <div class="my-2">
            <router-link 
            class="router_link" 
            to="/donate"
            >
                <v-btn
                block
                color="accent"
                depressed
                elevation="24"
                medium
                outlined
                raised
                x-large
                >
                Donate
                </v-btn>
            </router-link>
        </div>





        <div class="my-2">
            <router-link 
            class="router_link" 
            to="/receive"
            >
                <v-btn
                block
                color="accent"
                depressed
                elevation="24"
                medium
                outlined
                raised
                x-large
                >
                Receive
                </v-btn>
            </router-link>
        </div>


        </v-card>

    

</v-container>
  
</template>

<script>
export default {
    name: "Dashboard1",
}
</script>

<style>

</style>