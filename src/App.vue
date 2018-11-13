<template>
  <div id="app">
      <div class="main-wrapper">
        <!-- ====================================
        ——— HEADER
        ===================================== -->
        <header id="pageTop" class="header-wrapper">
          <!-- COLOR BAR -->
          <div class="container-fluid color-bar top-fixed clearfix">
            <div class="row">
              <div class="col-sm-1 col-xs-2 bg-color-1">fix bar</div>
              <div class="col-sm-1 col-xs-2 bg-color-2">fix bar</div>
              <div class="col-sm-1 col-xs-2 bg-color-3">fix bar</div>
              <div class="col-sm-1 col-xs-2 bg-color-4">fix bar</div>
              <div class="col-sm-1 col-xs-2 bg-color-5">fix bar</div>
              <div class="col-sm-1 col-xs-2 bg-color-6">fix bar</div>
              <div class="col-sm-1 bg-color-1 hidden-xs">fix bar</div>
              <div class="col-sm-1 bg-color-2 hidden-xs">fix bar</div>
              <div class="col-sm-1 bg-color-3 hidden-xs">fix bar</div>
              <div class="col-sm-1 bg-color-4 hidden-xs">fix bar</div>
              <div class="col-sm-1 bg-color-5 hidden-xs">fix bar</div>
              <div class="col-sm-1 bg-color-6 hidden-xs">fix bar</div>
            </div>
          </div>
        </header>
      </div>
        <!-- TOP INFO BAR -->
        <div class="top-info-bar bg-color-7 hidden-xs">
          <div class="container">
            <div class="row">
              <div class="col-sm-7">
                <ul class="list-inline topList">
                  <li><i class="fa fa-envelope bg-color-1" aria-hidden="true"></i> <a href="mailto:info@yourdomain.com">info@TotTracker.com</a></li>
                  <li><i class="fa fa-phone bg-color-2" aria-hidden="true"></i> +1 234 567 8900</li>
                  <li><i class="fa fa-clock-o bg-color-6" aria-hidden="true"></i> 24 hour posting</li>
                </ul>
              </div>
              <div class="col-sm-5">
                <ul class="list-inline functionList">
                  <!-- <li><i class="fa fa-globe bg-color-4" aria-hidden="true"></i></li>
                  <li class="LanguageList">
                    <select name="guiest_id1" id="guiest_id1" class="select-drop">
                      <option value="0"><i class="fa fa-globe bg-color-4" aria-hidden="true"></i> Language</option>
                      <option value="1">English</option>
                      <option value="2">Spanish</option>
                      <option value="3">Hindi</option>
                    </select>
                  </li> -->
                 <!--  <li><i class="fa fa-unlock-alt bg-color-5" aria-hidden="true"></i> <a href='#loginModal' data-toggle="modal" >Login</a><span>or</span><a href='#/createAccount' data-toggle="modal">Create an account</a></li> -->
                  <li class="cart-dropdown">
                    <!-- <a href="#" class="bg-color-6 shop-cart" >
                      <i class="fa fa-shopping-basket " aria-hidden="true"></i>
                      <span class="badge bg-color-1">3</span>
                    </a> -->
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li><i class="fa fa-shopping-basket " aria-hidden="true"></i>3 items in your cart</li>
                      <li>
                        <a href="single-product.html">
                          <div class="media">
                            <div class="media-left">
                              <img src="assets/img/home/cart/cart-img.png" alt="cart-Image">
                            </div>
                            <div class="media-body">
                              <h4>Barbie Racing Car</h4>
                              <div class="price">
                                <span class="color-1">$50</span>
                              </div>
                              <span class="amount">Qnt: 1</span>
                            </div>
                          </div>
                        </a>
                        <span class="cancel"><i class="fa fa-close" aria-hidden="true"></i></span>
                      </li>
                      <li>
                        <a href="single-product.html">
                          <div class="media">
                            <div class="media-left">
                              <img src="assets/img/home/cart/cart-img.png" alt="cart-Image">
                            </div>
                            <div class="media-body">
                              <h4>Barbie Racing Car</h4>
                              <div class="price">
                                <span class="color-1">$50</span>
                              </div>
                              <span class="amount">Qnt: 1</span>
                            </div>
                          </div>
                        </a>
                        <span class="cancel"><i class="fa fa-close" aria-hidden="true"></i></span>
                      </li>
                      <li>
                        <a href="single-product.html">
                          <div class="media">
                            <div class="media-left">
                              <img src="assets/img/home/cart/cart-img.png" alt="cart-Image">
                            </div>
                            <div class="media-body">
                              <h4>Barbie Racing Car</h4>
                              <div class="price">
                                <span class="color-1">$50</span>
                              </div>
                              <span class="amount">Qnt: 1</span>
                            </div>
                          </div>
                        </a>
                        <span class="cancel"><i class="fa fa-close" aria-hidden="true"></i></span>
                      </li>
                      <li>
                        <span class="cart-total">Subtotal</span>
                        <span class="cart-price">$150</span>
                        <div class="cart-button">
                          <button type="button" class="btn btn-primary" onclick="location.href='checkout-step-1.html';">Checkout</button>
                          <button type="button" class="btn btn-primary" onclick="location.href='cart-page.html';">View Cart</button>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      <nav id="menuBar" class="navbar navbar-default lightHeader" role="navigation">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>  
            <div id="nameHeader">
              <h1 id="nameTitle">Tot Tracker</h1>
            </div>
            <!-- <a class="navbar-brand" href="index.html"><img src="assets/img/logo-school.png" alt="Kidz School"></a> -->
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown singleDrop color-1   active ">
                <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-home bg-color-1" aria-hidden="true"></i> <span class="active">Home</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-left">
                  <li class=" active "><a href="/">Home </a></li>
               <!--    <li class=""><a href="index-v2.html">Kidz Store</a></li>
                  <li class=""><a href="index-v3.html">Kidz Daycare</a></li>
                  <li class=""><a href="index-v4.html">Kidz Fashion</a></li> -->
                </ul>
              </li>
              <li class="dropdown singleDrop color-3 active">
                <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-list-ul bg-color-3" aria-hidden="true"></i> <span class="active">Child</span></a>
                <ul class="dropdown-menu dropdown-menu-left">
                  <li class=" active "><a href="/#/children">Children</a></li>
                </ul>
              </li>
              <li class="dropdown singleDrop color-1 active">
                <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-list-ul bg-color-1" aria-hidden="true"></i> <span class="active">Account</span></a>
                  <ul class="dropdown-menu dropdown-menu-left">
                    <li class="active"><a href="/#/signup">Create Account</a></li>
                  </ul>
              </li>
              <li class="dropdown singleDrop color-4 active">
                <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-unlock-alt bg-color-4" aria-hidden="true"></i><span class="active">Login</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-left">
                  <li class=" active " ><a href="/#/login">Sign In</a></li>
                </ul>
              </li>
              <li class="dropdown singleDrop color-5 active">
                <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-list bg-color-5" aria-hidden="true"></i><span class="active">Log Out</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-left">
                  <li class=" active "><a href="/#/logout">Log Out</a></li>
                </ul>
              </li>
              <!-- <li class="dropdown singleDrop color-6 active">
                <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-gg bg-color-6" aria-hidden="true"></i> <span>Components</span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class=" "><a href="accordion-toggles.html">Accordions &amp; Toggles</a></li>
                  <li class=""><a href="tabs-dropdown.html">Tabs &amp; Dropdowns</a></li>
                  <li class=" "><a href="alert-label-badges.html">Alert-Label-badges</a></li>
                  <li class=" "><a href="progress-bar.html">Progress Bar</a></li>
                  <li class=" "><a href="buttons.html">Buttons</a></li>
                  <li class=" "><a href="forms.html">Forms</a></li>
                  <li class=" "><a href="list-panel.html">Listgroups Panel</a></li>
                  <li class=" "><a href="tooltip-pagination.html">Tooltip Pagination</a></li>
                  <li class=" "><a href="typography.html">Typography</a></li>
                  <li class=" "><a href="responsive-embed.html">Responsive Embed</a></li>
                </ul>
              </li> -->
            </ul>
          </div>

          <div class="cart-dropdown">
            <a href="#" class="bg-color-6 shop-cart">
              <i class="fa fa-shopping-basket " aria-hidden="true"></i>
              <span class="badge bg-color-1">3</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-right">
              <li><i class="fa fa-shopping-basket " aria-hidden="true"></i>3 items in your cart</li>
              <li>
                <a href="single-product.html">
                  <div class="media">
                    <div class="media-left">
                      <img src="assets/img/home/cart/cart-img.png" alt="cart-Image">
                    </div>
                    <div class="media-body">
                      <h4>Barbie Racing Car</h4>
                      <div class="price">
                        <span class="color-1">$50</span>
                      </div>
                      <span class="amount">Qnt: 1</span>
                    </div>
                  </div>
                </a>
                <span class="cancel"><i class="fa fa-close" aria-hidden="true"></i></span>
              </li>
              <li>
                <a href="single-product.html">
                  <div class="media">
                    <div class="media-left">
                      <img src="assets/img/home/cart/cart-img.png" alt="cart-Image">
                    </div>
                    <div class="media-body">
                      <h4>Barbie Racing Car</h4>
                      <div class="price">
                        <span class="color-1">$50</span>
                      </div>
                      <span class="amount">Qnt: 1</span>
                    </div>
                  </div>
                </a>
                <span class="cancel"><i class="fa fa-close" aria-hidden="true"></i></span>
              </li>
              <li>
                <a href="single-product.html">
                  <div class="media">
                    <div class="media-left">
                      <img src="assets/img/home/cart/cart-img.png" alt="cart-Image">
                    </div>
                    <div class="media-body">
                      <h4>Barbie Racing Car</h4>
                      <div class="price">
                        <span class="color-1">$50</span>
                      </div>
                      <span class="amount">Qnt: 1</span>
                    </div>
                  </div>
                </a>
                <span class="cancel"><i class="fa fa-close" aria-hidden="true"></i></span>
              </li>
              <li>
                <span class="cart-total">Subtotal</span>
                <span class="cart-price">$150</span>
                <div class="cart-button">
                  <button type="button" class="btn btn-primary" onclick="location.href='checkout-step-1.html';">Checkout</button>
                  <button type="button" class="btn btn-primary" onclick="location.href='cart-page.html';">View Cart</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
 
        
      <!-- <div class="modal fade customModal" id="loginModal" tabindex="-1" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="panel panel-default formPanel">
              <div class="panel-heading bg-color-1 border-color-1">
                <h3 class="panel-title">Login</h3>
              </div>
              <div class="panel-body">
                <form action="#" method="POST" role="form">
                  <div class="form-group formField">
                    <input type="text" class="form-control" placeholder="User name">
                  </div>
                  <div class="form-group formField">
                    <input type="password" class="form-control" placeholder="Password">
                  </div>
                  <div class="form-group formField">
                    <input type="submit" class="btn btn-primary btn-block bg-color-3 border-color-3" value="Log in">
                  </div>
                  <div class="form-group formField">
                    <p class="help-block"><a href="#">Forgot password?</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
