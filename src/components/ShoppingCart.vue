<template>
  <!-- Shopping Cart -->
  <div id='services-shoppingCart' class="btn-group">
    <!-- <button type="button" class="dropdown-toggle shoppingCart-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> -->
    <span 
      id='shoppingCart-btn' 
      class="fa-stack fa-5x has-badge" 
      :data-count="orderItemCount"
      @click="toggleCartDropdown"
    >
      <i class="fa fa-circle fa-stack-1x" ></i>
      <i id="shoppingCart-icon" class="fas fa-stack-2x" :class="orderItemCount ? 'fa-cart-plus': 'fa-shopping-cart'" ></i>
    </span>

    <!-- Dropdown -->
    <!-- </button> -->
    <div id='shoppingCart-dropdown'>
      <h5 class='text-center'>Shopping Tray</h5>
      <hr>
      <!-- <ul id='shoppingCart-list'>
        <li v-if="!orderItemCount">No Items Yet</li>
        <li v-for="(item, i) in this.cart" :key='i'>
          <span>{{item.hookahHeadType.name}} (${{ item.price }}) X {{item.quantity}} = {{ item.price * item.quantity}}</span>
        </li>
      </ul> -->
      <table id='shoppingCart-list' class='table-sm'>
            <tr v-if="!orderItemCount">No Items Yet</tr>
            <tr v-for="(item, i) in this.cart" :key='i'>
              <td>{{item.mixType.name}}</td>
              <td>{{item.hookahHeadType.name}}</td>
              <td> | ${{ item.price }}</td>
              <td>X {{ item.quantity }}</td>
              <!-- <td>= {{ item.price * item.quantity}}</td> -->
              <!-- <td><i class="fas fa-times-circle"></i></td> -->
            </tr>
          </table>

      <div class='mt-2'>
        <i class="fas fa-info-circle"></i> - Hover for more info
      </div>

      <!-- <button id='shoppingCart-goBtn' class='btn btn-primary' data-placement="top" title="You must select at least one service to continue.">
        GO
      </button> -->
    </div>
  </div>
</template>

<script>
  /* ON START */


  /* INITIALIZATIONS */
  $('[data-toggle="tooltip"]').tooltip({
      // container: 'body'
  });

  $('#shoppingCart-goBtn').tooltip({
      trigger: 'manual',
      template:   '<div class="tooltip" role="tooltip">' +
                      '<div class="tooltip-arrow tooltip-arrow-danger "></div>' +
                      '<div class="tooltip-inner tooltip-inner-danger"></div>' +
                  '</div>'
  });



  /* VARIABLES */

  /* show addon items */
  /* $('#shoppingCart-list').on('click', '.shoppingCart-item-name i', function() {
      var service = $(this).data('service');
      var addons = vueApp.$root.shoppingTray[service];

      debugger
  }); */

  /* remove tray items */
  $('#shoppingCart-list').on('click', '.shoppingCart-item-remove', function(e) {
      // remove the selected element from the shoppingTray array and redraw
      // var item = $(e.currentTarget).parent().text();
      var item = $(e.currentTarget).parents('.row').eq(0).find('h6.shoppingCart-item-name').text().trim();
      // var itemIndex = vueApp.$root.shoppingTray.indexOf(item);

      vueApp.$delete(vueApp.$root.shoppingTray, item);

      // vueApp.$root.shoppingTray.splice(itemIndex, 1);
      listCartItems();

      // decrement counter on shopping crt
      var newCount = +$('#shoppingCart-btn').attr('data-count') - 1;
      $('#shoppingCart-btn').attr('data-count', newCount);
  });


  /* FUNCTIONS */
  function listCartItems() {
    $('#shoppingCart-list').html('');
    var removeBtn = '<i class="icon-gradient mdi mdi-close-circle shoppingCart-item-remove"></i>';
    var style_h6 = 'style="word-break: break-word"';
    var style_li = 'style="border-bottom: solid 1px #9b9b9b"';
    var liList = '';




    // vueApp.$root.shoppingTray.forEach(function(el, i) {
    for (var i in vueApp.$root.shoppingTray) {
        var el = vueApp.$root.shoppingTray[i];
        var addonsString = el.addons.join(', <br>');


        liList +=   '<li ' + style_li + '>' +
                        '<div class="row m-0" style="display: flex; ">' +
                            '<div class="col-sm-9" style="box-sizing: content-box; ">' +
                                '<h6 class= "shoppingCart-item-name" '+ style_h6 +'>' +
                                    el.name +
                                    (el.addons.length ? ' <i class="fas fa-info-circle infoCircle" data-service="'+ el.name +'" data-toggle="popover" data-trigger="hover" data-placement="auto" title="Add-Ons" data-content="'+ addonsString +'"></i>' : '') +
                                '</h6>' +

                            '</div>' +
                            '<div class="col-sm-2" style="">' + removeBtn + '</div>' +
                        '</div>' +
                    '</li>';
    }

    $('#shoppingCart-list').append(liList);

    if ( Object.keys(vueApp.$root.shoppingTray).length ) {
        $('#shoppingCart-icon').attr('src', 'src/assets/logos/tray-full-v4.png');
    } else {
        $('#shoppingCart-icon').attr('src', 'src/assets/logos/tray-empty.png');
    }

    $('i.infoCircle[data-toggle="popover"]').popover({
        container: 'body',
        html: true
    });
  }


  export default {
    name: "ShoppingCart",
    props: ['cart'],
    methods: {
      toggleCartDropdown () {
        $('#shoppingCart-dropdown').toggle();
      }
    },
    computed: {
      orderItemCount() {
        return this.cart.length;
      }, 
    }
  }
