<template>
  <div id='wizard' class='container'>

    <!-- FRUIT SELECTION -->
    <div id="wizard-selection-fruits" class='wizard-selection'>  <!-- v-if='order.fruit.confirmed == 0 && curStep == 0' -->

      <div class="text-center">
        <h3 class='step-title bg-secondary'>Please select the fruit.</h3>
      </div>

      <ul class='tile-list row p-0'>
        <li v-for="(el, i) in fruits.list" :key="i" class='col-6' >
          <div class='tile p-1' @click="selectFruit(i)">
            <h5 class='text-center'>{{el.name}}</h5>
            <span>{{el.price}}</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- MIX TYPE SELECTION -->
    <div id="wizard-selection-mixTypes" class='wizard-selection'>    <!-- v-if='order.mixType.confirmed == 0 && curStep == 1' -->

      <div class="text-center">
        <h3 class='step-title bg-secondary'>Please select the mix type.</h3>
      </div>

      <ul class='tile-list row p-0'>
        <li v-for="(el, i) in mixTypes.list" :key="i" class='col-6' >
          <div class='tile p-1' @click="selectMixType(i)">
            <h5 class='text-center'>{{el.name}}</h5>
            <span>{{el.price}}</span>
          </div>
        </li>
      </ul>
    </div>
    
    <!-- HOUSE MIX SELECTION -->
    <div id="wizard-selection-houseMixes" class='wizard-selection'>    <!-- v-if='order.mixType.confirmed == 0 && curStep == 1' -->

      <div class="text-center">
        <h3 class='step-title bg-secondary'>Please select the house mix.</h3>
      </div>

      <ul class='tile-list row p-0'>
        <li v-for="(el, i) in houseMixes.list" :key="i" class='col-6' >
          <div class='tile p-1' @click="selectHouseMix(i)">
            <h5 class='text-center'>{{el.name}}</h5>
            <span>{{el.price}}</span>
          </div>
        </li>
      </ul>
    </div>
    
    <!-- TOBACCO BRAND SELECTION -->
    <div id="wizard-selection-tobaccoBrands" class='wizard-selection'>    <!-- v-if='order.mixType.confirmed == 0 && curStep == 1' -->

      <div class="text-center">
        <h3 class='step-title bg-secondary'>Please select the brands.</h3>
        <p class='text-left'>All flavors of the brands you choose will be available to choose from; you will be charged the higher cost for all.</p>
      </div>

      <ul class='tile-list row p-0'>
        <li v-for="(el, i) in tobaccoBrands.list" :key="i" class='col-6' >
          <div class='tile p-1' @click="selectTobaccoBrand(i)">
            <h5 class='text-center'>{{el.name}}</h5>
            <span>{{el.price}}</span>
          </div>
        </li>
      </ul>

      <div class="row">
        <div class="col-6 text-center p-1">
          <button class='btn-secondary center wp-100' @click="removeTobaccoBrand()">Remove</button>
        </div>
        <div class="col-6 text-center p-1">
          <button class='btn- primary wp-100' @click="addTobaccoBrand()">Add</button>
        </div>
      </div>

    </div>
    
    <!-- TOBACCO FLAVOR SELECTION -->
    <div id="wizard-selection-tobaccoFlavors" class='wizard-selection'>    <!-- v-if='order.mixType.confirmed == 0 && curStep == 1' -->

      <div class="text-center">
        <h3 class='step-title bg-secondary'>Please select up to 3 flavors.</h3>
      </div>

      <ul v-for="(b, i) in tobaccoBrands.list" :key="i" class='tile-list row p-0 text-center' v-if="brandIsOrdered(b)">
        <!-- <div  class="row"> -->

          <h5 class='text-center col-12'>{{b.name}} - {{b.price}}</h5>

          <li v-for="(f, i) in b.flavors.list" :key="i" class='col-6'>
            <div class='tile p-1' @click="selectTobaccoFlavor(b, f)">
              <h5 class='text-center'>{{f.name}}</h5>
              <span>{{f.price}}</span>
            </div>
          </li>

        <!-- </div> -->
      </ul>

      <div class="row">
        <div class="col-6 text-center p-1">
          <button class='btn-secondary center wp-100' @click="removeTobaccoFlavor()">Remove</button>
        </div>
        <div class="col-6 text-center p-1">
          <button class='btn- primary wp-100' @click="addTobaccoFlavor()">Add</button>
        </div>
      </div>

    </div>

    <div class="row">
      <div class="col-6 text-center p-1">
        <button class='btn-danger center wp-100' @click="back()">Back</button>
      </div>
      <div class="col-6 text-center p-1">
        <button class='btn-success center wp-100' @click="next()">Next</button>
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
  name: 'wizard',
  data () {
    return {
      myMessage: 'Wizard\'s Message888',
      stepList: ['fruit', 'mixType', 'houseMix', 'tobaccoBrands', 'tobbaccoFlavors', 'review'],
      curStep: 0,
      nextStep: 1,

      addTobaccoBrandActive: false,
      removeTobaccoBrandActive: false,
      
      addTobaccoFlavorActive: false,
      removeTobaccoFlavorActive: false,

      order: {
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
          mixAmounts: ''
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

  }, 
  mounted: function () {
    $('#wizard-selection-fruits').show();
  },
  methods: {
    next () {
      let cur = this.stepList[this.curStep];
      
      /* CONFIRM or REJECT */
      if (this.order[cur].picked == false ) {
        alert('Please pick an option to continue');
      } else {
        this.order[cur].confirmed = true;
      }

      /* HIDE ALL SELECITONS */
      $('.wizard-selection').each(function(i, el) {
        $(el).hide();
      });

      /* DISPLAY APPROPRIATE SELECTION */
      if (this.nextStep == 0) {
        $('#wizard-selection-fruits').show();
        this.curStep = 0
      } else if (this.nextStep == 1) {
        $('#wizard-selection-mixTypes').show();
        this.curStep = 1
      } else if (this.nextStep == 2) {
        $('#wizard-selection-houseMixes').show();
        this.curStep = 2
      } else if (this.nextStep == 3) {
        $('#wizard-selection-tobaccoBrands').show();
        this.curStep = 3
        this.nextStep = 4;
      } else if (this.nextStep == 4) {
        $('#wizard-selection-tobaccoFlavors').show();
        this.curStep = 4
        this.nextStep = 5;
      } else if (this.nextStep == 5) {
        $('#wizard-selection-customMix').show();
        this.curStep = 5;
        this.nextStep = 6;
      } else if (this.nextStep == 8) {
        $('#wizard-selection-revie').show();
        this.curStep = 8;
      }

    },
    back() {
      this.$router.go(-1);
    },
    selectFruit (i) {
      this.order.fruit.picked = true;
      this.order.fruit.id = this.fruits.list[i].id;
      this.order.fruit.name = this.fruits.list[i].name;

      this.nextStep = 1;

      this.clearTiles(); 
      $(event.currentTarget).css('background-color', 'red');
    },
    selectMixType (i) {
      this.order.mixType.picked = true;
      this.order.mixType.id = this.mixTypes.list[i].id;
      this.order.mixType.name = this.mixTypes.list[i].name;

      if (this.order.mixType.name == 'house') {
        this.nextStep = 2;
      } else {
        this.nextStep = 3;
      }

      this.clearTiles();
      $(event.currentTarget).css('background-color', 'red');

    },
    selectHouseMix (i) {
      this.order.houseMix.picked = true;
      this.order.houseMix.id = this.houseMixes.list[i].id;
      this.order.houseMix.name = this.houseMixes.list[i].name;

      if (this.order.houseMix.name == 'house') {
        this.nextStep = 2;
      } else {
        this.nextStep = 3;
      }

      this.clearTiles();
      $(event.currentTarget).css('background-color', 'red');

    },
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

        this.order.tobaccoBrands.picked = true;

        brand.id = this.tobaccoBrands.list[i].id;
        brand.name = this.tobaccoBrands.list[i].name;

        this.order.tobaccoBrands.list.push(brand);

        $(event.currentTarget).css('background-color', 'red');

        this.addTobaccoBrandActive = false;
      } else if (this.removeTobaccoBrandActive) {
        /* IF REMOVAL IS ACTIVE */
        
        let toRemove;
        this.order.tobaccoBrands.list.forEach(function(tobacco, index) {
          if (tobacco.id == i) {
            toRemove = index;
          }
        });
        this.order.tobaccoBrands.list.splice(toRemove, 1);

        $(event.currentTarget).css('background-color', '');

        if (this.order.tobaccoBrands.list.length == 0) {
          this.order.tobaccoBrands.picked = false;
        }
        
        this.removeTobaccoBrandActive = false;
      }
    },
    addTobaccoFlavor () {
      if (this.order.tobaccoFlavors.list.length < 3) {
        this.addTobaccoFlavorActive = true;
      } else {
        alert('You can only add 3.');
      }
    },
    removeTobaccoFlavor () {
      this.removeTobaccoFlavorActive = true;
    },
    selectTobaccoFlavor (b, f) {
      if (this.addTobaccoFlavorActive) {
        /* IF ADDING IS ACTIVE */
        let flavor = {};

        this.order.tobaccoFlavors.picked = true;

        flavor.id = this.tobaccoBrands.list[b].flavors[f].id;
        flavor.name = this.tobaccoBrands.list[b].flavors[f].name;

        this.order.tobaccoFlavors.list.push(brand);

        $(event.currentTarget).css('background-color', 'red');

        this.addTobaccoFlavorActive = false;
      } else if (this.removeTobaccoFlavorActive) {
        /* IF REMOVAL IS ACTIVE */
        
        let toRemove;
        this.order.tobaccoFlavors.list.forEach(function(flavor, index) {
          if (flavor.id == f) {
            toRemove = index;
          }
        });
        this.order.tobaccoFlavors.list.splice(toRemove, 1);

        $(event.currentTarget).css('background-color', '');

        if (this.order.tobaccoFlavors.list.length == 0) {
          this.order.tobaccoFlavors.picked = false;
        }
        
        this.removeTobaccoFlavorActive = false;
      }
    },
    brandIsOrdered(b) {
      let test = false;

      this.order.tobaccoBrands.list.forEach(function(el) {
        if (b.id == el.id) {
          test = true;
        }
      });

      return test;
    },
    clearTiles () {
      $('.tile').each(function(i, el) {
        $(el).css('background-color', '');
      });
    }
  }
}
</script>

<style>
  #wizard {
    width: 100%;
    min-height: 100px;
  }

  .wizard-selection {
    display: none;
  }

  .tile {
    border: black solid 1px;
    /* padding: 10px; */
    margin: 5px;
    cursor: pointer;
  }

  .tile-list {
    list-style-type: none;
  }
</style>
