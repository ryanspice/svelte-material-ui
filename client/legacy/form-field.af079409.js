import { _ as _inherits, a as _classCallCheck, i as init, s as safe_not_equal, b as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, V as validate_each_argument, v as validate_slots, c as _getPrototypeOf, e as _possibleConstructorReturn, E as create_component, F as claim_component, G as mount_component, L as transition_in, M as transition_out, N as destroy_component, C as binding_callbacks, D as bind, f as space, g as element, t as text, q as query_selector_all, h as detach_dev, j as claim_space, k as claim_element, l as children, m as claim_text, p as add_location, o as attr_dev, r as insert_dev, u as append_dev, J as _slicedToArray, P as group_outros, Q as check_outros, U as set_data_dev, W as destroy_each, n as set_style, K as add_flush_callback, w as noop } from './client.58596db2.js';
import { C as Checkbox } from './bare.dcb4ba6e.js';
import './prefixFilter.1941fe02.js';
import { F as FormField } from './bare.06670bd4.js';
import { R as Radio } from './bare.3ba4ccd4.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/demo/form-field.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
} // (12:8) <span slot="label">


function create_label_slot_1(ctx) {
  var span;
  var t_value = "".concat(
  /*option*/
  ctx[4][0].toUpperCase()).concat(
  /*option*/
  ctx[4].slice(1)) + "";
  var t;
  var block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "slot", "label");
      add_location(span, file, 11, 8, 251);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_label_slot_1.name,
    type: "slot",
    source: "(12:8) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (10:6) <FormField style="margin-right: 1em;">