<script type="application/javascript">
        import axios from "axios";

        export default {
          template: "#loginModal",
          data: function() {
            return {
              email: "",
              password: "",
              errors: []
            };
          },
          methods: {
            submit: function() {
              var params = {
                email: this.email,
                password: this.password
              };
              axios
                .post("http://localhost:3000/api/sessions", params)
                .then(response => {
                  axios.defaults.headers.common["Authorization"] =
                    "Bearer " + response.data.jwt;
                  localStorage.setItem("jwt", response.data.jwt);
                  this.$router.push("/");
                })
                .catch(error => {
                  this.errors = ["Invalid email or password."];
                  this.email = "";
                  this.password = "";
                });
            }
          }
        };
        </script> -->



    </header>

    <router-view/>
      <footer>
        <!-- COLOR BAR -->
        <div class="container-fluid color-bar clearfix">
          <div class="row">
            <div class="col-sm-1 col-xs-2 bg-color-1">fix bar</div>
            <div class="col-sm-1 col-xs-2 bg-color-2">fix bar</div>
            <div class="col-sm-1 col-xs-2 bg-color-3">fix bar</div>
            <div class="col-sm-1 col-xs-2 bg-color-4">fix bar</div>
            <div class="col-sm-1 col-xs-2 bg-color-5">fix bar</div>
            <div class="col-sm-1 col-xs-2 bg-color-6">fix bar</div>
            <div class="col-sm-1 bg-color-1 hidden-xs">fix bar</div>
            <div class="col-sm-1 bg-color-2 hidden-xs">fix bar</div>
            <div class="col-sm-1 bg-color-3 hidden-xs">fix bar</div>
            <div class="col-sm-1 bg-color-4 hidden-xs">fix bar</div>
            <div class="col-sm-1 bg-color-5 hidden-xs">fix bar</div>
            <div class="col-sm-1 bg-color-6 hidden-xs">fix bar</div>
          </div>
        </div>
          <div class="copyRight clearfix">
            <div class="container">
              <div class="row">
                <div class="col-sm-5 col-sm-push-7 col-xs-12">
                  <ul class="list-inline">
                    <li><a href="#" class="bg-color-1"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#" class="bg-color-2"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#" class="bg-color-3"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li><a href="#" class="bg-color-4"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                    <li><a href="#" class="bg-color-5"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
                <div class="col-sm-7 col-sm-pull-5 col-xs-12">
                  <div class="copyRightText">
                    <p>© 2018 Copyright Hanson Productions <a href="https://www.iamabdus.com/"></a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </footer>
  </div>  
</template>

<style>
    /*div.company_name {
                    font-size: 25px;
                    padding-top: 40px;
                    font-style: serif;
                    font-color: red;
                    border-color: green;
                    border-width: 20px;
                    width: 700px;
                    text-shadow: 4px 4px 0px rgba(150, 150, 153, 1);
                    */
    
    div.navbar-header {
              /*  background-color: rgb(132, 190, 214);*/
                font-size: 150px;
                padding-left: 15px;
                padding-right: 15px;
                padding-top: 10px;
               /* padding-bottom: 10px;*/
                /*border: double;
                background: rgb(181, 213, 106);
                border-color: rgb(181, 213, 106);*/
                font-style: serif;
    }
    .progress-bar-default {
  background-color: #777777 !important;
}
      #nameHeader{
                text-shadow: 4px 4px 0px rgba(234, 112, 102, 0.55);
                font-family: "Times New Roman", Times, serif;
                width: 350px;
                height: 85px;
                font-size: 50px;
  }
  #nameTitle {
              font-size: 50px;
              color: rgb(234, 112, 102);
  }

  

  
    
</style>
