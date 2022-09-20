<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      
    >
      <div class="d-flex align-center">
        <v-img
          alt="Fourbie Logo"
          class="mr-2 mt-15"
          
          :src="require('./assets/fourb_logo.png')"
          transition="scale-transition"
          
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Log In</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
