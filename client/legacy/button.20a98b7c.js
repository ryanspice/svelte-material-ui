import { Y as _inherits, Z as _classCallCheck, i as init, s as safe_not_equal, $ as _assertThisInitialized, d as dispatch_dev, a0 as _createClass, S as SvelteComponentDev, ah as create_slot, a1 as exclude, a2 as assign, a3 as forwardEventsBuilder, a4 as get_current_component, v as validate_slots, a7 as exclude_internal_props, ai as setContext, al as getContext, a8 as useActions, a9 as _getPrototypeOf, aa as _possibleConstructorReturn, g as element, k as claim_element, l as children, h as detach_dev, ab as set_attributes, p as add_location, r as insert_dev, ac as run_all, H as action_destroyer, ad as _slicedToArray, aj as get_slot_context, ak as get_slot_changes, ae as get_spread_update, af as is_function, L as transition_in, M as transition_out, X as styleInject, _ as _inherits$1, a as _classCallCheck$1, b as _assertThisInitialized$1, u as append_dev, ag as Button, az as Label, ay as Icon, ar as List, as as Item, at as Text, c as _getPrototypeOf$1, e as _possibleConstructorReturn$1, f as space, t as text, E as create_component, q as query_selector_all, j as claim_space, m as claim_text, F as claim_component, o as attr_dev, G as mount_component, U as set_data_dev, N as destroy_component, C as binding_callbacks } from './client.58596db2.js';
import { S as Separator } from './Separator.e76c7174.js';
import './MenuSurface.7d97699c.js';
import { M as Menu } from './bare.f9abc25d.js';
import './Menu.b27fd489.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "home/hperrin/repos/svelte-material-ui/packages/button/Group.svelte";

function create_fragment(ctx) {
  var div;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[6].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[5], null);
  var div_levels = [{
    class: "\n    smui-button__group\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*variant*/
    ctx[2] === "raised" ? "smui-button__group--raised" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[4], ["use", "class", "variant"])];
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
      ctx[3].call(null, div))];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        32) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[5], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[5], dirty, null));
        }
      }

      set_attributes(div, get_spread_update(div_levels, [dirty &
      /*className, variant*/
      6 && {
        class: "\n    smui-button__group\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*variant*/
        ctx[2] === "raised" ? "smui-button__group--raised" : "") + "\n  "
      }, dirty &
      /*exclude, $$props*/
      16 && exclude(
      /*$$props*/
      ctx[4], ["use", "class", "variant"])]));
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
      _$$props3$variant = _$$props3.variant,
      variant = _$$props3$variant === void 0 ? "text" : _$$props3$variant;
  var _$$props4 = $$props,
      _$$props4$$$slots = _$$props4.$$slots,
      $$slots = _$$props4$$$slots === void 0 ? {} : _$$props4$$$slots,
      $$scope = _$$props4.$$scope;
  validate_slots("Group", $$slots, ['default']);

  $$self.$set = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("variant" in $$new_props) $$invalidate(2, variant = $$new_props.variant);
    if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      setContext: setContext,
      getContext: getContext,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      forwardEvents: forwardEvents,
      use: use,
      className: className,
      variant: variant
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("variant" in $$props) $$invalidate(2, variant = $$new_props.variant);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [use, className, variant, forwardEvents, $$props, $$scope, $$slots];
}

var Group = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Group, _SvelteComponentDev);

  var _super = _createSuper(Group);

  function Group(options) {
    var _this;

    _classCallCheck(this, Group);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      variant: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Group",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Group, [{
    key: "use",
    get: function get() {
      throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "variant",
    get: function get() {
      throw new Error("<Group>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Group>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Group;
}(SvelteComponentDev);

function GroupItem(node) {
  node.classList.add('smui-button__group-item');
  return {
    destroy: function destroy() {
      node.classList.remove('smui-button__group-item');
    }
  };
}

var css_248z = ".button-shaped-round,.button-shaped-round.mdc-button--dense{border-radius:999px}.button-shaped-notch{--notchSize:8px;-webkit-clip-path:polygon(0 var(--notchSize),var(--notchSize) 0,calc(100% - var(--notchSize)) 0,100% var(--notchSize),100% calc(100% - var(--notchSize)),calc(100% - var(--notchSize)) 100%,var(--notchSize) 100%,0 calc(100% - var(--notchSize)));clip-path:polygon(0 var(--notchSize),var(--notchSize) 0,calc(100% - var(--notchSize)) 0,100% var(--notchSize),100% calc(100% - var(--notchSize)),calc(100% - var(--notchSize)) 100%,var(--notchSize) 100%,0 calc(100% - var(--notchSize)))}";
styleInject(css_248z);

function _createSuper$1(Derived) { return function () { var Super = _getPrototypeOf$1(Derived), result; if (_isNativeReflectConstruct$1()) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/routes/demo/button.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-18uebmb-style";
  style.textContent = ".svelte-18uebmb .myClass{text-decoration:underline !important}.svelte-18uebmb .mdc-button, .smui-button__group{margin-bottom:.4em}.svelte-18uebmb .smui-button__group .mdc-button{margin-bottom:0}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnN2ZWx0ZSIsInNvdXJjZXMiOlsiYnV0dG9uLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5CdXR0b24gLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uPlxuICA8aDI+QnV0dG9uPC9oMj5cblxuICA8ZGl2PlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+PExhYmVsPkRlZmF1bHQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZGlzYWJsZWQ+PExhYmVsPkRpc2FibGVkPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHJpcHBsZT17ZmFsc2V9PjxMYWJlbD5ObyBSaXBwbGU8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPjxMYWJlbD5SYWlzZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj48TGFiZWw+VW5lbGV2YXRlZDwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj48TGFiZWw+T3V0bGluZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gZGVuc2U+PExhYmVsPkRlbnNlPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IGNsYXNzPVwibXlDbGFzc1wiPjxMYWJlbD5XaXRoIGEgQ2xhc3M8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gaHJlZj1cImh0dHA6Ly9leGFtcGxlLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPjxMYWJlbD5MaW5rIEJ1dHRvbjwvTGFiZWw+PC9CdXR0b24+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+PExhYmVsPkljb248L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+PExhYmVsPlRyYWlsaW5nIEljb248L0xhYmVsPjxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj48L0J1dHRvbj5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBTZWNvbmRhcnkgY29sb3I6IDxiciAvPlxuICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT48TGFiZWw+RGVmYXVsdDwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IGRpc2FibGVkPjxMYWJlbD5EaXNhYmxlZDwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHJpcHBsZT17ZmFsc2V9PjxMYWJlbD5ObyBSaXBwbGU8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+PExhYmVsPlJhaXNlZDwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCI+PExhYmVsPlVuZWxldmF0ZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj48TGFiZWw+T3V0bGluZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBkZW5zZT48TGFiZWw+RGVuc2U8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBjbGFzcz1cIm15Q2xhc3NcIj48TGFiZWw+V2l0aCBhIENsYXNzPC9MYWJlbD48L0J1dHRvbj5cbiAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gaHJlZj1cImh0dHA6Ly9leGFtcGxlLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPjxMYWJlbD5MaW5rIEJ1dHRvbjwvTGFiZWw+PC9CdXR0b24+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PjxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj48TGFiZWw+SWNvbjwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PjxMYWJlbD5UcmFpbGluZyBJY29uPC9MYWJlbD48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+PC9CdXR0b24+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgQnV0dG9uIGdyb3VwczogPGJyIC8+XG4gICAgPEdyb3VwPlxuICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT48TGFiZWw+T25lPC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+PExhYmVsPlR3bzwvTGFiZWw+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PjxMYWJlbD5UaHJlZTwvTGFiZWw+PC9CdXR0b24+XG4gICAgPC9Hcm91cD5cbiAgICA8R3JvdXAgdmFyaWFudD1cInJhaXNlZFwiPlxuICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwicmFpc2VkXCI+PExhYmVsPk9uZTwvTGFiZWw+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJyYWlzZWRcIj48TGFiZWw+VHdvPC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPjxMYWJlbD5UaHJlZTwvTGFiZWw+PC9CdXR0b24+XG4gICAgPC9Hcm91cD5cbiAgICA8R3JvdXAgdmFyaWFudD1cInVuZWxldmF0ZWRcIj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj48TGFiZWw+T25lPC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj48TGFiZWw+VHdvPC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIj48TGFiZWw+VGhyZWU8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDwvR3JvdXA+XG4gICAgPEdyb3VwIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxuICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIj48TGFiZWw+T25lPC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCI+PExhYmVsPlR3bzwvTGFiZWw+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPjxMYWJlbD5UaHJlZTwvTGFiZWw+PC9CdXR0b24+XG4gICAgPC9Hcm91cD5cblxuICAgIDxiciAvPiA8YnIvPlxuXG4gICAgPEdyb3VwIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtcIj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT1cImZsZXgtZ3JvdzogMztcIj48TGFiZWw+UHJpbWFyeTwvTGFiZWw+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJ1bmVsZXZhdGVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBzdHlsZT1cImZsZXgtZ3JvdzogMTtcIj48TGFiZWw+U2Vjb25kYXJ5PC9MYWJlbD48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIHN0eWxlPVwiZmxleC1ncm93OiAxO1wiPjxMYWJlbD5TZWNvbmRhcnk8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDwvR3JvdXA+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgU3BsaXQgYnV0dG9ucyB1c2luZyBhIGJ1dHRvbiBncm91cDogPGJyIC8+XG4gICAgPEdyb3VwIHZhcmlhbnQ9XCJyYWlzZWRcIj5cbiAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiPjxMYWJlbD5EbyB0aGUgdGhpbmc8L0xhYmVsPjwvQnV0dG9uPlxuICAgICAgPGRpdiB1c2U6R3JvdXBJdGVtPlxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBtZW51LnNldE9wZW4odHJ1ZSl9IHZhcmlhbnQ9XCJyYWlzZWRcIiBzdHlsZT1cInBhZGRpbmc6IDA7IG1pbi13aWR0aDogMzZweDtcIj5cbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+YXJyb3dfZHJvcF9kb3duPC9JY29uPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPE1lbnUgYmluZDp0aGlzPXttZW51fSBhbmNob3JDb3JuZXI9XCJUT1BfTEVGVFwiPlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWQrK30+PFRleHQ+VGhpbmcgMTwvVGV4dD48L0l0ZW0+XG4gICAgICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZCsrfT48VGV4dD5UaGluZyAyPC9UZXh0PjwvSXRlbT5cbiAgICAgICAgICAgIDxTZXBhcmF0b3IgLz5cbiAgICAgICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkKyt9PjxUZXh0PlRoaW5nIDM8L1RleHQ+PC9JdGVtPlxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9kaXY+XG4gICAgPC9Hcm91cD5cbiAgICA8R3JvdXAgdmFyaWFudD1cIm91dGxpbmVkXCI+XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPjxMYWJlbD5EbyB0aGUgdGhpbmc8L0xhYmVsPjwvQnV0dG9uPlxuICAgICAgPGRpdiB1c2U6R3JvdXBJdGVtPlxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBtZW51Mi5zZXRPcGVuKHRydWUpfSB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT1cInBhZGRpbmc6IDA7IG1pbi13aWR0aDogMzZweDtcIj5cbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+YXJyb3dfZHJvcF9kb3duPC9JY29uPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPE1lbnUgYmluZDp0aGlzPXttZW51Mn0gYW5jaG9yQ29ybmVyPVwiVE9QX0xFRlRcIj5cbiAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiBjbGlja2VkKyt9PjxUZXh0PlRoaW5nIDE8L1RleHQ+PC9JdGVtPlxuICAgICAgICAgICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IGNsaWNrZWQrK30+PFRleHQ+VGhpbmcgMjwvVGV4dD48L0l0ZW0+XG4gICAgICAgICAgICA8U2VwYXJhdG9yIC8+XG4gICAgICAgICAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gY2xpY2tlZCsrfT48VGV4dD5UaGluZyAzPC9UZXh0PjwvSXRlbT5cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIDwvZGl2PlxuICAgIDwvR3JvdXA+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgQ3JlYXRpbmcgcm91bmRlZCBidXR0b25zIHdpdGggU2FzcyBtaXhpbnM6IDxiciAvPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiIGNsYXNzPVwiYnV0dG9uLXNoYXBlZC1yb3VuZFwiPjxMYWJlbD5SYWlzZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIiBjbGFzcz1cImJ1dHRvbi1zaGFwZWQtcm91bmRcIj48TGFiZWw+VW5lbGV2YXRlZDwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzcz1cImJ1dHRvbi1zaGFwZWQtcm91bmRcIj48TGFiZWw+T3V0bGluZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIiBjbGFzcz1cImJ1dHRvbi1zaGFwZWQtcm91bmRcIj48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+PExhYmVsPkljb248L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3M9XCJidXR0b24tc2hhcGVkLXJvdW5kXCI+PExhYmVsPlRyYWlsaW5nIEljb248L0xhYmVsPjxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj48L0J1dHRvbj5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICBDcmVhdGluZyBub3RjaGVkIGJ1dHRvbnMgd2l0aCB2YW5pbGxhIFNhc3M6IDxiciAvPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInJhaXNlZFwiIGNsYXNzPVwiYnV0dG9uLXNoYXBlZC1ub3RjaFwiPjxMYWJlbD5SYWlzZWQ8L0xhYmVsPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gdmFyaWFudD1cInVuZWxldmF0ZWRcIiBjbGFzcz1cImJ1dHRvbi1zaGFwZWQtbm90Y2hcIj48TGFiZWw+VW5lbGV2YXRlZDwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwidW5lbGV2YXRlZFwiIGNsYXNzPVwiYnV0dG9uLXNoYXBlZC1ub3RjaFwiPjxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZTwvSWNvbj48TGFiZWw+SWNvbjwvTGFiZWw+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSB2YXJpYW50PVwidW5lbGV2YXRlZFwiIGNsYXNzPVwiYnV0dG9uLXNoYXBlZC1ub3RjaFwiPjxMYWJlbD5UcmFpbGluZyBJY29uPC9MYWJlbD48SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+PC9CdXR0b24+XG4gIDwvZGl2PlxuXG4gIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5DbGlja2VkOiB7Y2xpY2tlZH08L3ByZT5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0ICcuL2J1dHRvbi5zY3NzJztcbiAgaW1wb3J0IEJ1dHRvbiwge0dyb3VwLCBHcm91cEl0ZW0sIExhYmVsLCBJY29ufSBmcm9tICdAc211aS9idXR0b24nO1xuICBpbXBvcnQgTWVudSBmcm9tICdAc211aS9tZW51JztcbiAgaW1wb3J0IExpc3QsIHtJdGVtLCBTZXBhcmF0b3IsIFRleHR9IGZyb20gJ0BzbXVpL2xpc3QnO1xuXG4gIGxldCBjbGlja2VkID0gMDtcbiAgbGV0IG1lbnU7XG4gIGxldCBtZW51Mjtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICogOmdsb2JhbCgubXlDbGFzcykge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAqIDpnbG9iYWwoLm1kYy1idXR0b24sIC5zbXVpLWJ1dHRvbl9fZ3JvdXApIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNGVtO1xuICB9XG5cbiAgKiA6Z2xvYmFsKC5zbXVpLWJ1dHRvbl9fZ3JvdXAgLm1kYy1idXR0b24pIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SUUsZUFBQyxDQUFDLEFBQVEsUUFBUSxBQUFFLENBQUMsQUFDbkIsZUFBZSxDQUFFLFNBQVMsQ0FBQyxVQUFVLEFBQ3ZDLENBQUMsQUFFRCxlQUFDLENBQUMsQUFBUSxnQ0FBZ0MsQUFBRSxDQUFDLEFBQzNDLGFBQWEsQ0FBRSxJQUFJLEFBQ3JCLENBQUMsQUFFRCxlQUFDLENBQUMsQUFBUSwrQkFBK0IsQUFBRSxDQUFDLEFBQzFDLGFBQWEsQ0FBRSxDQUFDLEFBQ2xCLENBQUMifQ== */";
  append_dev(document.head, style);
} // (9:39) <Label>


function create_default_slot_130(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Default");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Default");
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
    id: create_default_slot_130.name,
    type: "slot",
    source: "(9:39) <Label>",
    ctx: ctx
  });
  return block;
} // (9:4) <Button on:click={() => clicked++}>


function create_default_slot_129(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_130]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_129.name,
    type: "slot",
    source: "(9:4) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (10:48) <Label>


function create_default_slot_128(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Disabled");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Disabled");
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
    id: create_default_slot_128.name,
    type: "slot",
    source: "(10:48) <Label>",
    ctx: ctx
  });
  return block;
} // (10:4) <Button on:click={() => clicked++} disabled>


