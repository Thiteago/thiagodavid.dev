<script>
  let actual_page = 'home'
</script>

<header class="w-full">
  <nav class="w-full">
    <ul class="flex w-full text-white border-b-2 border-lines-default items-center">
      <li class="w-1/6 ml-6 text-secondary-grey font-fira">thiago-david</li>
      <div class="w-3/6 flex items-center">
        <div tabindex="-1" role="button" on:click={() => actual_page="home"} on:keydown={() => actual_page="home"} class="cursor-pointer border-x-2 border-lines-default px-4 py-3 font-fira {actual_page == 'home' ? "text-white relative" : 'text-secondary-grey'} ">
          <span class="after:content-[''] after:w-full after:bg-accent-orange after:h-1 after:absolute after:flex after:right-0 after:bottom-0">_hello</span>
        </div>
        <div tabindex="-2" role="button" on:click={() => actual_page="about_me"} on:keydown={() => actual_page="about_me"} class="cursor-pointer px-4 py-3 font-fira {actual_page == 'about_me' ? "text-white relative" : 'text-secondary-grey'}">
          <span class="after:content-[''] after:w-full after:bg-accent-orange after:h-1 after:absolute after:flex after:right-0 after:bottom-0">_about-me</span>
        </div>
        <div tabindex="-3" role="button" on:click={() => actual_page="projects"} on:keydown={() => actual_page="projects"} class=" cursor-pointer border-x-2 border-lines-default px-4 py-3 font-fira {actual_page == 'projects' ? "text-white relative" : 'text-secondary-grey'} ">
          <span class="after:content-[''] after:w-full after:bg-accent-orange after:h-1 after:absolute after:flex after:right-0 after:bottom-0">_projects</span>
        </div>
      </div>
      <li class="w-3/6"></li>
      <li class="w-1/6 font-fira border-l-2 border-lines-default px-4 py-3 flex justify-end text-secondary-grey"><a href="/contact">_contact-me</a></li>
    </ul>
  </nav>
</header>