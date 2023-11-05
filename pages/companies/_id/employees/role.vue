<template>
  <div>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
      <div class="text-[32px] font-semibold text-dark">Give a Role</div>
      <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
        Complete the information to make it more <br />
        easier when introduce to team
      </p>
      <form class="w-full card">
        <div class="flex flex-col items-center mb-[14px]">
          <img src="/assets/images/user-f-1.png" width="70" alt="" />
          <div class="mt-6 mb-1 text-lg font-semibold">
            {{ this.$store.state.employees.name }}
          </div>
          <p class="text-base text-grey">
            {{ this.$store.state.employees.email }}
          </p>
        </div>
        <div class="form-group">
          <label for="" class="text-grey">Select Role</label>
          <p v-if="$fetchState.pending">Fetching Roles...</p>
          <select
            v-else=""
            name="roles"
            :value="role_id"
            @change="updateRole_id"
            class="appearance-none input-field form-icon-chevron_down"
          >
            <option
              :value="role.id"
              v-for="role in roles.data.data.data"
              value=""
              selected
            >
              {{ role.name }}
            </option>
          </select>
        </div>

        <!-- Responsibilities -->
        <section>
          <label class="text-grey"> Responsibilities </label>
          <div class="flex flex-col gap-4 mt-[10px]">
            <div
              class="flex items-start md:items-center gap-[6px]"
              v-for="responsibility in responsibilities"
            >
              <img src="/assets/svgs/ic-check-circle.svg" alt="" />
              <span class="text-sm text-dark">
                {{ responsibility.name }}
              </span>
            </div>
          </div>
        </section>
        <NuxtLink
          :to="{ name: 'companies-id-employees-team' }"
          class="w-full btn btn-primary mt-[14px]"
        >
          Continue
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
      roles: [],
      responsibilities: [],
      selectedCompany: "",
    };
  },
  async fetch() {
    try {
      this.roles = await this.$axios.get("/role", {
        params: {
          company_id: 1,
          limit: 100,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    role_id() {
      return this.$store.state.employees.role_id;
    },
  },
  methods: {
    // call api responsibility
    fetchResponsibilities() {
      this.$axios
        .get("/responsibility", {
          params: {
            role_id: this.$store.state.employees.role_id,
            limit: 100,
          },
        })
        .then(({ data }) => {
          this.responsibilities = data.data.data;
        });
    },

    updateRole_id(event) {
      this.$store.commit("employees/updateRole_id", event.target.value);
      this.$store.commit(
        "employees/updateRole_Name",
        event.target.options[event.target.selectedIndex].text
      );
      this.fetchResponsibilities();
    },
  },
};
</script>
