import { Y as _inherits, Z as _classCallCheck, i as init, s as safe_not_equal, $ as _assertThisInitialized, d as dispatch_dev, a0 as _createClass, S as SvelteComponentDev, ah as create_slot, a1 as exclude, a2 as assign, a3 as forwardEventsBuilder, a4 as get_current_component, ai as setContext, v as validate_slots, a7 as exclude_internal_props, a8 as useActions, aU as Ripple, a9 as _getPrototypeOf, aa as _possibleConstructorReturn, g as element, k as claim_element, l as children, h as detach_dev, ab as set_attributes, p as add_location, r as insert_dev, ac as run_all, H as action_destroyer, ad as _slicedToArray, aj as get_slot_context, ak as get_slot_changes, ae as get_spread_update, af as is_function, L as transition_in, M as transition_out } from './client.58596db2.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "home/hperrin/repos/svelte-material-ui/packages/fab/Fab.svelte";

function create_fragment(ctx) {
  var button;
  var useActions_action;
  var forwardEvents_action;
  var Ripple_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[10].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[9], null);
  var button_levels = [{
    class: "\n    mdc-fab\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*mini*/
    ctx[4] ? "mdc-fab--mini" : "") + "\n    " + (
    /*exited*/
    ctx[5] ? "mdc-fab--exited" : "") + "\n    " + (
    /*extended*/
    ctx[6] ? "mdc-fab--extended" : "") + "\n    " + (
    /*color*/
    ctx[3] === "primary" ? "smui-fab--color-primary" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[8], ["use", "class", "ripple", "color", "mini", "exited", "extended"])];
  var button_data = {};

  for (var i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }

  var block = {
    c: function create() {
      button = element("button");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      if (default_slot) default_slot.l(button_nodes);
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(button, button_data);
      add_location(button, file, 0, 0, 0);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, button, anchor);

      if (default_slot) {
        default_slot.m(button, null);
      }

      current = true;
      if (remount) run_all(dispose);
      dispose = [action_destroyer(useActions_action = useActions.call(null, button,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[7].call(null, button)), action_destroyer(Ripple_action = Ripple.call(null, button, {
        ripple:
        /*ripple*/
        ctx[2],
        unbounded: false
      }))];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        512) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[9], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[9], dirty, null));
        }
      }

      set_attributes(button, get_spread_update(button_levels, [dirty &
      /*className, mini, exited, extended, color*/
      122 && {
        class: "\n    mdc-fab\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*mini*/
        ctx[4] ? "mdc-fab--mini" : "") + "\n    " + (
        /*exited*/
        ctx[5] ? "mdc-fab--exited" : "") + "\n    " + (
        /*extended*/
        ctx[6] ? "mdc-fab--extended" : "") + "\n    " + (
        /*color*/
        ctx[3] === "primary" ? "smui-fab--color-primary" : "") + "\n  "
      }, dirty &
      /*exclude, $$props*/
      256 && exclude(
      /*$$props*/
      ctx[8], ["use", "class", "ripple", "color", "mini", "exited", "extended"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
      if (Ripple_action && is_function(Ripple_action.update) && dirty &
      /*ripple*/
      4) Ripple_action.update.call(null, {
        ripple:
        /*ripple*/
        ctx[2],
        unbounded: false
      });
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
      if (detaching) detach_dev(button);
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
      _$$props3$ripple = _$$props3.ripple,
      ripple = _$$props3$ripple === void 0 ? true : _$$props3$ripple;
  var _$$props4 = $$props,
      _$$props4$color = _$$props4.color,
      color = _$$props4$color === void 0 ? "secondary" : _$$props4$color;
  var _$$props5 = $$props,
      _$$props5$mini = _$$props5.mini,
      mini = _$$props5$mini === void 0 ? false : _$$props5$mini;
  var _$$props6 = $$props,
      _$$props6$exited = _$$props6.exited,
      exited = _$$props6$exited === void 0 ? false : _$$props6$exited;
  var _$$props7 = $$props,
      _$$props7$extended = _$$props7.extended,
      extended = _$$props7$extended === void 0 ? false : _$$props7$extended;
  setContext("SMUI:label:context", "fab");
  setContext("SMUI:icon:context", "fab");
  var _$$props8 = $$props,
      _$$props8$$$slots = _$$props8.$$slots,
      $$slots = _$$props8$$$slots === void 0 ? {} : _$$props8$$$slots,
      $$scope = _$$props8.$$scope;
  validate_slots("Fab", $$slots, ['default']);

  $$self.$set = function ($$new_props) {
    $$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("ripple" in $$new_props) $$invalidate(2, ripple = $$new_props.ripple);
    if ("color" in $$new_props) $$invalidate(3, color = $$new_props.color);
    if ("mini" in $$new_props) $$invalidate(4, mini = $$new_props.mini);
    if ("exited" in $$new_props) $$invalidate(5, exited = $$new_props.exited);
    if ("extended" in $$new_props) $$invalidate(6, extended = $$new_props.extended);
    if ("$$scope" in $$new_props) $$invalidate(9, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      setContext: setContext,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      Ripple: Ripple,
      forwardEvents: forwardEvents,
      use: use,
      className: className,
      ripple: ripple,
      color: color,
      mini: mini,
      exited: exited,
      extended: extended
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(8, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("ripple" in $$props) $$invalidate(2, ripple = $$new_props.ripple);
    if ("color" in $$props) $$invalidate(3, color = $$new_props.color);
    if ("mini" in $$props) $$invalidate(4, mini = $$new_props.mini);
    if ("exited" in $$props) $$invalidate(5, exited = $$new_props.exited);
    if ("extended" in $$props) $$invalidate(6, extended = $$new_props.extended);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [use, className, ripple, color, mini, exited, extended, forwardEvents, $$props, $$scope, $$slots];
}

var Fab = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Fab, _SvelteComponentDev);

  var _super = _createSuper(Fab);

  function Fab(options) {
    var _this;

    _classCallCheck(this, Fab);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      ripple: 2,
      color: 3,
      mini: 4,
      exited: 5,
      extended: 6
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Fab",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Fab, [{
    key: "use",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "ripple",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "color",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "mini",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "exited",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "extended",
    get: function get() {
      throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Fab;
}(SvelteComponentDev);

export { Fab as F };
