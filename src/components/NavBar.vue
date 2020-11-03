<template>
  <div>
    
    <v-main>

    
    <v-app-bar
      color="#a67650"
      dense
      dark
      app
    >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>
            <span class="font-weight-light">Restorations</span>
            <span>Peer Funding</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        
        <!-- <router-link 
        class="router_link" 
        to="/checkout"
        >
            <v-btn class="pr-10 pt-5" icon>
                <v-badge
                color="green"
                :content="`${ user_cart_sum }`"
                >

                <v-icon>mdi-cart</v-icon>
                </v-badge>
            </v-btn>
        </router-link> -->
        


    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="">
        <v-list-item>
            <v-list-item-content>
            <v-list-item-title>
                hi {{ $store.getters.userName1 }}
            </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
            <v-list-item-content>
                <router-link 
                class="router_link" 
                to="/"
                >
                    <v-btn block color="" dark>Dashboard</v-btn>
                </router-link>

                
                <router-link 
                class="router_link" 
                to="/register"
                >
                    <v-btn block color="" dark>Register</v-btn>
                </router-link
                
                >
                <router-link 
                class="router_link" 
                to="/login"
                >
                    <v-btn block color="" dark>Login</v-btn>
                </router-link>


                <router-link 
                class="router_link" 
                to="/donate"
                >
                    <v-btn block color="" dark>Donate</v-btn>
                </router-link>



                <router-link 
                class="router_link" 
                to="/receive"
                >
                    <v-btn block color="" dark>Receive</v-btn>
                </router-link>



                <!-- <router-link 
                class="router_link" 
                to="/credebility"
                >
                    <v-btn block color="" dark>Credibility</v-btn>
                </router-link> -->


                <router-link 
                class="router_link" 
                to="/testimony"
                >
                    <v-btn block color="" dark>Submit Testimony</v-btn>
                </router-link>


            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list dense>
            <v-list-item
            link
            >
            <v-list-item-content>
                <v-list-item-title>Personal</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
            <router-link 
            class="router_link" 
            to="/profile"
            >
                <v-btn block color="">Profile</v-btn>
            </router-link>
            <router-link 
            class="router_link" 
            to="/bank"
            >
                <v-btn block color="">Edit Bank</v-btn>
            </router-link>

        </v-list>

    </v-navigation-drawer>

    
    <router-view/>


    </v-main>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode';


export default {
    name: 'NavBar',
    components: {
        
    },
    methods: {
        ...mapActions(['fetchProfile']),
    },
    data() {
        return {
            drawer: false
        }
    },
    computed: {
        ...mapGetters(['userjwt', 'user_profile']),
    }, 
    created() {
        let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
        this.fetchProfile(user_id);
    },
}
</script>

<style>

.router_link{
    text-decoration: none; color: inherit;
}

</style>