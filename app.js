function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0
    };
  },
  //to add inline styling dynamically
  computed: {
    monsterBarStyle() {
      return {width: this.monsterHealth + '%'};
    },
    playerBarStyle() {
      return {width: this.playerHealth + '%'};
    },
    useSpecialAttack() {
      return this.currentRound % 3 !== 0;
    }
  },
  methods: {
    //to attack the monster with random damage
    //in return the monster attacks the player with random damage
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(12, 5);
      this.monsterHealth  -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(15, 8);
      this.playerHealth -= attackValue;
    },
    //deals more damage, but should be available only in every third round
    //the monster should be able to attack back
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(25, 10);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    }
  }
});

app.mount('#game');