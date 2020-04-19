import { X as styleInject, Y as _inherits, Z as _classCallCheck, i as init, s as safe_not_equal, $ as _assertThisInitialized, d as dispatch_dev, a0 as _createClass, S as SvelteComponentDev, ah as create_slot, a1 as exclude, a2 as assign, a3 as forwardEventsBuilder, a4 as get_current_component, ai as setContext, v as validate_slots, a7 as exclude_internal_props, a8 as useActions, a9 as _getPrototypeOf, aa as _possibleConstructorReturn, g as element, k as claim_element, l as children, h as detach_dev, ab as set_attributes, p as add_location, r as insert_dev, ac as run_all, H as action_destroyer, ad as _slicedToArray, aj as get_slot_context, ak as get_slot_changes, ae as get_spread_update, af as is_function, L as transition_in, M as transition_out, aw as classAdderBuilder, ax as Div, w as noop } from './client.58596db2.js';

var css_248z = ".mdc-image-list{display:flex;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__image-aspect-container,.mdc-image-list__item{position:relative;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:50%;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:100%}.mdc-image-list__image{border-radius:0}.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-radius:0 0 0 0}.mdc-image-list__supporting{color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:rgba(0,0,0,.6);color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}";
styleInject(css_248z);

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "home/hperrin/repos/svelte-material-ui/packages/image-list/ImageList.svelte";

