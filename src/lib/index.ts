export type StylingVariables = { [key: string]: string | number }

export function variables(node: HTMLElement, variables: StylingVariables) {
  set(node, variables);
  
  return {
    update(variables: StylingVariables) {
      set(node, variables);
    }
  }
}

export function styles(node: HTMLElement, variables: StylingVariables) {
  set(node, variables, "");
  
  return {
    update(variables: StylingVariables) {
      set(node, variables, "");
    }
  }
}

function set(node: HTMLElement, variables: StylingVariables, prefix = "--") {
  for (const name in variables) {
    try {
      node.style.setProperty(`${prefix}${name}`, variables[name].toString());
    } catch (e) { // error, reset to default
      node.style.removeProperty(`${prefix}${name}`)
    }
  }
}