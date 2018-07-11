const transGps = ([a,b,c] = []) => {
    return a + b  / 60  + c / 3600
}

console.log(transGps(["112",'50','10.32']));