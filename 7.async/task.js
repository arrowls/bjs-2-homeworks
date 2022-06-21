class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock (time, cb, id) {
        if (id === undefined) {
            throw new Error('No id!');
        }
        if (this.alarmCollection.some(el => el.id == id)) {
            console.error('Id has already been taken');
            return;
        }
        this.alarmCollection.push({id, time, cb});
    }
    removeClock (id) {
        let success = false;
        this.alarmCollection.forEach((element, index) => {
            if (element.id == id) {
               this.alarmCollection.splice(index, 1);
               success = true; 
            }
        });
        return success;
    }
    getCurrentFormattedTime () {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }    
        return `${hours}:${minutes}`;
    }
    checkClock(alarm) {
        if (alarm.time === this.getCurrentFormattedTime()) {
            alarm.cb();
        }
    }
    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach((x) => {
                    this.checkClock(x);                    
                })
            }, 100);
        }
    }
    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms(){
        this.alarmCollection.forEach((x) => {
            console.log(x.id, " ", x.time);
        })
    }

    clearAlarms(){
        this.alarmCollection = [];
        console.log('All alarms cleared');
    }
}

function testCase() {
    let alarm = new AlarmClock;

    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) {hours = "0" + hours};
    let minutes = date.getMinutes();
    if (minutes < 10) {minutes = "0" + minutes};
    
    alarm.addClock(
        `${hours < 10 ? "0" + hours: hours}:${minutes}`, () => {
            console.log('many times');
        },'1');

    minutes++;

    alarm.addClock(
        `${hours < 10? "0" + hours: hours}:${minutes < 10? "0" + minutes: minutes}`, () => {
            console.log('single time, then removed')        
            alarm.removeClock('2');
    }, '2');

    minutes++;

    alarm.addClock(
        `${hours < 10? "0" + hours: hours}:${minutes < 10? "0" + minutes: minutes}`, () => {
            console.log('single time, no output');
            alarm.stop();
            alarm.clearAlarms();
            alarm.printAlarms();
    }, '3');

    alarm.printAlarms();
    alarm.start();

}

testCase();