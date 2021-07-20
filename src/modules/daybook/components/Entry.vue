<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 }})"
  >
      <!-- Titilo -->
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-bold">15</span>
          <span class="mx-1 fs-5">Julio</span>
          <span class="mx-2 fw-light">2021, jueves</span>
      </div>

      <div class="entry-description">
          Commodo cillum mollit anim ut anim cillum nulla ex commodo ipsum reprehenderit. Quis ipsum non anim excepteur velit minim tempor cillum in. Est duis cupidatat laboris ad exercitation ex pariatur proident ut. Non ex adipisicing consectetur et in tempor laboris tempor dolore occaecat ad aliquip Lorem.
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}

</style>