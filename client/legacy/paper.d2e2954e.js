import { X as styleInject, Y as _inherits, Z as _classCallCheck, i as init, s as safe_not_equal, $ as _assertThisInitialized, d as dispatch_dev, a0 as _createClass, S as SvelteComponentDev, ah as create_slot, a1 as exclude, a2 as assign, a3 as forwardEventsBuilder, a4 as get_current_component, v as validate_slots, a7 as exclude_internal_props, a5 as onMount, a6 as onDestroy, aW as afterUpdate, ai as setContext, a8 as useActions, a9 as _getPrototypeOf, aa as _possibleConstructorReturn, g as element, k as claim_element, l as children, h as detach_dev, ab as set_attributes, p as add_location, r as insert_dev, ac as run_all, H as action_destroyer, ad as _slicedToArray, aj as get_slot_context, ak as get_slot_changes, ae as get_spread_update, af as is_function, L as transition_in, M as transition_out, aw as classAdderBuilder, ax as Div, _ as _inherits$1, a as _classCallCheck$1, b as _assertThisInitialized$1, u as append_dev, c as _getPrototypeOf$1, e as _possibleConstructorReturn$1, f as space, t as text, E as create_component, q as query_selector_all, j as claim_space, m as claim_text, F as claim_component, o as attr_dev, G as mount_component, J as _slicedToArray$1, N as destroy_component, C as binding_callbacks, D as bind, n as set_style, K as add_flush_callback } from './client.58596db2.js';
import './prefixFilter.1941fe02.js';
import { F as FormField } from './bare.06670bd4.js';
import { R as Radio } from './bare.3ba4ccd4.js';
import { S as Slider } from './bare.e28ca7dc.js';
import { H as H6 } from './H6.8e5fe46b.js';

