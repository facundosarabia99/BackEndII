let i = 0

const timer = setInterval(
    () => {
    console.log(i++)
    if (i > 10) {
        clearInterval(timer)
    }
}, 500)

const timerr = setTimeout(
    () => {
        console.log(`adios argentina, me voy de viaje`)
    }, 10_000)

    setTimeout(() =>{
        clearTimeout(timerr)
    }, 2_000)