<script>
  let n = 1;
</script>

<h1 class="font-bold text-xl">Welcome to SvelteKit {n}!</h1>

<p>Visit <a href="https://inventrip.com">Inventrip</a> for more information</p>

<button type="button" on:click={() => (n += 1)} class="btn btn-primary">Inc N</button>
<button type="button" on:click={() => (n += 1)} class="btn btn-success">Success</button>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>

  