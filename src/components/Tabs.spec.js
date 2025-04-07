import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Tabs from "./Tabs.vue";

const tabs = ["Home", "Profile", "About", "Settings"];

describe("Tabs.vue", () => {
  it("renders correct number of tabs", () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs,
      },
    });

    const buttons = wrapper.findAll("button");

    expect(buttons).toHaveLength(4);
    for (const [index, tab] of Object.entries(tabs)) {
      expect(buttons[index].text()).toBe(tab);
    }
  });

  it("emits update:modelValue on tab click", async () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: tabs,
        modelValue: tabs[0],
      },
    });
    const buttons = wrapper.findAll("button");
    expect(buttons[0].attributes("aria-selected")).toBe("true");
    expect(buttons[1].attributes("aria-selected")).toBe("false");
    await buttons[1].trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")[0]).toEqual([tabs[1]]);

    await wrapper.setProps({
      modelValue: tabs[1],
    });

    expect(buttons[1].attributes("aria-selected")).toBe("true");
  });

  it("sets correct role and id attributes", () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs,
      },
    });
    const button = wrapper.find("button");
    expect(button.attributes("role")).toBe("tab");
    expect(button.attributes("id")).toBe(`tab-${tabs[0]}`);
  });

  it("handles empty tabs array", () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: [],
      },
    });
    const lis = wrapper.findAll("li");
    expect(lis).toHaveLength(0);
  });

  it("does not set aria-selected if modelValue not in tabs", () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: tabs,
        modelValue: "Features",
      },
    });
    const buttons = wrapper.findAll("button");
    buttons.forEach(button => {
      expect(button.attributes("aria-selected")).toBe("false");
    });
  });

  it("handles missing modelValue", () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: tabs,
      },
    });
    const buttons = wrapper.findAll("button");
    buttons.forEach(button => {
      expect(button.attributes("aria-selected")).toBe("false");
    });
  });
});
