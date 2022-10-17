# svelte-styling

[![npm](https://img.shields.io/npm/v/svelte-styling)](https://npmjs.com/package/svelte-styling)
[![GitHub](https://img.shields.io/badge/MIT)](https://github.com/LeoDog896/svelte-styling/blob/master/LICENSE)
[![demo](https://img.shields.io/badge/demo-live-brightgreen)](https://leodog896.github.io/svelte-styling/demo)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/svelte-styling)
![npm](https://img.shields.io/npm/dt/svelte-styling)

*ridiculously* simple CSS variables in svelte

Demo: https://leodog896.github.io/svelte-styling

## Variables

```html
<script>
  import { variables } from "svelte-styling"
  let size = 1
  let backgroundColor = "white";
</script>
<input type="number" bind:value={size} placeholder="Enter Size">
<p use:variables={{ size }}></p>

<input type="number" bind:value={backgroundCOlor} placeholder="Enter Background Color">
<svelte:body use:variables={{ color: backgroundColor }}>

<style>
  :global(body) {
    --color: white;
    background-color: var(--color);
  }

  p {
    --size: 1; /* default SSR value! */
    font-size: calc(var(--size) * 2rem);
  }
</style>
```

## Styles

```html
<script>
  import { styles } from "svelte-styling"
  let border = "1px black solid"
</script>

<input use:styles={{ border }} bind:value={border} placeholder="Enter Border">
```
