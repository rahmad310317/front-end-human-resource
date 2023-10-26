<template>
  <section class="py-[200px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-dark mb-4">Select Companies</div>
    <div class="w-full card">
      <div class="form-group">
        <label for="" class="text-grey">Companies</label>
        <p v-if="$fetchState.pending">Fetching Companies...</p>
        <select
          v-else
          v-model="selectedCompanies"
          name="companies"
          class="appearance-none input-field form-icon-chevron_down"
        >
          <option
            @keyup.enter="openCompany"
            :value="company.id"
            :key="company.id"
            v-for="company in companies.data.data.data"
          >
            {{ company.name }}
          </option>
        </select>
      </div>
      <button
        @click="openCompany()"
        type="button"
        class="w-full btn btn-primary mt-[14px]"
      >
        Continue
      </button>
      <div class="text-center">or</div>
      <nuxt-link
        :to="{ name: 'companies-id' }"
        class="w-full border btn btn-white"
      >
        Create New Company
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      companies: [],
      selectedCompanies: "",
    };
  },
  async fetch() {
    this.companies = await this.$axios.get("/company");
  },
  methods: {
    openCompany() {
      this.$router.push({
        name: "companies-id-employees",
        params: {
          id: this.selectedCompanies,
        },
      });
    },
  },
};
</script>
