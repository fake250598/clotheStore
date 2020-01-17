import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    (function($) {

      //Navigation
    
        var app = (function() {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
          body = document.querySelector(".body");
          menu = document.querySelector(".menu-icon");
          menuItems = document.querySelectorAll(".nav__list-item");
          applyListeners();
        };
        var applyListeners = function applyListeners() {
          menu.addEventListener("click", function() {
            return toggleClass(body, "nav-active");
          });
        };
        var toggleClass = function toggleClass(element, stringClass) {
          if (element.classList.contains(stringClass))
            element.classList.remove(stringClass);
          else element.classList.add(stringClass);
        };
        init();
        })();
    
      })(jQuery);
      jQuery(document).ready(function($) {
        //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
        var $L = 1200,
          $menu_navigation = $("#main-nav"),
          $cart_trigger = $("#cd-cart-trigger"),
          $lateral_cart = $("#cd-cart"),
          $shadow_layer = $("#cd-shadow-layer");
      
        //open cart
        $cart_trigger.on("click", function(event) {
          event.preventDefault();
          //close lateral menu (if it's open)
          $menu_navigation.removeClass("speed-in");
          toggle_panel_visibility($lateral_cart, $shadow_layer, $("body"));
        });
      
        //close lateral cart or lateral menu
        $shadow_layer.on("click", function() {
          $lateral_cart.removeClass("speed-in");
          $menu_navigation.removeClass("speed-in");
          $shadow_layer.removeClass("is-visible");
          $("body").removeClass("overflow-hidden");
        });
      
      function toggle_panel_visibility($lateral_panel, $background_layer, $body) {
        if ($lateral_panel.hasClass("speed-in")) {
          $lateral_panel.removeClass("speed-in");
          $background_layer.removeClass("is-visible");
          $body.removeClass("overflow-hidden");
        } else {
          $lateral_panel.addClass("speed-in");
          $background_layer.addClass("is-visible");
          $body.addClass("overflow-hidden");
        }
      }
      
      function move_navigation($navigation, $MQ) {
        if ($(window).width() >= $MQ) {
          $navigation.detach();
          $navigation.appendTo("header");
        } else {
          $navigation.detach();
          $navigation.insertAfter("header");
        }
      }
      
    
      }
  
  }
}
