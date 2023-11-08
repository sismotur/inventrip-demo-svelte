<script>
  /** @type {import('./$types').PageData} */
  export let data;
  $: countries = data.countries;
</script>

<ul>
  {#each countries as country}
    <h1 class="font-bold text-xl">{country.identifier}</h1>
    {#each country.name as nameLanguage, i}
      <li>
        {i} : {nameLanguage.language} : {nameLanguage.value}
      </li>
    {/each}
  {/each}
</ul>