var css_248z = ".mdc-elevation--z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-elevation--z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mdc-elevation--z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mdc-elevation--z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mdc-elevation--z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-elevation--z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mdc-elevation--z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mdc-elevation--z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mdc-elevation--z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-elevation--z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mdc-elevation--z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mdc-elevation--z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mdc-elevation--z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mdc-elevation--z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mdc-elevation--z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mdc-elevation--z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mdc-elevation--z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mdc-elevation--z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mdc-elevation--z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mdc-elevation--z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mdc-elevation--z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mdc-elevation--z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mdc-elevation--z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mdc-elevation--z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mdc-elevation--z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mdc-elevation-transition{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow}.smui-paper{background-color:#fff;color:#000;color:var(--mdc-theme-on-surface,#000);padding:24px 16px}@supports not (-ms-ime-align:auto){.smui-paper{background-color:var(--mdc-theme-surface,#fff)}}.smui-paper.smui-paper--rounded{border-radius:4px}.smui-paper.smui-paper--color-primary{background-color:#ff3e00;color:#fff;color:var(--mdc-theme-on-primary,#fff)}.smui-paper.smui-paper--color-primary.mdc-elevation--z0{box-shadow:0 0 0 0 rgba(255,62,0,.2),0 0 0 0 rgba(255,62,0,.14),0 0 0 0 rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z1{box-shadow:0 2px 1px -1px rgba(255,62,0,.2),0 1px 1px 0 rgba(255,62,0,.14),0 1px 3px 0 rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z2{box-shadow:0 3px 1px -2px rgba(255,62,0,.2),0 2px 2px 0 rgba(255,62,0,.14),0 1px 5px 0 rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z3{box-shadow:0 3px 3px -2px rgba(255,62,0,.2),0 3px 4px 0 rgba(255,62,0,.14),0 1px 8px 0 rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z4{box-shadow:0 2px 4px -1px rgba(255,62,0,.2),0 4px 5px 0 rgba(255,62,0,.14),0 1px 10px 0 rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z5{box-shadow:0 3px 5px -1px rgba(255,62,0,.2),0 5px 8px 0 rgba(255,62,0,.14),0 1px 14px 0 rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z6{box-shadow:0 3px 5px -1px rgba(255,62,0,.2),0 6px 10px 0 rgba(255,62,0,.14),0 1px 18px 0 rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z7{box-shadow:0 4px 5px -2px rgba(255,62,0,.2),0 7px 10px 1px rgba(255,62,0,.14),0 2px 16px 1px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z8{box-shadow:0 5px 5px -3px rgba(255,62,0,.2),0 8px 10px 1px rgba(255,62,0,.14),0 3px 14px 2px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z9{box-shadow:0 5px 6px -3px rgba(255,62,0,.2),0 9px 12px 1px rgba(255,62,0,.14),0 3px 16px 2px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z10{box-shadow:0 6px 6px -3px rgba(255,62,0,.2),0 10px 14px 1px rgba(255,62,0,.14),0 4px 18px 3px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z11{box-shadow:0 6px 7px -4px rgba(255,62,0,.2),0 11px 15px 1px rgba(255,62,0,.14),0 4px 20px 3px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z12{box-shadow:0 7px 8px -4px rgba(255,62,0,.2),0 12px 17px 2px rgba(255,62,0,.14),0 5px 22px 4px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z13{box-shadow:0 7px 8px -4px rgba(255,62,0,.2),0 13px 19px 2px rgba(255,62,0,.14),0 5px 24px 4px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z14{box-shadow:0 7px 9px -4px rgba(255,62,0,.2),0 14px 21px 2px rgba(255,62,0,.14),0 5px 26px 4px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z15{box-shadow:0 8px 9px -5px rgba(255,62,0,.2),0 15px 22px 2px rgba(255,62,0,.14),0 6px 28px 5px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z16{box-shadow:0 8px 10px -5px rgba(255,62,0,.2),0 16px 24px 2px rgba(255,62,0,.14),0 6px 30px 5px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z17{box-shadow:0 8px 11px -5px rgba(255,62,0,.2),0 17px 26px 2px rgba(255,62,0,.14),0 6px 32px 5px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z18{box-shadow:0 9px 11px -5px rgba(255,62,0,.2),0 18px 28px 2px rgba(255,62,0,.14),0 7px 34px 6px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z19{box-shadow:0 9px 12px -6px rgba(255,62,0,.2),0 19px 29px 2px rgba(255,62,0,.14),0 7px 36px 6px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z20{box-shadow:0 10px 13px -6px rgba(255,62,0,.2),0 20px 31px 3px rgba(255,62,0,.14),0 8px 38px 7px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z21{box-shadow:0 10px 13px -6px rgba(255,62,0,.2),0 21px 33px 3px rgba(255,62,0,.14),0 8px 40px 7px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z22{box-shadow:0 10px 14px -6px rgba(255,62,0,.2),0 22px 35px 3px rgba(255,62,0,.14),0 8px 42px 7px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z23{box-shadow:0 11px 14px -7px rgba(255,62,0,.2),0 23px 36px 3px rgba(255,62,0,.14),0 9px 44px 8px rgba(255,62,0,.12)}.smui-paper.smui-paper--color-primary.mdc-elevation--z24{box-shadow:0 11px 15px -7px rgba(255,62,0,.2),0 24px 38px 3px rgba(255,62,0,.14),0 9px 46px 8px rgba(255,62,0,.12)}@supports not (-ms-ime-align:auto){.smui-paper.smui-paper--color-primary{background-color:var(--mdc-theme-primary,#ff3e00)}}.smui-paper.smui-paper--color-secondary{background-color:#676778;color:#fff;color:var(--mdc-theme-on-secondary,#fff)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z0{box-shadow:0 0 0 0 rgba(103,103,120,.2),0 0 0 0 rgba(103,103,120,.14),0 0 0 0 rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z1{box-shadow:0 2px 1px -1px rgba(103,103,120,.2),0 1px 1px 0 rgba(103,103,120,.14),0 1px 3px 0 rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z2{box-shadow:0 3px 1px -2px rgba(103,103,120,.2),0 2px 2px 0 rgba(103,103,120,.14),0 1px 5px 0 rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z3{box-shadow:0 3px 3px -2px rgba(103,103,120,.2),0 3px 4px 0 rgba(103,103,120,.14),0 1px 8px 0 rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z4{box-shadow:0 2px 4px -1px rgba(103,103,120,.2),0 4px 5px 0 rgba(103,103,120,.14),0 1px 10px 0 rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z5{box-shadow:0 3px 5px -1px rgba(103,103,120,.2),0 5px 8px 0 rgba(103,103,120,.14),0 1px 14px 0 rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z6{box-shadow:0 3px 5px -1px rgba(103,103,120,.2),0 6px 10px 0 rgba(103,103,120,.14),0 1px 18px 0 rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z7{box-shadow:0 4px 5px -2px rgba(103,103,120,.2),0 7px 10px 1px rgba(103,103,120,.14),0 2px 16px 1px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z8{box-shadow:0 5px 5px -3px rgba(103,103,120,.2),0 8px 10px 1px rgba(103,103,120,.14),0 3px 14px 2px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z9{box-shadow:0 5px 6px -3px rgba(103,103,120,.2),0 9px 12px 1px rgba(103,103,120,.14),0 3px 16px 2px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z10{box-shadow:0 6px 6px -3px rgba(103,103,120,.2),0 10px 14px 1px rgba(103,103,120,.14),0 4px 18px 3px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z11{box-shadow:0 6px 7px -4px rgba(103,103,120,.2),0 11px 15px 1px rgba(103,103,120,.14),0 4px 20px 3px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z12{box-shadow:0 7px 8px -4px rgba(103,103,120,.2),0 12px 17px 2px rgba(103,103,120,.14),0 5px 22px 4px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z13{box-shadow:0 7px 8px -4px rgba(103,103,120,.2),0 13px 19px 2px rgba(103,103,120,.14),0 5px 24px 4px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z14{box-shadow:0 7px 9px -4px rgba(103,103,120,.2),0 14px 21px 2px rgba(103,103,120,.14),0 5px 26px 4px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z15{box-shadow:0 8px 9px -5px rgba(103,103,120,.2),0 15px 22px 2px rgba(103,103,120,.14),0 6px 28px 5px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z16{box-shadow:0 8px 10px -5px rgba(103,103,120,.2),0 16px 24px 2px rgba(103,103,120,.14),0 6px 30px 5px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z17{box-shadow:0 8px 11px -5px rgba(103,103,120,.2),0 17px 26px 2px rgba(103,103,120,.14),0 6px 32px 5px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z18{box-shadow:0 9px 11px -5px rgba(103,103,120,.2),0 18px 28px 2px rgba(103,103,120,.14),0 7px 34px 6px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z19{box-shadow:0 9px 12px -6px rgba(103,103,120,.2),0 19px 29px 2px rgba(103,103,120,.14),0 7px 36px 6px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z20{box-shadow:0 10px 13px -6px rgba(103,103,120,.2),0 20px 31px 3px rgba(103,103,120,.14),0 8px 38px 7px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z21{box-shadow:0 10px 13px -6px rgba(103,103,120,.2),0 21px 33px 3px rgba(103,103,120,.14),0 8px 40px 7px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z22{box-shadow:0 10px 14px -6px rgba(103,103,120,.2),0 22px 35px 3px rgba(103,103,120,.14),0 8px 42px 7px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z23{box-shadow:0 11px 14px -7px rgba(103,103,120,.2),0 23px 36px 3px rgba(103,103,120,.14),0 9px 44px 8px rgba(103,103,120,.12)}.smui-paper.smui-paper--color-secondary.mdc-elevation--z24{box-shadow:0 11px 15px -7px rgba(103,103,120,.2),0 24px 38px 3px rgba(103,103,120,.14),0 9px 46px 8px rgba(103,103,120,.12)}@supports not (-ms-ime-align:auto){.smui-paper.smui-paper--color-secondary{background-color:var(--mdc-theme-secondary,#676778)}}.smui-paper .smui-paper__title{font-size:1.5rem;line-height:2rem;letter-spacing:normal;margin-top:0}.smui-paper .smui-paper__subtitle,.smui-paper .smui-paper__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:400;text-decoration:inherit;text-transform:inherit;margin-bottom:.4rem}.smui-paper .smui-paper__subtitle{font-size:1rem;line-height:1.75rem;letter-spacing:.00937em;margin-top:-.2rem}.smui-paper .smui-paper__content{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit}";
styleInject(css_248z);

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "home/hperrin/repos/svelte-material-ui/packages/paper/Paper.svelte";

