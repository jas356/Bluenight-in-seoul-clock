const getCurrentTime = () => {
    //get new date
    const today = new Date()

    //Extract
    let day = today.getDay()
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    let millisecond = today.getMilliseconds()

    //Day Array
    const dayArray = [
        "Sun", "Mon", "Tues", "Wed", "Thr", "Fri", "Sat"
    ]

    //test by using console.log 


    //Assemble
    let currentTime = `${dayArray[day]} ${hour} : ${minute} : ${second} : ${millisecond}`

    //Check Leading zero
    hour = checkLeadingZero(hour)
    minute = checkLeadingZero(minute)
    second = checkLeadingZero(second)

    //render
    document.querySelector(".clock").innerHTML = currentTime

    setTimeout(getCurrentTime, 0)
}

const checkLeadingZero = (paramTime) => {
paramTime < 10
 ? paramTime = `0${paramTime}`
 : null
 return paramTime
}

