<template>
  <section class="py-[200px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-dark mb-4">Create Companies</div>
    <form class="w-full card">
      <div class="form-group">
        <label for="" class="text-grey">Name</label>
        <input type="text" class="input-field" name="name" />
      </div>
      <button type="submit" class="w-full btn btn-primary mt-[14px]">
        Save
      </button>
    </form>
  </section>
</template>

<script>
export default {
  middleware: "auth",
};
</script>
