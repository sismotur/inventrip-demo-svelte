<script>
    import "../app.css";
</script>
  
<div class="bg-gray-400 text-white py-4">
  <nav>
    <ul class="flex justify-center gap-3">
      <li><a href='/'>Home</a></li>
      <li><a href='/privacy-policy'>Privacy Policy</a></li>
    </ul>
  </nav>
</div>

<div class ="border p-5 rounded my-5 mx-auto w-3/5">
  <slot />
</div>


<footer class="bg-purple-500/20 border-purple-600 py-5 text-center">Footer</footer>