function create_default_slot_1(ctx) {
  var updating_group;
  var t0;
  var t1;
  var current;

  function radio_group_binding(value) {
    /*radio_group_binding*/
    ctx[2].call(null, value);
  }

  var radio_props = {
    value:
    /*option*/
    ctx[4]
  };

  if (
  /*selected*/
  ctx[0] !== void 0) {
    radio_props.group =
    /*selected*/
    ctx[0];
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
      t0 = space();
      t1 = space();
    },
    l: function claim(nodes) {
      claim_component(radio.$$.fragment, nodes);
      t0 = claim_space(nodes);
      t1 = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(radio, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var radio_changes = {};

      if (!updating_group && dirty &
      /*selected*/
      1) {
        updating_group = true;
        radio_changes.group =
        /*selected*/
        ctx[0];
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
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(10:6) <FormField style=\\\"margin-right: 1em;\\\">",
    ctx: ctx
  });
  return block;
} // (9:4) {#each ['yes', 'no'] as option}


function create_each_block(ctx) {
  var current;
  var formfield = new FormField({
    props: {
      style: "margin-right: 1em;",
      $$slots: {
        default: [create_default_slot_1],
        label: [create_label_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(formfield.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(formfield.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(formfield, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var formfield_changes = {};

      if (dirty &
      /*$$scope, selected*/
      129) {
        formfield_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield.$set(formfield_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(formfield.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(formfield.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(formfield, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(9:4) {#each ['yes', 'no'] as option}",
    ctx: ctx
  });
  return block;
} // (22:6) <span slot="label">


function create_label_slot(ctx) {
  var span;
  var t0;
  var small;
  var t1;
  var block = {
    c: function create() {
      span = element("span");
      t0 = text("I agree to the terms and conditions of the software, ");
      small = element("small");
      t1 = text("and hereby sign away my life just to check my freaking messages.");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        slot: true
      });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "I agree to the terms and conditions of the software, ");
      small = claim_element(span_nodes, "SMALL", {
        style: true
      });
      var small_nodes = children(small);
      t1 = claim_text(small_nodes, "and hereby sign away my life just to check my freaking messages.");
      small_nodes.forEach(detach_dev);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_style(small, "opacity", ".7");
      add_location(small, file, 21, 78, 561);
      attr_dev(span, "slot", "label");
      add_location(span, file, 21, 6, 489);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t0);
      append_dev(span, small);
      append_dev(small, t1);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_label_slot.name,
    type: "slot",
    source: "(22:6) <span slot=\\\"label\\\">",
    ctx: ctx
  });
  return block;
} // (20:4) <FormField>


function create_default_slot(ctx) {
  var updating_checked;
  var t;
  var current;

  function checkbox_checked_binding(value) {
    /*checkbox_checked_binding*/
    ctx[3].call(null, value);
  }

  var checkbox_props = {};

  if (
  /*checked*/
  ctx[1] !== void 0) {
    checkbox_props.checked =
    /*checked*/
    ctx[1];
  }

  var checkbox = new Checkbox({
    props: checkbox_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(checkbox, "checked", checkbox_checked_binding);
  });
  var block = {
    c: function create() {
      create_component(checkbox.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(checkbox.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(checkbox, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var checkbox_changes = {};

      if (!updating_checked && dirty &
      /*checked*/
      2) {
        updating_checked = true;
        checkbox_changes.checked =
        /*checked*/
        ctx[1];
        add_flush_callback(function () {
          return updating_checked = false;
        });
      }

      checkbox.$set(checkbox_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(checkbox, detaching);
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(20:4) <FormField>",
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
  var pre1;
  var t8;
  var t9_value = (
  /*checked*/
  ctx[1] ? "Yes, muahahah." : "Not yet.") + "";
  var t9;
  var current;
  var each_value = ["yes", "no"];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < 2; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var formfield = new FormField({
    props: {
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
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h2 = element("h2");
      t1 = text("Form Fields");
      t2 = space();
      div0 = element("div");

      for (var _i = 0; _i < 2; _i += 1) {
        each_blocks[_i].c();
      }

      t3 = space();
      pre0 = element("pre");
      t4 = text("Selected: ");
      t5 = text(
      /*selected*/
      ctx[0]);
      t6 = space();
      div1 = element("div");
      create_component(formfield.$$.fragment);
      t7 = space();
      pre1 = element("pre");
      t8 = text("Checked: ");
      t9 = text(t9_value);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-13edvmw\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      h2 = claim_element(section_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Form Fields");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", {});
      var div0_nodes = children(div0);

      for (var _i2 = 0; _i2 < 2; _i2 += 1) {
        each_blocks[_i2].l(div0_nodes);
      }

      div0_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      pre0 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre0_nodes = children(pre0);
      t4 = claim_text(pre0_nodes, "Selected: ");
      t5 = claim_text(pre0_nodes,
      /*selected*/
      ctx[0]);
      pre0_nodes.forEach(detach_dev);
      t6 = claim_space(section_nodes);
      div1 = claim_element(section_nodes, "DIV", {});
      var div1_nodes = children(div1);
      claim_component(formfield.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t7 = claim_space(section_nodes);
      pre1 = claim_element(section_nodes, "PRE", {
        class: true
      });
      var pre1_nodes = children(pre1);
      t8 = claim_text(pre1_nodes, "Checked: ");
      t9 = claim_text(pre1_nodes, t9_value);
      pre1_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Form Field - SMUI";
      add_location(h2, file, 5, 2, 77);
      add_location(div0, file, 7, 2, 101);
      attr_dev(pre0, "class", "status");
      add_location(pre0, file, 16, 2, 369);
      add_location(div1, file, 18, 2, 419);
      attr_dev(pre1, "class", "status");
      add_location(pre1, file, 25, 2, 697);
      add_location(section, file, 4, 0, 65);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t1);
      append_dev(section, t2);
      append_dev(section, div0);

      for (var _i3 = 0; _i3 < 2; _i3 += 1) {
        each_blocks[_i3].m(div0, null);
      }

      append_dev(section, t3);
      append_dev(section, pre0);
      append_dev(pre0, t4);
      append_dev(pre0, t5);
      append_dev(section, t6);
      append_dev(section, div1);
      mount_component(formfield, div1, null);
      append_dev(section, t7);
      append_dev(section, pre1);
      append_dev(pre1, t8);
      append_dev(pre1, t9);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*selected*/
      1) {
        each_value = ["yes", "no"];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < 2; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(div0, null);
          }
        }

        group_outros();

        for (_i4 = 2; _i4 < 2; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }

      if (!current || dirty &
      /*selected*/
      1) set_data_dev(t5,
      /*selected*/
      ctx[0]);
      var formfield_changes = {};

      if (dirty &
      /*$$scope, checked*/
      130) {
        formfield_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      formfield.$set(formfield_changes);
      if ((!current || dirty &
      /*checked*/
      2) && t9_value !== (t9_value = (
      /*checked*/
      ctx[1] ? "Yes, muahahah." : "Not yet.") + "")) set_data_dev(t9, t9_value);
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < 2; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      transition_in(formfield.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < 2; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      transition_out(formfield.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
      destroy_each(each_blocks, detaching);
      destroy_component(formfield);
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
  var selected = "yes";
  var checked = false;
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Form_field> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Form_field", $$slots, []);

  function radio_group_binding(value) {
    selected = value;
    $$invalidate(0, selected);
  }

  function checkbox_checked_binding(value) {
    checked = value;
    $$invalidate(1, checked);
  }

  $$self.$capture_state = function () {
    return {
      FormField: FormField,
      Radio: Radio,
      Checkbox: Checkbox,
      selected: selected,
      checked: checked
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("selected" in $$props) $$invalidate(0, selected = $$props.selected);
    if ("checked" in $$props) $$invalidate(1, checked = $$props.checked);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [selected, checked, radio_group_binding, checkbox_checked_binding];
}

var Form_field = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Form_field, _SvelteComponentDev);

  var _super = _createSuper(Form_field);

  function Form_field(options) {
    var _this;

    _classCallCheck(this, Form_field);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Form_field",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Form_field;
}(SvelteComponentDev);

export default Form_field;
