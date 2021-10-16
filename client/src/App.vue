<template>
  <v-app>
    <LogoBar></LogoBar>

    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
import LogoBar from "@/components/LogoBar.vue";

export default {
  name: "App",
  components: {
    LogoBar
  },
  methods: {
    async getCars() {
      const cars = await axios({ method: "GET", url: "http://127.0.0.1:3000/cars" });

      this.cardata = cars.data;
    },
    async buyCar(event) {
      event.title += " RESERVED!";
      await axios({
        method: "PATCH",
        url: `http://127.0.0.1:3000/cars/${event.id}`,
        "content-type": "application/json",
        data: event
      });
    }
  },
  created() {
    this.getCars();
  },

  data: () => ({
    //
  })
};
</script>
