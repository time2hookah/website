<template>
  <div id='wizard' class='container'>

    <div id="wizard-selection-fruits" v-if='order.fruit.confirmed == 0 && curStep == 0'>

      <div class="text-center">
        <h3 class='step-title bg-secondary'>{{myMessage}}</h3>
      </div>

      <ul class='tile-list row p-0'>
        <li v-for="(f, i) in fruits.list" :key="i" class='col-6' @click="selectFruit(i)">
          <div class='tile p-1'>
            <h5>{{f.name}}</h5>
            <span>{{f.price}}</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="row">
      <div class="col-6 text-center p-1">
        <button class='btn-danger center wp-100'>Back</button>
      </div>
      <div class="col-6 text-center p-1">
        <button class='btn-success center wp-100' @click="next('fruit')">Next</button>
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
      stepList: ['fruit', 'mixStyle', 'mixName', 'mixOptions', 'review'],
      curStep: 0,
      order: {
        fruit: {
          confirmed: false,
          name: '',
          id: ''
        },
        mixType: {
          confirmed: false,
          style: '',
          name: '',
          id: ''
        },
        tobaccoTypes: {
          confirmed: false,
          list: []
        },
        comboOptions: {
          confirmed: false,
          numberOfFlavors: '',
          maxPrice: '',
          mixAmounts: ''
        }
      },
      tobaccoTypes: {
        list: [
          {
            name: 'Starbuzz', 
            price: '5', 
            flavors: [
              {
                list: [
                  {name: 'type1', description: 'description1'},
                  {name: 'type2', description: 'description2'},
                  {name: 'type3', description: 'description3'},
                  {name: 'type4', description: 'description4'},
                  {name: 'type5', description: 'description5'}
                ]
              }
            ]
          },
          {
            name: 'Fumari', 
            price: '7', 
            flavors: [
              {
                list: [
                  {name: 'type1', description: 'description1'},
                  {name: 'type2', description: 'description2'},
                  {name: 'type3', description: 'description3'},
                  {name: 'type4', description: 'description4'},
                  {name: 'type5', description: 'description5'}
                ]
              }
            ]
          },
          {
            name: 'Al-Fakhr', 
            price: '10', 
            flavors: [
              {
                list: [
                  {name: 'type1', description: 'description1'},
                  {name: 'type2', description: 'description2'},
                  {name: 'type3', description: 'description3'},
                  {name: 'type4', description: 'description4'},
                  {name: 'type5', description: 'description5'}
                ]
              }
            ]
          },
          {
            name: 'House', 
            price: '13', 
            flavors: [
              {
                list: [
                  {name: 'type1', description: 'description1'},
                  {name: 'type2', description: 'description2'},
                  {name: 'type3', description: 'description3'},
                  {name: 'type4', description: 'description4'},
                  {name: 'type5', description: 'description5'}
                ]
              }
            ]
          }
        ]
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
          {name: 'Custom', details: 'Create your own mix of 2 or 3 flavors.'},
          {name: 'House Mix', details: 'Special House Mix'}
        ]
      }

    }
  },
  computed: {

  }, 
  mounted () {

  },
  methods: {
    next (cur) {
      if (this.order[cur].name.length == 0 ) {
        alert('please pick an option to continue');
      } else {
        this.order[cur].confirmed = true;

        this.curStep++;
      }
    },
    selectFruit (i) {
      let fruitName = 

      this.order.fruit.id = this.fruits.list[i].id;
      this.order.fruit.name = this.fruits.list[i].name;;
    }
  }
}
</script>

<style>
  #wizard {
    width: 100%;
    min-height: 100px;
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
