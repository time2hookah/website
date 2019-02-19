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
      

    /* STEPS */
    SET_STEP_SEQUENCE(state, sequence) {
      state.stepSequence = sequence;
    },
    ADD_STEP_SEQUENCE(state, step) {
      state.stepSequence.push(step);
    },
    REMOVE_STEP_SEQUENCE(state, i) {
      state.stepSequence.splice(i + 1);
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
    },
    
    /* ORDER */
    SET_ORDER(state, order) {
      state.order = order;
    },
    CLEAR_ORDER(state, order) {
      state.order = {};
    },
    SET_NEW_ORDER_INFO(state, obj) {
      state.order.new[obj.section][obj.key] = obj.val;
    },
    SET_NEW_TO_EDIT_ITEM(state) {
      state.order.new = state.order.cart.splice(i, 1)[0];
    },
    
    /* CART */
    ADD_TO_CART(state) {
      let cart = state.order.cart;
      let newOrder = state.order.new;
      
      cart = [...cart, newOrder];
    },
    REMOVE_CART_ITEM(state, i) {
      state.order.cart.splice(i, 1);
    },
    
    SET_CLEAN_CART(state, cart) {
      state.order.cleanCart = cart;
    },
    REMOVE_CLEAN_CART_ITEM(state, i) {
      state.order.cleanCart.splice(i, 1);
    },

    RESET_NEW(state) {
      let newOrder = state.order.new;
      newOrder = { ...state.order.newTemp };
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
      context.commit('SET_STEP_SEQUENCE', self.stepSequence);
      context.commit('CLEAR_CUR_STEP', self.curStep);
      context.commit('CLEAR_NEXT_STEP', self.nextStep);
    },

    /* STEPS */
    setCurStep(context, step) {
      context.commit('SET_CUR_STEP', step);
    },
    setNextStep(context, step) {
      context.commit('SET_NEXT_STEP', step);
    },
    setStepSequence(context, seq) {
      context.commit('SET_STEP_SEQUENCE', seq);
    },
    addStepSequence(context, step) {
      context.commit('ADD_STEP_SEQUENCE', step);
    },
    removeStepSequence(context, i) {
      context.commit('REMOVE_STEP_SEQUENCE', i);
    },

    /* ORDER ITEM */
    setNewOrderInfo(context, obj) {
      context.commit('SET_NEW_ORDER_INFO', obj);
    },
    editItem(context, obj) {
      context.commit('SET_NEW');
      context.commit('SET_CUR_STEP', obj.cur);
      context.commit('SET_NEXT_STEP', obj.next);
    },
    removeOrderItem(context, i) {
      context.commit('REMOVE_CART_ITEM', i);
      context.commit('REMOVE_CLEAN_CART_ITEM', i);
    },

    addAnother_review1(context, nextStep) {
      context.commit('ADD_TO_CART');
      context.commit('RESET_NEW');
      context.commit('SET_NEXT_STEP', nextStep);
    },
    addAnother_reviewTotal(context, obj) {
      context.commit('SET_CUR_STEP', obj.curStep);
      context.commit('SET_NEXT_STEP', obj.nextStep);
      context.commit('SET_STEP_SEQUENCE', [0]);
    },

    /* CLEAN CART */
    createCleanCart_prep(context) {
      context.commit('ADD_TO_CART');
      context.commit('RESET_NEW');
      context.commit('SET_STEP_SEQUENCE', []);
    },
    createCleanCart(context, cart) {
      context.commit('SET_CLEAN_CART', cart);
    }

  }
});


// ACTIONS call MUTATIONS which change STATE; allows rollback