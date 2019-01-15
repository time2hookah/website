import Vue from 'vue';
// import config from 'config';

export default Vue.mixin({
  data: function () {
    return {
      loggedIn: false,
      localhostName: 'http://localhost:8080/',
      localserverName: 'http://localhost:3000/',
      apiDomain: 'http://shirak-api.worktray.com/api/',
    };
  },
  methods: {
    /* capitalize first letter */
    capFL: function (str) { return str.charAt(0).toUpperCase() + str.slice(1); },
    /* removes trailing s if there is one */
    removePlural: function (str) { return str.charAt(str.length - 1) == 's' ? str.slice(0, -1) : str; },
    /* goes to previous path in the router history */
    goBack: function () { window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/'); },

    /* refreshes contents of a generic modal, toggles it open and  */
    openCrudModal: function (displayName, formPath, defName, id) {
      /* var modalContent = require('src/components/ResourceCRUD').default; */
      /* eslint-disable */
      $('#crudModal').html(
        "<div class='modal-dialog modal-lg' role='document'>" +
        "<div class='modal-content'>" +
        "<div class='modal-header'>" +
        "<h5 class='modal-title'>Modal title</h5>" +
        "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
        "<span aria-hidden='true'>&times;</span>" +
        "</button>" +
        "</div>" +
        "<div id='crudModal-body' class='modal-body'>" +
        "<p>Modal body text goes here.</p>" +
        "</div>" +
        "<div class='modal-footer'>" +
        "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>" +
        "<button type='button' class='btn btn-primary'>Save changes</button>" +
        "</div>" +
        "</div>" +
        "</div>"
      );
      /* eslint-enable */

      $('#crudModal').modal('toggle');

      // console.log({formPath, defName, id, modalContent});

      var modal = new Vue({
        el: '#crudModal .modal-body',
        data: function () {
          return {
            displayName: displayName,
            formPath: formPath,
            defName: defName,
            id: +id
          };
        },
        render: function (h) {
          return h(modalContent, {
            props: {
              displayName_prop: this.displayName,
              formPath_prop: this.formPath,
              defName_prop: this.defName,
              resourceID_prop: this.id
            }
          });
        }
      });

      $('#crudModal').on('hidden.bs.modal', function (e) {
        modal.$destroy();
      });

    }
  }
});

export const crud = {
  methods: {
    // will be responsible for opening a modal with propper crud item inside, ready to add a new item of that table
    newItem: function (data) {
      // console.log({data});

    },
    phoneCrud: function (table, id) {

    },
    addressCrud: function (table, id) {

    }
  }
};