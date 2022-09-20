<template>
  <div class="home">
    <v-row no-gutters
      class="mt-1"
    >
      <v-col
        cols="12"
        md="8">
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
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
