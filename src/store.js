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
      },
      editBackup: {},
      editting: false
    },
    stepSequence: [0],
    curStep: 0,
    nextStep: 1
  },
  getters: { // computed

  },
  mutations: { // commit and track state changes
    /* INITIALIZE */
    INITIALIZE_STORE(state) {
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
    SET_NEXT_STEP(state, nextStep) {
      state.nextStep = nextStep;
    },

    /* ORDER */
    SET_ORDER(state, order) {
      state.order = order;
    },
    CLEAR_ORDER(state, order) {
      state.order = {};
    },
    SET_NEW_ORDER_INFO(state, obj) {
      if (obj.section) {
        state.order.new[obj.section][obj.key] = obj.val;
      } else {
        state.order.new[obj.key] = obj.val;
      }
    },
    SET_NEW_TO_EDIT_ITEM(state, i) {
      // state.order.new = state.order.cart.splice(i, 1)[0];
      state.order.editBackup = JSON.parse(JSON.stringify(state.order.cart[i]));

      state.order.new = state.order.cart[i];
    },
    SET_EDIT_ITEM_TO_BACKUP(state, i) {
      // debugger
      state.order.cart[i] = JSON.parse(JSON.stringify(state.order.editBackup));
    },
    TOGGLE_EDITTING (state, bool) {
      state.order.editting = bool;
    },
    
/*     SET_UP_EDIT_ITEM(state, i) {

    },
*/    
    SAVE_ITEM_QUANTITY(state, obj) {
      state.order.cart[obj.i].quantity = obj.quantity;
    },
    
    /* CART */
    ADD_TO_CART(state) {    
      state.order.cart = [...state.order.cart, state.order.new];
    },
    REMOVE_CART_ITEM(state, i) {
      state.order.cart.splice(i, 1);
    },
    RESET_CART(state) {
      state.order.cart = [];
    },
    
    SET_CLEAN_CART(state, cart) {
      state.order.cleanCart = cart;
    },
    REMOVE_CLEAN_CART_ITEM(state, i) {
      state.order.cleanCart.splice(i, 1);
    },
    RESET_CLEAN_CART(state) {
      state.order.cart = [];
    },

    RESET_NEW(state) {
      state.order.new = $.extend(true, {}, state.order.newTemp);
    }
  },
  actions: { // methods
    initializeStore(context) {
      context.commit('INITIALIZE_STORE');
    },
    fetchOrder(context) {

    },
    saveOrder(context, self) {
      context.commit('SET_ORDER', self.order);
      context.commit('SET_STEP_SEQUENCE', self.stepSequence);
      context.commit('SET_CUR_STEP', self.curStep);
      context.commit('SET_NEXT_STEP', self.nextStep);
    },
    clearAll(context, self) {
      context.commit('RESET_NEW');
      context.commit('RESET_CART');
      context.commit('RESET_CLEAN_CART');
      context.commit('SET_STEP_SEQUENCE', [0]);
      context.commit('SET_CUR_STEP', 0);
      context.commit('SET_NEXT_STEP', 1);
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
      context.commit('SET_NEW_TO_EDIT_ITEM', obj.i);

      // context.commit('SET_UP_EDIT_ITEM', obj.i);
      context.commit('SET_CUR_STEP', obj.curStep);
      context.commit('SET_NEXT_STEP', obj.nextStep);
      context.commit('TOGGLE_EDITTING', true);
    },
    cancelEdit(context, i) {
      context.commit('SET_EDIT_ITEM_TO_BACKUP', i);
      context.commit('RESET_NEW');
      context.commit('TOGGLE_EDITTING', false);
    },
    saveItemQuantity(context, obj) {
      context.commit('SAVE_ITEM_QUANTITY', obj);
    },
    removeOrderItem(context, i) {
      context.commit('REMOVE_CART_ITEM', i);
      context.commit('REMOVE_CLEAN_CART_ITEM', i);
    },

    addAnother_review1(context, obj) {
      if (!this.state.order.editting) context.commit('ADD_TO_CART');
      context.commit('RESET_NEW');
      context.commit('SET_CUR_STEP', obj.curStep);
      context.commit('SET_NEXT_STEP', obj.nextStep);
      context.commit('SET_STEP_SEQUENCE', [0]);
    },
    addAnother_reviewTotal(context, obj) {
      context.commit('SET_CUR_STEP', obj.curStep);
      context.commit('SET_NEXT_STEP', obj.nextStep);
      context.commit('SET_STEP_SEQUENCE', [0]);
    },

    /* CLEAN CART */
    createCleanCart_prep(context, opt) {
      if (opt != 'skip') context.commit('ADD_TO_CART');
      context.commit('RESET_NEW');
      context.commit('SET_STEP_SEQUENCE', []);
      context.commit('TOGGLE_EDITTING', false);
    },
    createCleanCart(context, cart) {
      context.commit('SET_CLEAN_CART', cart);
    }

  }
});


// ACTIONS call MUTATIONS which change STATE; allows rollback