import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // data
    order: {
      new: {
        quantity: 1,
        price: "",
        hookahHeadType: {
          picked: false,
          confirmed: false,
          name: "",
          id: ""
        },
        mixType: {
          picked: false,
          confirmed: false,
          name: "",
          id: ""
        },
        houseMix: {
          picked: false,
          confirmed: false,
          name: "",
          id: ""
        },
        tobaccoBrands: {
          picked: false,
          confirmed: false,
          list: []
        },
        tobaccoFlavors: {
          picked: false,
          confirmed: false,
          list: []
        },
        comboOptions: {
          numberOfFlavors: "",
          priceOfMax: "",
        },
        combo2: {
          mixCode: "",
          flavor1: "50",
          flavor2: "50"
        },
        combo3: {
          picked: false,
          confirmed: false,
          split: "",
          whichIsOdd: {
            id: "",
            name: ""
          }
        }
      },
      cart: [],
      cleanCart: [],
      newTemp: {
        quantity: 1,
        price: "",
        hookahHeadType: {
          picked: false,
          confirmed: false,
          name: "",
          id: ""
        },
        mixType: {
          picked: false,
          confirmed: false,
          name: "",
          id: ""
        },
        houseMix: {
          picked: false,
          confirmed: false,
          name: "",
          id: ""
        },
        tobaccoBrands: {
          picked: false,
          confirmed: false,
          list: []
        },
        tobaccoFlavors: {
          picked: false,
          confirmed: false,
          list: []
        },
        comboOptions: {
          numberOfFlavors: "",
          priceOfMax: "",
        },
        combo2: {
          mixCode: "",
          flavor1: "50",
          flavor2: "50"
        },
        combo3: {
          picked: false,
          confirmed: false,
          split: "",
          whichIsOdd: {
            id: "",
            name: ""
          }
        }
      }
    },
    stepSequence: [0],
    curStep: 0,
    nextStep: 1
  },
  getters: { // computed

  },
  mutations: { // commit and track state changes
    /* INITIALIZE */
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem('store')) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
          );
        }
      },
      
    /* EDIT */
    SET_ORDER(state, order) {
      state.order = order;
    },
    CLEAR_ORDER(state, order) {
      state.order = {};
    },

    SET_STEP_SEQUENCE(state, sequence) {
      state.stepSequence = sequence;
    },
    ADD_STEP_SEQUENCE(state, sequence) {
      state.stepSequence.push(sequence);
    },
    SPLICE_STEP_SEQUENCE(state, curStep_i) {
      state.stepSequence.splice(curStep_i + 1);
    },
    CLEAR_STEP_SEQUENCE(state, sequence) {
      state.stepSequence = [0];
    },

    SET_CUR_STEP(state, curStep) {
      state.curStep = curStep;
    },
    CLEAR_CUR_STEP(state, curStep) {
      state.curStep = 0;
    },

    SET_NEXT_STEP(state, nextStep) {
      state.nextStep = nextStep;
    },
    CLEAR_NEXT_STEP(state, nextStep) {
      state.nextStep = 1;
    }
  },
  actions: { // methods
    fetchOrder(context) {

    },
    saveOrder(context, self) {
      context.commit('SET_ORDER', self.order);
      context.commit('SET_STEP_SEQUENCE', self.stepSequence);
      context.commit('SET_CUR_STEP', self.curStep);
      context.commit('SET_NEXT_STEP', self.nextStep);
    },
    clearAll(context, self) {
      context.commit('CLEAR_ORDER', self.order);
      context.commit('CLEAR_STEP_SEQUENCE', self.stepSequence);
      context.commit('CLEAR_CUR_STEP', self.curStep);
      context.commit('CLEAR_NEXT_STEP', self.nextStep);
    }
  }
});


// ACTIONS call MUTATIONS which change STATE; allows rollback