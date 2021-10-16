<template>
  <div>
    <v-card class="ma-5 d-flex flex-column justify-end" style="width:500px">
      <v-img :src="filterCar.image"></v-img>
      <v-simple-table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Miles</th>
            <th>Year of Make</th>
            <th>Current Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ filterCar.price }}</td>
            <td>{{ filterCar.miles }}</td>
            <td>{{ filterCar.yearOfMake }}</td>
            <td>{{ filterCar.owner.firstName }} {{ filterCar.owner.lastName }}</td>
          </tr>
        </tbody>
      </v-simple-table>
      <p class="mx-5">{{ filterCar.description }}</p>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    id: {
      type: String
    },
    cars: {
      type: Array
    }
  },

  computed: {
    filterCar() {
      return this.cars.find(el => el.id == this.id);
    }
  }
};
</script>

<style lang="css" scoped></style>
