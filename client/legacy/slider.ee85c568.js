import { _ as _inherits, a as _classCallCheck, i as init, s as safe_not_equal, b as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, v as validate_slots, c as _getPrototypeOf, e as _possibleConstructorReturn, C as binding_callbacks, D as bind, f as space, g as element, t as text, E as create_component, q as query_selector_all, h as detach_dev, j as claim_space, k as claim_element, l as children, m as claim_text, F as claim_component, p as add_location, o as attr_dev, r as insert_dev, u as append_dev, G as mount_component, J as _slicedToArray, U as set_data_dev, K as add_flush_callback, L as transition_in, M as transition_out, N as destroy_component, n as set_style } from './client.58596db2.js';
import './prefixFilter.1941fe02.js';
import { F as FormField } from './bare.06670bd4.js';
import { S as Slider } from './bare.e28ca7dc.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/demo/slider.svelte"; // (11:6) <span slot="label" style="padding-right: 12px; width: max-content; display: block;">

function create_label_slot(ctx) {
  var span;
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Amount of Wonder");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true,
        style: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Amount of Wonder");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      set_style(span, "padding-right", "12px");
      set_style(span, "width", "max-content");
      set_style(span, "display", "block");
      add_location(span, file, 10, 6, 183);
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
    source: "(11:6) <span slot=\\\"label\\\" style=\\\"padding-right: 12px; width: max-content; display: block;\\\">",
    ctx: ctx
  });
  return block;
} // (9:4) <FormField align="end" style="display: flex;">


