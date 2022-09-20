<template>
  <div class="home">

  <v-container
   class="vehicle-lede pt-5 pb-5"
  >

    <v-row>
      <v-col cols="12">
        <div>
          <h1 class="display-1">1996 Toyota Hilux Surf SSR-G Wide 4x4</h1>
        </div>
      </v-col>
    </v-row>
      <v-row no-gutters
        class="mt-1 vehicle__gallery-wrap fill-height"
      >
        <v-col
          cols="12"
          md="8"
          class="vehicle__gallery--hero-wrap">
          <v-img
            class="fill-height"
            
            :src  = "require('../assets/vehicle-demo/hero.jpg')"
          />
        </v-col>
        <v-col
          cols="12"
          md="4">
          <v-row no-gutters>
          <v-col
            v-for="n in 12"
            :key="n"
            cols="4"
            
          >
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              class="grey lighten-2"
              max-height="17vh"
              aspect-ratio="1"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet
          color="white"
          elevation="3"
          class="pa-4"
        >test one two three</v-sheet>
        </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<style scoped>
  .home {
    padding-top:72px;
  }

  .vehicle__gallery--hero-wrap {
    max-height:68vh;
  }

  .auction__preview {
    
  }

  
</style>
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