function create_default_slot_127(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_128]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_127.name,
    type: "slot",
    source: "(10:4) <Button on:click={() => clicked++} disabled>",
    ctx: ctx
  });
  return block;
} // (11:54) <Label>


function create_default_slot_126(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("No Ripple");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "No Ripple");
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
    id: create_default_slot_126.name,
    type: "slot",
    source: "(11:54) <Label>",
    ctx: ctx
  });
  return block;
} // (11:4) <Button on:click={() => clicked++} ripple={false}>


function create_default_slot_125(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_126]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_125.name,
    type: "slot",
    source: "(11:4) <Button on:click={() => clicked++} ripple={false}>",
    ctx: ctx
  });
  return block;
} // (12:56) <Label>


function create_default_slot_124(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Raised");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Raised");
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
    id: create_default_slot_124.name,
    type: "slot",
    source: "(12:56) <Label>",
    ctx: ctx
  });
  return block;
} // (12:4) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_123(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_124]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_123.name,
    type: "slot",
    source: "(12:4) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (13:60) <Label>


function create_default_slot_122(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Unelevated");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Unelevated");
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
    id: create_default_slot_122.name,
    type: "slot",
    source: "(13:60) <Label>",
    ctx: ctx
  });
  return block;
} // (13:4) <Button on:click={() => clicked++} variant="unelevated">


function create_default_slot_121(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_122]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_121.name,
    type: "slot",
    source: "(13:4) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
    ctx: ctx
  });
  return block;
} // (14:58) <Label>


function create_default_slot_120(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Outlined");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Outlined");
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
    id: create_default_slot_120.name,
    type: "slot",
    source: "(14:58) <Label>",
    ctx: ctx
  });
  return block;
} // (14:4) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_119(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_120]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_119.name,
    type: "slot",
    source: "(14:4) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (15:45) <Label>


function create_default_slot_118(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Dense");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Dense");
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
    id: create_default_slot_118.name,
    type: "slot",
    source: "(15:45) <Label>",
    ctx: ctx
  });
  return block;
} // (15:4) <Button on:click={() => clicked++} dense>


function create_default_slot_117(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_118]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_117.name,
    type: "slot",
    source: "(15:4) <Button on:click={() => clicked++} dense>",
    ctx: ctx
  });
  return block;
} // (16:55) <Label>


function create_default_slot_116(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("With a Class");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "With a Class");
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
    id: create_default_slot_116.name,
    type: "slot",
    source: "(16:55) <Label>",
    ctx: ctx
  });
  return block;
} // (16:4) <Button on:click={() => clicked++} class="myClass">


function create_default_slot_115(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_116]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_115.name,
    type: "slot",
    source: "(16:4) <Button on:click={() => clicked++} class=\\\"myClass\\\">",
    ctx: ctx
  });
  return block;
} // (17:81) <Label>


function create_default_slot_114(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Link Button");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Link Button");
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
    id: create_default_slot_114.name,
    type: "slot",
    source: "(17:81) <Label>",
    ctx: ctx
  });
  return block;
} // (17:4) <Button on:click={() => clicked++} href="http://example.com" target="_blank">


function create_default_slot_113(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_114]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_113.name,
    type: "slot",
    source: "(17:4) <Button on:click={() => clicked++} href=\\\"http://example.com\\\" target=\\\"_blank\\\">",
    ctx: ctx
  });
  return block;
} // (21:39) <Icon class="material-icons">


function create_default_slot_112(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_112.name,
    type: "slot",
    source: "(21:39) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (21:83) <Label>


function create_default_slot_111(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Icon");
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
    id: create_default_slot_111.name,
    type: "slot",
    source: "(21:83) <Label>",
    ctx: ctx
  });
  return block;
} // (21:4) <Button on:click={() => clicked++}>


function create_default_slot_110(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_112]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_111]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_110.name,
    type: "slot",
    source: "(21:4) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (22:39) <Label>


function create_default_slot_109(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Trailing Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Trailing Icon");
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
    id: create_default_slot_109.name,
    type: "slot",
    source: "(22:39) <Label>",
    ctx: ctx
  });
  return block;
} // (22:67) <Icon class="material-icons">


function create_default_slot_108(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_108.name,
    type: "slot",
    source: "(22:67) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (22:4) <Button on:click={() => clicked++}>


function create_default_slot_107(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_109]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_108]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var icon_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_107.name,
    type: "slot",
    source: "(22:4) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (27:57) <Label>


function create_default_slot_106(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Default");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Default");
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
    id: create_default_slot_106.name,
    type: "slot",
    source: "(27:57) <Label>",
    ctx: ctx
  });
  return block;
} // (27:4) <Button color="secondary" on:click={() => clicked++}>


