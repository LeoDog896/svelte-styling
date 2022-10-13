<script lang="ts">
  import { variables, styles } from "$lib"
  import Prism from 'svelte-prism'

  let border = "1px black solid"
  let backgroundColor = "white"
  let headerColor = "#FFEB01"
  let sizeMultiplier = 1.1
  
  let script = `\<script>
  import { variables } from "svelte-styling"
  let size = 1
  let backgroundColor = "white";
\<\/script>
<h1 use:variables={{ size }}></h1>
<input type="number" bind:value={size} placeholder="Enter Size">

<input type="number" bind:value={backgroundCOlor} placeholder="Enter Background Color">
<svelte:body use:variables={{ color: backgroundColor }}>

\<\style>
  :global(body) {
    --color: white;
    background-color: var(--color);
  }

  h1 {
    --size: 1; /* default SSR value! */
    font-size: calc(var(--size) * 2rem);
  }
\<\/style>`;

  let styleScript = `\<script>
  import { styles } from "svelte-styling"
  let border = "1px black solid"
\<\/script>

\<input use:styles={{ border }} bind:value={border} placeholder="Enter Border">`
</script>

<svelte:body use:variables={{ color: backgroundColor }}></svelte:body>

<main use:variables={{ sizeMultiplier }}>
  <h1 class="header" use:variables={{ color: headerColor }}>✨ svelte-styling <input type="color" bind:value={headerColor}> ✨</h1>

  <code>npm install -D svelte-styling</code><br/>
  <code>yarn add -D svelte-styling</code>

  <p class="description">ridiculously simple CSS variables in svelte</p>

  <hr>

  <h2 class="header">Variables var(--x)</h2>
  
  <label for="sizeInput">Size (<b>Changes all header font sizes</b>):</label>
  <input id="sizeInput" placeholder="Enter Size" type="number" bind:value={sizeMultiplier}><br/>

  <label for="backgroundInput">Background Color (Text)</label>
  <input id="backgroundInput" placeholder="Enter Background Color" bind:value={backgroundColor}><br/>

  <p>code usage example:</p>

  <Prism language="html" source="{script}" />

  <hr/>

  <h2 class="header">Styles</h2>

  <label for="border">Border Style (this input)</label>
  <input id="border" bind:value={border} placeholder="Enter Border" use:styles={{ border }}>
  <Prism language="html" source="{styleScript}"/>
</main>

<style>

  main {
    --sizeMultiplier: 1.1;
  }

  .header {
    --color: black;
    color: var(--color);
    font-size: calc(var(--sizeMultiplier) * 2rem);
  }

  .description {
    font-size: calc(var(--sizeMultiplier) * 1rem);
  }

  :global(body) {
    --color: white;
    margin: 5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--color);
  }

  input {
    margin: 1rem 0;
  }
</style>