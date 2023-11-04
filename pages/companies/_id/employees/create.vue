<template>
  <div>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
      <div class="text-[32px] font-semibold text-dark">Empower Your Team</div>
      <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
        Add your new people to grow the <br />
        company reaching their goals
      </p>
      <form class="w-full card" @submit.prevent="createEmployees">
        <div class="form-group">
          <label for="" class="text-grey">Complete Name</label>
          <input type="text" class="input-field" v-model="employees.name" />
        </div>
        <div class="form-group">
          <label for="" class="text-grey">Email Address</label>
          <input type="email" class="input-field" v-model="employees.email" />
        </div>
        <div class="form-group">
          <label for="" class="text-grey">Gender</label>
          <select
            name=""
            id=""
            class="appearance-none input-field form-icon-chevron_down"
          >
            <option value="" selected>Male</option>
            <option value="">Female</option>
          </select>
        </div>
        <div class="form-group">
          <label for="" class="text-grey">Age</label>
          <input type="number" class="input-field" v-model="employees.age" />
        </div>
        <NuxtLink
          :to="{ name: 'companies-id-employees-create' }"
          class="w-full btn btn-primary mt-[14px]"
        >
          Continue async createEmployees
        </NuxtLink>
        <div class="text-center">or</div>
        <NuxtLink
          :to="{ name: 'companies-id-teams' }"
          class="w-full border btn btn-white"
        >
          Back to Teams
        </NuxtLink>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  layout: "form",
  middleware: "auth",

  data() {
    return {
      employees: {
        name: "",
        email: "",
        age: "",
      },
    };
  },
  methods: {
    async createEmployees() {
      try {
      } catch (error) {}
    },
  },
};
</script>
