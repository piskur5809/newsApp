class Today{
    constructor(){
        this.date = new Date();
        this.day = this.date.getDate();
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();
    };
    
    getToday(){
        if(this.month+1 < 10){
            return `${this.day}-0${this.month + 1}-${this.year}`;
         } else {
            return `${this.day}-${this.month + 1}-${this.year}`;
         };
     
    };
    getYesterday(){
        const yesterdayDate = new Date(this.year, this.month, this.day - 1);
        const yesterdayYear = yesterdayDate.getFullYear();
        const yesterdayMonth = yesterdayDate.getMonth();
        const yesterdayDay = yesterdayDate.getDate();

        if(yesterdayMonth + 1 < 10){
            return `${yesterdayDay}-0${yesterdayMonth + 1}-${yesterdayYear}`;
        } else {
            return `${yesterdayDay}-${yesterdayMonth + 1}-${yesterdayYear}`;
        };
    
    };
}

    module.exports = reqDate =  new Today();