<template>
  <div id="app">
    <PollForm />
    <PollResults />
  </div>
</template>

<script>
import PollForm from './components/PollForm.vue';
import PollResults from './components/PollResults.vue';

export default {
  name: 'App',
  components: {
    PollForm,
    PollResults
  }
};
</script>

<style>
/* Add some global styles */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f4f6f8;
  margin: 0;
  padding: 0;
}
</style>
