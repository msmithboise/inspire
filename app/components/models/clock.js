export default class Clock {
    constructor(data) {

        this.id = data.$id
        this.currentDateTime = data.currentDateTime
        this.utcOffset= data.utcOffset
        this.isDayLightSavingsTime = data.isDayLightSavingsTime
        this.dayOfTheWeek = data.dayOfTheWeek
        this.timeZoneName = data.timeZoneName
        this.currentFileTime = data.currentFileTime
        this.ordinalDate = data.ordinalDate
        this.serviceResponse = data.serviceResponse

    }
}