function create_default_slot(ctx) {
  var updating_value;
  var t;
  var current;

  function slider_value_binding(value) {
    /*slider_value_binding*/
    ctx[3].call(null, value);
  }

  var slider_props = {};

  if (
  /*value*/
  ctx[0] !== void 0) {
    slider_props.value =
    /*value*/
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
      /*value*/
      1) {
        updating_value = true;
        slider_changes.value =
        /*value*/
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
    id: create_default_slot.name,
    type: "slot",
    source: "(9:4) <FormField align=\\\"end\\\" style=\\\"display: flex;\\\">",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var section;
  var h2;
  var t1;
  var t2;
  var div0;
  var t3;
  var pre0;
  var t4;
  var t5;
  var t6;
  var div1;
  var t7;
  var updating_value;
  var t8;
  var pre1;
  var t9;
  var t10;
  var t11;
  var div2;
  var t12;
  var updating_value_1;
  var t13;
  var pre2;
  var t14;
  var t15;
  var current;
  var formfield = new FormField({
    props: {
      align: "end",
      style: "display: flex;",
      $$slots: {
        default: [create_default_slot],
        label: [create_label_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function slider0_value_binding(value) {
    /*slider0_value_binding*/
    ctx[4].call(null, value);
  }

  var slider0_props = {
    min: -10,
    max: 10,
    step: 2,
    discrete: true
  };

  if (
  /*value2*/
  ctx[1] !== void 0) {
    slider0_props.value =
    /*value2*/
    ctx[1];
  }

  var slider0 = new Slider({
    props: slider0_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(slider0, "value", slider0_value_binding);
  });

  function slider1_value_binding(value) {
    /*slider1_value_binding*/
    ctx[5].call(null, value);
  }

  var slider1_props = {
    min: -10,
    max: 10,
    step: 2,
    discrete: true,
    displayMarkers: true
  };

  if (
  /*value3*/
  ctx[2] !== void 0) {
    slider1_props.value =
    /*value3*/
    ctx[2];
  }

  var slider1 = new Slider({
    props: slider1_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(slider1, "value", slider1_value_binding);
  });
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Slider");
      t2 = space();
      div0 = element("div");
      create_component(formfield.$$.fragment);
      t3 = space();
      pre0 = element("pre");
      t4 = text("Value: ");
      t5 = text(
      /*value*/
      ctx[0]);
      t6 = space();
      div1 = element("div");
      t7 = text("Discrete with min/max/step:\n\n    ");
      create_component(slider0.$$.fragment);
      t8 = space();
      pre1 = element("pre");
      t9 = text("Value: ");
      t10 = text(
      /*value2*/
      ctx[1]);
      t11 = space();
      div2 = element("div");
      t12 = text("Discrete with min/max/step and tick marks:\n\n    ");
      create_component(slider1.$$.fragment);
      t13 = space();
      pre2 = element("pre");
      t14 = text("Value: ");
      t15 = text(
      /*value3*/
      ctx[2]);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1onfh7p\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Slider");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {});
      var div0_nodes = children(div0);
      claim_component(formfield.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      pre0 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre0_nodes = children(pre0);
      t4 = claim_text(pre0_nodes, "Value: ");
      t5 = claim_text(pre0_nodes,
      /*value*/
      ctx[0]);
      pre0_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {});
      var div1_nodes = children(div1);
      t7 = claim_text(div1_nodes, "Discrete with min/max/step:\n\n    ");
      claim_component(slider0.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t8 = claim_space(section_nodes);
      pre1 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre1_nodes = children(pre1);
      t9 = claim_text(pre1_nodes, "Value: ");
      t10 = claim_text(pre1_nodes,
      /*value2*/
      ctx[1]);
      pre1_nodes.forEach(detach_dev);
      t11 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {});
      var div2_nodes = children(div2);
      t12 = claim_text(div2_nodes, "Discrete with min/max/step and tick marks:\n\n    ");
      claim_component(slider1.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t13 = claim_space(section_nodes);
      pre2 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre2_nodes = children(pre2);
      t14 = claim_text(pre2_nodes, "Value: ");
      t15 = claim_text(pre2_nodes,
      /*value3*/
      ctx[2]);
      pre2_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Slider - SMUI";
      add_location(h2, file, 5, 2, 73);
      add_location(div0, file, 7, 2, 92);
      attr_dev(pre0, "class", "status");
      add_location(pre0, file, 14, 2, 320);
      add_location(div1, file, 16, 2, 364);
      attr_dev(pre1, "class", "status");
      add_location(pre1, file, 22, 2, 487);
      add_location(div2, file, 24, 2, 532);
      attr_dev(pre2, "class", "status");
      add_location(pre2, file, 30, 2, 685);
      add_location(section, file, 4, 0, 61);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);
      mount_component(formfield, div0, null);
      append_dev(section, t3);
      append_dev(section, pre0);
      append_dev(pre0, t4);
      append_dev(pre0, t5);
      append_dev(section, t6);
      append_dev(section, div1);
      append_dev(div1, t7);
      mount_component(slider0, div1, null);
      append_dev(section, t8);
      append_dev(section, pre1);
      append_dev(pre1, t9);
      append_dev(pre1, t10);
      append_dev(section, t11);
      append_dev(section, div2);
      append_dev(div2, t12);
      mount_component(slider1, div2, null);
      append_dev(section, t13);
      append_dev(section, pre2);
      append_dev(pre2, t14);
      append_dev(pre2, t15);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var formfield_changes = {};

      if (dirty &
      /*$$scope, value*/
      65) {
        formfield_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield.$set(formfield_changes);
      if (!current || dirty &
      /*value*/
      1) set_data_dev(t5,
      /*value*/
      ctx[0]);
      var slider0_changes = {};

      if (!updating_value && dirty &
      /*value2*/
      2) {
        updating_value = true;
        slider0_changes.value =
        /*value2*/
        ctx[1];
        add_flush_callback(function () {
          return updating_value = false;
        });
      }

      slider0.$set(slider0_changes);
      if (!current || dirty &
      /*value2*/
      2) set_data_dev(t10,
      /*value2*/
      ctx[1]);
      var slider1_changes = {};

      if (!updating_value_1 && dirty &
      /*value3*/
      4) {
        updating_value_1 = true;
        slider1_changes.value =
        /*value3*/
        ctx[2];
        add_flush_callback(function () {
          return updating_value_1 = false;
        });
      }

      slider1.$set(slider1_changes);
      if (!current || dirty &
      /*value3*/
      4) set_data_dev(t15,
      /*value3*/
      ctx[2]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(formfield.$$.fragment, local);
      transition_in(slider0.$$.fragment, local);
      transition_in(slider1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(formfield.$$.fragment, local);
      transition_out(slider0.$$.fragment, local);
      transition_out(slider1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_component(formfield);
      destroy_component(slider0);
      destroy_component(slider1);
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
  var value = 50;
  var value2 = 0;
  var value3 = 0;
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Slider> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Slider", $$slots, []);

  function slider_value_binding(value$1) {
    value = value$1;
    $$invalidate(0, value);
  }

  function slider0_value_binding(value) {
    value2 = value;
    $$invalidate(1, value2);
  }

  function slider1_value_binding(value) {
    value3 = value;
    $$invalidate(2, value3);
  }

  $$self.$capture_state = function () {
    return {
      Slider: Slider,
      FormField: FormField,
      value: value,
      value2: value2,
      value3: value3
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("value" in $$props) $$invalidate(0, value = $$props.value);
    if ("value2" in $$props) $$invalidate(1, value2 = $$props.value2);
    if ("value3" in $$props) $$invalidate(2, value3 = $$props.value3);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [value, value2, value3, slider_value_binding, slider0_value_binding, slider1_value_binding];
}

var Slider_1 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Slider_1, _SvelteComponentDev);

  var _super = _createSuper(Slider_1);

  function Slider_1(options) {
    var _this;

    _classCallCheck(this, Slider_1);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Slider_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Slider_1;
}(SvelteComponentDev);

export default Slider_1;
