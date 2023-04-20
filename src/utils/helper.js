export function debounceFunction(func, delay){  // arguments passed _> 1) function which have to performed 2) time in ms
    let timer;          
    console.log("running.....");
    return function(...args) {
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(()=> {
            console.log(context,"timeout....");
            func.apply(context, args);
        },delay);
    }
}