function App (count) {
    console.log('From App: count=', count)
    useEffect(() => {
        console.log('From Closure: count =', count);
    })
}

function useEffect(closure) {
    closure();
}

App(1);
App(2);
App(3);