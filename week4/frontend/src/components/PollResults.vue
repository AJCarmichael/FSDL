<template>
  <div class="poll-results">
    <h3>Poll Results</h3>
    <div v-for="(option, index) in poll.options" :key="index" class="result-item">
      <span class="result-label">{{ option }}</span>
      <div class="result-bar">
        <div class="result-bar-fill" :style="{ width: getPercent(index) + '%' }"></div>
        <span class="result-percent">{{ getPercent(index) }}%</span>
      </div>
    </div>
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
      }
    };
  },
  async created() {
    const response = await api.getPoll();
    this.poll = response.data;
  },
  methods: {
    getPercent(index) {
      const totalVotes = this.poll.votes.reduce((sum, v) => sum + v, 0);
      return totalVotes > 0 ? ((this.poll.votes[index] / totalVotes) * 100).toFixed(1) : 0;
    }
  }
};
</script>

<style>
/* Add styles for the poll results */
.poll-results {
  margin-top: 20px;
}
.result-item {
  margin-bottom: 15px;
}
.result-label {
  font-weight: bold;
  margin-bottom: 4px;
  display: block;
}
.result-bar {
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
  height: 24px;
  position: relative;
}
.result-bar-fill {
  background: #007acc;
  height: 100%;
  transition: width 1s ease-out;
  border-radius: 4px 0 0 4px;
}
.result-percent {
  position: absolute;
  right: 10px;
  top: 0;
  height: 100%;
  line-height: 24px;
  color: #fff;
  font-weight: bold;
}
</style>
