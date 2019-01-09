<template>
<div id='wizard'>

  <!-- FRUIT SELECTION -->
  <div id="wizard-selection-fruits" class='wizard-selection row' v-if="this.$root.curStep==0">
    
    <div class="col-12">

    
      <div class="text-center row">
        <h3 class='step-title bg-secondary col-12'>Please select the fruit.</h3>
      </div>

      <ul class='tile-list row p-0'>
        <li v-for="(el, i) in fruits.list" :key="i" class='col-6' >
          <div class='tile p-1' @click="selectFruit(i)">
            <h5 class='text-center'>{{el.name}}</h5>
            <span>${{el.price}}</span>
          </div>
        </li>
      </ul>

      </div>
  </div>

  <!-- MIX TYPE SELECTION -->
  <div id="wizard-selection-mixTypes" class='wizard-selection row' v-if="this.$root.curStep==1">

    <div class="col-12">

      <div class="text-center row">
        <h3 class='step-title bg-secondary col-12'>Please select the mix type.</h3>
      </div>

      <ul class='tile-list row p-0'>
        <li v-for="(el, i) in mixTypes.list" :key="i" class='col-6' >
          <div class='tile p-1' @click="selectMixType(i)">
            <h5 class='text-center'>{{el.name}}</h5>
          </div>
        </li>
      </ul>

    </div>
  </div>
  
  <!-- HOUSE MIX SELECTION -->
  <div id="wizard-selection-houseMixes" class='wizard-selection row' v-if="this.$root.curStep==2">

    <div class="col-12">

      <div class="text-center row">
        <h3 class='step-title bg-secondary col-12'>Please select the house mix.</h3>
      </div>

      <ul class='tile-list row p-0'>
        <li v-for="(el, i) in houseMixes.list" :key="i" class='col-6' >
          <div class='tile p-1' @click="selectHouseMix(i)">
            <h5 class='text-center'>{{el.name}}</h5>
            <span>${{el.price}}</span>
          </div>
        </li>
      </ul>

    </div>
  </div>
  
  <!-- TOBACCO BRAND SELECTION -->
  <div id="wizard-selection-tobaccoBrands" class='wizard-selection row' v-if="this.$root.curStep==3">

    <div class="col-12">

      <div class="text-center row">
        <h3 class='step-title bg-secondary col-12'>Please select the brands.</h3>
        <p class='text-left p-1'>All flavors of the brands you choose will be available to choose from in the next slide. You will be charged the higher cost.</p>
      </div>

      <ul class='tile-list row p-0'>
        <li v-for="(el, i) in tobaccoBrands.list" :key="i" class='col-6' >
          <div class='tile p-1' @click="selectTobaccoBrand(i)">
            <h5 class='text-center'>{{el.name}}</h5>
            <span>${{el.price}}</span>
          </div>
        </li>
      </ul>

      <div class="row">
        <div class="col-6 text-center">
          <button class='btn-secondary center wp-100' @click="removeTobaccoBrand()">Remove</button>
        </div>
        <div class="col-6 text-center">
          <button class='btn- primary wp-100' @click="addTobaccoBrand()">Add</button>
        </div>
      </div>
    </div>

  </div>
  
  <!-- TOBACCO FLAVOR SELECTION -->
  <div id="wizard-selection-tobaccoFlavors" class='wizard-selection row' v-if="this.$root.curStep==4">

    <div class="col-12">

      <div class="text-center row">
        <h3 class='step-title bg-secondary col-12'>Please select up to 3 flavors.</h3>
      </div>

      <ul v-for="(b, i) in orderedTobaccoBrands" :key="i" class='tile-list row p-0 text-center'>

          <h5 class='text-center col-12'>{{b.name}} - ${{b.price}}</h5>

          <li v-for="(f, i) in b.flavors.list" :key="i" class='col-6'>
            <div class='tile p-1' @click="selectTobaccoFlavor(b, f)">
              <h5 class='text-center'>{{f.name}}</h5>
            </div>
          </li>

      </ul>

      <div class="row">
        <div class="col-6 text-center">
          <button class='btn-secondary center wp-100' @click="removeTobaccoFlavor()">Remove</button>
        </div>
        <div class="col-6 text-center">
          <button class='btn- primary wp-100' @click="addTobaccoFlavor()">Add</button>
        </div>
      </div>

    </div>

  </div>

  <!-- COMBO2 -->
  <div id="wizard-selection-combo2" class='wizard-selection row' v-if="this.$root.curStep==5">

    <div class="col-12">

      <div class="text-center row">
        <h3 class='step-title bg-secondary col-12'>2 Flavor Combo</h3>
        <p class='text-left p-1'>All flavors of the brands you choose will be available to choose from; you will be charged the higher cost for all.</p>
      </div>


      <div class="row">
        <div class="col-12 text-center">
          <h5>{{order.new.tobaccoFlavors.list[0].name}}</h5>
          <input id="combo2-flavor1" class="combo2-range wp-75" type="range" name="combo2-flavor1" min="0" max="100" value="50" step="25" @change="combo2RangeChange()">
        </div>
      </div>
      <div class="wp-75 center">
    
        <div class="row">
          <span class="col-2 text-left">0</span>
          <span class="col-2 text-center">25</span>
          <span class="col-4 text-center">50</span>
          <span class="col-2 text-center">75</span>
          <span class="col-2 text-right">100</span>
        </div>

      </div>

      <div class="row">
        <div class="col-12 text-center">
          <input id="combo2-flavor2" class="combo2-range wp-75" type="range" name="combo2-flavor2" min="0" max="100" value="50" step="25" disabled >
          <h5>{{order.new.tobaccoFlavors.list[1].name}}</h5>
        </div>
      </div>
    </div>

  </div>

  <!-- COMBO3 -->
  <div id="wizard-selection-combo3" class='wizard-selection row' v-if="this.$root.curStep==6">

    <div class="col-12">

      <div class="text-center row">
        <h3 class='step-title bg-secondary col-12'>3 Flavor Combo</h3>
        <p class='text-left p-1'>All flavors of the brands you choose will be available to choose from; you will be charged the higher cost for all.</p>
      </div>

      <div class="row">
        <div class="col-6">
          <input type="radio" name="" id=""> 
          <label for="">1/3 + 1/3 + 1/3</label>
        </div>
      </div>
      
      <div class="row">
        <div class="col-6">
          <input type="radio" name="" id="combo3-fifths"> 
          <label for="">1/5 + 2/5 + 2/5</label>
        </div>
        
        <div class="col-6" v-if="whichFifth">
          <label for="">Which one is 1/5?</label>
          <select name="" id="">
            <option value="" disabled>Select</option>

            <option v-for='(f, i) in order.new.tobaccoFlavors.list' :key="i" :value="f.id">{{f.name}}</option>
          </select>
        </div>
      </div>

    </div>

  </div>

  <!-- REVIEW1 -->
  <div id="wizard-selection-review1" class='wizard-selection row' v-if="this.$root.curStep==7">

    <div class="col-12">

      <div class="text-center row">
        <h3 class='step-title bg-secondary col-12'>Review Selection</h3>
        <p class='text-left p-1'>All flavors of the brands you choose will be available to choose from; you will be charged the higher cost for all.</p>
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
      
      <div id="review1-options" class='col-12'>
        <div class="row">
          <div class="col col-6" >
            <h5>How many of this selection?</h5>
            <input id='selectionQuantity-input' class='p-1' type="number" min=1 :value="order.new.quantity" @change="selectionQuantityChanged()">
          </div>
          
          <div class="col col-6 cursor-pointer markOnHover" @click='addAnother()'>
            <h5>Add another selection... Pick something totally different!</h5>
          </div>
        
          <div class="col col-6 cursor-pointer markOnHover" @click="hookahs()">
            <h5>Need a hookah? We got you covered.</h5>
          </div>
          
          <div class="col col-6 cursor-pointer markOnHover" @click="addons()">
            <h5>Find all accessories you might need here.</h5>
          </div>
        </div>
      </div>

    </div>
  </div>
  
  <!-- REVIEW -->
  <div id="wizard-selection-review" class='wizard-selection row' v-if="this.$root.curStep==8">

    <div class="col-12">

      <div class="text-center row">
        <h3 class='step-title bg-secondary col-12'>Review</h3>
        <p class='text-left p-1'>All flavors of the brands you choose will be available to choose from; you will be charged the higher cost for all.</p>
      </div>
      
    </div>

  </div>

  <div class="row mt-1">
    <!-- <div class="col-12">
      <div class="row"> -->
        <div class="col-6 text-center">
          <button class='btn-danger center wp-100' @click="back()">Back</button>
        </div>
        <div class="col-6 text-center">
          <button class='btn-success center wp-100' @click="next()">Next</button>
        </div>
      <!-- </div>
    </div> -->
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
  name: 'wizard',
  data () {
    return {
      /* 
      WIZARD SELECTION PAGES
      -----------------------
      0 - fruit
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
      stepList: ['fruit', 'mixType', 'houseMix', 'tobaccoBrands', 'tobaccoFlavors', 'combo2', 'combo3', 'review1', 'reviewTotal'],
      nextStep: 1,
      // curStep: 0,

      addTobaccoBrandActive: false,
      removeTobaccoBrandActive: false,
      
      addTobaccoFlavorActive: false,
      removeTobaccoFlavorActive: false,

      order: {
        new: {
          quantity: 1,
          fruit: {
            picked: false,
            confirmed: false,
            name: '',
            id: ''
          },
          mixType: {
            picked: false,
            confirmed: false,
            name: '',
            id: ''
          },
          houseMix: {
            picked: false,
            confirmed: false,
            name: '',
            id: ''
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
            picked: false,
            confirmed: false,
            numberOfFlavors: '',
            maxPrice: '',
            mixCode: ''
          }
        },
        cart: [],
        newTemp: {
          quantity: 1,
          fruit: {
            picked: false,
            confirmed: false,
            name: '',
            id: ''
          },
          mixType: {
            picked: false,
            confirmed: false,
            name: '',
            id: ''
          },
          houseMix: {
            picked: false,
            confirmed: false,
            name: '',
            id: ''
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
            picked: false,
            confirmed: false,
            numberOfFlavors: '',
            maxPrice: '',
            mixCode: ''
          }
        }
      },

      fruits: {
        list: [
          {id: '1', name: 'apple', price: '5'},
          {id: '2', name: 'orange', price: '7'},
          {id: '3', name: 'melon', price: '10'},
          {id: '4', name: 'watermelon', price: '15'},
          {id: '5', name: 'pineapple', price: '20'}
        ]
      }, 
      mixTypes: {
        list: [
          {id: '1', name: 'custom', details: 'Create your own mix of 2 or 3 flavors.'},
          {id: '2', name: 'house', details: 'Pick from a selection of house Mixes'}
        ]
      },
      houseMixes: {
        list: [
          {id: '1', name: 'Mix1', details: 'Sweet'},
          {id: '2', name: 'Mix2', details: 'Light'},
          {id: '3', name: 'Mix3', details: 'Fruity'}
        ]
      },
      tobaccoBrands: {
        list: [
          {
            id: 0,
            name: 'Starbuzz', 
            price: '5', 
            flavors: {
              list: [
                {id: '1', name: 'type1', description: 'description1'},
                {id: '2', name: 'type2', description: 'description2'},
                {id: '3', name: 'type3', description: 'description3'},
                {id: '4', name: 'type4', description: 'description4'},
                {id: '5', name: 'type5', description: 'description5'}
              ]
            }
          },
          {
            id: 1,
            name: 'Fumari', 
            price: '7', 
            flavors: {
              list: [
                {id: '6', name: 'type1', description: 'description1'},
                {id: '7', name: 'type2', description: 'description2'},
                {id: '8', name: 'type3', description: 'description3'},
                {id: '9', name: 'type4', description: 'description4'},
                {id: '10', name: 'type5', description: 'description5'}
              ]
            }
          },
          {
            id: 2,
            name: 'Al-Fakhr', 
            price: '10', 
            flavors: {
              list: [
                {id: '11', name: 'type1', description: 'description1'},
                {id: '12', name: 'type2', description: 'description2'},
                {id: '13', name: 'type3', description: 'description3'},
                {id: '14', name: 'type4', description: 'description4'},
                {id: '15', name: 'type5', description: 'description5'}
              ]
            }
          },
          {
            id: 3,
            name: 'House', 
            price: '13', 
            flavors: {
              list: [
                {id: '16', name: 'type1', description: 'description1'},
                {id: '17', name: 'type2', description: 'description2'},
                {id: '18', name: 'type3', description: 'description3'},
                {id: '19', name: 'type4', description: 'description4'},
                {id: '20', name: 'type5', description: 'description5'}
              ]
            }
          }
        ]
      }
      
    }
  },
  computed: {
    orderedTobaccoBrands () {
      let self = this;
      let res = this.tobaccoBrands.list.filter(function(el, i) {
        return self.brandIsOrdered(el)
      });

      return res;
    },
    whichFifth () {
      let res = false;
      if ($('#combo3-fifths').length > 0 && $('#combo3-fifths').checked() ) res = true;
      return res;
    }
  }, 
  created () {
    // this.$set(this, 'curStep', 0);
  },
  mounted: function () {
    // $('#wizard-selection-fruits').show();
  },
  methods: {
    /* COMMON */
    next () {
      let cur = this.stepList[this.$root.curStep];
      if (cur == 'combo2' || cur == 'combo3') cur = 'comboOptions';
      
      /* CONFIRM or REJECT */
      if (cur != 'review1') {
        if (this.order.new[cur].picked == false ) {
          alert('Please pick an option to continue');
        return;
        } else {
          this.order.new[cur].confirmed = true;
        }
      }


      /* DEACTIVATE ALL ADD/REMOVE ACTIVATORS */
      this.addTobaccoBrandActive = false;
      this.removeTobaccoBrandActive = false;
      
      this.addTobaccoFlavorActive = false;
      this.removeTobaccoFlavorActive = false;

      this.clearTiles();  // TODO: without clearing tiles, marking from previous wizard page appears on new page; coincides with selection spacially

      
      /* ONLY IF ON STEP 4: FLAVOR SELECT */
      if (this.$root.curStep == 4) {
        /* set the price that will be paid for this mix */
        let max = 0;

        this.order.new.tobaccoFlavors.list.forEach(function(el) {
          if (+max < +el.brandPrice) max = el.brandPrice;
        });

        this.order.new.comboOptions.maxPrice = max;

        /* decide propper next step based on number of flavors chosen*/
        this.order.new.comboOptions.numberOfFlavors = this.order.new.tobaccoFlavors.list.length;

        if (this.order.new.comboOptions.numberOfFlavors == 1) {
          this.nextStep = 7;
        } else if (this.order.new.comboOptions.numberOfFlavors == 2) {
          this.nextStep = 5;
        } else if (this.order.new.comboOptions.numberOfFlavors == 3) {
          this.nextStep = 6;
        }
      }

      /* HIDE ALL SELECITONS */
      /* $('.wizard-selection').each(function(i, el) {
        $(el).hide();
      }); */

      /* DISPLAY APPROPRIATE SELECTION */
      /* if next step isn't decided here, it happens dynamically either when next() or add() run */
      if (this.nextStep == 0) {
        // $('#wizard-selection-fruits').show();
        // this.curStep = 0;
        // this.$set(this, 'curStep', 0);
        this.$root.curStep = 0;
        this.nextStep = 1;
      } else if (this.nextStep == 1) {
        // $('#wizard-selection-mixTypes').show();
        // this.curStep = 1;
        // this.$set(this, 'curStep', 1);
        this.$root.curStep = 1;
        } else if (this.nextStep == 2) {
        // $('#wizard-selection-houseMixes').show();
        // this.curStep = 2;
        // this.$set(this, 'curStep', 2);
        this.$root.curStep = 2;
        this.nextStep = 7;
      } else if (this.nextStep == 3) {
        // $('#wizard-selection-tobaccoBrands').show();
        // this.curStep = 3;
        // this.$set(this, 'curStep', 3);
        this.$root.curStep = 3;
        this.nextStep = 4;
      } else if (this.nextStep == 4) {
        // $('#wizard-selection-tobaccoFlavors').show();
        // this.curStep = 4;
        // this.$set(this, 'curStep', 4);
        this.$root.curStep = 4;
        } else if (this.nextStep == 5) {
        // $('#wizard-selection-combo2').show();
        // this.curStep = 5;
        // this.$set(this, 'curStep', 5);
        this.$root.curStep = 5;
        this.nextStep = 7;
      } else if (this.nextStep == 6) {
        // $('#wizard-selection-combo3').show();
        // this.curStep = 6;
        // this.$set(this, 'curStep', 6);
        this.$root.curStep = 6;
        this.nextStep = 7;
      } else if (this.nextStep == 7) {
        // $('#wizard-selection-review1').show();
        // this.curStep = 7;
        // this.$set(this, 'curStep', 7);
        this.$root.curStep = 7;
        }  else if (this.nextStep == 8) {
        // $('#wizard-selection-review').show();
        // this.curStep = 8;
        // this.$set(this, 'curStep', 8);
        this.$root.curStep = 8;
      }

      // this.$nextTick();

      

    },
    back() {
      this.$router.go(-1);
    },
    clearTiles () {
      $('.tile').each(function(i, el) {
        $(el).css('background-color', '');
      });
    },

    /* FRUIT */
    selectFruit (i) {
      this.order.new.fruit.picked = true;
      this.order.new.fruit.id = this.fruits.list[i].id;
      this.order.new.fruit.name = this.fruits.list[i].name;

      this.clearTiles(); 
      $(event.currentTarget).css('background-color', 'red');
    },

    /* MIX TYPE */
    selectMixType (i) {
      this.order.new.mixType.picked = true;
      this.order.new.mixType.id = this.mixTypes.list[i].id;
      this.order.new.mixType.name = this.mixTypes.list[i].name;

      if (this.order.new.mixType.name == 'house') {
        this.nextStep = 2;
      } else {
        this.nextStep = 3;
      }

      this.clearTiles();
      $(event.currentTarget).css('background-color', 'red');

    },

    /* HOUSE MIX TYPE */
    selectHouseMix (i) {
      this.order.new.houseMix.picked = true;
      this.order.new.houseMix.id = this.houseMixes.list[i].id;
      this.order.new.houseMix.name = this.houseMixes.list[i].name;

      this.clearTiles();
      $(event.currentTarget).css('background-color', 'red');

    },

    /* TOBACCO BRANDS */
    addTobaccoBrand () {
      this.addTobaccoBrandActive = true;
    },
    removeTobaccoBrand () {
      this.removeTobaccoBrandActive = true;
    },
    selectTobaccoBrand (i) {
      if (this.addTobaccoBrandActive) {
        /* IF ADDING IS ACTIVE */
        let brand = {};

        this.order.new.tobaccoBrands.picked = true;

        brand.id = this.tobaccoBrands.list[i].id;
        brand.name = this.tobaccoBrands.list[i].name;
        brand.price = this.tobaccoBrands.list[i].price;

        this.order.new.tobaccoBrands.list.push(brand);

        $(event.currentTarget).css('background-color', 'red');

        this.addTobaccoBrandActive = false;
      } else if (this.removeTobaccoBrandActive) {
        /* IF REMOVAL IS ACTIVE */
        
        let toRemove;
        this.order.new.tobaccoBrands.list.forEach(function(tobacco, index) {
          if (tobacco.id == i) {
            toRemove = index;
          }
        });
        this.order.new.tobaccoBrands.list.splice(toRemove, 1);

        $(event.currentTarget).css('background-color', '');

        if (this.order.new.tobaccoBrands.list.length == 0) {
          this.order.new.tobaccoBrands.picked = false;
        }
        
        this.removeTobaccoBrandActive = false;
      }
    },
    brandIsOrdered(b) {
      let test = false;

      this.order.new.tobaccoBrands.list.forEach(function(el) {
        if (b.id == el.id) {
          test = true;
        }
      });

      return test;
    },

    /* TOBACCO FLAVORS */
    addTobaccoFlavor () {
      /* CHECK FOR MAX 3 FLAVORS */
      if (this.order.new.tobaccoFlavors.list.length < 3) {
        this.addTobaccoFlavorActive = true;
      } else {
        alert('You can only add 3.');
        return;
      }

      /* CHECK WHAT NEXT STEP TO DO; 2 OR 3 FLAVOR COMBO PAGE NEXT */
      /* if (this.order.new.tobaccoFlavors.list.length == 1) {
        this.nextStep = ;
      } else if (this.order.new.tobaccoFlavors.list.length == 2) {
        this.nextStep = ;

      } else  if (this.order.new.tobaccoFlavors.list.length == 3) {
        this.nextStep = ;

      } */

    },
    removeTobaccoFlavor () {
      this.removeTobaccoFlavorActive = true;
    },
    selectTobaccoFlavor (b, f) {
      if (this.addTobaccoFlavorActive) {
        /* IF ADDING IS ACTIVE */
        let flavor = {};

        this.order.new.tobaccoFlavors.picked = true;

        flavor.id = f.id;
        flavor.name = f.name;
        flavor.brandID = b.id;
        flavor.brandName = b.name;
        flavor.brandPrice = b.price;


        this.order.new.tobaccoFlavors.list.push(flavor);

        $(event.currentTarget).css('background-color', 'red');

        this.addTobaccoFlavorActive = false;
      } else if (this.removeTobaccoFlavorActive) {
        /* IF REMOVAL IS ACTIVE */
        
        let toRemove;
        this.order.new.tobaccoFlavors.list.forEach(function(flavor, index) {
          if (flavor.id == f) {
            toRemove = index;
          }
        });
        this.order.new.tobaccoFlavors.list.splice(toRemove, 1);

        $(event.currentTarget).css('background-color', '');

        if (this.order.new.tobaccoFlavors.list.length == 0) {
          this.order.new.tobaccoFlavors.picked = false;
        }
        
        this.removeTobaccoFlavorActive = false;
      }
    },

    /* COMBO2 */
    combo2RangeChange() {
      let f1 = event.target.value;
      let reverse = 100 - f1;
      let id = f1/25;

      /* 
      id will represent structure/mix of hookah flavors
      0 ==> 0   of 1st : 100 of 2nd
      1 ==> 25  of 1st : 75  of 2nd
      2 ==> 50  of 1st : 50  of 2nd
      3 ==> 75  of 1st : 25  of 2nd
      4 ==> 100 of 1st : 0   of 2nd
      */

      $('#combo2-flavor2').val(reverse);

      this.order.new.comboOptions.mixCode = id;

      this.order.new.comboOptions.picked = true;
    },

    /* REVIEW1 */
    selectionQuantityChanged() {
      this.order.new.quantity = +event.target.value;
    },
    addAnother() {
      this.order.cart.push(this.order.new);
      this.order.new = $.extend({}, this.order.newTemp);
      
      this.nextStep = 0;
      this.next();
    },
    hookahs() {

    }, 
    addons() {

    }
  }
}
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

  .combo2-range {
    margin: 10px 20px;
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

  
</style>
