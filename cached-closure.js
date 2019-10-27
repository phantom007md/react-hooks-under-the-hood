function App (count) {
    console.log('From App: count=', count)
    useEffect(() => {
        console.log('From Closure: count =', count);
    })
}

let cachedClosure;
function useEffect(closure) {
    if( ! cachedClosure) {
        console.log(':: Storing in cache.\n')
        cachedClosure = closure;
    }
    cachedClosure()
}

App(1);
App(2);
App(3);