</script>


<style>
#services-shoppingCart {
  position: absolute;
}

#shoppingCart-btn {
  position: fixed;
  cursor: pointer;
  bottom: 20px;
  left: 5px;
  font-size: 50px;
  padding: 15px 20px 15px 15px;
  /* background: white;
  border-radius: 50%; */
  z-index: 1000;
}

#shoppingCart-btn i.fa-circle {
  font-style: normal;
  background: #9b9b9b;
  border-radius: 50%;
  opacity: .3;
}

i.fa-circle::before {
  opacity: 0;
}

#shoppingCart-icon {
  z-index: 10;
  font-size: 65px;
  top: 35px;
}

#shoppingCart-btn.drop-hover #shoppingCart-icon {
  top: 75px;
}

#shoppingCart-dropdown {
  display: none;
  position: fixed !important;
  left: 5px !important;
  bottom: 120px !important;
  width: auto;
  min-height: 150px;
  padding: 10px;
  background: white;
  border-radius: 5px;
  border: 1px solid #9b9b9b;
  z-index: 1000;
}

#shoppingCart-dropdown hr {
  margin: 10px 0;
}

#shoppingCart-list {
  text-align: left;
  overflow-y: auto;
  overflow-x: hidden;
  list-style: none;
  margin-left: 20px;
}

#shoppingCart-list > li {
  position: relative;
  padding: 5px 0;
}

#shoppingCart-goBtn {
  width: 100%;
}

.shoppingCart-item-name {
  width: max-content;
}

.shoppingCart-item-remove {
  position: absolute;
  right: 10px;
  font-size: 26px;
  cursor: pointer;
}

.fa-stack[data-count]::after{
  position: absolute;
  right: 0%;
  top: 1%;
  content:  attr(data-count);
  font-size: 30%;
  padding: .6em;
  border-radius: 999px;
  line-height: .75em;
  color:  white;
  background: rgba(255,0,0,.85);
  text-align: center;
  min-width: 2em;
  font-weight: bold;
}

.drag {
  position: relative;
  width: 30px;
  margin: 0 15px;
  top: 20px;
  color: black;
  font-size: 30px;
  text-align: center;
  z-index: 100;
  float: left;
  cursor: pointer;
}


.drop-active-blue i.fa {
  /* font-size: 90px !important; */
  background: linear-gradient(to bottom, #1ebbf0 15%, #34d9b6 120%) !important;

}

.drop-active-red i.fa {
  /* font-size: 90px !important; */
  background: linear-gradient(to bottom, #1ebbf0 15%, #d93434 75%) !important;

}

.drop-hover {
  font-size: 70px !important;
  bottom: 25px !important;
  left: 10px !important;
}

</style>