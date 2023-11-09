<script>
	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<form method="POST" action="?/login">
  <label>
    Email
    <input name="email" type="email" />
  </label>
  <label>
    Password
    <input name="password" type="password" />
  </label>
  <button>Log in</button>
  <button formaction="?/register">Register</button>
</form>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
	<p>Successfully logged in! Welcome back, {data.user.name}</p>
{/if}