export const useStore = defineStore("store", {
  // STATE VALUE
  state: () => ({ count: 0, name: "Eduardo" }),
  //   GETTER
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  //   METHOD / ACTION
  actions: {
    increment() {
      console.log(this.count);
      this.count++;
    },
  },
});
