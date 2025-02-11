<template>
  <div class="poll-container">
    <h2>{{ poll.question }}</h2>
    <form @submit.prevent="vote">
      <div class="poll-options">
        <label v-for="(option, index) in poll.options" :key="index">
          <input type="radio" name="option" :value="index" v-model="selectedOption" />
          {{ option }}
        </label>
      </div>
      <button type="submit">Vote</button>
    </form>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      poll: {
        question: '',
        options: [],
        votes: []
      },
      selectedOption: null
    };
  },
  async created() {
    const response = await api.getPoll();
    this.poll = response.data;
  },
  methods: {
    async vote() {
      if (this.selectedOption === null) {
        alert('Please select an option before voting.');
        return;
      }
      await api.vote(this.selectedOption);
      this.$emit('voted');
    }
  }
};
</script>

<style>
/* Add styles for the poll form */
.poll-container {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  width: 100%;
  padding: 20px 30px;
  margin: 20px auto;
}
.poll-options label {
  display: block;
  padding: 10px;
  margin-bottom: 10px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
.poll-options label:hover {
  background: #e9e9e9;
}
.poll-options input[type="radio"] {
  margin-right: 10px;
}
button {
  display: block;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background: #007acc;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}
button:hover {
  background: #005fa3;
}
</style>
