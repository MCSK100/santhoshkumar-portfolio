declare module 'three' {
  // Use `any` for the whole module to avoid missing-member errors in strict TS setups.
  // Runtime uses the real `three` package.
  const three: any;
  export = three;
}



