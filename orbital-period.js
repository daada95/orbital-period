function orbitalPeriod(arr) {
// first we provide constants that will be used for calculation
  const gm = 398600.4418;
  const earthRadius = 6367.4447;

// then we iterate through array of objects, adding orbitalPeriod property based on object's avgAlt property and then deleting it
  for (let i = 0; i < arr.length; i++) {
    arr[i].orbitalPeriod = (Math.round((2 * Math.PI) * Math.sqrt(Math.pow((earthRadius + arr[i].avgAlt), 3) / gm)));
    delete arr[i].avgAlt;
  }

// after every object gets its orbital period calculated - we return whole array
  return arr;
}
