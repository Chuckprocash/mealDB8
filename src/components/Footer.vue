<script setup></script>
<template>
  <footer>
    <footer>
      <small>Created By: <i class="fa-solid fa-circle-info"></i></small>
      <a href="https://www.linkedin.com/in/dev8-chak-9bbbab368/" target="_blank">
        <img src="../assets/vue.svg" alt="pfp" />
        <p>Dev8Chak</p>
      </a>
    </footer>
  </footer>
</template>
<style scoped>
    footer{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 2rem 0;
    padding-bottom: 4rem;
    align-items: center;
  }
  footer a{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    background: var(--background-muted);
    padding: 0.3rem;
    padding-right: 0.5rem;
    border: 1px solid transparent;
    border-radius: 1rem;
    transition-duration: 200ms;
  }
  footer a:hover{
    border-color: var(--color-link);
  }
  footer a img{
    max-width: 30px;
    border-radius: 100%;
    aspect-ratio: 1 / 1;
  }
</style>
