function bigNumberSum(a, b) {
  
  // padding
  let cur = 0;
  while (cur < a.length || cur < b.length) {
    if (!a[cur]) {
      a = "0" + a;
    } else if (!b[cur]) {
      b = "0" + b;
    }
    cur++;
  }

  let carried = 0;
  const res = [];

  for (let i = a.length - 1; i > -1; i--) {
    const sum = carried + +a[i] + +b[i];
    if (sum > 9) {
      carried = 1;
    } else {
      carried = 0;
    }
    res[i] = sum % 10;
  }
  if (carried === 1) {
    res.unshift(1);
  }

  return res.join("");
}
