export class Clock {
    constructor(hour, minute){
        if (hour < 24 && hour >= 0){
            Clock._hour = hour
        }
        else{
            console.log("Error: hour value must be >= 0 and < 24")
        }
        
        if (minute < 60 && minute >= 0){
            Clock._minute = minute
        }
        else{
            console.log("Error: minute value must be >= 0 and < 60")
        }

        Clock.alarmIsActive = false;
        Clock.alarmMinute;
        Clock.alarmHour;

        Clock._minutesPassed = Clock._minute;
    }

    tick(){
        Clock._minute++
        Clock._minutesPassed++

        if (Clock._minute >= 60){
            Clock._hour++
            Clock._minute = 0
        }
        if (Clock._hour >= 24){
            Clock._hour = 0
        }

    }

    get minute(){
        return Clock._minute
    }

    get minutesPassed(){
        return Clock._minutesPassed
    }

    get hour(){
        return Clock._hour
    }

    get clockTime(){

        if (Clock._hour >= 0 && Clock._hour < 10 && Clock._minute >= 0 && Clock._minute < 10){
            return String("0" + Clock._hour + ":" + "0" + Clock._minute)
        }
        else if (Clock._hour >= 0 && Clock._hour < 10){
            return String("0" + Clock._hour + ":" + Clock._minute)
        }
        else if (Clock._minute >= 0 && Clock._minute < 10){
            return String(Clock._hour + ":" + "0" + Clock._minute)
        }            
        else {
            return String(Clock._hour + ":" + Clock._minute)
        }
        
    }

    set alarmTime(alarm) {
        Clock._alarm = alarm;
    }

    get alarmTime() {
        return Clock._alarm;
    }
}