function create_default_slot_105(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_106]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_105.name,
    type: "slot",
    source: "(27:4) <Button color=\\\"secondary\\\" on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (28:66) <Label>


function create_default_slot_104(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Disabled");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Disabled");
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
    id: create_default_slot_104.name,
    type: "slot",
    source: "(28:66) <Label>",
    ctx: ctx
  });
  return block;
} // (28:4) <Button color="secondary" on:click={() => clicked++} disabled>


function create_default_slot_103(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_104]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_103.name,
    type: "slot",
    source: "(28:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} disabled>",
    ctx: ctx
  });
  return block;
} // (29:72) <Label>


function create_default_slot_102(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("No Ripple");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "No Ripple");
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
    id: create_default_slot_102.name,
    type: "slot",
    source: "(29:72) <Label>",
    ctx: ctx
  });
  return block;
} // (29:4) <Button color="secondary" on:click={() => clicked++} ripple={false}>


function create_default_slot_101(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_102]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_101.name,
    type: "slot",
    source: "(29:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} ripple={false}>",
    ctx: ctx
  });
  return block;
} // (30:74) <Label>


function create_default_slot_100(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Raised");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Raised");
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
    id: create_default_slot_100.name,
    type: "slot",
    source: "(30:74) <Label>",
    ctx: ctx
  });
  return block;
} // (30:4) <Button color="secondary" on:click={() => clicked++} variant="raised">


function create_default_slot_99(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_100]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_99.name,
    type: "slot",
    source: "(30:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (31:78) <Label>


function create_default_slot_98(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Unelevated");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Unelevated");
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
    id: create_default_slot_98.name,
    type: "slot",
    source: "(31:78) <Label>",
    ctx: ctx
  });
  return block;
} // (31:4) <Button color="secondary" on:click={() => clicked++} variant="unelevated">


function create_default_slot_97(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_98]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_97.name,
    type: "slot",
    source: "(31:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} variant=\\\"unelevated\\\">",
    ctx: ctx
  });
  return block;
} // (32:76) <Label>


function create_default_slot_96(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Outlined");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Outlined");
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
    id: create_default_slot_96.name,
    type: "slot",
    source: "(32:76) <Label>",
    ctx: ctx
  });
  return block;
} // (32:4) <Button color="secondary" on:click={() => clicked++} variant="outlined">


function create_default_slot_95(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_96]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_95.name,
    type: "slot",
    source: "(32:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (33:63) <Label>


function create_default_slot_94(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Dense");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Dense");
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
    id: create_default_slot_94.name,
    type: "slot",
    source: "(33:63) <Label>",
    ctx: ctx
  });
  return block;
} // (33:4) <Button color="secondary" on:click={() => clicked++} dense>


function create_default_slot_93(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_94]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_93.name,
    type: "slot",
    source: "(33:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} dense>",
    ctx: ctx
  });
  return block;
} // (34:73) <Label>


function create_default_slot_92(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("With a Class");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "With a Class");
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
    id: create_default_slot_92.name,
    type: "slot",
    source: "(34:73) <Label>",
    ctx: ctx
  });
  return block;
} // (34:4) <Button color="secondary" on:click={() => clicked++} class="myClass">


function create_default_slot_91(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_92]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_91.name,
    type: "slot",
    source: "(34:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} class=\\\"myClass\\\">",
    ctx: ctx
  });
  return block;
} // (35:99) <Label>


function create_default_slot_90(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Link Button");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Link Button");
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
    id: create_default_slot_90.name,
    type: "slot",
    source: "(35:99) <Label>",
    ctx: ctx
  });
  return block;
} // (35:4) <Button color="secondary" on:click={() => clicked++} href="http://example.com" target="_blank">


function create_default_slot_89(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_90]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_89.name,
    type: "slot",
    source: "(35:4) <Button color=\\\"secondary\\\" on:click={() => clicked++} href=\\\"http://example.com\\\" target=\\\"_blank\\\">",
    ctx: ctx
  });
  return block;
} // (39:57) <Icon class="material-icons">


function create_default_slot_88(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_88.name,
    type: "slot",
    source: "(39:57) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (39:101) <Label>


function create_default_slot_87(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Icon");
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
    id: create_default_slot_87.name,
    type: "slot",
    source: "(39:101) <Label>",
    ctx: ctx
  });
  return block;
} // (39:4) <Button color="secondary" on:click={() => clicked++}>


function create_default_slot_86(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_88]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_87]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_86.name,
    type: "slot",
    source: "(39:4) <Button color=\\\"secondary\\\" on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (40:57) <Label>


function create_default_slot_85(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Trailing Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Trailing Icon");
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
    id: create_default_slot_85.name,
    type: "slot",
    source: "(40:57) <Label>",
    ctx: ctx
  });
  return block;
} // (40:85) <Icon class="material-icons">


function create_default_slot_84(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_84.name,
    type: "slot",
    source: "(40:85) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (40:4) <Button color="secondary" on:click={() => clicked++}>


function create_default_slot_83(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_85]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_84]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var icon_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_83.name,
    type: "slot",
    source: "(40:4) <Button color=\\\"secondary\\\" on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (46:41) <Label>


function create_default_slot_82(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("One");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "One");
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
    id: create_default_slot_82.name,
    type: "slot",
    source: "(46:41) <Label>",
    ctx: ctx
  });
  return block;
} // (46:6) <Button on:click={() => clicked++}>


function create_default_slot_81(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_82]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_81.name,
    type: "slot",
    source: "(46:6) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (47:41) <Label>


function create_default_slot_80(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Two");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Two");
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
    id: create_default_slot_80.name,
    type: "slot",
    source: "(47:41) <Label>",
    ctx: ctx
  });
  return block;
} // (47:6) <Button on:click={() => clicked++}>


function create_default_slot_79(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_80]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_79.name,
    type: "slot",
    source: "(47:6) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (48:41) <Label>


function create_default_slot_78(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Three");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Three");
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
    id: create_default_slot_78.name,
    type: "slot",
    source: "(48:41) <Label>",
    ctx: ctx
  });
  return block;
} // (48:6) <Button on:click={() => clicked++}>


function create_default_slot_77(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_78]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_77.name,
    type: "slot",
    source: "(48:6) <Button on:click={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (45:4) <Group>


function create_default_slot_76(ctx) {
  var t0;
  var t1;
  var current;
  var button0 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_81]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_22*/
  ctx[25]);
  var button1 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_79]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_23*/
  ctx[26]);
  var button2 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_77]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_24*/
  ctx[27]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(button2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var button2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(button1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_76.name,
    type: "slot",
    source: "(45:4) <Group>",
    ctx: ctx
  });
  return block;
} // (51:58) <Label>


function create_default_slot_75(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("One");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "One");
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
    id: create_default_slot_75.name,
    type: "slot",
    source: "(51:58) <Label>",
    ctx: ctx
  });
  return block;
} // (51:6) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_74(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_75]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_74.name,
    type: "slot",
    source: "(51:6) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (52:58) <Label>


function create_default_slot_73(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Two");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Two");
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
    id: create_default_slot_73.name,
    type: "slot",
    source: "(52:58) <Label>",
    ctx: ctx
  });
  return block;
} // (52:6) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_72(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_73]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_72.name,
    type: "slot",
    source: "(52:6) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (53:58) <Label>


function create_default_slot_71(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Three");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Three");
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
    id: create_default_slot_71.name,
    type: "slot",
    source: "(53:58) <Label>",
    ctx: ctx
  });
  return block;
} // (53:6) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_70(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_71]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_70.name,
    type: "slot",
    source: "(53:6) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (50:4) <Group variant="raised">


function create_default_slot_69(ctx) {
  var t0;
  var t1;
  var current;
  var button0 = new Button({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_74]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_25*/
  ctx[28]);
  var button1 = new Button({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_72]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_26*/
  ctx[29]);
  var button2 = new Button({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_70]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_27*/
  ctx[30]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(button2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var button2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(button1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_69.name,
    type: "slot",
    source: "(50:4) <Group variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (56:62) <Label>


function create_default_slot_68(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("One");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "One");
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
    id: create_default_slot_68.name,
    type: "slot",
    source: "(56:62) <Label>",
    ctx: ctx
  });
  return block;
} // (56:6) <Button on:click={() => clicked++} variant="unelevated">


function create_default_slot_67(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_68]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_67.name,
    type: "slot",
    source: "(56:6) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
    ctx: ctx
  });
  return block;
} // (57:62) <Label>


function create_default_slot_66(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Two");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Two");
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
    id: create_default_slot_66.name,
    type: "slot",
    source: "(57:62) <Label>",
    ctx: ctx
  });
  return block;
} // (57:6) <Button on:click={() => clicked++} variant="unelevated">


function create_default_slot_65(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_66]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_65.name,
    type: "slot",
    source: "(57:6) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
    ctx: ctx
  });
  return block;
} // (58:62) <Label>


function create_default_slot_64(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Three");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Three");
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
    id: create_default_slot_64.name,
    type: "slot",
    source: "(58:62) <Label>",
    ctx: ctx
  });
  return block;
} // (58:6) <Button on:click={() => clicked++} variant="unelevated">


function create_default_slot_63(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_64]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_63.name,
    type: "slot",
    source: "(58:6) <Button on:click={() => clicked++} variant=\\\"unelevated\\\">",
    ctx: ctx
  });
  return block;
} // (55:4) <Group variant="unelevated">


function create_default_slot_62(ctx) {
  var t0;
  var t1;
  var current;
  var button0 = new Button({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_67]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_28*/
  ctx[31]);
  var button1 = new Button({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_65]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_29*/
  ctx[32]);
  var button2 = new Button({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_63]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_30*/
  ctx[33]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(button2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var button2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(button1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_62.name,
    type: "slot",
    source: "(55:4) <Group variant=\\\"unelevated\\\">",
    ctx: ctx
  });
  return block;
} // (61:60) <Label>


function create_default_slot_61(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("One");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "One");
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
    id: create_default_slot_61.name,
    type: "slot",
    source: "(61:60) <Label>",
    ctx: ctx
  });
  return block;
} // (61:6) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_60(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_61]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_60.name,
    type: "slot",
    source: "(61:6) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (62:60) <Label>


function create_default_slot_59(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Two");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Two");
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
    id: create_default_slot_59.name,
    type: "slot",
    source: "(62:60) <Label>",
    ctx: ctx
  });
  return block;
} // (62:6) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_58(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_59]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_58.name,
    type: "slot",
    source: "(62:6) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (63:60) <Label>


