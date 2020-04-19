import { Y as _inherits, Z as _classCallCheck, i as init, s as safe_not_equal, $ as _assertThisInitialized, d as dispatch_dev, a0 as _createClass, S as SvelteComponentDev, a3 as forwardEventsBuilder, a4 as get_current_component, v as validate_slots, a2 as assign, a7 as exclude_internal_props, a1 as exclude, a8 as useActions, a9 as _getPrototypeOf, aa as _possibleConstructorReturn, O as empty, r as insert_dev, ad as _slicedToArray, w as noop, h as detach_dev, g as element, k as claim_element, l as children, ab as set_attributes, p as add_location, ac as run_all, H as action_destroyer, ae as get_spread_update, af as is_function } from './client.58596db2.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "home/hperrin/repos/svelte-material-ui/packages/list/Separator.svelte"; // (13:0) {:else}

function create_else_block(ctx) {
  var li;
  var useActions_action;
  var forwardEvents_action;
  var dispose;
  var li_levels = [{
    class: "\n      mdc-list-divider\n      " +
    /*className*/
    ctx[1] + "\n      " + (
    /*padded*/
    ctx[4] ? "mdc-list-divider--padded" : "") + "\n      " + (
    /*inset*/
    ctx[5] ? "mdc-list-divider--inset" : "") + "\n    "
  }, {
    role: "separator"
  },
  /*props*/
  ctx[6]];
  var li_data = {};

  for (var i = 0; i < li_levels.length; i += 1) {
    li_data = assign(li_data, li_levels[i]);
  }

  var block = {
    c: function create() {
      li = element("li");
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {
        class: true,
        role: true
      });
      children(li).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(li, li_data);
      add_location(li, file, 13, 2, 257);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, li, anchor);
      if (remount) run_all(dispose);
      dispose = [action_destroyer(useActions_action = useActions.call(null, li,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[7].call(null, li))];
    },
    p: function update(ctx, dirty) {
      set_attributes(li, get_spread_update(li_levels, [dirty &
      /*className, padded, inset*/
      50 && {
        class: "\n      mdc-list-divider\n      " +
        /*className*/
        ctx[1] + "\n      " + (
        /*padded*/
        ctx[4] ? "mdc-list-divider--padded" : "") + "\n      " + (
        /*inset*/
        ctx[5] ? "mdc-list-divider--inset" : "") + "\n    "
      }, {
        role: "separator"
      }, dirty &
      /*props*/
      64 &&
      /*props*/
      ctx[6]]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(13:0) {:else}",
    ctx: ctx
  });
  return block;
} // (1:0) {#if group || nav}


function create_if_block(ctx) {
  var hr;
  var useActions_action;
  var forwardEvents_action;
  var dispose;
  var hr_levels = [{
    class: "\n      mdc-list-divider\n      " +
    /*className*/
    ctx[1] + "\n      " + (
    /*padded*/
    ctx[4] ? "mdc-list-divider--padded" : "") + "\n      " + (
    /*inset*/
    ctx[5] ? "mdc-list-divider--inset" : "") + "\n    "
  },
  /*props*/
  ctx[6]];
  var hr_data = {};

  for (var i = 0; i < hr_levels.length; i += 1) {
    hr_data = assign(hr_data, hr_levels[i]);
  }

  var block = {
    c: function create() {
      hr = element("hr");
      this.h();
    },
    l: function claim(nodes) {
      hr = claim_element(nodes, "HR", {
        class: true
      });
      this.h();
    },
    h: function hydrate() {
      set_attributes(hr, hr_data);
      add_location(hr, file, 1, 2, 21);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, hr, anchor);
      if (remount) run_all(dispose);
      dispose = [action_destroyer(useActions_action = useActions.call(null, hr,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[7].call(null, hr))];
    },
    p: function update(ctx, dirty) {
      set_attributes(hr, get_spread_update(hr_levels, [dirty &
      /*className, padded, inset*/
      50 && {
        class: "\n      mdc-list-divider\n      " +
        /*className*/
        ctx[1] + "\n      " + (
        /*padded*/
        ctx[4] ? "mdc-list-divider--padded" : "") + "\n      " + (
        /*inset*/
        ctx[5] ? "mdc-list-divider--inset" : "") + "\n    "
      }, dirty &
      /*props*/
      64 &&
      /*props*/
      ctx[6]]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(hr);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(1:0) {#if group || nav}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var if_block_anchor;

  function select_block_type(ctx, dirty) {
    if (
    /*group*/
    ctx[2] ||
    /*nav*/
    ctx[3]) return create_if_block;
    return create_else_block;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type(ctx);
  var block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
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
      _$$props3$group = _$$props3.group,
      group = _$$props3$group === void 0 ? false : _$$props3$group;
  var _$$props4 = $$props,
      _$$props4$nav = _$$props4.nav,
      nav = _$$props4$nav === void 0 ? false : _$$props4$nav;
  var _$$props5 = $$props,
      _$$props5$padded = _$$props5.padded,
      padded = _$$props5$padded === void 0 ? false : _$$props5$padded;
  var _$$props6 = $$props,
      _$$props6$inset = _$$props6.inset,
      inset = _$$props6$inset === void 0 ? false : _$$props6$inset;
  var _$$props7 = $$props,
      _$$props7$$$slots = _$$props7.$$slots,
      $$slots = _$$props7$$$slots === void 0 ? {} : _$$props7$$$slots,
      $$scope = _$$props7.$$scope;
  validate_slots("Separator", $$slots, []);

  $$self.$set = function ($$new_props) {
    $$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("group" in $$new_props) $$invalidate(2, group = $$new_props.group);
    if ("nav" in $$new_props) $$invalidate(3, nav = $$new_props.nav);
    if ("padded" in $$new_props) $$invalidate(4, padded = $$new_props.padded);
    if ("inset" in $$new_props) $$invalidate(5, inset = $$new_props.inset);
  };

  $$self.$capture_state = function () {
    return {
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      forwardEvents: forwardEvents,
      use: use,
      className: className,
      group: group,
      nav: nav,
      padded: padded,
      inset: inset,
      props: props
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(8, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("group" in $$props) $$invalidate(2, group = $$new_props.group);
    if ("nav" in $$props) $$invalidate(3, nav = $$new_props.nav);
    if ("padded" in $$props) $$invalidate(4, padded = $$new_props.padded);
    if ("inset" in $$props) $$invalidate(5, inset = $$new_props.inset);
    if ("props" in $$props) $$invalidate(6, props = $$new_props.props);
  };

  var props;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
     $$invalidate(6, props = exclude($$props, ["use", "class", "group", "nav", "padded", "inset"]));
  };

  $$props = exclude_internal_props($$props);
  return [use, className, group, nav, padded, inset, props, forwardEvents];
}

var Separator = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Separator, _SvelteComponentDev);

  var _super = _createSuper(Separator);

  function Separator(options) {
    var _this;

    _classCallCheck(this, Separator);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      group: 2,
      nav: 3,
      padded: 4,
      inset: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Separator",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Separator, [{
    key: "use",
    get: function get() {
      throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "group",
    get: function get() {
      throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "nav",
    get: function get() {
      throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "padded",
    get: function get() {
      throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "inset",
    get: function get() {
      throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Separator;
}(SvelteComponentDev);

export { Separator as S };
