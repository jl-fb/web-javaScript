<template>
  <div class="door-area">
    <div class="door-frame" :class="{selected: selected && !open}">
      <Gift v-if="hasGift && open==true"/>
    </div>
    <div class="door" :class="{open}" @click="selected = !selected">
      <div class="number" :class="{selected}">{{number}}</div>
      <div class="knob" :class="{selected}" @click.stop="open = true"></div>
    </div>
  </div>
</template>

<script>
import Gift from "./Gift";

export default {
  name: "Door",
  components: { Gift },
  props: {
    number: {},
    hasGift: { type: Boolean }
  },
  data() {
    return {
      open: false,
      selected: false
    };
  }
};
</script>

<style>
:root {
  --door-border: 5px solid brown;
  --selected-border: 5px solid yellow;
}
.door-area {
  position: relative;
  height: 310px;
  width: 200px;
  border-bottom: 10px solid #aaa;
  bottom: 20px;
  font-size: 3rem;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
}
.door-frame {
  position: absolute;
  height: 100%;
  width: 180px;

  border-left: var(--door-border);
  border-right: var(--door-border);
  border-top: var(--door-border);

  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.door {
  position: absolute;
  top: 5px;
  height: 295px;
  width: 170px;
  background-color: chocolate;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;
}
.door .knob {
  height: 20px;
  width: 20px;
  background-color: brown;
  border-radius: 10px;
  align-self: flex-start;
  margin-top: 60px;
}
.door-frame.selected {
  border-left: var(--selected-border);
  border-right: var(--selected-border);
  border-top: var(--selected-border);
}
.door .knob.selected {
  background-color: yellow;
}
.door .number.selected {
  color: yellow;
}
.door.open {
  background-color: #0007;
}
.door.open .knob {
  display: none;
}
.door.open .number {
  display: none;
}
</style>