function create_default_slot_57(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Three");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Three");
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
    id: create_default_slot_57.name,
    type: "slot",
    source: "(63:60) <Label>",
    ctx: ctx
  });
  return block;
} // (63:6) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_56(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_57]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_56.name,
    type: "slot",
    source: "(63:6) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (60:4) <Group variant="outlined">


function create_default_slot_55(ctx) {
  var t0;
  var t1;
  var current;
  var button0 = new Button({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_60]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_31*/
  ctx[34]);
  var button1 = new Button({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_58]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_32*/
  ctx[35]);
  var button2 = new Button({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_56]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_33*/
  ctx[36]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(button2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var button2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(button1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_55.name,
    type: "slot",
    source: "(60:4) <Group variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (69:100) <Label>


function create_default_slot_54(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Primary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Primary");
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
    id: create_default_slot_54.name,
    type: "slot",
    source: "(69:100) <Label>",
    ctx: ctx
  });
  return block;
} // (69:6) <Button on:click={() => clicked++} variant="unelevated" color="primary" style="flex-grow: 3;">


function create_default_slot_53(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_54]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_53.name,
    type: "slot",
    source: "(69:6) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" color=\\\"primary\\\" style=\\\"flex-grow: 3;\\\">",
    ctx: ctx
  });
  return block;
} // (70:102) <Label>


function create_default_slot_52(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Secondary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Secondary");
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
    id: create_default_slot_52.name,
    type: "slot",
    source: "(70:102) <Label>",
    ctx: ctx
  });
  return block;
} // (70:6) <Button on:click={() => clicked++} variant="unelevated" color="secondary" style="flex-grow: 1;">


function create_default_slot_51(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_52]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_51.name,
    type: "slot",
    source: "(70:6) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" color=\\\"secondary\\\" style=\\\"flex-grow: 1;\\\">",
    ctx: ctx
  });
  return block;
} // (71:102) <Label>


function create_default_slot_50(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Secondary");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Secondary");
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
    id: create_default_slot_50.name,
    type: "slot",
    source: "(71:102) <Label>",
    ctx: ctx
  });
  return block;
} // (71:6) <Button on:click={() => clicked++} variant="unelevated" color="secondary" style="flex-grow: 1;">


function create_default_slot_49(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_50]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_49.name,
    type: "slot",
    source: "(71:6) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" color=\\\"secondary\\\" style=\\\"flex-grow: 1;\\\">",
    ctx: ctx
  });
  return block;
} // (68:4) <Group variant="outlined" style="display: flex;">


function create_default_slot_48(ctx) {
  var t0;
  var t1;
  var current;
  var button0 = new Button({
    props: {
      variant: "unelevated",
      color: "primary",
      style: "flex-grow: 3;",
      $$slots: {
        default: [create_default_slot_53]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_34*/
  ctx[37]);
  var button1 = new Button({
    props: {
      variant: "unelevated",
      color: "secondary",
      style: "flex-grow: 1;",
      $$slots: {
        default: [create_default_slot_51]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_35*/
  ctx[38]);
  var button2 = new Button({
    props: {
      variant: "unelevated",
      color: "secondary",
      style: "flex-grow: 1;",
      $$slots: {
        default: [create_default_slot_49]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_36*/
  ctx[39]);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(button2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var button2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(button1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(button2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_48.name,
    type: "slot",
    source: "(68:4) <Group variant=\\\"outlined\\\" style=\\\"display: flex;\\\">",
    ctx: ctx
  });
  return block;
} // (78:58) <Label>


function create_default_slot_47(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Do the thing");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Do the thing");
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
    id: create_default_slot_47.name,
    type: "slot",
    source: "(78:58) <Label>",
    ctx: ctx
  });
  return block;
} // (78:6) <Button on:click={() => clicked++} variant="raised">


function create_default_slot_46(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_47]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_46.name,
    type: "slot",
    source: "(78:6) <Button on:click={() => clicked++} variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (81:10) <Icon class="material-icons" style="margin: 0;">


function create_default_slot_45(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("arrow_drop_down");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "arrow_drop_down");
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
    id: create_default_slot_45.name,
    type: "slot",
    source: "(81:10) <Icon class=\\\"material-icons\\\" style=\\\"margin: 0;\\\">",
    ctx: ctx
  });
  return block;
} // (80:8) <Button on:click={() => menu.setOpen(true)} variant="raised" style="padding: 0; min-width: 36px;">


function create_default_slot_44(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      style: "margin: 0;",
      $$slots: {
        default: [create_default_slot_45]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_44.name,
    type: "slot",
    source: "(80:8) <Button on:click={() => menu.setOpen(true)} variant=\\\"raised\\\" style=\\\"padding: 0; min-width: 36px;\\\">",
    ctx: ctx
  });
  return block;
} // (85:51) <Text>


function create_default_slot_43(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 1");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 1");
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
    id: create_default_slot_43.name,
    type: "slot",
    source: "(85:51) <Text>",
    ctx: ctx
  });
  return block;
} // (85:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_42(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_43]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_42.name,
    type: "slot",
    source: "(85:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (86:51) <Text>


function create_default_slot_41(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 2");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 2");
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
    id: create_default_slot_41.name,
    type: "slot",
    source: "(86:51) <Text>",
    ctx: ctx
  });
  return block;
} // (86:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_40(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_41]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_40.name,
    type: "slot",
    source: "(86:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (88:51) <Text>


function create_default_slot_39(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 3");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 3");
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
    id: create_default_slot_39.name,
    type: "slot",
    source: "(88:51) <Text>",
    ctx: ctx
  });
  return block;
} // (88:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_38(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_39]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_38.name,
    type: "slot",
    source: "(88:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (84:10) <List>