function create_fragment(ctx) {
  var div;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[9].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[8], null);
  var div_levels = [{
    class: "\n    smui-paper\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*elevation*/
    ctx[4] !== 0 ? "mdc-elevation--z" +
    /*elevation*/
    ctx[4] : "") + "\n    " + (!
    /*square*/
    ctx[2] ? "smui-paper--rounded" : "") + "\n    " + (
    /*color*/
    ctx[3] === "primary" ? "smui-paper--color-primary" : "") + "\n    " + (
    /*color*/
    ctx[3] === "secondary" ? "smui-paper--color-secondary" : "") + "\n    " + (
    /*transition*/
    ctx[5] ? "mdc-elevation-transition" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[7], ["use", "class", "square", "color", "transition"])];
  var div_data = {};

  for (var i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }

  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(div, div_data);
      add_location(div, file, 0, 0, 0);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
      if (remount) run_all(dispose);
      dispose = [action_destroyer(useActions_action = useActions.call(null, div,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[6].call(null, div))];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        256) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[8], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[8], dirty, null));
        }
      }

      set_attributes(div, get_spread_update(div_levels, [dirty &
      /*className, elevation, square, color, transition*/
      62 && {
        class: "\n    smui-paper\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*elevation*/
        ctx[4] !== 0 ? "mdc-elevation--z" +
        /*elevation*/
        ctx[4] : "") + "\n    " + (!
        /*square*/
        ctx[2] ? "smui-paper--rounded" : "") + "\n    " + (
        /*color*/
        ctx[3] === "primary" ? "smui-paper--color-primary" : "") + "\n    " + (
        /*color*/
        ctx[3] === "secondary" ? "smui-paper--color-secondary" : "") + "\n    " + (
        /*transition*/
        ctx[5] ? "mdc-elevation-transition" : "") + "\n  "
      }, dirty &
      /*exclude, $$props*/
      128 && exclude(
      /*$$props*/
      ctx[7], ["use", "class", "square", "color", "transition"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(get_current_component());
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$class = _$$props2.class,
      className = _$$props2$class === void 0 ? "" : _$$props2$class;
  var _$$props3 = $$props,
      _$$props3$square = _$$props3.square,
      square = _$$props3$square === void 0 ? false : _$$props3$square;
  var _$$props4 = $$props,
      _$$props4$color = _$$props4.color,
      color = _$$props4$color === void 0 ? "default" : _$$props4$color;
  var _$$props5 = $$props,
      _$$props5$elevation = _$$props5.elevation,
      elevation = _$$props5$elevation === void 0 ? 1 : _$$props5$elevation;
  var _$$props6 = $$props,
      _$$props6$transition = _$$props6.transition,
      transition = _$$props6$transition === void 0 ? false : _$$props6$transition;
  var _$$props7 = $$props,
      _$$props7$$$slots = _$$props7.$$slots,
      $$slots = _$$props7$$$slots === void 0 ? {} : _$$props7$$$slots,
      $$scope = _$$props7.$$scope;
  validate_slots("Paper", $$slots, ['default']);

  $$self.$set = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("square" in $$new_props) $$invalidate(2, square = $$new_props.square);
    if ("color" in $$new_props) $$invalidate(3, color = $$new_props.color);
    if ("elevation" in $$new_props) $$invalidate(4, elevation = $$new_props.elevation);
    if ("transition" in $$new_props) $$invalidate(5, transition = $$new_props.transition);
    if ("$$scope" in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      onDestroy: onDestroy,
      afterUpdate: afterUpdate,
      setContext: setContext,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      forwardEvents: forwardEvents,
      use: use,
      className: className,
      square: square,
      color: color,
      elevation: elevation,
      transition: transition
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(7, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("square" in $$props) $$invalidate(2, square = $$new_props.square);
    if ("color" in $$props) $$invalidate(3, color = $$new_props.color);
    if ("elevation" in $$props) $$invalidate(4, elevation = $$new_props.elevation);
    if ("transition" in $$props) $$invalidate(5, transition = $$new_props.transition);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [use, className, square, color, elevation, transition, forwardEvents, $$props, $$scope, $$slots];
}

var Paper = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Paper, _SvelteComponentDev);

  var _super = _createSuper(Paper);

  function Paper(options) {
    var _this;

    _classCallCheck(this, Paper);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      square: 2,
      color: 3,
      elevation: 4,
      transition: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Paper",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Paper, [{
    key: "use",
    get: function get() {
      throw new Error("<Paper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Paper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Paper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Paper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "square",
    get: function get() {
      throw new Error("<Paper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Paper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "color",
    get: function get() {
      throw new Error("<Paper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Paper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "elevation",
    get: function get() {
      throw new Error("<Paper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Paper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "transition",
    get: function get() {
      throw new Error("<Paper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Paper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Paper;
}(SvelteComponentDev);

var Content = classAdderBuilder({
  class: 'smui-paper__content',
  component: Div,
  contexts: {}
});

function _createSuper$1(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$1()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "home/hperrin/repos/svelte-material-ui/packages/common/H5.svelte";

function create_fragment$1(ctx) {
  var h5;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[4].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[3], null);
  var h5_levels = [exclude(
  /*$$props*/
  ctx[2], ["use"])];
  var h5_data = {};

  for (var i = 0; i < h5_levels.length; i += 1) {
    h5_data = assign(h5_data, h5_levels[i]);
  }

  var block = {
    c: function create() {
      h5 = element("h5");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      h5 = claim_element(nodes, "H5", {});
      var h5_nodes = children(h5);
      if (default_slot) default_slot.l(h5_nodes);
      h5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(h5, h5_data);
      add_location(h5, file$1, 0, 0, 0);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, h5, anchor);

      if (default_slot) {
        default_slot.m(h5, null);
      }

      current = true;
      if (remount) run_all(dispose);
      dispose = [action_destroyer(useActions_action = useActions.call(null, h5,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[1].call(null, h5))];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        8) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[3], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[3], dirty, null));
        }
      }

      set_attributes(h5, get_spread_update(h5_levels, [dirty &
      /*exclude, $$props*/
      4 && exclude(
      /*$$props*/
      ctx[2], ["use"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(h5);
      if (default_slot) default_slot.d(detaching);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(get_current_component());
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;
  validate_slots("H5", $$slots, ['default']);

  $$self.$set = function ($$new_props) {
    $$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("$$scope" in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      forwardEvents: forwardEvents,
      use: use
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(2, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [use, forwardEvents, $$props, $$scope, $$slots];
}

var H5 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(H5, _SvelteComponentDev);

  var _super = _createSuper$1(H5);

  function H5(options) {
    var _this;

    _classCallCheck(this, H5);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      use: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "H5",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(H5, [{
    key: "use",
    get: function get() {
      throw new Error("<H5>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<H5>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return H5;
}(SvelteComponentDev);

var Title = classAdderBuilder({
  class: 'smui-paper__title',
  component: H5,
  contexts: {}
});

var Subtitle = classAdderBuilder({
  class: 'smui-paper__subtitle',
  component: H6,
  contexts: {}
});

function _createSuper$2(Derived) { return function () { var Super = _getPrototypeOf$1(Derived), result; if (_isNativeReflectConstruct$2()) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src/routes/demo/paper.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-5yxukv-style";
  style.textContent = ".paper-container.svelte-5yxukv{background-color:#f8f8f8;padding:36px 18px}.svelte-5yxukv .paper-demo{margin:0 auto;max-width:600px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFwZXIuc3ZlbHRlIiwic291cmNlcyI6WyJwYXBlci5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+UGFwZXIgLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uPlxuICA8aDI+UGFwZXI8L2gyPlxuXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInBhcGVyLWNvbnRhaW5lclwiPlxuICAgICAgPFBhcGVyIGNsYXNzPVwicGFwZXItZGVtb1wiPlxuICAgICAgICA8VGl0bGU+UGFwZXI8L1RpdGxlPlxuICAgICAgICA8U3VidGl0bGU+VGhpcyBpcyBhIHNoZWV0IG9mIHBhcGVyLjwvU3VidGl0bGU+XG4gICAgICAgIDxDb250ZW50PlBhcGVyIGlzIHVzZWQgdG8gYnVpbGQgYW4gZWxldmF0ZWQgc3VyZmFjZS48L0NvbnRlbnQ+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIFNxdWFyZSBwYXBlcjogPGJyIC8+XG5cbiAgICA8ZGl2IGNsYXNzPVwicGFwZXItY29udGFpbmVyXCI+XG4gICAgICA8UGFwZXIgc3F1YXJlIGNsYXNzPVwicGFwZXItZGVtb1wiPlxuICAgICAgICA8VGl0bGU+U3F1YXJlIFBhcGVyPC9UaXRsZT5cbiAgICAgICAgPENvbnRlbnQ+QnkgYWRkaW5nIHRoZSA8Y29kZT5zcXVhcmU8L2NvZGU+IHByb3BlcnR5LCB0aGUgcGFwZXIgZ2FpbnMgc2hhcnBlciBjb3JuZXJzIGFuZCBjYW4gYmUgdXNlZCB0byBpbnRpbWlkYXRlIGZvZXMuPC9Db250ZW50PlxuICAgICAgPC9QYXBlcj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBQYXBlciBjb2xvcjogPGJyIC8+XG5cbiAgICA8ZGl2IGNsYXNzPVwicGFwZXItY29udGFpbmVyXCI+XG4gICAgICA8UGFwZXIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3M9XCJwYXBlci1kZW1vXCI+XG4gICAgICAgIDxUaXRsZT5QcmltYXJ5IFBhcGVyPC9UaXRsZT5cbiAgICAgICAgPENvbnRlbnQ+UGFwZXIgY2FuIGhhdmUgYSBjb2xvciwgYWxsb3dpbmcgeW91IHRvIGNvbnN0cnVjdCBmYW5jeSBzY2hvb2wgcHJvamVjdHMgd2l0aCB0aGUgY29sb3JlZCBwYXBlciBhbmQgZ2x1ZSBzdGlja3MuPC9Db250ZW50PlxuICAgICAgPC9QYXBlcj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJwYXBlci1jb250YWluZXJcIj5cbiAgICAgIDxQYXBlciBjb2xvcj1cInNlY29uZGFyeVwiIGNsYXNzPVwicGFwZXItZGVtb1wiPlxuICAgICAgICA8VGl0bGU+U2Vjb25kYXJ5IFBhcGVyPC9UaXRsZT5cbiAgICAgICAgPENvbnRlbnQ+UGFwZXIgY2FuIGhhdmUgYSBjb2xvciwgYWxsb3dpbmcgeW91IHRvIGNvbnN0cnVjdCBmYW5jeSBzY2hvb2wgcHJvamVjdHMgd2l0aCB0aGUgY29sb3JlZCBwYXBlciBhbmQgZ2x1ZSBzdGlja3MuPC9Db250ZW50PlxuICAgICAgPC9QYXBlcj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBFbGV2YXRpb24gYW5kIHRyYW5zaXRpb246IDxiciAvPlxuXG4gICAgPGRpdiBjbGFzcz1cInBhcGVyLWNvbnRhaW5lclwiPlxuICAgICAgPFBhcGVyIHRyYW5zaXRpb24ge2VsZXZhdGlvbn0ge2NvbG9yfSBjbGFzcz1cInBhcGVyLWRlbW9cIj5cbiAgICAgICAgPFRpdGxlPkVsZXZhdGVkIFBhcGVyPC9UaXRsZT5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgSWYgeW91IGFkZCB0aGUgPGNvZGU+dHJhbnNpdGlvbjwvY29kZT4gcHJvcGVydHksIGVsZXZhdGlvbiBjaGFuZ2VzIHdpbGwgYW5pbWF0ZS5cblxuICAgICAgICAgIDxiciAvPjxiciAvPlxuXG4gICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8Rm9ybUZpZWxkIGFsaWduPVwiZW5kXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O1wiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXIgYmluZDp2YWx1ZT17ZWxldmF0aW9ufSBtaW49ezB9IG1heD17MjR9IGRpc2NyZXRlIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gc2xvdD1cImxhYmVsXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxMnB4OyB3aWR0aDogbWF4LWNvbnRlbnQ7IGRpc3BsYXk6IGJsb2NrO1wiPkVsZXZhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZvcm1GaWVsZD5cbiAgICAgICAgICAgICAgICA8UmFkaW8gYmluZDpncm91cD17Y29sb3J9IHZhbHVlPVwiZGVmYXVsdFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gc2xvdD1cImxhYmVsXCI+RGVmYXVsdDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICAgIDxGb3JtRmllbGQ+XG4gICAgICAgICAgICAgICAgPFJhZGlvIGJpbmQ6Z3JvdXA9e2NvbG9yfSB2YWx1ZT1cInByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlByaW1hcnk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICAgICAgICA8Rm9ybUZpZWxkPlxuICAgICAgICAgICAgICAgIDxSYWRpbyBiaW5kOmdyb3VwPXtjb2xvcn0gdmFsdWU9XCJzZWNvbmRhcnlcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlNlY29uZGFyeTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFBhcGVyLCB7VGl0bGUsIFN1YnRpdGxlLCBDb250ZW50fSBmcm9tICdAc211aS9wYXBlcic7XG4gIGltcG9ydCBTbGlkZXIgZnJvbSAnQHNtdWkvc2xpZGVyJztcbiAgaW1wb3J0IFJhZGlvIGZyb20gJ0BzbXVpL3JhZGlvJztcbiAgaW1wb3J0IEZvcm1GaWVsZCBmcm9tICdAc211aS9mb3JtLWZpZWxkJztcblxuICBsZXQgZWxldmF0aW9uID0gMTtcbiAgbGV0IGNvbG9yID0gJ2RlZmF1bHQnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLnBhcGVyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICBwYWRkaW5nOiAzNnB4IDE4cHg7XG4gIH1cblxuICAqIDpnbG9iYWwoLnBhcGVyLWRlbW8pIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR0UsZ0JBQWdCLGNBQUMsQ0FBQyxBQUNoQixnQkFBZ0IsQ0FBRSxPQUFPLENBQ3pCLE9BQU8sQ0FBRSxJQUFJLENBQUMsSUFBSSxBQUNwQixDQUFDLEFBRUQsY0FBQyxDQUFDLEFBQVEsV0FBVyxBQUFFLENBQUMsQUFDdEIsTUFBTSxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2QsU0FBUyxDQUFFLEtBQUssQUFDbEIsQ0FBQyJ9 */";
  append_dev(document.head, style);
} // (11:8) <Title>


function create_default_slot_20(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Paper");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Paper");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_20.name,
    type: "slot",
    source: "(11:8) <Title>",
    ctx: ctx
  });
  return block;
} // (12:8) <Subtitle>


function create_default_slot_19(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("This is a sheet of paper.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "This is a sheet of paper.");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_19.name,
    type: "slot",
    source: "(12:8) <Subtitle>",
    ctx: ctx
  });
  return block;
} // (13:8) <Content>


function create_default_slot_18(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Paper is used to build an elevated surface.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Paper is used to build an elevated surface.");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_18.name,
    type: "slot",
    source: "(13:8) <Content>",
    ctx: ctx
  });
  return block;
} // (10:6) <Paper class="paper-demo">


function create_default_slot_17(ctx) {
  var t0;
  var t1;
  var current;
  var title = new Title({
    props: {
      $$slots: {
        default: [create_default_slot_20]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var subtitle = new Subtitle({
    props: {
      $$slots: {
        default: [create_default_slot_19]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var content = new Content({
    props: {
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(title.$$.fragment);
      t0 = space();
      create_component(subtitle.$$.fragment);
      t1 = space();
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(title.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(subtitle.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(title, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(subtitle, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var title_changes = {};

      if (dirty &
      /*$$scope*/
      64) {
        title_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      title.$set(title_changes);
      var subtitle_changes = {};

      if (dirty &
      /*$$scope*/
      64) {
        subtitle_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      subtitle.$set(subtitle_changes);
      var content_changes = {};

      if (dirty &
      /*$$scope*/
      64) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(title.$$.fragment, local);
      transition_in(subtitle.$$.fragment, local);
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(title.$$.fragment, local);
      transition_out(subtitle.$$.fragment, local);
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(title, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(subtitle, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_17.name,
    type: "slot",
    source: "(10:6) <Paper class=\\\"paper-demo\\\">",
    ctx: ctx
  });
  return block;
} // (23:8) <Title>


function create_default_slot_16(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Square Paper");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Square Paper");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(23:8) <Title>",
    ctx: ctx
  });
  return block;
} // (24:8) <Content>


function create_default_slot_15(ctx) {
  var t0;
  var code;
  var t1;
  var t2;
  var block = {
    c: function create() {
      t0 = text("By adding the ");
      code = element("code");
      t1 = text("square");
      t2 = text(" property, the paper gains sharper corners and can be used to intimidate foes.");
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "By adding the ");
      code = claim_element(nodes, "CODE", {
        class: true
      });
      var code_nodes = children(code);
      t1 = claim_text(code_nodes, "square");
      code_nodes.forEach(detach_dev);
      t2 = claim_text(nodes, " property, the paper gains sharper corners and can be used to intimidate foes.");
      this.h();
    },
    h: function hydrate() {
      attr_dev(code, "class", "svelte-5yxukv");
      add_location(code, file$2, 23, 31, 529);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, code, anchor);
      append_dev(code, t1);
      insert_dev(target, t2, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(code);
      if (detaching) detach_dev(t2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(24:8) <Content>",
    ctx: ctx
  });
  return block;
} // (22:6) <Paper square class="paper-demo">


function create_default_slot_14(ctx) {
  var t;
  var current;
  var title = new Title({
    props: {
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var content = new Content({
    props: {
      $$slots: {
        default: [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(title.$$.fragment);
      t = space();
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(title.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(title, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var title_changes = {};

      if (dirty &
      /*$$scope*/
      64) {
        title_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      title.$set(title_changes);
      var content_changes = {};

      if (dirty &
      /*$$scope*/
      64) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(title.$$.fragment, local);
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(title.$$.fragment, local);
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(title, detaching);
      if (detaching) detach_dev(t);
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_14.name,
    type: "slot",
    source: "(22:6) <Paper square class=\\\"paper-demo\\\">",
    ctx: ctx
  });
  return block;
} // (34:8) <Title>


function create_default_slot_13(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Primary Paper");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Primary Paper");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(34:8) <Title>",
    ctx: ctx
  });
  return block;
} // (35:8) <Content>


function create_default_slot_12(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Paper can have a color, allowing you to construct fancy school projects with the colored paper and glue sticks.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Paper can have a color, allowing you to construct fancy school projects with the colored paper and glue sticks.");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_12.name,
    type: "slot",
    source: "(35:8) <Content>",
    ctx: ctx
  });
  return block;
} // (33:6) <Paper color="primary" class="paper-demo">


function create_default_slot_11(ctx) {
  var t;
  var current;
  var title = new Title({
    props: {
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var content = new Content({
    props: {
      $$slots: {
        default: [create_default_slot_12]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(title.$$.fragment);
      t = space();
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(title.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(title, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var title_changes = {};

      if (dirty &
      /*$$scope*/
      64) {
        title_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      title.$set(title_changes);
      var content_changes = {};

      if (dirty &
      /*$$scope*/
      64) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(title.$$.fragment, local);
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(title.$$.fragment, local);
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(title, detaching);
      if (detaching) detach_dev(t);
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_11.name,
    type: "slot",
    source: "(33:6) <Paper color=\\\"primary\\\" class=\\\"paper-demo\\\">",
    ctx: ctx
  });
  return block;
} // (41:8) <Title>


function create_default_slot_10(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Secondary Paper");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Secondary Paper");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(41:8) <Title>",
    ctx: ctx
  });
  return block;
} // (42:8) <Content>


function create_default_slot_9(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Paper can have a color, allowing you to construct fancy school projects with the colored paper and glue sticks.");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Paper can have a color, allowing you to construct fancy school projects with the colored paper and glue sticks.");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(42:8) <Content>",
    ctx: ctx
  });
  return block;
} // (40:6) <Paper color="secondary" class="paper-demo">


function create_default_slot_8(ctx) {
  var t;
  var current;
  var title = new Title({
    props: {
      $$slots: {
        default: [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var content = new Content({
    props: {
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(title.$$.fragment);
      t = space();
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(title.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(title, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var title_changes = {};

      if (dirty &
      /*$$scope*/
      64) {
        title_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      title.$set(title_changes);
      var content_changes = {};

      if (dirty &
      /*$$scope*/
      64) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(title.$$.fragment, local);
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(title.$$.fragment, local);
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(title, detaching);
      if (detaching) detach_dev(t);
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(40:6) <Paper color=\\\"secondary\\\" class=\\\"paper-demo\\\">",
    ctx: ctx
  });
  return block;
} // (52:8) <Title>


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Elevated Paper");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Elevated Paper");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(52:8) <Title>",
    ctx: ctx
  });
  return block;
} // (62:16) <span slot="label" style="padding-right: 12px; width: max-content; display: block;">


function create_label_slot_3(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Elevation");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        style: true,
        class: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Elevation");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      set_style(span, "padding-right", "12px");
      set_style(span, "width", "max-content");
      set_style(span, "display", "block");
      attr_dev(span, "class", "svelte-5yxukv");
      add_location(span, file$2, 61, 16, 1810);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_label_slot_3.name,
    type: "slot",
    source: "(62:16) <span slot=\\\"label\\\" style=\\\"padding-right: 12px; width: max-content; display: block;\\\">",
    ctx: ctx
  });
  return block;
} // (60:14) <FormField align="end" style="display: flex;">


function create_default_slot_6(ctx) {
  var updating_value;
  var t;
  var current;

  function slider_value_binding(value) {
    /*slider_value_binding*/
    ctx[2].call(null, value);
  }

  var slider_props = {
    min: 0,
    max: 24,
    discrete: true
  };

  if (
  /*elevation*/
  ctx[0] !== void 0) {
    slider_props.value =
    /*elevation*/
    ctx[0];
  }

  var slider = new Slider({
    props: slider_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(slider, "value", slider_value_binding);
  });
  var block = {
    c: function create() {
      create_component(slider.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(slider.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(slider, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var slider_changes = {};

      if (!updating_value && dirty &
      /*elevation*/
      1) {
        updating_value = true;
        slider_changes.value =
        /*elevation*/
        ctx[0];
        add_flush_callback(function () {
          return updating_value = false;
        });
      }

      slider.$set(slider_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(slider, detaching);
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(60:14) <FormField align=\\\"end\\\" style=\\\"display: flex;\\\">",
    ctx: ctx
  });
  return block;
} // (69:16) <span slot="label">


function create_label_slot_2(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Default");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        class: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Default");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      attr_dev(span, "class", "svelte-5yxukv");
      add_location(span, file$2, 68, 16, 2079);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_label_slot_2.name,
    type: "slot",
    source: "(69:16) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (67:14) <FormField>


function create_default_slot_5(ctx) {
  var updating_group;
  var t;
  var current;

  function radio_group_binding(value) {
    /*radio_group_binding*/
    ctx[3].call(null, value);
  }

  var radio_props = {
    value: "default"
  };

  if (
  /*color*/
  ctx[1] !== void 0) {
    radio_props.group =
    /*color*/
    ctx[1];
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, "group", radio_group_binding);
  });
  var block = {
    c: function create() {
      create_component(radio.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(radio.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var radio_changes = {};

      if (!updating_group && dirty &
      /*color*/
      2) {
        updating_group = true;
        radio_changes.group =
        /*color*/
        ctx[1];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(67:14) <FormField>",
    ctx: ctx
  });
  return block;
} // (73:16) <span slot="label">


function create_label_slot_1(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Primary");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        class: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Primary");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      attr_dev(span, "class", "svelte-5yxukv");
      add_location(span, file$2, 72, 16, 2243);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_label_slot_1.name,
    type: "slot",
    source: "(73:16) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (71:14) <FormField>


function create_default_slot_4(ctx) {
  var updating_group;
  var t;
  var current;

  function radio_group_binding_1(value) {
    /*radio_group_binding_1*/
    ctx[4].call(null, value);
  }

  var radio_props = {
    value: "primary"
  };

  if (
  /*color*/
  ctx[1] !== void 0) {
    radio_props.group =
    /*color*/
    ctx[1];
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, "group", radio_group_binding_1);
  });
  var block = {
    c: function create() {
      create_component(radio.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(radio.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var radio_changes = {};

      if (!updating_group && dirty &
      /*color*/
      2) {
        updating_group = true;
        radio_changes.group =
        /*color*/
        ctx[1];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(71:14) <FormField>",
    ctx: ctx
  });
  return block;
} // (77:16) <span slot="label">


function create_label_slot(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Secondary");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        class: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Secondary");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      attr_dev(span, "class", "svelte-5yxukv");
      add_location(span, file$2, 76, 16, 2409);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_label_slot.name,
    type: "slot",
    source: "(77:16) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (75:14) <FormField>


function create_default_slot_3(ctx) {
  var updating_group;
  var t;
  var current;

  function radio_group_binding_2(value) {
    /*radio_group_binding_2*/
    ctx[5].call(null, value);
  }

  var radio_props = {
    value: "secondary"
  };

  if (
  /*color*/
  ctx[1] !== void 0) {
    radio_props.group =
    /*color*/
    ctx[1];
  }

  var radio = new Radio({
    props: radio_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(radio, "group", radio_group_binding_2);
  });
  var block = {
    c: function create() {
      create_component(radio.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(radio.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var radio_changes = {};

      if (!updating_group && dirty &
      /*color*/
      2) {
        updating_group = true;
        radio_changes.group =
        /*color*/
        ctx[1];
        add_flush_callback(function () {
          return updating_group = false;
        });
      }

      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radio, detaching);
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(75:14) <FormField>",
    ctx: ctx
  });
  return block;
} // (58:10) <Paper elevation={0}>


function create_default_slot_2(ctx) {
  var div0;
  var t0;
  var div1;
  var t1;
  var t2;
  var current;
  var formfield0 = new FormField({
    props: {
      align: "end",
      style: "display: flex;",
      $$slots: {
        default: [create_default_slot_6],
        label: [create_label_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var formfield1 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_5],
        label: [create_label_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var formfield2 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_4],
        label: [create_label_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var formfield3 = new FormField({
    props: {
      $$slots: {
        default: [create_default_slot_3],
        label: [create_label_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      div0 = element("div");
      create_component(formfield0.$$.fragment);
      t0 = space();
      div1 = element("div");
      create_component(formfield1.$$.fragment);
      t1 = space();
      create_component(formfield2.$$.fragment);
      t2 = space();
      create_component(formfield3.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div0 = claim_element(nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(formfield0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      claim_component(formfield1.$$.fragment, div1_nodes);
      t1 = claim_space(div1_nodes);
      claim_component(formfield2.$$.fragment, div1_nodes);
      t2 = claim_space(div1_nodes);
      claim_component(formfield3.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "svelte-5yxukv");
      add_location(div0, file$2, 58, 12, 1651);
      attr_dev(div1, "class", "svelte-5yxukv");
      add_location(div1, file$2, 65, 12, 1970);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div0, anchor);
      mount_component(formfield0, div0, null);
      insert_dev(target, t0, anchor);
      insert_dev(target, div1, anchor);
      mount_component(formfield1, div1, null);
      append_dev(div1, t1);
      mount_component(formfield2, div1, null);
      append_dev(div1, t2);
      mount_component(formfield3, div1, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      var formfield0_changes = {};

      if (dirty &
      /*$$scope, elevation*/
      65) {
        formfield0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield0.$set(formfield0_changes);
      var formfield1_changes = {};

      if (dirty &
      /*$$scope, color*/
      66) {
        formfield1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield1.$set(formfield1_changes);
      var formfield2_changes = {};

      if (dirty &
      /*$$scope, color*/
      66) {
        formfield2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield2.$set(formfield2_changes);
      var formfield3_changes = {};

      if (dirty &
      /*$$scope, color*/
      66) {
        formfield3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield3.$set(formfield3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(formfield0.$$.fragment, local);
      transition_in(formfield1.$$.fragment, local);
      transition_in(formfield2.$$.fragment, local);
      transition_in(formfield3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(formfield0.$$.fragment, local);
      transition_out(formfield1.$$.fragment, local);
      transition_out(formfield2.$$.fragment, local);
      transition_out(formfield3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div0);
      destroy_component(formfield0);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div1);
      destroy_component(formfield1);
      destroy_component(formfield2);
      destroy_component(formfield3);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(58:10) <Paper elevation={0}>",
    ctx: ctx
  });
  return block;
} // (53:8) <Content>


function create_default_slot_1(ctx) {
  var t0;
  var code;
  var t1;
  var t2;
  var br0;
  var br1;
  var t3;
  var current;
  var paper = new Paper({
    props: {
      elevation: 0,
      $$slots: {
        default: [create_default_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = text("If you add the ");
      code = element("code");
      t1 = text("transition");
      t2 = text(" property, elevation changes will animate.\n\n          ");
      br0 = element("br");
      br1 = element("br");
      t3 = space();
      create_component(paper.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "If you add the ");
      code = claim_element(nodes, "CODE", {
        class: true
      });
      var code_nodes = children(code);
      t1 = claim_text(code_nodes, "transition");
      code_nodes.forEach(detach_dev);
      t2 = claim_text(nodes, " property, elevation changes will animate.\n\n          ");
      br0 = claim_element(nodes, "BR", {
        class: true
      });
      br1 = claim_element(nodes, "BR", {
        class: true
      });
      t3 = claim_space(nodes);
      claim_component(paper.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      attr_dev(code, "class", "svelte-5yxukv");
      add_location(code, file$2, 53, 25, 1516);
      attr_dev(br0, "class", "svelte-5yxukv");
      add_location(br0, file$2, 55, 10, 1593);
      attr_dev(br1, "class", "svelte-5yxukv");
      add_location(br1, file$2, 55, 16, 1599);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, code, anchor);
      append_dev(code, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, br0, anchor);
      insert_dev(target, br1, anchor);
      insert_dev(target, t3, anchor);
      mount_component(paper, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var paper_changes = {};

      if (dirty &
      /*$$scope, color, elevation*/
      67) {
        paper_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      paper.$set(paper_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(paper.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(paper.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(code);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(br0);
      if (detaching) detach_dev(br1);
      if (detaching) detach_dev(t3);
      destroy_component(paper, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(53:8) <Content>",
    ctx: ctx
  });
  return block;
} // (51:6) <Paper transition {elevation} {color} class="paper-demo">


function create_default_slot(ctx) {
  var t;
  var current;
  var title = new Title({
    props: {
      $$slots: {
        default: [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var content = new Content({
    props: {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(title.$$.fragment);
      t = space();
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(title.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(title, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var title_changes = {};

      if (dirty &
      /*$$scope*/
      64) {
        title_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      title.$set(title_changes);
      var content_changes = {};

      if (dirty &
      /*$$scope, color, elevation*/
      67) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(title.$$.fragment, local);
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(title.$$.fragment, local);
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(title, detaching);
      if (detaching) detach_dev(t);
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(51:6) <Paper transition {elevation} {color} class=\\\"paper-demo\\\">",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var div1;
  var div0;
  var t3;
  var div3;
  var t4;
  var br0;
  var t5;
  var div2;
  var t6;
  var div6;
  var t7;
  var br1;
  var t8;
  var div4;
  var t9;
  var div5;
  var t10;
  var div8;
  var t11;
  var br2;
  var t12;
  var div7;
  var current;
  var paper0 = new Paper({
    props: {
      class: "paper-demo",
      $$slots: {
        default: [create_default_slot_17]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var paper1 = new Paper({
    props: {
      square: true,
      class: "paper-demo",
      $$slots: {
        default: [create_default_slot_14]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var paper2 = new Paper({
    props: {
      color: "primary",
      class: "paper-demo",
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var paper3 = new Paper({
    props: {
      color: "secondary",
      class: "paper-demo",
      $$slots: {
        default: [create_default_slot_8]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var paper4 = new Paper({
    props: {
      transition: true,
      elevation:
      /*elevation*/
      ctx[0],
      color:
      /*color*/
      ctx[1],
      class: "paper-demo",
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Paper");
      t2 = space();
      div1 = element("div");
      div0 = element("div");
      create_component(paper0.$$.fragment);
      t3 = space();
      div3 = element("div");
      t4 = text("Square paper: ");
      br0 = element("br");
      t5 = space();
      div2 = element("div");
      create_component(paper1.$$.fragment);
      t6 = space();
      div6 = element("div");
      t7 = text("Paper color: ");
      br1 = element("br");
      t8 = space();
      div4 = element("div");
      create_component(paper2.$$.fragment);
      t9 = space();
      div5 = element("div");
      create_component(paper3.$$.fragment);
      t10 = space();
      div8 = element("div");
      t11 = text("Elevation and transition: ");
      br2 = element("br");
      t12 = space();
      div7 = element("div");
      create_component(paper4.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1kvw6qa\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Paper");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(paper0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      t4 = claim_text(div3_nodes, "Square paper: ");
      br0 = claim_element(div3_nodes, "BR", {
        class: true
      });
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      claim_component(paper1.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div6 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      t7 = claim_text(div6_nodes, "Paper color: ");
      br1 = claim_element(div6_nodes, "BR", {
        class: true
      });
      t8 = claim_space(div6_nodes);
      div4 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      claim_component(paper2.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t9 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      claim_component(paper3.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      t10 = claim_space(section_nodes);
      div8 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      t11 = claim_text(div8_nodes, "Elevation and transition: ");
      br2 = claim_element(div8_nodes, "BR", {
        class: true
      });
      t12 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      claim_component(paper4.$$.fragment, div7_nodes);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Paper - SMUI";
      attr_dev(h2, "class", "svelte-5yxukv");
      add_location(h2, file$2, 5, 2, 72);
      attr_dev(div0, "class", "paper-container svelte-5yxukv");
      add_location(div0, file$2, 8, 4, 100);
      attr_dev(div1, "class", "svelte-5yxukv");
      add_location(div1, file$2, 7, 2, 90);
      attr_dev(br0, "class", "svelte-5yxukv");
      add_location(br0, file$2, 18, 18, 380);
      attr_dev(div2, "class", "paper-container svelte-5yxukv");
      add_location(div2, file$2, 20, 4, 392);
      attr_dev(div3, "class", "svelte-5yxukv");
      add_location(div3, file$2, 17, 2, 356);
      attr_dev(br1, "class", "svelte-5yxukv");
      add_location(br1, file$2, 29, 17, 698);
      attr_dev(div4, "class", "paper-container svelte-5yxukv");
      add_location(div4, file$2, 31, 4, 710);
      attr_dev(div5, "class", "paper-container svelte-5yxukv");
      add_location(div5, file$2, 38, 4, 996);
      attr_dev(div6, "class", "svelte-5yxukv");
      add_location(div6, file$2, 28, 2, 675);
      attr_dev(br2, "class", "svelte-5yxukv");
      add_location(br2, file$2, 47, 30, 1329);
      attr_dev(div7, "class", "paper-container svelte-5yxukv");
      add_location(div7, file$2, 49, 4, 1341);
      attr_dev(div8, "class", "svelte-5yxukv");
      add_location(div8, file$2, 46, 2, 1293);
      attr_dev(section, "class", "svelte-5yxukv");
      add_location(section, file$2, 4, 0, 60);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div1);
      append_dev(div1, div0);
      mount_component(paper0, div0, null);
      append_dev(section, t3);
      append_dev(section, div3);
      append_dev(div3, t4);
      append_dev(div3, br0);
      append_dev(div3, t5);
      append_dev(div3, div2);
      mount_component(paper1, div2, null);
      append_dev(section, t6);
      append_dev(section, div6);
      append_dev(div6, t7);
      append_dev(div6, br1);
      append_dev(div6, t8);
      append_dev(div6, div4);
      mount_component(paper2, div4, null);
      append_dev(div6, t9);
      append_dev(div6, div5);
      mount_component(paper3, div5, null);
      append_dev(section, t10);
      append_dev(section, div8);
      append_dev(div8, t11);
      append_dev(div8, br2);
      append_dev(div8, t12);
      append_dev(div8, div7);
      mount_component(paper4, div7, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray$1(_ref, 1),
          dirty = _ref2[0];

      var paper0_changes = {};

      if (dirty &
      /*$$scope*/
      64) {
        paper0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      paper0.$set(paper0_changes);
      var paper1_changes = {};

      if (dirty &
      /*$$scope*/
      64) {
        paper1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      paper1.$set(paper1_changes);
      var paper2_changes = {};

      if (dirty &
      /*$$scope*/
      64) {
        paper2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      paper2.$set(paper2_changes);
      var paper3_changes = {};

      if (dirty &
      /*$$scope*/
      64) {
        paper3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      paper3.$set(paper3_changes);
      var paper4_changes = {};
      if (dirty &
      /*elevation*/
      1) paper4_changes.elevation =
      /*elevation*/
      ctx[0];
      if (dirty &
      /*color*/
      2) paper4_changes.color =
      /*color*/
      ctx[1];

      if (dirty &
      /*$$scope, color, elevation*/
      67) {
        paper4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      paper4.$set(paper4_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(paper0.$$.fragment, local);
      transition_in(paper1.$$.fragment, local);
      transition_in(paper2.$$.fragment, local);
      transition_in(paper3.$$.fragment, local);
      transition_in(paper4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(paper0.$$.fragment, local);
      transition_out(paper1.$$.fragment, local);
      transition_out(paper2.$$.fragment, local);
      transition_out(paper3.$$.fragment, local);
      transition_out(paper4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(paper0);
      destroy_component(paper1);
      destroy_component(paper2);
      destroy_component(paper3);
      destroy_component(paper4);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var elevation = 1;
  var color = "default";
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Paper> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Paper", $$slots, []);

  function slider_value_binding(value) {
    elevation = value;
    $$invalidate(0, elevation);
  }

  function radio_group_binding(value) {
    color = value;
    $$invalidate(1, color);
  }

  function radio_group_binding_1(value) {
    color = value;
    $$invalidate(1, color);
  }

  function radio_group_binding_2(value) {
    color = value;
    $$invalidate(1, color);
  }

  $$self.$capture_state = function () {
    return {
      Paper: Paper,
      Title: Title,
      Subtitle: Subtitle,
      Content: Content,
      Slider: Slider,
      Radio: Radio,
      FormField: FormField,
      elevation: elevation,
      color: color
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("elevation" in $$props) $$invalidate(0, elevation = $$props.elevation);
    if ("color" in $$props) $$invalidate(1, color = $$props.color);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [elevation, color, slider_value_binding, radio_group_binding, radio_group_binding_1, radio_group_binding_2];
}

var Paper_1 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits$1(Paper_1, _SvelteComponentDev);

  var _super = _createSuper$2(Paper_1);

  function Paper_1(options) {
    var _this;

    _classCallCheck$1(this, Paper_1);

    _this = _super.call(this, options);
    if (!document.getElementById("svelte-5yxukv-style")) add_css();
    init(_assertThisInitialized$1(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Paper_1",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return Paper_1;
}(SvelteComponentDev);

export default Paper_1;