function create_fragment(ctx) {
  var ul;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[7].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[6], null);
  var ul_levels = [{
    class: "\n    mdc-image-list\n    " +
    /*className*/
    ctx[1] + "\n    " + (
    /*masonry*/
    ctx[2] ? "mdc-image-list--masonry" : "") + "\n    " + (
    /*withTextProtection*/
    ctx[3] ? "mdc-image-list--with-text-protection" : "") + "\n  "
  }, exclude(
  /*$$props*/
  ctx[5], ["use", "class", "masonry", "withTextProtection"])];
  var ul_data = {};

  for (var i = 0; i < ul_levels.length; i += 1) {
    ul_data = assign(ul_data, ul_levels[i]);
  }

  var block = {
    c: function create() {
      ul = element("ul");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      ul = claim_element(nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);
      if (default_slot) default_slot.l(ul_nodes);
      ul_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(ul, ul_data);
      add_location(ul, file, 0, 0, 0);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, ul, anchor);

      if (default_slot) {
        default_slot.m(ul, null);
      }

      current = true;
      if (remount) run_all(dispose);
      dispose = [action_destroyer(useActions_action = useActions.call(null, ul,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[4].call(null, ul))];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        64) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[6], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[6], dirty, null));
        }
      }

      set_attributes(ul, get_spread_update(ul_levels, [dirty &
      /*className, masonry, withTextProtection*/
      14 && {
        class: "\n    mdc-image-list\n    " +
        /*className*/
        ctx[1] + "\n    " + (
        /*masonry*/
        ctx[2] ? "mdc-image-list--masonry" : "") + "\n    " + (
        /*withTextProtection*/
        ctx[3] ? "mdc-image-list--with-text-protection" : "") + "\n  "
      }, dirty &
      /*exclude, $$props*/
      32 && exclude(
      /*$$props*/
      ctx[5], ["use", "class", "masonry", "withTextProtection"])]));
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
      if (detaching) detach_dev(ul);
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
      _$$props3$masonry = _$$props3.masonry,
      masonry = _$$props3$masonry === void 0 ? false : _$$props3$masonry;
  var _$$props4 = $$props,
      _$$props4$withTextPro = _$$props4.withTextProtection,
      withTextProtection = _$$props4$withTextPro === void 0 ? false : _$$props4$withTextPro;
  setContext("SMUI:label:context", "image-list");
  var _$$props5 = $$props,
      _$$props5$$$slots = _$$props5.$$slots,
      $$slots = _$$props5$$$slots === void 0 ? {} : _$$props5$$$slots,
      $$scope = _$$props5.$$scope;
  validate_slots("ImageList", $$slots, ['default']);

  $$self.$set = function ($$new_props) {
    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
    if ("masonry" in $$new_props) $$invalidate(2, masonry = $$new_props.masonry);
    if ("withTextProtection" in $$new_props) $$invalidate(3, withTextProtection = $$new_props.withTextProtection);
    if ("$$scope" in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      setContext: setContext,
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      forwardEvents: forwardEvents,
      use: use,
      className: className,
      masonry: masonry,
      withTextProtection: withTextProtection
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(5, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
    if ("masonry" in $$props) $$invalidate(2, masonry = $$new_props.masonry);
    if ("withTextProtection" in $$props) $$invalidate(3, withTextProtection = $$new_props.withTextProtection);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [use, className, masonry, withTextProtection, forwardEvents, $$props, $$scope, $$slots];
}

var ImageList = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ImageList, _SvelteComponentDev);

  var _super = _createSuper(ImageList);

  function ImageList(options) {
    var _this;

    _classCallCheck(this, ImageList);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      class: 1,
      masonry: 2,
      withTextProtection: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ImageList",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(ImageList, [{
    key: "use",
    get: function get() {
      throw new Error("<ImageList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ImageList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<ImageList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ImageList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "masonry",
    get: function get() {
      throw new Error("<ImageList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ImageList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "withTextProtection",
    get: function get() {
      throw new Error("<ImageList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ImageList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ImageList;
}(SvelteComponentDev);

function _createSuper$1(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$1()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "home/hperrin/repos/svelte-material-ui/packages/common/Li.svelte";

function create_fragment$1(ctx) {
  var li;
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
  var li_levels = [exclude(
  /*$$props*/
  ctx[2], ["use"])];
  var li_data = {};

  for (var i = 0; i < li_levels.length; i += 1) {
    li_data = assign(li_data, li_levels[i]);
  }

  var block = {
    c: function create() {
      li = element("li");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      if (default_slot) default_slot.l(li_nodes);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(li, li_data);
      add_location(li, file$1, 1, 0, 1);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, li, anchor);

      if (default_slot) {
        default_slot.m(li, null);
      }

      current = true;
      if (remount) run_all(dispose);
      dispose = [action_destroyer(useActions_action = useActions.call(null, li,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[1].call(null, li))];
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

      set_attributes(li, get_spread_update(li_levels, [dirty &
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
      if (detaching) detach_dev(li);
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
  validate_slots("Li", $$slots, ['default']);

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

var Li = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Li, _SvelteComponentDev);

  var _super = _createSuper$1(Li);

  function Li(options) {
    var _this;

    _classCallCheck(this, Li);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      use: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Li",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(Li, [{
    key: "use",
    get: function get() {
      throw new Error("<Li>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Li>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Li;
}(SvelteComponentDev);

var Item = classAdderBuilder({
  class: 'mdc-image-list__item',
  component: Li,
  contexts: {}
});

var ImageAspectContainer = classAdderBuilder({
  class: 'mdc-image-list__image-aspect-container',
  component: Div,
  contexts: {}
});

function _createSuper$2(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$2()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "home/hperrin/repos/svelte-material-ui/packages/common/Img.svelte";

function create_fragment$2(ctx) {
  var img;
  var useActions_action;
  var forwardEvents_action;
  var dispose;
  var img_levels = [{
    alt:
    /*alt*/
    ctx[1]
  }, exclude(
  /*$$props*/
  ctx[3], ["use", "alt"])];
  var img_data = {};

  for (var i = 0; i < img_levels.length; i += 1) {
    img_data = assign(img_data, img_levels[i]);
  }

  var block = {
    c: function create() {
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      img = claim_element(nodes, "IMG", {
        alt: true
      });
      this.h();
    },
    h: function hydrate() {
      set_attributes(img, img_data);
      add_location(img, file$2, 1, 0, 1);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, img, anchor);
      if (remount) run_all(dispose);
      dispose = [action_destroyer(useActions_action = useActions.call(null, img,
      /*use*/
      ctx[0])), action_destroyer(forwardEvents_action =
      /*forwardEvents*/
      ctx[2].call(null, img))];
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      set_attributes(img, get_spread_update(img_levels, [dirty &
      /*alt*/
      2 && {
        alt:
        /*alt*/
        ctx[1]
      }, dirty &
      /*exclude, $$props*/
      8 && exclude(
      /*$$props*/
      ctx[3], ["use", "alt"])]));
      if (useActions_action && is_function(useActions_action.update) && dirty &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(img);
      run_all(dispose);
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
  var forwardEvents = forwardEventsBuilder(get_current_component());
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$alt = _$$props2.alt,
      alt = _$$props2$alt === void 0 ? "" : _$$props2$alt;
  var _$$props3 = $$props,
      _$$props3$$$slots = _$$props3.$$slots,
      $$slots = _$$props3$$$slots === void 0 ? {} : _$$props3$$$slots,
      $$scope = _$$props3.$$scope;
  validate_slots("Img", $$slots, []);

  $$self.$set = function ($$new_props) {
    $$invalidate(3, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("alt" in $$new_props) $$invalidate(1, alt = $$new_props.alt);
  };

  $$self.$capture_state = function () {
    return {
      get_current_component: get_current_component,
      forwardEventsBuilder: forwardEventsBuilder,
      exclude: exclude,
      useActions: useActions,
      forwardEvents: forwardEvents,
      use: use,
      alt: alt
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(3, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("alt" in $$props) $$invalidate(1, alt = $$new_props.alt);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [use, alt, forwardEvents, $$props];
}

var Img = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Img, _SvelteComponentDev);

  var _super = _createSuper$2(Img);

  function Img(options) {
    var _this;

    _classCallCheck(this, Img);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      use: 0,
      alt: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Img",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  _createClass(Img, [{
    key: "use",
    get: function get() {
      throw new Error("<Img>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Img>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "alt",
    get: function get() {
      throw new Error("<Img>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Img>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Img;
}(SvelteComponentDev);

var Image = classAdderBuilder({
  class: 'mdc-image-list__image',
  component: Img,
  contexts: {}
});

var Supporting = classAdderBuilder({
  class: 'mdc-image-list__supporting',
  component: Div,
  contexts: {}
});

export { ImageList as I, Supporting as S, Item as a, ImageAspectContainer as b, Image as c };
