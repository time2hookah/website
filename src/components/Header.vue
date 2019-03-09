<template>
  <!-- ========== HEADER ========== 
    removed from header tag: 
        u-header- -abs-top-md
  -->
  <header
    id="header"
    class="u-header u-header--show-hide-md "
    data-header-fix-moment="500"
    data-header-fix-effect="slide"
  >
    <div class="u-header__section">
      <!-- Topbar -->
      <div class="container u-header__hide-content pt-2">
        <div class="d-flex align-items-center">
          <!-- Language -->
          <div class="position-relative">
            <a
              id="languageDropdownInvoker"
              class="dropdown-nav-link dropdown-toggle d-flex align-items-center"
              href="javascript:;"
              role="button"
              aria-controls="languageDropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-unfold-event="hover"
              data-unfold-target="#languageDropdown"
              data-unfold-type="css-animation"
              data-unfold-duration="300"
              data-unfold-delay="300"
              data-unfold-hide-on-scroll="true"
              data-unfold-animation-in="slideInUp"
              data-unfold-animation-out="fadeOut"
            >
              <img
                class="dropdown-item-icon"
                src="assets/vendor/flag-icon-css/flags/4x3/us.svg"
                alt="SVG"
              />
              <span class="d-inline-block d-sm-none">US</span>
              <span class="d-none d-sm-inline-block">United States</span>
            </a>

            <div
              id="languageDropdown"
              class="dropdown-menu dropdown-unfold"
              aria-labelledby="languageDropdownInvoker"
            >
              <a class="dropdown-item active" href="#">English</a>
              <a class="dropdown-item" href="#">Deutsch</a>
              <a class="dropdown-item" href="#">Español‎</a>
            </div>
          </div>
          <!-- End Language -->
          <div class="ml-auto">
            <!-- Jump To -->
            <div class="d-inline-block d-sm-none position-relative mr-2">
              <a
                id="jumpToDropdownInvoker"
                class="dropdown-nav-link dropdown-toggle d-flex align-items-center"
                href="javascript:;"
                role="button"
                aria-controls="jumpToDropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-unfold-event="hover"
                data-unfold-target="#jumpToDropdown"
                data-unfold-type="css-animation"
                data-unfold-duration="300"
                data-unfold-delay="300"
                data-unfold-hide-on-scroll="true"
                data-unfold-animation-in="slideInUp"
                data-unfold-animation-out="fadeOut"
                >Jump to</a
              >

              <div
                id="jumpToDropdown"
                class="dropdown-menu dropdown-unfold"
                aria-labelledby="jumpToDropdownInvoker"
              >
                <a class="dropdown-item" href="html/pages/help.html">Help</a>
                <a class="dropdown-item" href="html/pages/contacts-agency.html"
                  >Contacts</a
                >
              </div>
            </div>
            <!-- End Jump To -->
            <!-- Links -->
            <div class="d-none d-sm-inline-block ml-sm-auto">
              <ul class="list-inline mb-0">
                <li class="list-inline-item mr-0">
                  <a class="u-header__navbar-link" href="html/pages/help.html"
                    >Help</a
                  >
                </li>
                <li class="list-inline-item mr-0">
                  <a
                    class="u-header__navbar-link"
                    href="html/pages/contacts-agency.html"
                    >Contacts</a
                  >
                </li>
              </ul>
            </div>
            <!-- End Links -->
          </div>

          <ul class="list-inline ml-2 mb-0">
            <!-- Search -->
            <li class="list-inline-item">
              <a
                class="btn btn-xs btn-icon btn-text-secondary"
                href="javascript:;"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                aria-controls="searchPushTop"
                data-unfold-type="jquery-slide"
                data-unfold-target="#searchPushTop"
              >
                <span class="fas fa-search btn-icon__inner"></span>
              </a>
            </li>
            <!-- End Search -->
            <!-- Shopping Cart -->
            <li class="list-inline-item position-relative">
              <a
                id="shoppingCartDropdownInvoker"
                class="btn btn-xs btn-icon btn-text-secondary"
                href="javascript:;"
                role="button"
                aria-controls="shoppingCartDropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-unfold-event="hover"
                data-unfold-target="#shoppingCartDropdown"
                data-unfold-type="css-animation"
                data-unfold-duration="300"
                data-unfold-delay="300"
                data-unfold-hide-on-scroll="true"
                data-unfold-animation-in="slideInUp"
                data-unfold-animation-out="fadeOut"
              >
                <span class="fas fa-shopping-cart btn-icon__inner"></span>
              </a>

              <div
                id="shoppingCartDropdown"
                class="dropdown-menu dropdown-unfold dropdown-menu-right text-center p-7"
                aria-labelledby="shoppingCartDropdownInvoker"
                style="min-width: 250px;"
              >
                <span class="btn btn-icon btn-soft-primary rounded-circle mb-3">
                  <span class="fas fa-shopping-basket btn-icon__inner"></span>
                </span>
                <span class="d-block">Your Cart is Empty</span>
              </div>
            </li>
            <!-- End Shopping Cart -->
            <!-- Account Login -->
            <li class="list-inline-item">
              <!-- Account Sidebar Toggle Button -->
              <a
                id="sidebarNavToggler"
                class="btn btn-xs btn-icon btn-text-secondary"
                href="javascript:;"
                role="button"
                aria-controls="sidebarContent"
                aria-haspopup="true"
                aria-expanded="false"
                data-unfold-event="click"
                data-unfold-hide-on-scroll="false"
                data-unfold-target="#sidebarContent"
                data-unfold-type="css-animation"
                data-unfold-animation-in="fadeInRight"
                data-unfold-animation-out="fadeOutRight"
                data-unfold-duration="500"
              >
                <span
                  class="fas fa-user-circle btn-icon__inner font-size-1"
                ></span>
              </a>
              <!-- End Account Sidebar Toggle Button -->
            </li>
            <!-- End Account Login -->
          </ul>
        </div>
      </div>
      <!-- End Topbar -->
      <div id="logoAndNav" class="container">
        <!-- Nav -->
        <nav
          class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space"
        >
          <!-- Logo -->
          <a
            class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center"
            href="/"
            aria-label="Front"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="46px"
              height="46px"
              viewBox="0 0 46 46"
              xml:space="preserve"
              style="margin-bottom: 0;"
            >
              <path
                fill="#3F7DE0"
                opacity=".65"
                d="M23,41L23,41c-9.9,0-18-8-18-18v0c0-9.9,8-18,18-18h11.3C38,5,41,8,41,11.7V23C41,32.9,32.9,41,23,41z"
              ></path>
              <path
                class="fill-info"
                opacity=".5"
                d="M28,35.9L28,35.9c-9.9,0-18-8-18-18v0c0-9.9,8-18,18-18l11.3,0C43,0,46,3,46,6.6V18C46,27.9,38,35.9,28,35.9z"
              ></path>
              <path
                class="fill-primary"
                opacity=".7"
                d="M18,46L18,46C8,46,0,38,0,28v0c0-9.9,8-18,18-18h11.3c3.7,0,6.6,3,6.6,6.6V28C35.9,38,27.9,46,18,46z"
              ></path>
              <path
                class="fill-white"
                d="M17.4,34V18.3h10.2v2.9h-6.4v3.4h4.8v2.9h-4.8V34H17.4z"
              ></path>
            </svg>
            <span class="u-header__navbar-brand-text">Front</span>
          </a>
          <!-- End Logo -->
          <!-- Responsive Toggle Button -->
          <button
            type="button"
            class="navbar-toggler btn u-hamburger"
            aria-label="Toggle navigation"
            aria-expanded="false"
            aria-controls="navBar"
            data-toggle="collapse"
            data-target="#navBar"
          >
            <span id="hamburgerTrigger" class="u-hamburger__box">
              <span class="u-hamburger__inner"></span>
            </span>
          </button>
          <!-- End Responsive Toggle Button -->
          <!-- Navigation -->
          <div
            id="navBar"
            class="col-md-6 collapse navbar-collapse u-header__navbar-collapse"
          >
            <ul class="navbar-nav u-header__navbar-nav">
              <li
                class="nav-item hs-has-mega-menu"
                data-event="hover"
                data-animation-in="slideInUp"
                data-animation-out="fadeOut"
                data-max-width="600px"
                data-position="right"
              >
                <router-link to="/" class="nav-link u-header__nav-link"
                  >Home</router-link
                >
              </li>

              <li
                class="nav-item hs-has-mega-menu"
                data-event="hover"
                data-animation-in="slideInUp"
                data-animation-out="fadeOut"
                data-max-width="600px"
                data-position="right"
              >
                <router-link to="/about" class="nav-link u-header__nav-link"
                  >About</router-link
                >
              </li>

              <li
                class="nav-item hs-has-mega-menu"
                data-event="hover"
                data-animation-in="slideInUp"
                data-animation-out="fadeOut"
                data-max-width="600px"
                data-position="right"
              >
                <router-link to="/signup" class="nav-link u-header__nav-link"
                  >Sign Up</router-link
                >
              </li>

              <li
                class="nav-item hs-has-mega-menu"
                data-event="hover"
                data-animation-in="slideInUp"
                data-animation-out="fadeOut"
                data-max-width="600px"
                data-position="right"
              >
                <router-link to="/login" class="nav-link u-header__nav-link"
                  >Log in</router-link
                >
              </li>

              <li
                class="nav-item hs-has-mega-menu"
                data-event="hover"
                data-animation-in="slideInUp"
                data-animation-out="fadeOut"
                data-max-width="600px"
                data-position="right"
              >
                <router-link to="/wizard" class="nav-link u-header__nav-link"
                  >Wizard</router-link
                >
              </li>
            </ul>
          </div>
          <!-- End Navigation -->
        </nav>
        <!-- End Nav -->
      </div>
    </div>
  </header>
  <!-- ========== END HEADER ========== -->
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
#navBar {
  margin-left: auto;
}

.navbar-nav {
  flex-direction: row;
  justify-content: space-around;
}
</style>
