<script>
  import "../app.css";
</script>

<div class="bg-gray-400 text-white py-4">
  <nav>
    <ul class="flex justify-left gap-3 mx-10">
      <li><a href="/">Home</a></li>
      <li><a href="/privacy-policy">Privacy Policy</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/countries/france">Countries</a></li>
    </ul>
  </nav>
</div>

<div class="border p-5 rounded my-5 mx-auto w-3/5">
  <slot />
</div>

<footer
  class="bg-purple-500/20 dark:bg-slate-900 dark:text-cyan-100 py-5 text-center absolute inset-x-0 bottom-0"
>
  Footer
</footer>
