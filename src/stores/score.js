import { defineStore } from 'pinia'

export const useScoreStore = defineStore("ScoreStore", {
    state: () => ({ count: 0 }),
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
    },
})