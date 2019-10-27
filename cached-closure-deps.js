function App (count) {
    console.log('From App: count=', count)
    useEffect(() => {
        console.log('From Cosure: count =', count);
    }, [])
}

let cachedDeps;
let cachedClosure;
function useEffect(closure, deps) {
    if (!cachedClosure || ! arraysEqual(cachedDeps, deps)) {
      console.log(":: Storing in cache\n.");
      cachedClosure = closure;
      cachedDeps = deps;
    }
    cachedClosure()
}

App(1);
App(2);
App(3);













function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}