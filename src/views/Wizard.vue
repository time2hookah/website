<template>
  <div id="wizard" class="container">
    <!-- HOOKAH HEAD TYPE SELECTION -->
    <button @click='clearAll'>Clear All</button>
    <div
      id="wizard-selection-hookahHeadTypes"
      class="wizard-selection row"
      v-if="this.curStep == this.steps.hookahHeadType"
    >
      <div class="col-12">
        <div class="text-center row">
          <h3 class="step-title bg-secondary col-12">
            Please select the hookah head type.
          </h3>
        </div>

        <ul class="tile-list row p-0">
          <li v-for="(el, i) in hookahHeadTypes.list" :key="i" class="col-6">
            <div
              class="tile p-1"
              @click="selectHookahHeadType(i)"
              :class="{ selected: el._id == order.new.hookahHeadType.id }"
            >
              <!-- (el._id == order.new.hookahHeadType.id) -->
              <!-- checkIfSelected(el) -->

              <h5 class="text-center">{{ el.name }}</h5>
              <div class="row">
                <div class="col-2">${{ el.price }}</div>
                <div class="col-10">{{ el.description }}</div>
              </div>
              <!-- <div class="row"> {{el._id}} </div> -->
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- MIX TYPE SELECTION -->
    <div
      id="wizard-selection-mixTypes"
      class="wizard-selection row"
      v-if="this.curStep == this.steps.mixType"
    >
      <div class="col-12">
        <div class="text-center row">
          <h3 class="step-title bg-secondary col-12">
            Please select the mix type.
          </h3>
        </div>

        <ul class="tile-list row p-0">
          <li v-for="(el, i) in mixTypes.list" :key="i" class="col-6">
            <div
              class="tile p-1"
              @click="selectMixType(i)"
              :class="{ selected: el.id == order.new.mixType.id }"
            >
              <h5 class="text-center">{{ el.name }}</h5>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- HOUSE MIX SELECTION -->
    <div
      id="wizard-selection-houseMixes"
      class="wizard-selection row"
      v-if="this.curStep == this.steps.houseMix"
    >
      <div class="col-12">
        <div class="text-center row">
          <h3 class="step-title bg-secondary col-12">
            Please select the House mix.
          </h3>
        </div>

        <ul class="tile-list row p-0">
          <li v-for="(el, i) in houseMixes.list" :key="i" class="col-6">
            <div
              class="tile p-1"
              @click="selectHouseMix(i)"
              :class="{ selected: el.id == order.new.houseMix.id }"
            >
              <h5 class="text-center">{{ el.name }}</h5>
              <span>${{ el.price }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- TOBACCO BRAND SELECTION -->
    <div
      id="wizard-selection-tobaccoBrands"
      class="wizard-selection row"
      v-if="this.curStep == this.steps.tobaccoBrands"
    >
      <div class="col-12">
        <div class="text-center row">
          <h3 class="step-title bg-secondary col-12">
            Please select the brands.
          </h3>
          <p class="text-left step-subtitle">
            All flavors of the brands you choose will be available to choose
            from in the next slide. You will be charged the higher cost.
          </p>
        </div>

        <ul class="tile-list row p-0">
          <li
            v-for="(el, i) in tobaccoBrands.list"
            :key="i"
            class="col-6"
            :data-selected="brandIsOrdered(el, true)"
          >
            <div
              class="tile p-1"
              @click="selectTobaccoBrand(el)"
              :class="{ selected: brandIsOrdered(el) }"
            >
              <h5 class="text-center">{{ el.name }}</h5>
              <span>${{ el.price }}</span>
            </div>
          </li>
        </ul>

        <!-- <div class="row">
        <div class="col-6 text-center">
          <button class='btn-secondary center wp-100' @click="removeTobaccoBrand()">Remove</button>
        </div>
        <div class="col-6 text-center">
          <button class='btn- primary wp-100' @click="addTobaccoBrand()">Add</button>
        </div>
      </div> -->
      </div>
    </div>

    <!-- TOBACCO FLAVOR SELECTION -->
    <div
      id="wizard-selection-tobaccoFlavors"
      class="wizard-selection row"
      v-if="this.curStep == this.steps.tobaccoFlavors"
    >
      <div class="col-12">
        <div class="text-center row">
          <h3 class="step-title bg-secondary col-12">
            Please select up to 3 flavors.
          </h3>
        </div>

        <ul
          v-for="(b, i) in orderedTobaccoBrands"
          :key="i"
          class="tile-list row p-0 text-center"
        >
          <h5 class="text-center col-12">{{ b.name }} - ${{ b.price }}</h5>

          <li
            v-for="(f, i) in b.flavors.list"
            :key="i"
            class="col-6"
            :data-selected="flavorIsOrdered(f, true)"
          >
            <div
              class="tile p-1"
              @click="selectTobaccoFlavor(b, f)"
              :class="{ selected: flavorIsOrdered(f) }"
            >
              <h5 class="text-center">{{ f.name }}</h5>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- COMBO2 -->
    <div
      id="wizard-selection-combo2"
      class="wizard-selection row"
      v-if="this.curStep == this.steps.combo2"
    >
      <div class="col-12">
        <div class="text-center row">
          <h3 class="step-title bg-secondary col-12">2 Flavor Combo</h3>
          <p class="text-left step-subtitle">
            Please choose the proportion of each flavor you'd like.
          </p>
        </div>

        <div class="row">
          <div class="col-12 text-center">
            <h5>{{ order.new.tobaccoFlavors.list[0].name }}</h5>
            <input
              id="combo2-flavor1"
              class="combo2-range wp-75"
              type="range"
              name="combo2-flavor1"
              min="25"
              max="75"
              :value="this.order.new.combo2.flavor1"
              step="25"
              @change="combo2RangeChange()"
            />
          </div>
        </div>
        <div class="wp-75 center">
          <div class="row">
            <span class="col-2 text-left">25%</span>
            <span class="col-2 text-center"></span>
            <span class="col-4 text-center">50%</span>
            <span class="col-2 text-center"></span>
            <span class="col-2 text-right">75%</span>
          </div>
        </div>

        <div class="row">
          <div class="col-12 text-center">
            <input
              id="combo2-flavor2"
              class="combo2-range wp-75"
              type="range"
              name="combo2-flavor2"
              min="25"
              max="75"
              :value="this.order.new.combo2.flavor2"
              step="25"
              disabled
            />
            <h5>{{ order.new.tobaccoFlavors.list[1].name }}</h5>
          </div>
        </div>
      </div>
    </div>

    <!-- COMBO3 -->
    <div
      id="wizard-selection-combo3"
      class="wizard-selection row"
      v-if="this.curStep == this.steps.combo3"
    >
      <div class="col-12" @change='combo3Change'>
        <div class="text-center row">
          <h3 class="step-title bg-secondary col-12">3 Flavor Combo</h3>
          <p class="text-left step-subtitle">
            All flavors of the brands you choose will be available to choose
            from; you will be charged the higher cost for all.
          </p>
        </div>

        <div class="row">
          <div class="col-6">
            <input
              type="radio"
              name="combo3"
              id="combo3-thirds"
              value="thirds"
              v-model="order.new.combo3.split"
            />
            <label for="">1/3 + 1/3 + 1/3</label>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <input
              type="radio"
              name="combo3"
              id="combo3-fifths-1/2"
              value="fifths-1/2"
              v-model="order.new.combo3.split"
            />
            <label for="">1/5 + 2/5 + 2/5</label>
          </div>

          <div
            class="col-6"
            v-if="order.new.combo3.split == 'fifths-1/2'"
          >
            <label for="">Which one is 1/5?</label>
            <select
              name=""
              id=""
              v-model="order.new.combo3.whichIsOdd.id"
            >
              <option value="" disabled>Select</option>

              <option
                v-for="(f, i) in order.new.tobaccoFlavors.list"
                :key="i"
                :value="f.id"
              >
                {{ f.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <input
              type="radio"
              name="combo3"
              id="combo3-fifths-1/3"
              value="fifths-1/3"
              v-model="order.new.combo3.split"
            />
            <label for="">1/5 + 1/5 + 3/5</label>
          </div>

          <div
            class="col-6"
            v-if="order.new.combo3.split == 'fifths-1/3'"
          >
            <label for="">Which one is 3/5?</label>
            <select
              name=""
              id=""
              v-model="order.new.combo3.whichIsOdd.id"
            >
              <option value="" disabled>Select</option>

              <option
                v-for="(f, i) in order.new.tobaccoFlavors.list"
                :key="i"
                :value="f.id"
                :data-flavorName="f.name"
              >
                {{ f.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- REVIEW1 -->
    <div
      id="wizard-selection-review1"
      class="wizard-selection row"
      v-if="this.curStep == this.steps.review1"
    >
      <div class="col-12">
        <div class="text-center row">
          <h3 class="step-title bg-secondary col-12">Review Selection</h3>
          <p class="text-left step-subtitle">
            All flavors of the brands you choose will be available to choose
            from; you will be charged the higher cost for all.
          </p>
        </div>

        <!-- <ul class='tile-list row p-0'>
        <li class='col-6' >
          <div class='tile p-1' @click="selectReview1Option('')">
            <h5 class='text-center'></h5>
            <span></span>
          </div>
        </li>
        
        <li class='col-6' >
          <div class='tile p-1' @click="selectReview1Option('')">
            <h5 class='text-center'></h5>
            <span></span>
          </div>
        </li>
        
        <li class='col-6' >
          <div class='tile p-1' @click="selectReview1Option('')">
            <h5 class='text-center'></h5>
            <span></span>
          </div>
        </li>
        
        <li class='col-6' >
          <div class='tile p-1' @click="selectReview1Option('')">
            <h5 class='text-center'></h5>
            <span></span>
          </div>
        </li>
      </ul> -->

        <div id="review1-options" class="col-12">
          <div class="row">
            <div class="col-6">
              <h5>
                How many of this selection?
                <input
                  id="selectionQuantity-input"
                  class="item-quantity"
                  type="number"
                  min="1"
                  :value="order.new.quantity"
                  @change="saveItemQuantity('new')"
                />
              </h5>
            </div>

            <div class="col-6 cursor-pointer markOnHover" @click="addAnother_review1()">
              <h5>
                Add another selection... Pick something totally different!
              </h5>
            </div>

            <div class="col-6 cursor-pointer markOnHover" @click="hookahs()">
              <h5>Need a hookah? We got you covered.</h5>
            </div>

            <div class="col-6 cursor-pointer markOnHover" @click="addons()">
              <h5>Find all accessories you might need here.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- REVIEW -->
    <div
      id="wizard-selection-review"
      class="wizard-selection row"
      v-if="this.curStep == this.steps.reviewTotal"
    >
      <div class="col-12">
        <div class="text-center row">
          <h3 class="step-title bg-secondary col-12">Review</h3>
          <p class="text-left step-subtitle">
            Please make sure all selections are correct and confirm your order.
          </p>
        </div>

        <div id="cart-review" class="row">
          <div class="container">
            <div id="cart-review-items" class="row">
              <ul class="col">
                <!-- IF NO ITEMS IN CART -->
                <li v-if="this.order.cleanCart.length == 0">
                  <h4 class='text-danger'>You have no items in your cart.</h4>
                  You can <span class='text-primary cursor-pointer' @click="addAnother_reviewTotal">add another</span>.
                </li>

                <!-- CART ITEMS -->
                <li
                  v-for="(item, i) in this.order.cleanCart"
                  :key="i"
                  class="review-item"
                >
                  <div class="row">
                    <div class="col-4">
                      <img
                        :src="
                          'img/fruits/fruit-head/' +
                            item.hookahHeadType.name +
                            '.jpg'
                        "
                        alt=""
                      />
                    </div>
                    <div class="col-8">
                      <div>
                        Quantity: 
                        <input 
                          class='item-quantity' 
                          type="number" 
                          :value="item.quantity"
                          @change="saveItemQuantity('cart', i)"
                          min="1"
                        >

                      </div>
                      <div>
                        Hookah Head Type: {{ item.hookahHeadType.name }}
                      </div>
                      <div>Price: ${{ item.price }}</div>
                      <div>
                        Type: {{ item.mixType.name }} Mix

                        <span v-if="item.mixType.name == 'House'">
                          <div>House Mix: {{ item.houseMix.name }}</div>
                        </span>

                        <span v-else-if="item.mixType.name == 'Custom'">
                          <span v-if="item.comboOptions.numberOfFlavors == 1">
                            of {{ item.comboOptions.numberOfFlavors }} flavor:
                          </span>
                          <span v-if="item.comboOptions.numberOfFlavors > 1">
                            of {{ item.comboOptions.numberOfFlavors }} flavors:
                          </span>
                     
                          <span v-if="item.comboOptions.numberOfFlavors == 1">
                            <div>
                              {{ item.tobaccoFlavors[0].name }}
                            </div>
                          </span>

                          <span v-if="item.comboOptions.numberOfFlavors == 2">
                            <div>
                              {{ item.tobaccoFlavors[0].name }}:
                              {{ item.comboOptions.flavor1 }} ||
                              {{ item.tobaccoFlavors[1].name }}:
                              {{ item.comboOptions.flavor2 }}
                            </div>
                          </span>

                          <span v-if="item.comboOptions.numberOfFlavors == 3">
                            <div>
                              <span
                                v-for="(f, i) in item.tobaccoFlavors"
                                :key="i"
                              >
                                {{ f.name }}
                                <span v-if="i != item.tobaccoFlavors.length - 1"
                                  >,</span
                                >
                              </span>
                            </div>

                            <div>
                              Split: {{ item.comboOptions.split }}
                            </div>
                            
                            <div v-if="item.comboOptions.split != 'thirds'">
                              WhichIsOdd: {{ item.comboOptions.whichIsOdd.name }}
                            </div>
                          </span>
                        </span>
                      </div>

                      

                    </div>
                  </div>

                  <br />

                  <div class="row">
                    <button class="col-6 btn-secondary" @click="editItem(i)">
                      Edit
                    </button>
                    <button class="col-6 btn-danger" @click="removeItem(i)">
                      Remove
                    </button>
                  </div>
                </li>
              </ul>
            </div>

            <div id="cart-review-summary" class="row">
              <div class="col">
                <table class="float-right">
                  <tr>
                    <td>Subtotal:</td>
                    <td>${{ subtotalPrice }}</td>
                  </tr>
                  <tr>
                    <td>Tax (10%):</td>
                    <td>${{ (subtotalPrice * 0.1).toFixed(2) }}</td>
                  </tr>
                  <tr>
                    <td>Total:</td>
                    <td>${{ totalPrice }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CONFIRMATION -->
    <div
      id="wizard-selection-confirmation"
      class="wizard-selection row"
      v-if="this.curStep == this.steps.confirmation"
    >
      <div class="col-12">
        <div class="text-center row">
          <h3 class="step-title bg-secondary col-12">Confirmation</h3>
          <p class="text-left step-subtitle">
            Your order is being prepared. You can find details of your order
            below.
          </p>
        </div>

        <div id="confirmation">
          <ul class="col">
            <li
              v-for="(item, i) in this.order.cleanCart"
              :key="i"
              class="review-item"
            >
              <div class="row">
                <div class="col-4">
                  <img
                    :src="
                      'img/fruits/fruit-head/' +
                        item.hookahHeadType.name +
                        '.jpg'
                    "
                    alt=""
                  />
                </div>
                <div class="col-8">
                  <div>Quantity: {{ item.quantity }}</div>
                  <div>Hookah Head Type: {{ item.hookahHeadType.name }}</div>
                  <div>Price: ${{ item.price }}</div>
                  <div>
                    Type: {{ item.mixType.name }} Mix

                    <span v-if="item.mixType.name == 'Custom'">
                      of {{ item.comboOptions.numberOfFlavors }} flavors:
                    </span>
                  </div>

                  <span v-if="item.mixType.name == 'House'">
                    <div>House Mix: {{ item.houseMix.name }}</div>
                  </span>

                  <span v-if="item.mixType.name == 'Custom'">
                    <span v-if="item.comboOptions.numberOfFlavors == 2">
                      <div>
                        {{ item.tobaccoFlavors[0].name }}:
                        {{ item.comboOptions.flavor1 }} ||
                        {{ item.tobaccoFlavors[1].name }}:
                        {{ item.comboOptions.flavor2 }}
                      </div>
                    </span>

                    <span v-if="item.comboOptions.numberOfFlavors == 3">
                      <div>
                        <span v-for="(f, i) in item.tobaccoFlavors" :key="i">
                          {{ f.name }}
                          <span v-if="i != item.tobaccoFlavors.length - 1"
                            >,</span
                          >
                        </span>
                      </div>

                      <div>
                        Split:

                        <span v-if="item.comboOptions.split"></span>
                      </div>
                      <div>
                        WhichIsOdd: {{ item.comboOptions.whichIsOdd.name }}
                      </div>
                    </span>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row mt-1">
      <div id="backButton" class="col-6 text-center">
        <button
          class="btn-danger center wp-100"
          :class="backButtonClass"
          @click="back()"
        >
          {{ backButtonName }}
        </button>
      </div>

      <div id="nextButton" class="col-6 text-center">
        <button class="btn-success center wp-100" @click="next()">
          {{ nextButtonName }}
        </button>
      </div>

      <div id="skipToReview" class="col-6 offset-6 text-center mt-1">
        <!-- :class="skipButtonClass" -->
        <button class="btn-success center wp-100" @click="skipToReview()">
          Skip To Review >>>
        </button>
      </div>
    </div>

    <!-- <button>
    <a href="test1">TEST1 - aTag</a>
  </button>

  <button>
    <router-link to='test1'>TEST1 - routerlink</router-link>
  </button> -->
  </div>
</template>

<script>
export default {
  name: "wizard",
  data() {
    return {
      /* 
      WIZARD SELECTION PAGES
      -----------------------
      0 - hookahHeadType
      1 - mixType
      2 - houseMix
      3 - tobaccoBrands
      4 - tobaccoFlavors
      5 - combo2
      6 - combo3
      7 - review1
      8 - reviewTotal
      */
      myMessage: "Wizard's Message",
      stepList: [
        "hookahHeadType",
        "mixType",
        "houseMix",
        "tobaccoBrands",
        "tobaccoFlavors",
        "combo2",
        "combo3",
        "review1",
        "reviewTotal",
        "confirmation"
      ],
      steps: {
        hookahHeadType: 0,
        mixType: 1,
        houseMix: 2,
        tobaccoBrands: 3,
        tobaccoFlavors: 4,
        combo2: 5,
        combo3: 6,
        review1: 7,
        reviewTotal: 8,
        confirmation: 9
      },
      // nextStep: 1,
      // curStep: this.$store.state.curStep,
      // nextStep: this.$store.state.nextStep,
      // stepSequence: this.$store.state.stepSequence,
      // order: this.$store.state.order,
      /* order: {
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
      }, */

      hookahHeadTypes: {
        list: [
          /* {id: '1', name: 'apple', price: '5'},
          {id: '2', name: 'orange', price: '7'},
          {id: '3', name: 'melon', price: '10'},
          {id: '4', name: 'watermelon', price: '15'},
          {id: '5', name: 'pineapple', price: '20'} */
        ]
      },
      mixTypes: {
        list: [
          {
            id: "1",
            name: "Custom",
            details: "Create your own mix of 2 or 3 flavors."
          },
          {
            id: "2",
            name: "House",
            details: "Pick from a selection of House Mixes"
          }
        ]
      },
      houseMixes: {
        list: [
          { id: "1", name: "Mix1", details: "Sweet", price: "15" },
          { id: "2", name: "Mix2", details: "Light", price: "15" },
          { id: "3", name: "Mix3", details: "Fruity", price: "15" }
        ]
      },
      tobaccoBrands: {
        list: [
          {
            id: 0,
            name: "Starbuzz",
            price: "5",
            flavors: {
              list: [
                { id: "1", name: "type1", description: "description1" },
                { id: "2", name: "type2", description: "description2" },
                { id: "3", name: "type3", description: "description3" },
                { id: "4", name: "type4", description: "description4" },
                { id: "5", name: "type5", description: "description5" }
              ]
            }
          },
          {
            id: 1,
            name: "Fumari",
            price: "7",
            flavors: {
              list: [
                { id: "6", name: "type1", description: "description1" },
                { id: "7", name: "type2", description: "description2" },
                { id: "8", name: "type3", description: "description3" },
                { id: "9", name: "type4", description: "description4" },
                { id: "10", name: "type5", description: "description5" }
              ]
            }
          },
          {
            id: 2,
            name: "Al-Fakhr",
            price: "10",
            flavors: {
              list: [
                { id: "11", name: "type1", description: "description1" },
                { id: "12", name: "type2", description: "description2" },
                { id: "13", name: "type3", description: "description3" },
                { id: "14", name: "type4", description: "description4" },
                { id: "15", name: "type5", description: "description5" }
              ]
            }
          },
          {
            id: 3,
            name: "House",
            price: "13",
            flavors: {
              list: [
                { id: "16", name: "type1", description: "description1" },
                { id: "17", name: "type2", description: "description2" },
                { id: "18", name: "type3", description: "description3" },
                { id: "19", name: "type4", description: "description4" },
                { id: "20", name: "type5", description: "description5" }
              ]
            }
          }
        ]
      }
    };
  },
  computed: {
    curStep() {
      return this.$store.state.curStep;
    },
    nextStep() {
      return this.$store.state.nextStep;
    },
    stepSequence() {
      return this.$store.state.stepSequence;
    },
    order() {
      return this.$store.state.order;
    },
    orderedTobaccoBrands() {
      let self = this;
      let res = this.tobaccoBrands.list.filter(el => self.brandIsOrdered(el));

      return res;
    },
    backButtonClass() {
      let res = "";
      let cur = this.curStep;
      let s = this.steps;

      if (cur == s.hookahHeadType) {
        res = "d-none";
        /* } else if (cur == s.mixType) {
      } else if (cur == s.houseMix) {
      } else if (cur == s.tobaccoBrands) {
      } else if (cur == s.tobaccoFlavors) {
      } else if (cur == s.combo2) {
      } else if (cur == s.combo3) {
      } else if (cur == s.review1) { 
      } else if (cur == s.reviewTotal) { */
      } else if (cur == s.confirmation) {
        res = "d-none";
      }

      return res;
    },
    /* eslint-disable */
    backButtonName() {
      let res = "Back";
      let cur = this.curStep;
      let s = this.steps;

      if (cur == s.hookahHeadType) {
      } else if (cur == s.mixType) {
      } else if (cur == s.houseMix) {
      } else if (cur == s.tobaccoBrands) {
      } else if (cur == s.tobaccoFlavors) {
      } else if (cur == s.combo2) {
      } else if (cur == s.combo3) {
      } else if (cur == s.review1) {
      } else if (cur == s.reviewTotal) {
          res = "Add Another +"
      } 

      return res;

      /* eslint-enable */
    },
    nextButtonName() {
      let res = "Next >";
      let cur = this.curStep;
      let s = this.steps;

      if (cur == s.review1) {
        res = "Review >>>";
      } else if (cur == s.reviewTotal) {
        res = "Checkout >>>";
      } else if (cur == s.confirmation) {
        res = "Start Again >>>";
      }

      return res;
    },
    nextButtonClass() {
      let res = "";
      let cur = this.curStep;
      let s = this.steps;

      if (cur == s.reviewTotal) {
        res = "";
      }

      return res;
    },
    /* skipButtonClass() {
      let res = "";
      let cur = this.curStep;
      let s = this.steps;

      if (cur == s.reviewTotal) {
        if (!$('#skipToReview').hasClass("d-none")) {
          res = "d-none";
        }
      }

      return res;
    }, */
    subtotalPrice() {
      let res = 0;

      this.order.cleanCart.forEach(el => (res += (el.price * el.quantity) ) );

      return res.toFixed(2);
    },
    totalPrice() {
      let sub = +this.subtotalPrice;
      let tax = 0.1;

      let res = sub + sub * tax;

      return res.toFixed(2);
    }
  },
  beforeCreate() {

  },
  created() {
    let self = this;

    // Get hookahHeadTypes
    this.$http({
      method: "get",
      url: this.apiDomain + "hookahHeadTypes/"
    })
      .then(function(response) {
        // handle success
        console.log("hookahHeadTypes: ", response);

        self.hookahHeadTypes.list = response.data;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });

    /* // Get houseMixes
    this.$http({
      method: 'get',
      url: this.env.dev.apiDomain + 'houseMixes/',
      })
    .then(function (response) {
      // handle success
      console.log('res: ', response);
      debugger
      self.houseMixes.list = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });


    // Get tobacco brands & their available flavors
    this.$http({
      method: 'get',
      url: this.env.dev.apiDomain + 'tobaccobrands/',
      })
    .then(function (response) {
      // handle success
      console.log('res: ', response);
      debugger
      self.tobaccoBrands.list = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    }); */
  },
  /* watch: {
    order: {
      handler() {
        this.createCleanCart();
      },
      deep: true
    }
  }, */
  methods: {
    /* COMMON */
    next(opt) {
      this.scrollToWizardTop();

      /******************** INITIALIZATION ********************/
      let curStep_i = this.stepSequence.indexOf(this.curStep); // index of the current step in the step list
      let cur = this.stepList[this.curStep]; // name of the step - to be used to access object value by key


      /******************** PICK NEXT ACTION ********************/
      // TODO: remove 'pick next action' conditional
      if (this.curStep == this.steps.confirmation) {
        /* If you click next when you're on the confirmation page, do the following: */
        this.clearAll();
      } else {
        
        /******************** VALIDATION ********************/
        /* CONFIRM or REJECT based on whether selection is made - combo2 gets CHANGED not PICKED; so this check is irrelevant */
        if (
          this.curStep != this.steps.combo2 && 
          this.curStep != this.steps.review1 && 
          this.curStep != this.steps.reviewTotal
        ) {
          const validated = this.validate();
          if (validated == false) return;
        }


        /******************** PAGE DEPENDENT LOGIC ********************/

        /* ONLY IF ON STEP 4: FLAVOR SELECT */
        if (this.curStep == this.steps.tobaccoFlavors) {
          /* set the price that will be paid for this mix */
          let max = 0;

          this.order.new.tobaccoFlavors.list.forEach(function(el) {
            if (+max < +el.brandPrice) max = el.brandPrice;
          });

          this.$store.dispatch('setNewOrderInfo', {
            section: 'comboOptions', 
            key: 'priceOfMax', 
            val: +max 
          });

          /* decide propper next step based on number of flavors chosen*/
          this.$store.dispatch('setNewOrderInfo', {
            section: 'comboOptions', 
            key: 'numberOfFlavors', 
            val: this.order.new.tobaccoFlavors.list.length 
          });

        }

        /* ONLY IF ON STEP COMBO3 SELECT */
        /* if (this.curStep == this.steps.combo3) {
          
        } */


        /* ONLY IF ON STEP REVIEW TOTAL */
        /* if (this.curStep == this.steps.reviewTotal) {
          
        } */


        /******************** DISPLAY APPROPRIATE SELECTION ********************/
        if (opt == "skip") {
          this.$store.dispatch('setCurStep', '');
        }

        /* ONLY IF ON STEP 1: MIX TYPE SELECT */
        if (this.curStep == this.steps.mixType) {
          if (this.order.new.mixType.name == "House") {
            this.$store.dispatch('setNextStep', this.steps.houseMix);
          } else {
            this.$store.dispatch('setNextStep', this.steps.tobaccoBrands);
          }
        }

        /* ONLY IF ON STEP 4: FLAVOR SELECT */
        if (this.curStep == this.steps.tobaccoFlavors) {
          if (this.order.new.comboOptions.numberOfFlavors == 1) {
            this.$store.dispatch('setNextStep', this.steps.review1);
          } else if (this.order.new.comboOptions.numberOfFlavors == 2) {
            this.$store.dispatch('setNextStep', this.steps.combo2);
          } else if (this.order.new.comboOptions.numberOfFlavors == 3) {
            this.$store.dispatch('setNextStep', this.steps.combo3);
          }
        }

        /* CHECK IF THERE IS ALREADY A DEFINED PATH FOR THE NEXT SLIDE, GIVEN FROM A PREVIOUS SELECTION */
        if (
          curStep_i != this.stepSequence.length - 1 &&
          this.curStep != this.steps.review1
        ) {
          if (this.nextStep == this.stepSequence[curStep_i + 1]) {
            this.$store.dispatch('setCurStep', this.stepSequence[curStep_i + 1]);

            if (this.nextStep == this.steps.hookahHeadType) {
              this.$store.dispatch('setNextStep', this.steps.mixType);
              // } else if (this.nextStep == this.steps.mixType) {
            } else if (this.nextStep == this.steps.houseMix) {
              this.$store.dispatch('setNextStep', this.steps.review1);
            } else if (this.nextStep == this.steps.tobaccoBrands) {
              this.$store.dispatch('setNextStep', this.steps.tobaccoFlavors);
              // } else if (this.nextStep == this.steps.tobaccoFlavors) {
            } else if (this.nextStep == this.steps.combo2) {
              this.$store.dispatch('setNextStep', this.steps.review1);
            } else if (this.nextStep == this.steps.combo3) {
              this.$store.dispatch('setNextStep', this.steps.review1);
              // } else if (this.nextStep == this.steps.review1) {
              // } else if (this.nextStep == this.steps.reviewTotal) {
            }
            return;
          } else {
            this.$store.dispatch('removeStepSequence', curStep_i);
          }
        }

        /* if next step isn't decided here, it happens dynamically either when next() or add() run */
        if (this.nextStep == this.steps.hookahHeadType) {
          this.$store.dispatch('setCurStep', this.$store.state.nextStep);
          this.$store.dispatch('setNextStep', this.steps.mixType);
        } else if (this.nextStep == this.steps.mixType) {
          this.$store.dispatch('setCurStep', this.$store.state.nextStep);
        } else if (this.nextStep == this.steps.houseMix) {
          this.$store.dispatch('setCurStep', this.$store.state.nextStep);
          this.$store.dispatch('setNextStep', this.steps.review1);
        } else if (this.nextStep == this.steps.tobaccoBrands) {
          this.$store.dispatch('setCurStep', this.$store.state.nextStep);
          this.$store.dispatch('setNextStep', this.steps.tobaccoFlavors);
        } else if (this.nextStep == this.steps.tobaccoFlavors) {
          this.$store.dispatch('setCurStep', this.$store.state.nextStep);
        } else if (this.nextStep == this.steps.combo2) {
          this.$store.dispatch('setCurStep', this.$store.state.nextStep);
          this.$store.dispatch('setNextStep', this.steps.review1);
        } else if (this.nextStep == this.steps.combo3) {
          this.$store.dispatch('setCurStep', this.$store.state.nextStep);
          this.$store.dispatch('setNextStep', this.steps.review1);
        } else if (this.nextStep == this.steps.review1) {
          this.$store.dispatch('setCurStep', this.$store.state.nextStep);
          this.$store.dispatch('setNextStep', this.steps.reviewTotal);
        } else if (this.nextStep == this.steps.reviewTotal) {
          this.$store.dispatch('setCurStep', this.$store.state.nextStep);
          this.$store.dispatch('setNextStep', this.steps.confirmation);
          this.$store.dispatch('createCleanCart_prep');
          
          this.createCleanCart();
        } else if (this.nextStep == this.steps.confirmation) {
          this.$store.dispatch('setCurStep', this.$store.state.nextStep);
          alert(
            "Yay! You made your first purchase : \n Please find the confirmation below."
          );
        }

        this.editStepSequence("next");
      }
    },
    validate() {
    /* VALIDATION -- CONFIRM or REJECT based on whether selection is made */
      let validation = null; 
      let cur = this.stepList[this.curStep];

      if (this.order.new[cur].picked == true ) {
        validation = true;
        
        this.$store.dispatch('setNewOrderInfo', {
          section: cur, 
          key: 'confirmed', 
          val: true 
        });
      } else {
        validation = false; 
        alert("Please pick an option to continue.");
      }

      return validation;
    },
    createCleanCart() {
      /* ADD FINAL 'NEW' ORDER TO CART; AND RESET NEW AND STEP SEQUENCE */
      // this.$store.dispatch('createCleanCart_prep');

      /* SANITIZE CART CONTENT TO MAKE SEND OBJ */
      const cleanCart = [];

      this.order.cart.forEach(el => {
        let cleanItem = {
          hookahHeadType: {},
          price: 0,
          quantity: 0,
          mixType: {}
        };

        /* STATIC ADDITIONS - won't change depending on chosen options */
        cleanItem.quantity              = +el.quantity;
        cleanItem.mixType.id            = el.mixType.id;
        cleanItem.mixType.name          = el.mixType.name;
        cleanItem.numberOfFlavors       = el.comboOptions.numberOfFlavors;
        cleanItem.hookahHeadType.id     = el.hookahHeadType.id;
        cleanItem.hookahHeadType.name   = el.hookahHeadType.name;

        cleanItem.price                += +el.hookahHeadType.price;

        /* DYNAMIC ADDITIONS - will change depending on chosen options */
        if (el.mixType.name == "House") {
          cleanItem.houseMix            = {};
          cleanItem.houseMix.id         = el.houseMix.id;
          cleanItem.houseMix.name       = el.houseMix.name;
          cleanItem.price              += +el.houseMix.price;

        } else if (el.mixType.name == "Custom") {
          cleanItem.price              += +el.comboOptions.priceOfMax;
          cleanItem.tobaccoFlavors      = el.tobaccoFlavors.list;
          cleanItem.comboOptions        = {};
          cleanItem.comboOptions.numberOfFlavors = el.comboOptions.numberOfFlavors;

          if (el.comboOptions.numberOfFlavors == 2) {
            cleanItem.comboOptions.mixCode = el.combo2.mixCode;
            cleanItem.comboOptions.flavor1 = el.combo2.flavor1;
            cleanItem.comboOptions.flavor2 = el.combo2.flavor2;
          } else if (el.comboOptions.numberOfFlavors == 3) {
            cleanItem.comboOptions.split      = el.combo3.split;
            cleanItem.comboOptions.whichIsOdd = el.combo3.whichIsOdd;

            cleanItem.tobaccoFlavors.forEach(el => {
              if (el.id == cleanItem.comboOptions.whichIsOdd.id) {
                cleanItem.comboOptions.whichIsOdd.name = el.name;
              }
            });
          }
        }

        cleanCart.push(cleanItem);
      });

      this.$store.dispatch('createCleanCart', cleanCart);
    },
    localSave() {
      this.$store.dispatch('saveOrder', this);
    },
    back() {
      /* if you're on the review page, going back 'adds another' */
      if (this.curStep == this.steps.reviewTotal) {
        this.addAnother_reviewTotal();
      } else {
        this.editStepSequence("back");
        this.scrollToWizardTop();
      }
    },
    editStepSequence(opt) {
      if (opt == 'reset') {
        this.$store.dispatch('setStepSequence', [0]);
      } else if (
        opt == "next" &&
        this.curStep != this.stepSequence[this.stepSequence.length - 1]
      ) {
        this.$store.dispatch('addStepSequence', this.curStep);
      } else if (opt == "back") {
        this.$store.dispatch('setNextStep', this.curStep);

        let curStep_i = this.stepSequence.indexOf(this.curStep) - 1;
        this.$store.dispatch('setCurStep', this.stepSequence[curStep_i]);
      }
    },
    skipToReview() {
      this.$store.dispatch('setStepSequence', []);
      this.$store.dispatch('setNextStep', this.steps.reviewTotal);
      this.next("skip");

      $("#skipToReview").hide();
    },
    clearTiles() {
      $(".tile").each(function(i, el) {
        // $(el).css('background-color', '');
        $(el).removeClass("selected");
      });
    },

    checkIfSelected() {
      // debugger;
    },

    /* HookahHeadType */
    selectHookahHeadType(i) {
      /* this.order.new.hookahHeadType.picked = true;
      this.order.new.hookahHeadType.id = this.hookahHeadTypes.list[i]._id;
      this.order.new.hookahHeadType.name = this.hookahHeadTypes.list[i].name;
      this.order.new.hookahHeadType.price = this.hookahHeadTypes.list[i].price; */

      /* this.order.new.hookahHeadType = { 
        ...this.order.new.hookahHeadType, 
        picked: true,
        id: this.hookahHeadTypes.list[i]._id,
        name: this.hookahHeadTypes.list[i].name,
        price: this.hookahHeadTypes.list[i].price,
      } */

      this.$store.dispatch('setNewOrderInfo', {
        section: 'hookahHeadType', 
        key: 'picked', 
        val: true 
      });
      this.$store.dispatch('setNewOrderInfo', {
        section: 'hookahHeadType', 
        key: 'id', 
        val: this.hookahHeadTypes.list[i]._id 
      });
      this.$store.dispatch('setNewOrderInfo', {
        section: 'hookahHeadType', 
        key: 'name', 
        val: this.hookahHeadTypes.list[i].name 
      });
      this.$store.dispatch('setNewOrderInfo', {
        section: 'hookahHeadType', 
        key: 'price', 
        val: this.hookahHeadTypes.list[i].price 
      });
    },

    /* MIX TYPE */
    selectMixType(i) {
      /* this.order.new.mixType.picked = true;
      this.order.new.mixType.id = this.mixTypes.list[i].id;
      this.order.new.mixType.name = this.mixTypes.list[i].name; */

      this.$store.dispatch('setNewOrderInfo', {
        section: 'mixType', 
        key: 'picked', 
        val: true 
      });
      this.$store.dispatch('setNewOrderInfo', {
        section: 'mixType', 
        key: 'id', 
        val: this.mixTypes.list[i].id 
      });
      this.$store.dispatch('setNewOrderInfo', {
        section: 'mixType', 
        key: 'name', 
        val: this.mixTypes.list[i].name 
      });
    },

    /* HOUSE MIX TYPE */
    selectHouseMix(i) {
      /* this.order.new.houseMix.picked = true;
      this.order.new.houseMix.id = this.houseMixes.list[i].id;
      this.order.new.houseMix.name = this.houseMixes.list[i].name;
      this.order.new.houseMix.price = +this.houseMixes.list[i].price; */

      this.$store.dispatch('setNewOrderInfo', {
        section: 'houseMix', 
        key: 'picked', 
        val: true 
      });
      this.$store.dispatch('setNewOrderInfo', {
        section: 'houseMix', 
        key: 'id', 
        val: this.houseMixes.list[i].id 
      });
      this.$store.dispatch('setNewOrderInfo', {
        section: 'houseMix', 
        key: 'name', 
        val: this.houseMixes.list[i].name 
      });
      this.$store.dispatch('setNewOrderInfo', {
        section: 'houseMix', 
        key: 'price', 
        val: this.houseMixes.list[i].price 
      });
    },

    /* TOBACCO BRANDS */
    selectTobaccoBrand(b) {
      if ( $(event.currentTarget).parent().data("selected") == false ) {
      /* IF OPTION IS NOT SELECTED */
        $(event.currentTarget).parent().data("selected", true);

        let list = [...this.order.new.tobaccoBrands.list, {
          id    : b.id,
          name  : b.name,
          price : b.price
        }];

        this.$store.dispatch('setNewOrderInfo', {
          section: 'tobaccoBrands', 
          key: 'list', 
          val: list 
        });
        this.$store.dispatch('setNewOrderInfo', {
          section: 'tobaccoBrands', 
          key: 'picked', 
          val: true 
        });

      } else {
      /* IF OPTION IS ALREADY SLECTED */
        $(event.currentTarget).parent().data("selected", false);
        
        /* remove tobacco brand from list */
        let bList = this.order.new.tobaccoBrands.list.filter(
          el => b.id != el.id
        );
        this.$store.dispatch('setNewOrderInfo', {
          section: 'tobaccoBrands', 
          key: 'list', 
          val: bList 
        });



        /* remove tobacco flavors of removed brand from list */
        let fList = this.order.new.tobaccoFlavors.list.filter(
          el => b.id != el.brandID
        );
        this.$store.dispatch('setNewOrderInfo', {
          section: 'tobaccoFlavors', 
          key: 'list', 
          val: fList 
        });

        if (this.order.new.tobaccoBrands.list.length == 0) {
          this.$store.dispatch('setNewOrderInfo', {
            section: 'tobaccoBrands', 
            key: 'picked', 
            val: false 
          });
        }
      }
    },
    brandIsOrdered(b, opt) {
      let test = this.order.new.tobaccoBrands.list.some( el => b.id == el.id);

      if (opt) {
        return test.toString();
      } else {
        return test;
      }
    },
    flavorIsOrdered(f, opt) {
      let test = this.order.new.tobaccoFlavors.list.some( el => f.id == el.id);

      if (opt) {
        return test.toString();
      } else {
        return test;
      }
    },

    /* TOBACCO FLAVORS */
    selectTobaccoFlavor(b, f) {
      if ( $(event.currentTarget).parent().data("selected") == false ) {
      /* IF OPTION IS NOT SELECTED */
        if (this.order.new.tobaccoFlavors.list.length < 3) {
        /* IF THERE ARE FEWER THAN 3 SELECTIONS */
          $(event.currentTarget).parent().data("selected", true);

          let list = [...this.order.new.tobaccoFlavors.list, {
            id          : f.id,
            name        : f.name,
            brandID     : b.id,
            brandName   : b.name,
            brandPrice  : b.price
          }];

          this.$store.dispatch('setNewOrderInfo', {
            section: 'tobaccoFlavors', 
            key: 'list', 
            val: list 
          });
          this.$store.dispatch('setNewOrderInfo', {
            section: 'tobaccoFlavors', 
            key: 'picked', 
            val: true 
          });

        } else {
          alert("You can only add 3.");
          return;
        }
      } else {
        /* IF OPTION IS ALREADY ACTIVE */
        $(event.currentTarget).parent().data("selected", false);

        /* REMOVE FROM LIST */
        let list = this.order.new.tobaccoFlavors.list.filter(
          el => f.id != el.id
        );
        this.$store.dispatch('setNewOrderInfo', {
          section: 'tobaccoFlavors', 
          key: 'list', 
          val: list 
        });
        
        if (this.order.new.tobaccoFlavors.list.length == 0) {
          this.$store.dispatch('setNewOrderInfo', {
            section: 'tobaccoFlavors', 
            key: 'picked', 
            val: false 
          });
        }
      }
    },

    /* COMBO2 */
    combo2RangeChange() {
      let f1 = +event.target.value;
      let f2 = 100 - f1;
      let id = f1 / 25;

      /* 
      id will represent structure/mix of hookah flavors
      0 ==> 0   of 1st : 100 of 2nd
      1 ==> 25  of 1st : 75  of 2nd
      2 ==> 50  of 1st : 50  of 2nd
      3 ==> 75  of 1st : 25  of 2nd
      4 ==> 100 of 1st : 0   of 2nd
      */

      $("#combo2-flavor2").val(f2);

      this.$store.dispatch('setNewOrderInfo', {
        section: 'combo2', 
        key: 'mixCode', 
        val: id 
      });
      this.$store.dispatch('setNewOrderInfo', {
        section: 'combo2', 
        key: 'flavor1', 
        val: f1 
      });
      this.$store.dispatch('setNewOrderInfo', {
        section: 'combo2', 
        key: 'flavor2', 
        val: f2 
      });
      
    },
    
    /* COMBO3 */
    combo3Change() {
      const combo3 = this.order.new.combo3;

      if (combo3.split == 'thirds') {
        let whichIsOdd = {
          id: '', 
          name: ''
        }

        this.$store.dispatch('setNewOrderInfo', {
          section: 'combo3', 
          key: 'picked', 
          val: true 
        });
        this.$store.dispatch('setNewOrderInfo', {
          section: 'combo3', 
          key: 'whichIsOdd', 
          val: whichIsOdd 
        });

      } else {
        if ( combo3.whichIsOdd.id == '' ) {
          this.$store.dispatch('setNewOrderInfo', {
            section: 'combo3', 
            key: 'picked', 
            val: false 
          });
        } else {
          this.$store.dispatch('setNewOrderInfo', {
            section: 'combo3', 
            key: 'picked', 
            val: true 
          });
        }
      }
    },

    /* REVIEW1 */
    addAnother_review1() {
      this.$store.dispatch('addAnother_review1', {
        curStep: this.steps.hookahHeadType, 
        nextStep: this.steps.mixType
      });
    },

    saveItemQuantity(opt, i) {
      const e = event;

      if (opt == 'new') {
        this.$store.dispatch('setNewOrderInfo', {
          key: 'quantity', 
          val: e.target.valueAsNumber
        });
      } else if (opt == 'cart') {
        this.$store.dispatch('saveItemQuantity', {
          i,
          quantity: e.target.valueAsNumber
        })
      }

      this.createCleanCart();
    },

    /* REVIEW TOTAL */
    addAnother_reviewTotal() {
      this.$store.dispatch('addAnother_reviewTotal', {
        curStep: this.steps.hookahHeadType, 
        nextStep: this.steps.mixType
      });
    },
    editItem(i) {
      const curStep = this.steps.hookahHeadType;
      const nextStep = this.steps.mixType;
      this.$store.dispatch('editItem', {curStep, nextStep, i});

      this.editStepSequence("reset");

      $("#skipToReview").show();
    },
    removeItem(i) {
      let confirm = window.confirm('Are you sure you want to remove this item?');
      if (confirm == true) this.$store.dispatch('removeOrderItem', i);
    },
    clearAll() {
      this.$store.dispatch('clearAll', this);
      localStorage.removeItem("store");
    },
    scrollToWizardTop() {
      if (window.scrollY > $("div#wizard").offset().top) {
        $("html, body").animate({
          scrollTop: $("div#wizard").offset().top
        }, 50);
      }
    },
    hookahs() {},
    addons() {}
  }
};

/* CUSTOM JS */

</script>

<style>
#wizard {
  width: 100%;
  min-height: 100px;
}

/* .wizard-selection {
    display: none;
  } */

.tile {
  border: black solid 1px;
  /* padding: 10px; */
  margin: 5px;
  cursor: pointer;
  min-height: 100px;
}

.tile-list {
  list-style-type: none;
}

.step-subtitle {
  padding: 0 15px;
}

.combo2-range {
  margin: 10px 20px;
}

.item-quantity {
  text-align: center;
  width: 15%;
  min-width: 60px;
  /* padding: 10px; */
}

#review1-options .col {
  min-height: 100px;
  padding: 15px;
}

#review1-options .col:nth-of-type(1) {
  border-bottom: solid black 1px;
  border-right: solid black 1px;
}
#review1-options .col:nth-of-type(2) {
  border-bottom: solid black 1px;
  /* border-left: solid black 1px; */
}
#review1-options .col:nth-of-type(3) {
  /* border-top: solid black 1px; */
  border-right: solid black 1px;
}
/* #review1-options .col:nth-of-type(4) {
    border-top: solid black 1px;
    border-left: solid black 1px;
  } */

#cart-review ul,
#confirmation ul {
  list-style-type: none;
}

.review-item {
  border: 0.5px solid gray;
  margin: 10px 0;
  padding: 10px;
}

.review-item > .row {
  margin: 0 -10px -10px;
}

.review-item img {
  width: 100%;
  max-width: 150px;
  border-radius: 10px;
  margin: 10px 0;
}

#cart-review-summary table {
  margin: 0 0 30px;
  border-bottom: solid 1px grey;
  font-family: monospace;
}

#cart-review-summary table td:nth-child(1) {
  text-align: right;
}

#cart-review-summary table td:nth-child(2) {
  text-align: right;
  padding-left: 10px;
}

#skipToReview {
  display: none;
}
</style>