function create_default_slot_37(ctx) {
  var t0;
  var t1;
  var t2;
  var current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_42]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action",
  /*SMUI_action_handler*/
  ctx[42]);
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_40]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action",
  /*SMUI_action_handler_1*/
  ctx[43]);
  var separator = new Separator({
    $$inline: true
  });
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_38]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("SMUI:action",
  /*SMUI_action_handler_2*/
  ctx[44]);
  var block = {
    c: function create() {
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(item1.$$.fragment);
      t1 = space();
      create_component(separator.$$.fragment);
      t2 = space();
      create_component(item2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(separator.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(item2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(separator, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(separator.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(separator.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(item1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(separator, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(item2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_37.name,
    type: "slot",
    source: "(84:10) <List>",
    ctx: ctx
  });
  return block;
} // (83:8) <Menu bind:this={menu} anchorCorner="TOP_LEFT">


function create_default_slot_36(ctx) {
  var current;
  var list = new List({
    props: {
      $$slots: {
        default: [create_default_slot_37]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(list.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(list.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var list_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[1] &
      /*$$scope*/
      1073741824) {
        list_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list.$set(list_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(list, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_36.name,
    type: "slot",
    source: "(83:8) <Menu bind:this={menu} anchorCorner=\\\"TOP_LEFT\\\">",
    ctx: ctx
  });
  return block;
} // (77:4) <Group variant="raised">


function create_default_slot_35(ctx) {
  var t0;
  var div;
  var t1;
  var GroupItem_action;
  var current;
  var dispose;
  var button0 = new Button({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_46]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_37*/
  ctx[40]);
  var button1 = new Button({
    props: {
      variant: "raised",
      style: "padding: 0; min-width: 36px;",
      $$slots: {
        default: [create_default_slot_44]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_38*/
  ctx[41]);
  var menu_1_props = {
    anchorCorner: "TOP_LEFT",
    $$slots: {
      default: [create_default_slot_36]
    },
    $$scope: {
      ctx: ctx
    }
  };
  var menu_1 = new Menu({
    props: menu_1_props,
    $$inline: true
  });
  /*menu_1_binding*/

  ctx[45](menu_1);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      div = element("div");
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(menu_1.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      claim_component(button1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(menu_1.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "svelte-18uebmb");
      add_location(div, file$1, 78, 6, 4331);
    },
    m: function mount(target, anchor, remount) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      mount_component(button1, div, null);
      append_dev(div, t1);
      mount_component(menu_1, div, null);
      current = true;
      if (remount) dispose();
      dispose = action_destroyer(GroupItem_action = GroupItem.call(null, div));
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var menu_1_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[1] &
      /*$$scope*/
      1073741824) {
        menu_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      menu_1.$set(menu_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(menu_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(menu_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
      destroy_component(button1);
      /*menu_1_binding*/

      ctx[45](null);
      destroy_component(menu_1);
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_35.name,
    type: "slot",
    source: "(77:4) <Group variant=\\\"raised\\\">",
    ctx: ctx
  });
  return block;
} // (94:60) <Label>


function create_default_slot_34(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Do the thing");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Do the thing");
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
    id: create_default_slot_34.name,
    type: "slot",
    source: "(94:60) <Label>",
    ctx: ctx
  });
  return block;
} // (94:6) <Button on:click={() => clicked++} variant="outlined">


function create_default_slot_33(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_34]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_33.name,
    type: "slot",
    source: "(94:6) <Button on:click={() => clicked++} variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (97:10) <Icon class="material-icons" style="margin: 0;">


function create_default_slot_32(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("arrow_drop_down");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "arrow_drop_down");
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
    id: create_default_slot_32.name,
    type: "slot",
    source: "(97:10) <Icon class=\\\"material-icons\\\" style=\\\"margin: 0;\\\">",
    ctx: ctx
  });
  return block;
} // (96:8) <Button on:click={() => menu2.setOpen(true)} variant="outlined" style="padding: 0; min-width: 36px;">


function create_default_slot_31(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      style: "margin: 0;",
      $$slots: {
        default: [create_default_slot_32]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_31.name,
    type: "slot",
    source: "(96:8) <Button on:click={() => menu2.setOpen(true)} variant=\\\"outlined\\\" style=\\\"padding: 0; min-width: 36px;\\\">",
    ctx: ctx
  });
  return block;
} // (101:51) <Text>


function create_default_slot_30(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 1");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 1");
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
    id: create_default_slot_30.name,
    type: "slot",
    source: "(101:51) <Text>",
    ctx: ctx
  });
  return block;
} // (101:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_29(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_30]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_29.name,
    type: "slot",
    source: "(101:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (102:51) <Text>


function create_default_slot_28(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 2");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 2");
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
    id: create_default_slot_28.name,
    type: "slot",
    source: "(102:51) <Text>",
    ctx: ctx
  });
  return block;
} // (102:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_27(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_28]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_27.name,
    type: "slot",
    source: "(102:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (104:51) <Text>


function create_default_slot_26(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Thing 3");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Thing 3");
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
    id: create_default_slot_26.name,
    type: "slot",
    source: "(104:51) <Text>",
    ctx: ctx
  });
  return block;
} // (104:12) <Item on:SMUI:action={() => clicked++}>


function create_default_slot_25(ctx) {
  var current;
  var text_1 = new Text({
    props: {
      $$slots: {
        default: [create_default_slot_26]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_25.name,
    type: "slot",
    source: "(104:12) <Item on:SMUI:action={() => clicked++}>",
    ctx: ctx
  });
  return block;
} // (100:10) <List>


function create_default_slot_24(ctx) {
  var t0;
  var t1;
  var t2;
  var current;
  var item0 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_29]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item0.$on("SMUI:action",
  /*SMUI_action_handler_3*/
  ctx[48]);
  var item1 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_27]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item1.$on("SMUI:action",
  /*SMUI_action_handler_4*/
  ctx[49]);
  var separator = new Separator({
    $$inline: true
  });
  var item2 = new Item({
    props: {
      $$slots: {
        default: [create_default_slot_25]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  item2.$on("SMUI:action",
  /*SMUI_action_handler_5*/
  ctx[50]);
  var block = {
    c: function create() {
      create_component(item0.$$.fragment);
      t0 = space();
      create_component(item1.$$.fragment);
      t1 = space();
      create_component(separator.$$.fragment);
      t2 = space();
      create_component(item2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(item0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(item1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(separator.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(item2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(item0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(item1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(separator, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(item2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var item0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        item0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item0.$set(item0_changes);
      var item1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        item1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item1.$set(item1_changes);
      var item2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        item2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item2.$set(item2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item0.$$.fragment, local);
      transition_in(item1.$$.fragment, local);
      transition_in(separator.$$.fragment, local);
      transition_in(item2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item0.$$.fragment, local);
      transition_out(item1.$$.fragment, local);
      transition_out(separator.$$.fragment, local);
      transition_out(item2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(item0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(item1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(separator, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(item2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_24.name,
    type: "slot",
    source: "(100:10) <List>",
    ctx: ctx
  });
  return block;
} // (99:8) <Menu bind:this={menu2} anchorCorner="TOP_LEFT">


function create_default_slot_23(ctx) {
  var current;
  var list = new List({
    props: {
      $$slots: {
        default: [create_default_slot_24]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(list.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(list.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var list_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[1] &
      /*$$scope*/
      1073741824) {
        list_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list.$set(list_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(list, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_23.name,
    type: "slot",
    source: "(99:8) <Menu bind:this={menu2} anchorCorner=\\\"TOP_LEFT\\\">",
    ctx: ctx
  });
  return block;
} // (93:4) <Group variant="outlined">


function create_default_slot_22(ctx) {
  var t0;
  var div;
  var t1;
  var GroupItem_action;
  var current;
  var dispose;
  var button0 = new Button({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_33]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_39*/
  ctx[46]);
  var button1 = new Button({
    props: {
      variant: "outlined",
      style: "padding: 0; min-width: 36px;",
      $$slots: {
        default: [create_default_slot_31]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_40*/
  ctx[47]);
  var menu_1_props = {
    anchorCorner: "TOP_LEFT",
    $$slots: {
      default: [create_default_slot_23]
    },
    $$scope: {
      ctx: ctx
    }
  };
  var menu_1 = new Menu({
    props: menu_1_props,
    $$inline: true
  });
  /*menu_1_binding_1*/

  ctx[51](menu_1);
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t0 = space();
      div = element("div");
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(menu_1.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      claim_component(button1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(menu_1.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "svelte-18uebmb");
      add_location(div, file$1, 94, 6, 5087);
    },
    m: function mount(target, anchor, remount) {
      mount_component(button0, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      mount_component(button1, div, null);
      append_dev(div, t1);
      mount_component(menu_1, div, null);
      current = true;
      if (remount) dispose();
      dispose = action_destroyer(GroupItem_action = GroupItem.call(null, div));
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var menu_1_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[1] &
      /*$$scope*/
      1073741824) {
        menu_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      menu_1.$set(menu_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(menu_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(menu_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
      destroy_component(button1);
      /*menu_1_binding_1*/

      ctx[51](null);
      destroy_component(menu_1);
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_22.name,
    type: "slot",
    source: "(93:4) <Group variant=\\\"outlined\\\">",
    ctx: ctx
  });
  return block;
} // (113:84) <Label>


function create_default_slot_21(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Raised");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Raised");
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
    id: create_default_slot_21.name,
    type: "slot",
    source: "(113:84) <Label>",
    ctx: ctx
  });
  return block;
} // (113:4) <Button on:click={() => clicked++} variant="raised" class="button-shaped-round">


function create_default_slot_20(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_21]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_20.name,
    type: "slot",
    source: "(113:4) <Button on:click={() => clicked++} variant=\\\"raised\\\" class=\\\"button-shaped-round\\\">",
    ctx: ctx
  });
  return block;
} // (114:88) <Label>


function create_default_slot_19(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Unelevated");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Unelevated");
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
    source: "(114:88) <Label>",
    ctx: ctx
  });
  return block;
} // (114:4) <Button on:click={() => clicked++} variant="unelevated" class="button-shaped-round">


function create_default_slot_18(ctx) {
  var current;
  var label = new Label({
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
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_18.name,
    type: "slot",
    source: "(114:4) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" class=\\\"button-shaped-round\\\">",
    ctx: ctx
  });
  return block;
} // (115:86) <Label>


function create_default_slot_17(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Outlined");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Outlined");
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
    id: create_default_slot_17.name,
    type: "slot",
    source: "(115:86) <Label>",
    ctx: ctx
  });
  return block;
} // (115:4) <Button on:click={() => clicked++} variant="outlined" class="button-shaped-round">


function create_default_slot_16(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_17]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(115:4) <Button on:click={() => clicked++} variant=\\\"outlined\\\" class=\\\"button-shaped-round\\\">",
    ctx: ctx
  });
  return block;
} // (116:88) <Icon class="material-icons">


function create_default_slot_15(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_15.name,
    type: "slot",
    source: "(116:88) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (116:132) <Label>


function create_default_slot_14(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Icon");
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
    id: create_default_slot_14.name,
    type: "slot",
    source: "(116:132) <Label>",
    ctx: ctx
  });
  return block;
} // (116:4) <Button on:click={() => clicked++} variant="unelevated" class="button-shaped-round">


function create_default_slot_13(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_14]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(116:4) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" class=\\\"button-shaped-round\\\">",
    ctx: ctx
  });
  return block;
} // (117:86) <Label>


function create_default_slot_12(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Trailing Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Trailing Icon");
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
    source: "(117:86) <Label>",
    ctx: ctx
  });
  return block;
} // (117:114) <Icon class="material-icons">


function create_default_slot_11(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_11.name,
    type: "slot",
    source: "(117:114) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (117:4) <Button on:click={() => clicked++} variant="outlined" class="button-shaped-round">


function create_default_slot_10(ctx) {
  var current;
  var label = new Label({
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
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var icon_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(117:4) <Button on:click={() => clicked++} variant=\\\"outlined\\\" class=\\\"button-shaped-round\\\">",
    ctx: ctx
  });
  return block;
} // (122:84) <Label>


function create_default_slot_9(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Raised");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Raised");
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
    source: "(122:84) <Label>",
    ctx: ctx
  });
  return block;
} // (122:4) <Button on:click={() => clicked++} variant="raised" class="button-shaped-notch">


function create_default_slot_8(ctx) {
  var current;
  var label = new Label({
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
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(122:4) <Button on:click={() => clicked++} variant=\\\"raised\\\" class=\\\"button-shaped-notch\\\">",
    ctx: ctx
  });
  return block;
} // (123:88) <Label>


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Unelevated");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Unelevated");
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
    source: "(123:88) <Label>",
    ctx: ctx
  });
  return block;
} // (123:4) <Button on:click={() => clicked++} variant="unelevated" class="button-shaped-notch">


function create_default_slot_6(ctx) {
  var current;
  var label = new Label({
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
  var block = {
    c: function create() {
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(123:4) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" class=\\\"button-shaped-notch\\\">",
    ctx: ctx
  });
  return block;
} // (124:88) <Icon class="material-icons">


function create_default_slot_5(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_5.name,
    type: "slot",
    source: "(124:88) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (124:132) <Label>


function create_default_slot_4(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Icon");
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
    id: create_default_slot_4.name,
    type: "slot",
    source: "(124:132) <Label>",
    ctx: ctx
  });
  return block;
} // (124:4) <Button on:click={() => clicked++} variant="unelevated" class="button-shaped-notch">


function create_default_slot_3(ctx) {
  var current;
  var icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
      create_component(label.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
      claim_component(label.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
      destroy_component(label, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(124:4) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" class=\\\"button-shaped-notch\\\">",
    ctx: ctx
  });
  return block;
} // (125:88) <Label>


function create_default_slot_2(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Trailing Icon");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Trailing Icon");
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
    id: create_default_slot_2.name,
    type: "slot",
    source: "(125:88) <Label>",
    ctx: ctx
  });
  return block;
} // (125:116) <Icon class="material-icons">


function create_default_slot_1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("favorite");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "favorite");
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
    id: create_default_slot_1.name,
    type: "slot",
    source: "(125:116) <Icon class=\\\"material-icons\\\">",
    ctx: ctx
  });
  return block;
} // (125:4) <Button on:click={() => clicked++} variant="unelevated" class="button-shaped-notch">


function create_default_slot(ctx) {
  var current;
  var label = new Label({
    props: {
      $$slots: {
        default: [create_default_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var icon = new Icon({
    props: {
      class: "material-icons",
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
      create_component(label.$$.fragment);
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(label.$$.fragment, nodes);
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(label, target, anchor);
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var label_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        label_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      label.$set(label_changes);
      var icon_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(label.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(label.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(label, detaching);
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(125:4) <Button on:click={() => clicked++} variant=\\\"unelevated\\\" class=\\\"button-shaped-notch\\\">",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var div0;
  var t3;
  var t4;
  var t5;
  var t6;
  var t7;
  var t8;
  var t9;
  var t10;
  var t11;
  var div1;
  var t12;
  var t13;
  var div2;
  var t14;
  var br0;
  var t15;
  var t16;
  var t17;
  var t18;
  var t19;
  var t20;
  var t21;
  var t22;
  var t23;
  var t24;
  var div3;
  var t25;
  var t26;
  var div4;
  var t27;
  var br1;
  var t28;
  var t29;
  var t30;
  var t31;
  var t32;
  var br2;
  var t33;
  var br3;
  var t34;
  var t35;
  var div5;
  var t36;
  var br4;
  var t37;
  var t38;
  var t39;
  var div6;
  var t40;
  var br5;
  var t41;
  var t42;
  var t43;
  var t44;
  var t45;
  var t46;
  var div7;
  var t47;
  var br6;
  var t48;
  var t49;
  var t50;
  var t51;
  var t52;
  var pre;
  var t53;
  var t54;
  var current;
  var button0 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_129]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler*/
  ctx[3]);
  var button1 = new Button({
    props: {
      disabled: true,
      $$slots: {
        default: [create_default_slot_127]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_1*/
  ctx[4]);
  var button2 = new Button({
    props: {
      ripple: false,
      $$slots: {
        default: [create_default_slot_125]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button2.$on("click",
  /*click_handler_2*/
  ctx[5]);
  var button3 = new Button({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_123]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button3.$on("click",
  /*click_handler_3*/
  ctx[6]);
  var button4 = new Button({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_121]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button4.$on("click",
  /*click_handler_4*/
  ctx[7]);
  var button5 = new Button({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_119]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button5.$on("click",
  /*click_handler_5*/
  ctx[8]);
  var button6 = new Button({
    props: {
      dense: true,
      $$slots: {
        default: [create_default_slot_117]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button6.$on("click",
  /*click_handler_6*/
  ctx[9]);
  var button7 = new Button({
    props: {
      class: "myClass",
      $$slots: {
        default: [create_default_slot_115]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button7.$on("click",
  /*click_handler_7*/
  ctx[10]);
  var button8 = new Button({
    props: {
      href: "http://example.com",
      target: "_blank",
      $$slots: {
        default: [create_default_slot_113]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button8.$on("click",
  /*click_handler_8*/
  ctx[11]);
  var button9 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_110]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button9.$on("click",
  /*click_handler_9*/
  ctx[12]);
  var button10 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_107]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button10.$on("click",
  /*click_handler_10*/
  ctx[13]);
  var button11 = new Button({
    props: {
      color: "secondary",
      $$slots: {
        default: [create_default_slot_105]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button11.$on("click",
  /*click_handler_11*/
  ctx[14]);
  var button12 = new Button({
    props: {
      color: "secondary",
      disabled: true,
      $$slots: {
        default: [create_default_slot_103]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button12.$on("click",
  /*click_handler_12*/
  ctx[15]);
  var button13 = new Button({
    props: {
      color: "secondary",
      ripple: false,
      $$slots: {
        default: [create_default_slot_101]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button13.$on("click",
  /*click_handler_13*/
  ctx[16]);
  var button14 = new Button({
    props: {
      color: "secondary",
      variant: "raised",
      $$slots: {
        default: [create_default_slot_99]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button14.$on("click",
  /*click_handler_14*/
  ctx[17]);
  var button15 = new Button({
    props: {
      color: "secondary",
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_97]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button15.$on("click",
  /*click_handler_15*/
  ctx[18]);
  var button16 = new Button({
    props: {
      color: "secondary",
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_95]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button16.$on("click",
  /*click_handler_16*/
  ctx[19]);
  var button17 = new Button({
    props: {
      color: "secondary",
      dense: true,
      $$slots: {
        default: [create_default_slot_93]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button17.$on("click",
  /*click_handler_17*/
  ctx[20]);
  var button18 = new Button({
    props: {
      color: "secondary",
      class: "myClass",
      $$slots: {
        default: [create_default_slot_91]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button18.$on("click",
  /*click_handler_18*/
  ctx[21]);
  var button19 = new Button({
    props: {
      color: "secondary",
      href: "http://example.com",
      target: "_blank",
      $$slots: {
        default: [create_default_slot_89]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button19.$on("click",
  /*click_handler_19*/
  ctx[22]);
  var button20 = new Button({
    props: {
      color: "secondary",
      $$slots: {
        default: [create_default_slot_86]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button20.$on("click",
  /*click_handler_20*/
  ctx[23]);
  var button21 = new Button({
    props: {
      color: "secondary",
      $$slots: {
        default: [create_default_slot_83]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button21.$on("click",
  /*click_handler_21*/
  ctx[24]);
  var group0 = new Group({
    props: {
      $$slots: {
        default: [create_default_slot_76]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var group1 = new Group({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_69]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var group2 = new Group({
    props: {
      variant: "unelevated",
      $$slots: {
        default: [create_default_slot_62]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var group3 = new Group({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_55]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var group4 = new Group({
    props: {
      variant: "outlined",
      style: "display: flex;",
      $$slots: {
        default: [create_default_slot_48]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var group5 = new Group({
    props: {
      variant: "raised",
      $$slots: {
        default: [create_default_slot_35]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var group6 = new Group({
    props: {
      variant: "outlined",
      $$slots: {
        default: [create_default_slot_22]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var button22 = new Button({
    props: {
      variant: "raised",
      class: "button-shaped-round",
      $$slots: {
        default: [create_default_slot_20]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button22.$on("click",
  /*click_handler_41*/
  ctx[52]);
  var button23 = new Button({
    props: {
      variant: "unelevated",
      class: "button-shaped-round",
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button23.$on("click",
  /*click_handler_42*/
  ctx[53]);
  var button24 = new Button({
    props: {
      variant: "outlined",
      class: "button-shaped-round",
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button24.$on("click",
  /*click_handler_43*/
  ctx[54]);
  var button25 = new Button({
    props: {
      variant: "unelevated",
      class: "button-shaped-round",
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button25.$on("click",
  /*click_handler_44*/
  ctx[55]);
  var button26 = new Button({
    props: {
      variant: "outlined",
      class: "button-shaped-round",
      $$slots: {
        default: [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button26.$on("click",
  /*click_handler_45*/
  ctx[56]);
  var button27 = new Button({
    props: {
      variant: "raised",
      class: "button-shaped-notch",
      $$slots: {
        default: [create_default_slot_8]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button27.$on("click",
  /*click_handler_46*/
  ctx[57]);
  var button28 = new Button({
    props: {
      variant: "unelevated",
      class: "button-shaped-notch",
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button28.$on("click",
  /*click_handler_47*/
  ctx[58]);
  var button29 = new Button({
    props: {
      variant: "unelevated",
      class: "button-shaped-notch",
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button29.$on("click",
  /*click_handler_48*/
  ctx[59]);
  var button30 = new Button({
    props: {
      variant: "unelevated",
      class: "button-shaped-notch",
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button30.$on("click",
  /*click_handler_49*/
  ctx[60]);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Button");
      t2 = space();
      div0 = element("div");
      create_component(button0.$$.fragment);
      t3 = space();
      create_component(button1.$$.fragment);
      t4 = space();
      create_component(button2.$$.fragment);
      t5 = space();
      create_component(button3.$$.fragment);
      t6 = space();
      create_component(button4.$$.fragment);
      t7 = space();
      create_component(button5.$$.fragment);
      t8 = space();
      create_component(button6.$$.fragment);
      t9 = space();
      create_component(button7.$$.fragment);
      t10 = space();
      create_component(button8.$$.fragment);
      t11 = space();
      div1 = element("div");
      create_component(button9.$$.fragment);
      t12 = space();
      create_component(button10.$$.fragment);
      t13 = space();
      div2 = element("div");
      t14 = text("Secondary color: ");
      br0 = element("br");
      t15 = space();
      create_component(button11.$$.fragment);
      t16 = space();
      create_component(button12.$$.fragment);
      t17 = space();
      create_component(button13.$$.fragment);
      t18 = space();
      create_component(button14.$$.fragment);
      t19 = space();
      create_component(button15.$$.fragment);
      t20 = space();
      create_component(button16.$$.fragment);
      t21 = space();
      create_component(button17.$$.fragment);
      t22 = space();
      create_component(button18.$$.fragment);
      t23 = space();
      create_component(button19.$$.fragment);
      t24 = space();
      div3 = element("div");
      create_component(button20.$$.fragment);
      t25 = space();
      create_component(button21.$$.fragment);
      t26 = space();
      div4 = element("div");
      t27 = text("Button groups: ");
      br1 = element("br");
      t28 = space();
      create_component(group0.$$.fragment);
      t29 = space();
      create_component(group1.$$.fragment);
      t30 = space();
      create_component(group2.$$.fragment);
      t31 = space();
      create_component(group3.$$.fragment);
      t32 = space();
      br2 = element("br");
      t33 = space();
      br3 = element("br");
      t34 = space();
      create_component(group4.$$.fragment);
      t35 = space();
      div5 = element("div");
      t36 = text("Split buttons using a button group: ");
      br4 = element("br");
      t37 = space();
      create_component(group5.$$.fragment);
      t38 = space();
      create_component(group6.$$.fragment);
      t39 = space();
      div6 = element("div");
      t40 = text("Creating rounded buttons with Sass mixins: ");
      br5 = element("br");
      t41 = space();
      create_component(button22.$$.fragment);
      t42 = space();
      create_component(button23.$$.fragment);
      t43 = space();
      create_component(button24.$$.fragment);
      t44 = space();
      create_component(button25.$$.fragment);
      t45 = space();
      create_component(button26.$$.fragment);
      t46 = space();
      div7 = element("div");
      t47 = text("Creating notched buttons with vanilla Sass: ");
      br6 = element("br");
      t48 = space();
      create_component(button27.$$.fragment);
      t49 = space();
      create_component(button28.$$.fragment);
      t50 = space();
      create_component(button29.$$.fragment);
      t51 = space();
      create_component(button30.$$.fragment);
      t52 = space();
      pre = element("pre");
      t53 = text("Clicked: ");
      t54 = text(
      /*clicked*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-brzzne\"]", document.head);
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
      t1 = claim_text(h2_nodes, "Button");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(button0.$$.fragment, div0_nodes);
      t3 = claim_space(div0_nodes);
      claim_component(button1.$$.fragment, div0_nodes);
      t4 = claim_space(div0_nodes);
      claim_component(button2.$$.fragment, div0_nodes);
      t5 = claim_space(div0_nodes);
      claim_component(button3.$$.fragment, div0_nodes);
      t6 = claim_space(div0_nodes);
      claim_component(button4.$$.fragment, div0_nodes);
      t7 = claim_space(div0_nodes);
      claim_component(button5.$$.fragment, div0_nodes);
      t8 = claim_space(div0_nodes);
      claim_component(button6.$$.fragment, div0_nodes);
      t9 = claim_space(div0_nodes);
      claim_component(button7.$$.fragment, div0_nodes);
      t10 = claim_space(div0_nodes);
      claim_component(button8.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t11 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      claim_component(button9.$$.fragment, div1_nodes);
      t12 = claim_space(div1_nodes);
      claim_component(button10.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t13 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t14 = claim_text(div2_nodes, "Secondary color: ");
      br0 = claim_element(div2_nodes, "BR", {
        class: true
      });
      t15 = claim_space(div2_nodes);
      claim_component(button11.$$.fragment, div2_nodes);
      t16 = claim_space(div2_nodes);
      claim_component(button12.$$.fragment, div2_nodes);
      t17 = claim_space(div2_nodes);
      claim_component(button13.$$.fragment, div2_nodes);
      t18 = claim_space(div2_nodes);
      claim_component(button14.$$.fragment, div2_nodes);
      t19 = claim_space(div2_nodes);
      claim_component(button15.$$.fragment, div2_nodes);
      t20 = claim_space(div2_nodes);
      claim_component(button16.$$.fragment, div2_nodes);
      t21 = claim_space(div2_nodes);
      claim_component(button17.$$.fragment, div2_nodes);
      t22 = claim_space(div2_nodes);
      claim_component(button18.$$.fragment, div2_nodes);
      t23 = claim_space(div2_nodes);
      claim_component(button19.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t24 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      claim_component(button20.$$.fragment, div3_nodes);
      t25 = claim_space(div3_nodes);
      claim_component(button21.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t26 = claim_space(section_nodes);
      div4 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      t27 = claim_text(div4_nodes, "Button groups: ");
      br1 = claim_element(div4_nodes, "BR", {
        class: true
      });
      t28 = claim_space(div4_nodes);
      claim_component(group0.$$.fragment, div4_nodes);
      t29 = claim_space(div4_nodes);
      claim_component(group1.$$.fragment, div4_nodes);
      t30 = claim_space(div4_nodes);
      claim_component(group2.$$.fragment, div4_nodes);
      t31 = claim_space(div4_nodes);
      claim_component(group3.$$.fragment, div4_nodes);
      t32 = claim_space(div4_nodes);
      br2 = claim_element(div4_nodes, "BR", {
        class: true
      });
      t33 = claim_space(div4_nodes);
      br3 = claim_element(div4_nodes, "BR", {
        class: true
      });
      t34 = claim_space(div4_nodes);
      claim_component(group4.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t35 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      t36 = claim_text(div5_nodes, "Split buttons using a button group: ");
      br4 = claim_element(div5_nodes, "BR", {
        class: true
      });
      t37 = claim_space(div5_nodes);
      claim_component(group5.$$.fragment, div5_nodes);
      t38 = claim_space(div5_nodes);
      claim_component(group6.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      t39 = claim_space(section_nodes);
      div6 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      t40 = claim_text(div6_nodes, "Creating rounded buttons with Sass mixins: ");
      br5 = claim_element(div6_nodes, "BR", {
        class: true
      });
      t41 = claim_space(div6_nodes);
      claim_component(button22.$$.fragment, div6_nodes);
      t42 = claim_space(div6_nodes);
      claim_component(button23.$$.fragment, div6_nodes);
      t43 = claim_space(div6_nodes);
      claim_component(button24.$$.fragment, div6_nodes);
      t44 = claim_space(div6_nodes);
      claim_component(button25.$$.fragment, div6_nodes);
      t45 = claim_space(div6_nodes);
      claim_component(button26.$$.fragment, div6_nodes);
      div6_nodes.forEach(detach_dev);
      t46 = claim_space(section_nodes);
      div7 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      t47 = claim_text(div7_nodes, "Creating notched buttons with vanilla Sass: ");
      br6 = claim_element(div7_nodes, "BR", {
        class: true
      });
      t48 = claim_space(div7_nodes);
      claim_component(button27.$$.fragment, div7_nodes);
      t49 = claim_space(div7_nodes);
      claim_component(button28.$$.fragment, div7_nodes);
      t50 = claim_space(div7_nodes);
      claim_component(button29.$$.fragment, div7_nodes);
      t51 = claim_space(div7_nodes);
      claim_component(button30.$$.fragment, div7_nodes);
      div7_nodes.forEach(detach_dev);
      t52 = claim_space(section_nodes);
      pre = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre_nodes = children(pre);
      t53 = claim_text(pre_nodes, "Clicked: ");
      t54 = claim_text(pre_nodes,
      /*clicked*/
      ctx[0]);
      pre_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Button - SMUI";
      attr_dev(h2, "class", "svelte-18uebmb");
      add_location(h2, file$1, 5, 2, 73);
      attr_dev(div0, "class", "svelte-18uebmb");
      add_location(div0, file$1, 7, 2, 92);
      attr_dev(div1, "class", "svelte-18uebmb");
      add_location(div1, file$1, 19, 2, 907);
      attr_dev(br0, "class", "svelte-18uebmb");
      add_location(br0, file$1, 25, 21, 1185);
      attr_dev(div2, "class", "svelte-18uebmb");
      add_location(div2, file$1, 24, 2, 1158);
      attr_dev(div3, "class", "svelte-18uebmb");
      add_location(div3, file$1, 37, 2, 2163);
      attr_dev(br1, "class", "svelte-18uebmb");
      add_location(br1, file$1, 43, 19, 2475);
      attr_dev(br2, "class", "svelte-18uebmb");
      add_location(br2, file$1, 65, 4, 3651);
      attr_dev(br3, "class", "svelte-18uebmb");
      add_location(br3, file$1, 65, 11, 3658);
      attr_dev(div4, "class", "svelte-18uebmb");
      add_location(div4, file$1, 42, 2, 2450);
      attr_dev(br4, "class", "svelte-18uebmb");
      add_location(br4, file$1, 75, 40, 4194);
      attr_dev(div5, "class", "svelte-18uebmb");
      add_location(div5, file$1, 74, 2, 4148);
      attr_dev(br5, "class", "svelte-18uebmb");
      add_location(br5, file$1, 111, 47, 5778);
      attr_dev(div6, "class", "svelte-18uebmb");
      add_location(div6, file$1, 110, 2, 5725);
      attr_dev(br6, "class", "svelte-18uebmb");
      add_location(br6, file$1, 120, 48, 6537);
      attr_dev(div7, "class", "svelte-18uebmb");
      add_location(div7, file$1, 119, 2, 6483);
      attr_dev(pre, "class", "status svelte-18uebmb");
      add_location(pre, file$1, 127, 2, 7125);
      attr_dev(section, "class", "svelte-18uebmb");
      add_location(section, file$1, 4, 0, 61);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(button0, div0, null);
      append_dev(div0, t3);
      mount_component(button1, div0, null);
      append_dev(div0, t4);
      mount_component(button2, div0, null);
      append_dev(div0, t5);
      mount_component(button3, div0, null);
      append_dev(div0, t6);
      mount_component(button4, div0, null);
      append_dev(div0, t7);
      mount_component(button5, div0, null);
      append_dev(div0, t8);
      mount_component(button6, div0, null);
      append_dev(div0, t9);
      mount_component(button7, div0, null);
      append_dev(div0, t10);
      mount_component(button8, div0, null);
      append_dev(section, t11);
      append_dev(section, div1);
      mount_component(button9, div1, null);
      append_dev(div1, t12);
      mount_component(button10, div1, null);
      append_dev(section, t13);
      append_dev(section, div2);
      append_dev(div2, t14);
      append_dev(div2, br0);
      append_dev(div2, t15);
      mount_component(button11, div2, null);
      append_dev(div2, t16);
      mount_component(button12, div2, null);
      append_dev(div2, t17);
      mount_component(button13, div2, null);
      append_dev(div2, t18);
      mount_component(button14, div2, null);
      append_dev(div2, t19);
      mount_component(button15, div2, null);
      append_dev(div2, t20);
      mount_component(button16, div2, null);
      append_dev(div2, t21);
      mount_component(button17, div2, null);
      append_dev(div2, t22);
      mount_component(button18, div2, null);
      append_dev(div2, t23);
      mount_component(button19, div2, null);
      append_dev(section, t24);
      append_dev(section, div3);
      mount_component(button20, div3, null);
      append_dev(div3, t25);
      mount_component(button21, div3, null);
      append_dev(section, t26);
      append_dev(section, div4);
      append_dev(div4, t27);
      append_dev(div4, br1);
      append_dev(div4, t28);
      mount_component(group0, div4, null);
      append_dev(div4, t29);
      mount_component(group1, div4, null);
      append_dev(div4, t30);
      mount_component(group2, div4, null);
      append_dev(div4, t31);
      mount_component(group3, div4, null);
      append_dev(div4, t32);
      append_dev(div4, br2);
      append_dev(div4, t33);
      append_dev(div4, br3);
      append_dev(div4, t34);
      mount_component(group4, div4, null);
      append_dev(section, t35);
      append_dev(section, div5);
      append_dev(div5, t36);
      append_dev(div5, br4);
      append_dev(div5, t37);
      mount_component(group5, div5, null);
      append_dev(div5, t38);
      mount_component(group6, div5, null);
      append_dev(section, t39);
      append_dev(section, div6);
      append_dev(div6, t40);
      append_dev(div6, br5);
      append_dev(div6, t41);
      mount_component(button22, div6, null);
      append_dev(div6, t42);
      mount_component(button23, div6, null);
      append_dev(div6, t43);
      mount_component(button24, div6, null);
      append_dev(div6, t44);
      mount_component(button25, div6, null);
      append_dev(div6, t45);
      mount_component(button26, div6, null);
      append_dev(section, t46);
      append_dev(section, div7);
      append_dev(div7, t47);
      append_dev(div7, br6);
      append_dev(div7, t48);
      mount_component(button27, div7, null);
      append_dev(div7, t49);
      mount_component(button28, div7, null);
      append_dev(div7, t50);
      mount_component(button29, div7, null);
      append_dev(div7, t51);
      mount_component(button30, div7, null);
      append_dev(section, t52);
      append_dev(section, pre);
      append_dev(pre, t53);
      append_dev(pre, t54);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
      var button2_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button2.$set(button2_changes);
      var button3_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button3.$set(button3_changes);
      var button4_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button4.$set(button4_changes);
      var button5_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button5.$set(button5_changes);
      var button6_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button6_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button6.$set(button6_changes);
      var button7_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button7_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button7.$set(button7_changes);
      var button8_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button8_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button8.$set(button8_changes);
      var button9_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button9_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button9.$set(button9_changes);
      var button10_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button10_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button10.$set(button10_changes);
      var button11_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button11_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button11.$set(button11_changes);
      var button12_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button12_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button12.$set(button12_changes);
      var button13_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button13_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button13.$set(button13_changes);
      var button14_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button14_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button14.$set(button14_changes);
      var button15_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button15_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button15.$set(button15_changes);
      var button16_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button16_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button16.$set(button16_changes);
      var button17_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button17_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button17.$set(button17_changes);
      var button18_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button18_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button18.$set(button18_changes);
      var button19_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button19_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button19.$set(button19_changes);
      var button20_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button20_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button20.$set(button20_changes);
      var button21_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button21_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button21.$set(button21_changes);
      var group0_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[1] &
      /*$$scope*/
      1073741824) {
        group0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group0.$set(group0_changes);
      var group1_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[1] &
      /*$$scope*/
      1073741824) {
        group1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group1.$set(group1_changes);
      var group2_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[1] &
      /*$$scope*/
      1073741824) {
        group2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group2.$set(group2_changes);
      var group3_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[1] &
      /*$$scope*/
      1073741824) {
        group3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group3.$set(group3_changes);
      var group4_changes = {};

      if (dirty[0] &
      /*clicked*/
      1 | dirty[1] &
      /*$$scope*/
      1073741824) {
        group4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group4.$set(group4_changes);
      var group5_changes = {};

      if (dirty[0] &
      /*menu, clicked*/
      3 | dirty[1] &
      /*$$scope*/
      1073741824) {
        group5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group5.$set(group5_changes);
      var group6_changes = {};

      if (dirty[0] &
      /*menu2, clicked*/
      5 | dirty[1] &
      /*$$scope*/
      1073741824) {
        group6_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      group6.$set(group6_changes);
      var button22_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button22_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button22.$set(button22_changes);
      var button23_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button23_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button23.$set(button23_changes);
      var button24_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button24_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button24.$set(button24_changes);
      var button25_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button25_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button25.$set(button25_changes);
      var button26_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button26_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button26.$set(button26_changes);
      var button27_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button27_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button27.$set(button27_changes);
      var button28_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button28_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button28.$set(button28_changes);
      var button29_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button29_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button29.$set(button29_changes);
      var button30_changes = {};

      if (dirty[1] &
      /*$$scope*/
      1073741824) {
        button30_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button30.$set(button30_changes);
      if (!current || dirty[0] &
      /*clicked*/
      1) set_data_dev(t54,
      /*clicked*/
      ctx[0]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      transition_in(button5.$$.fragment, local);
      transition_in(button6.$$.fragment, local);
      transition_in(button7.$$.fragment, local);
      transition_in(button8.$$.fragment, local);
      transition_in(button9.$$.fragment, local);
      transition_in(button10.$$.fragment, local);
      transition_in(button11.$$.fragment, local);
      transition_in(button12.$$.fragment, local);
      transition_in(button13.$$.fragment, local);
      transition_in(button14.$$.fragment, local);
      transition_in(button15.$$.fragment, local);
      transition_in(button16.$$.fragment, local);
      transition_in(button17.$$.fragment, local);
      transition_in(button18.$$.fragment, local);
      transition_in(button19.$$.fragment, local);
      transition_in(button20.$$.fragment, local);
      transition_in(button21.$$.fragment, local);
      transition_in(group0.$$.fragment, local);
      transition_in(group1.$$.fragment, local);
      transition_in(group2.$$.fragment, local);
      transition_in(group3.$$.fragment, local);
      transition_in(group4.$$.fragment, local);
      transition_in(group5.$$.fragment, local);
      transition_in(group6.$$.fragment, local);
      transition_in(button22.$$.fragment, local);
      transition_in(button23.$$.fragment, local);
      transition_in(button24.$$.fragment, local);
      transition_in(button25.$$.fragment, local);
      transition_in(button26.$$.fragment, local);
      transition_in(button27.$$.fragment, local);
      transition_in(button28.$$.fragment, local);
      transition_in(button29.$$.fragment, local);
      transition_in(button30.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      transition_out(button5.$$.fragment, local);
      transition_out(button6.$$.fragment, local);
      transition_out(button7.$$.fragment, local);
      transition_out(button8.$$.fragment, local);
      transition_out(button9.$$.fragment, local);
      transition_out(button10.$$.fragment, local);
      transition_out(button11.$$.fragment, local);
      transition_out(button12.$$.fragment, local);
      transition_out(button13.$$.fragment, local);
      transition_out(button14.$$.fragment, local);
      transition_out(button15.$$.fragment, local);
      transition_out(button16.$$.fragment, local);
      transition_out(button17.$$.fragment, local);
      transition_out(button18.$$.fragment, local);
      transition_out(button19.$$.fragment, local);
      transition_out(button20.$$.fragment, local);
      transition_out(button21.$$.fragment, local);
      transition_out(group0.$$.fragment, local);
      transition_out(group1.$$.fragment, local);
      transition_out(group2.$$.fragment, local);
      transition_out(group3.$$.fragment, local);
      transition_out(group4.$$.fragment, local);
      transition_out(group5.$$.fragment, local);
      transition_out(group6.$$.fragment, local);
      transition_out(button22.$$.fragment, local);
      transition_out(button23.$$.fragment, local);
      transition_out(button24.$$.fragment, local);
      transition_out(button25.$$.fragment, local);
      transition_out(button26.$$.fragment, local);
      transition_out(button27.$$.fragment, local);
      transition_out(button28.$$.fragment, local);
      transition_out(button29.$$.fragment, local);
      transition_out(button30.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(button4);
      destroy_component(button5);
      destroy_component(button6);
      destroy_component(button7);
      destroy_component(button8);
      destroy_component(button9);
      destroy_component(button10);
      destroy_component(button11);
      destroy_component(button12);
      destroy_component(button13);
      destroy_component(button14);
      destroy_component(button15);
      destroy_component(button16);
      destroy_component(button17);
      destroy_component(button18);
      destroy_component(button19);
      destroy_component(button20);
      destroy_component(button21);
      destroy_component(group0);
      destroy_component(group1);
      destroy_component(group2);
      destroy_component(group3);
      destroy_component(group4);
      destroy_component(group5);
      destroy_component(group6);
      destroy_component(button22);
      destroy_component(button23);
      destroy_component(button24);
      destroy_component(button25);
      destroy_component(button26);
      destroy_component(button27);
      destroy_component(button28);
      destroy_component(button29);
      destroy_component(button30);
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
  var clicked = 0;
  var menu;
  var menu2;
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Button> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Button", $$slots, []);

  var click_handler = function click_handler() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_1 = function click_handler_1() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_2 = function click_handler_2() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_3 = function click_handler_3() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_4 = function click_handler_4() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_5 = function click_handler_5() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_6 = function click_handler_6() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_7 = function click_handler_7() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_8 = function click_handler_8() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_9 = function click_handler_9() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_10 = function click_handler_10() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_11 = function click_handler_11() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_12 = function click_handler_12() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_13 = function click_handler_13() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_14 = function click_handler_14() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_15 = function click_handler_15() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_16 = function click_handler_16() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_17 = function click_handler_17() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_18 = function click_handler_18() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_19 = function click_handler_19() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_20 = function click_handler_20() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_21 = function click_handler_21() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_22 = function click_handler_22() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_23 = function click_handler_23() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_24 = function click_handler_24() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_25 = function click_handler_25() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_26 = function click_handler_26() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_27 = function click_handler_27() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_28 = function click_handler_28() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_29 = function click_handler_29() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_30 = function click_handler_30() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_31 = function click_handler_31() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_32 = function click_handler_32() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_33 = function click_handler_33() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_34 = function click_handler_34() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_35 = function click_handler_35() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_36 = function click_handler_36() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_37 = function click_handler_37() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_38 = function click_handler_38() {
    return menu.setOpen(true);
  };

  var SMUI_action_handler = function SMUI_action_handler() {
    return $$invalidate(0, clicked++, clicked);
  };

  var SMUI_action_handler_1 = function SMUI_action_handler_1() {
    return $$invalidate(0, clicked++, clicked);
  };

  var SMUI_action_handler_2 = function SMUI_action_handler_2() {
    return $$invalidate(0, clicked++, clicked);
  };

  function menu_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(1, menu = $$value);
    });
  }

  var click_handler_39 = function click_handler_39() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_40 = function click_handler_40() {
    return menu2.setOpen(true);
  };

  var SMUI_action_handler_3 = function SMUI_action_handler_3() {
    return $$invalidate(0, clicked++, clicked);
  };

  var SMUI_action_handler_4 = function SMUI_action_handler_4() {
    return $$invalidate(0, clicked++, clicked);
  };

  var SMUI_action_handler_5 = function SMUI_action_handler_5() {
    return $$invalidate(0, clicked++, clicked);
  };

  function menu_1_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(2, menu2 = $$value);
    });
  }

  var click_handler_41 = function click_handler_41() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_42 = function click_handler_42() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_43 = function click_handler_43() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_44 = function click_handler_44() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_45 = function click_handler_45() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_46 = function click_handler_46() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_47 = function click_handler_47() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_48 = function click_handler_48() {
    return $$invalidate(0, clicked++, clicked);
  };

  var click_handler_49 = function click_handler_49() {
    return $$invalidate(0, clicked++, clicked);
  };

  $$self.$capture_state = function () {
    return {
      Button: Button,
      Group: Group,
      GroupItem: GroupItem,
      Label: Label,
      Icon: Icon,
      Menu: Menu,
      List: List,
      Item: Item,
      Separator: Separator,
      Text: Text,
      clicked: clicked,
      menu: menu,
      menu2: menu2
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
    if ("menu" in $$props) $$invalidate(1, menu = $$props.menu);
    if ("menu2" in $$props) $$invalidate(2, menu2 = $$props.menu2);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [clicked, menu, menu2, click_handler, click_handler_1, click_handler_2, click_handler_3, click_handler_4, click_handler_5, click_handler_6, click_handler_7, click_handler_8, click_handler_9, click_handler_10, click_handler_11, click_handler_12, click_handler_13, click_handler_14, click_handler_15, click_handler_16, click_handler_17, click_handler_18, click_handler_19, click_handler_20, click_handler_21, click_handler_22, click_handler_23, click_handler_24, click_handler_25, click_handler_26, click_handler_27, click_handler_28, click_handler_29, click_handler_30, click_handler_31, click_handler_32, click_handler_33, click_handler_34, click_handler_35, click_handler_36, click_handler_37, click_handler_38, SMUI_action_handler, SMUI_action_handler_1, SMUI_action_handler_2, menu_1_binding, click_handler_39, click_handler_40, SMUI_action_handler_3, SMUI_action_handler_4, SMUI_action_handler_5, menu_1_binding_1, click_handler_41, click_handler_42, click_handler_43, click_handler_44, click_handler_45, click_handler_46, click_handler_47, click_handler_48, click_handler_49];
}

var Button_1 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits$1(Button_1, _SvelteComponentDev);

  var _super = _createSuper$1(Button_1);

  function Button_1(options) {
    var _this;

    _classCallCheck$1(this, Button_1);

    _this = _super.call(this, options);
    if (!document.getElementById("svelte-18uebmb-style")) add_css();
    init(_assertThisInitialized$1(_this), options, instance$1, create_fragment$1, safe_not_equal, {}, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Button_1",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Button_1;
}(SvelteComponentDev);

export default Button_1;
