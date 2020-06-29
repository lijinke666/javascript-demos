function isDarkSchemePreference(){
  return window.matchMedia('screen and (prefers-color-scheme: dark)').matches;
}

console.log(isDarkSchemePreference())
