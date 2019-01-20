<template>
<div id='wizard'>

  <!-- HOOKAH HEAD TYPE SELECTION -->
  <div id="wizard-selection-hookahHeadTypes" class='wizard-selection row' v-if="this.$root.curStep==0">
    
    <div class="col-12">

    
      <div class="text-center row">
        <h3 class='step-title bg-secondary col-12'>Please select the hookah head type.</h3>
      </div>

      <ul class='tile-list row p-0'>
        <li v-for="(el, i) in hookahHeadTypes.list" :key="i" class='col-6'>
          <div class='tile p-1' 
          @click="selectHookahHeadType(i)"
          :class="{selected : (el._id == order.new.hookahHeadType.id) }"
          >
<!-- (el._id == order.new.hookahHeadType.id) -->
<!-- checkIfSelected(el) -->
          

            <h5 class='text-center'>{{el.name}}</h5>
            <div class="row">
              <div class="col-2"> ${{el.price}} </div>
              <div class="col-10"> {{el.description}} </div>
            </div>
              <!-- <div class="row"> {{el._id}} </div> -->
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
          <div class='tile p-1' 
          @click="selectMixType(i)" 
          :class="{selected : (el.id == order.new.mixType.id) }"
          >
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
        <h3 class='step-title bg-secondary col-12'>Please select the House mix.</h3>
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
        <li v-for="(el, i) in tobaccoBrands.list" :key="i" class='col-6' data-selected='false'>
          <div class='tile p-1' @click="selectTobaccoBrand(el)">
            <h5 class='text-center'>{{el.name}}</h5>
            <span>${{el.price}}</span>
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
  <div id="wizard-selection-tobaccoFlavors" class='wizard-selection row' v-if="this.$root.curStep==4">

    <div class="col-12">

      <div class="text-center row">
        <h3 class='step-title bg-secondary col-12'>Please select up to 3 flavors.</h3>
      </div>

      <ul v-for="(b, i) in orderedTobaccoBrands" :key="i" class='tile-list row p-0 text-center'>

          <h5 class='text-center col-12'>{{b.name}} - ${{b.price}}</h5>

          <li v-for="(f, i) in b.flavors.list" :key="i" class='col-6' data-selected='false'>
            <div class='tile p-1' @click="selectTobaccoFlavor(b, f)">
              <h5 class='text-center'>{{f.name}}</h5>
            </div>
          </li>

      </ul>

    </div>

  </div>

  <!-- COMBO2 -->
  <div id="wizard-selection-combo2" class='wizard-selection row' v-if="this.$root.curStep==5">

    <div class="col-12">

      <div class="text-center row">
        <h3 class='step-title bg-secondary col-12'>2 Flavor Combo</h3>
        <p class='text-left p-1'>Please choose the proportion of each flavor you'd like.</p>
      </div>


      <div class="row">
        <div class="col-12 text-center">
          <h5>{{order.new.tobaccoFlavors.list[0].name}}</h5>
          <input id="combo2-flavor1" class="combo2-range wp-75" type="range" name="combo2-flavor1" min="25" max="75" value='50' step="25" @change="combo2RangeChange()">
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
          <input id="combo2-flavor2" class="combo2-range wp-75" type="range" name="combo2-flavor2" min="25" max="75" value="50" step="25" disabled >
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
          <input type="radio" name="combo3" id="combo3-thirds" value='thirds' v-model="order.new.comboOptions.combo3Split"> 
          <label for="">1/3 + 1/3 + 1/3</label>
        </div>
      </div>
      
      <div class="row">
        <div class="col-6">
          <input type="radio" name="combo3" id="combo3-fifths" value='fifths' v-model="order.new.comboOptions.combo3Split"> 
          <label for="">1/5 + 2/5 + 2/5</label>
        </div>
        
        <div class="col-6" v-if="order.new.comboOptions.combo3Split=='fifths'">
          <label for="">Which one is 1/5?</label>
          <select name="" id="" v-model="order.new.comboOptions.whichIsFifth">
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
      stepList: ['hookahHeadType', 'mixType', 'houseMix', 'tobaccoBrands', 'tobaccoFlavors', 'combo2', 'combo3', 'review1', 'reviewTotal'],
      nextStep: 1,
      // curStep: 0,

      order: {
        new: {
          quantity: 1,
          hookahHeadType: {
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
            confirmed: false,
            numberOfFlavors: '',
            maxPrice: '',
            mixCode: '',
            combo3Split: '',
            whichIsFifth: ''
          }
        },
        cart: [],
        newTemp: {
          quantity: 1,
          hookahHeadType: {
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
            confirmed: false,
            numberOfFlavors: '',
            maxPrice: '',
            mixCode: '',
            combo3Split: '',
            whichIsFifth: ''
          }
        }
      },

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
          {id: '1', name: 'Custom', details: 'Create your own mix of 2 or 3 flavors.'},
          {id: '2', name: 'House', details: 'Pick from a selection of House Mixes'}
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
        return self.brandIsOrdered(el);
      });

      return res;
    }
  }, 
  created () {
    let self = this;

    // Get saved order info if it exists
    if (sessionStorage.getItem('order')) {
      this.order = JSON.parse(sessionStorage.getItem('order'));
      this.$root.stepSequence = JSON.parse(sessionStorage.getItem('stepSequence'));
      this.$root.curStep = +sessionStorage.getItem('curStep');
      this.nextStep = +sessionStorage.getItem('nextStep');
    }
    
    // Get hookahHeadTypes
    this.$http({
      method: 'get',
      url: 'http://localhost:3001/api/hookahHeadTypes/',
      })
    .then(function (response) {
      // handle success
      console.log('hookahHeadTypes: ', response);

      self.hookahHeadTypes.list = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });



    /* // Get houseMixes
    this.$http({
      method: 'get',
      url: 'http://localhost:3001/api/houseMixes/',
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
      url: 'http://localhost:3001/api/tobaccobrands/',
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
  mounted: function () {

  },
  methods: {
    /* COMMON */
    next () {
      /* CHECK IF THERE IS ALREADY A DEFINED PATH FOR THE NEXT SLIDE, GIVEN FROM A PREVIOUS SELECTION */
      let curStep_i = this.$root.stepSequence.indexOf(this.$root.curStep);
      if (curStep_i != this.$root.stepSequence.length - 1 ) {
        this.$root.curStep = this.$root.stepSequence[curStep_i + 1];
        return;
      }

      /* INITIALIZATION */
      let cur = this.stepList[this.$root.curStep];
      if (cur == 'combo2' || cur == 'combo3') cur = 'comboOptions';
      

      /* CONFIRM or REJECT based on whether selection is made */
      if (cur != 'review1' ) {
        if (this.order.new[cur].picked == false || cur == 'combo2') {   // combo2 gets CHANGED not PICKED- so this check is irrelevant
          alert('Please pick an option to continue');
          return;
        } else {
          this.order.new[cur].confirmed = true;
        }
      }


      /* ONLY IF ON STEP 1: MIX TYPE SELECT */
      if (this.$root.curStep == 1) { 
       if (this.order.new.mixType.name == 'House') {
          this.nextStep = 2;
        } else {
          this.nextStep = 3;
        }
      }
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


      /* DISPLAY APPROPRIATE SELECTION */
      /* if next step isn't decided here, it happens dynamically either when next() or add() run */
      if (this.nextStep == 0) {
        this.$root.curStep = 0;
        this.nextStep = 1;
      } else if (this.nextStep == 1) {
        this.$root.curStep = 1;
      } else if (this.nextStep == 2) {
        this.$root.curStep = 2;
        this.nextStep = 7;
      } else if (this.nextStep == 3) {
        this.$root.curStep = 3;
        this.nextStep = 4;
      } else if (this.nextStep == 4) {
        this.$root.curStep = 4;
      } else if (this.nextStep == 5) {
        this.$root.curStep = 5;
        this.nextStep = 7;
      } else if (this.nextStep == 6) {
        this.$root.curStep = 6;
        this.nextStep = 7;
      } else if (this.nextStep == 7) {
        this.$root.curStep = 7;
      }  else if (this.nextStep == 8) {
        this.$root.curStep = 8;
      }


      this.editStepSequence('next');

      this.localSave();

    },
    localSave() {
      let self = this;
      sessionStorage.setItem('order', JSON.stringify(self.order));
      sessionStorage.setItem('stepSequence', JSON.stringify(self.$root.stepSequence));
      sessionStorage.setItem('curStep', self.nextStep);
      sessionStorage.setItem('nextStep', self.$root.curStep);
    },
    back() {
      this.editStepSequence('back');
    },
    editStepSequence(option) {
      let root = this.$root;

      if (option == 'next') {
        root.stepSequence.push(root.curStep);
      } else if (option == 'back') {
        this.nextStep = root.curStep;

        let curStep_i = root.stepSequence.indexOf(root.curStep - 1);
        root.curStep = root.stepSequence[curStep_i];
      }
    },
    clearTiles () {
      $('.tile').each(function(i, el) {
        // $(el).css('background-color', '');
        $(el).removeClass('selected');
      });
    },

    checkIfSelected(el) {
      debugger
    },

    /* HookahHeadType */
    selectHookahHeadType (i) {
      this.order.new.hookahHeadType.picked = true;
      this.order.new.hookahHeadType.id = this.hookahHeadTypes.list[i]._id;
      this.order.new.hookahHeadType.name = this.hookahHeadTypes.list[i].name;

      this.clearTiles(); 
      // $(event.currentTarget).css('background-color', 'red');
      $(event.currentTarget).addClass('selected');

    },

    /* MIX TYPE */
    selectMixType (i) {
      this.order.new.mixType.picked = true;
      this.order.new.mixType.id = this.mixTypes.list[i].id;
      this.order.new.mixType.name = this.mixTypes.list[i].name;

      this.clearTiles();
      // $(event.currentTarget).css('background-color', 'red');
      $(event.currentTarget).addClass('selected');
    },

    /* HOUSE MIX TYPE */
    selectHouseMix (i) {
      this.order.new.houseMix.picked = true;
      this.order.new.houseMix.id = this.houseMixes.list[i].id;
      this.order.new.houseMix.name = this.houseMixes.list[i].name;

      this.clearTiles();
      // $(event.currentTarget).css('background-color', 'red');
      $(event.currentTarget).addClass('selected');
    },

    /* TOBACCO BRANDS */
    selectTobaccoBrand (b) {
      debugger
      if ($(event.currentTarget).parent().data('selected') == false) {
        /* IF OPTION IS NOT SELECTED */
        $(event.currentTarget).parent().data('selected', true);

        let brand = {};

        this.order.new.tobaccoBrands.picked = true;

        brand.id = b.id;
        brand.name = b.name;
        brand.price = b.price;

        this.order.new.tobaccoBrands.list.push(brand);

        // $(event.currentTarget).css('background-color', 'red');
        $(event.currentTarget).addClass('selected');


      } else {
        /* IF OPTION IS ALREADY SLECTED */
        $(event.currentTarget).parent().data('selected', false);
        // $(event.currentTarget).css('background-color', '');
        $(event.currentTarget).removeClass('selected');
      
        this.order.new.tobaccoBrands.list = this.order.new.tobaccoBrands.list.filter(function(el, i) {
          return b.id != el.id;
        });


        if (this.order.new.tobaccoBrands.list.length == 0) {
          this.order.new.tobaccoBrands.picked = false;
        }
        
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
    selectTobaccoFlavor (b, f) {
      /* IF OPTION IS NOT SELECTED */
      if ($(event.currentTarget).parent().data('selected') == false) {
        
        /* IF THERE ARE FEWER THAN 3 SELECTIONS */
        if (this.order.new.tobaccoFlavors.list.length < 3) {
          $(event.currentTarget).parent().data('selected', true);

          let flavor = {};

          this.order.new.tobaccoFlavors.picked = true;

          flavor.id = f.id;
          flavor.name = f.name;
          flavor.brandID = b.id;
          flavor.brandName = b.name;
          flavor.brandPrice = b.price;


          this.order.new.tobaccoFlavors.list.push(flavor);

          // $(event.currentTarget).css('background-color', 'red');
          $(event.currentTarget).addClass('selected');


        } else {
          alert('You can only add 3.');
          return;
        }
  
      } else {
        /* IF OPTION IS ALREADY ACTIVE */
        $(event.currentTarget).parent().data('selected', false);
        $(event.currentTarget).css('background-color', '');
        
        /* let toRemove;
        this.order.new.tobaccoFlavors.list.forEach(function(flavor, index) {
          if (flavor.id == f.id) {
            toRemove = index;
          }
        });
        this.order.new.tobaccoFlavors.list.splice(toRemove, 1); */


        this.order.new.tobaccoFlavors.list = this.order.new.tobaccoFlavors.list.filter(function(el, i) {
          return f.id != el.id;
        });

        if (this.order.new.tobaccoFlavors.list.length == 0) {
          this.order.new.tobaccoFlavors.picked = false;
        }
      
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

    },

    /* REVIEW1 */
    selectionQuantityChanged() {
      this.order.new.quantity = +event.target.value;
    },
    addAnother() {
      this.order.cart.push(this.order.new);
      this.order.new = $.extend(true, {}, this.order.newTemp);
      
      this.$root.stepSequence = [];

      $('.selected').each(function(i, el) {
        el.removeClass('selected');
      });

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
