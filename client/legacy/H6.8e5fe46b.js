import { Y as _inherits, Z as _classCallCheck, i as init, s as safe_not_equal, $ as _assertThisInitialized, d as dispatch_dev, a0 as _createClass, S as SvelteComponentDev, ah as create_slot, a1 as exclude, a2 as assign, a3 as forwardEventsBuilder, a4 as get_current_component, v as validate_slots, a7 as exclude_internal_props, a8 as useActions, a9 as _getPrototypeOf, aa as _possibleConstructorReturn, g as element, k as claim_element, l as children, h as detach_dev, ab as set_attributes, p as add_location, r as insert_dev, ac as run_all, H as action_destroyer, ad as _slicedToArray, aj as get_slot_context, ak as get_slot_changes, ae as get_spread_update, af as is_function, L as transition_in, M as transition_out } from './client.58596db2.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "home/hperrin/repos/svelte-material-ui/packages/common/H6.svelte";

function create_fragment(ctx) {
  var h6;
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
  var h6_levels = [exclude(
  /*$$props*/
  ctx[2], ["use"])];
  var h6_data = {};

  for (var i = 0; i < h6_levels.length; i += 1) {
    h6_data = assign(h6_data, h6_levels[i]);
  }

  var block = {
    c: function create() {
      h6 = element("h6");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      h6 = claim_element(nodes, "H6", {});
      var h6_nodes = children(h6);
      if (default_slot) default_slot.l(h6_nodes);
      h6_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(h6, h6_data);
      add_location(h6, file, 0, 0, 0);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, h6, anchor);

      if (default_slot) {
        default_slot.m(h6, null);
      }

      current = true;
      if (remount) run_all(dispose);
      dispose = [action_destroyer(useActions_action = useActions.call(null, h6,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[1].call(null, h6))];
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

      set_attributes(h6, get_spread_update(h6_levels, [dirty &
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
      if (detaching) detach_dev(h6);
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
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;
  validate_slots("H6", $$slots, ['default']);

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

var H6 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(H6, _SvelteComponentDev);

  var _super = _createSuper(H6);

  function H6(options) {
    var _this;

    _classCallCheck(this, H6);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "H6",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(H6, [{
    key: "use",
    get: function get() {
      throw new Error("<H6>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<H6>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return H6;
}(SvelteComponentDev);

export { H6 as H };
