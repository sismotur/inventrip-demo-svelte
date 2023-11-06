<script>
  let n = 1;
</script>

<h1 class="text-3xl font-bold">Hello world {n}!</h1>
<button type="button" on:click={() => (n += 1)}>Inc N</button>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>

  