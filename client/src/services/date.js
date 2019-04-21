export default class ToDay {
     
    constructor(){
        this.date = new Date();
        this.day = this.date.getDate();
        this.month = this.month();
        this.year = this.date.getFullYear();
    };
    
    month(){
        if(this.date.getMonth()+1 < 10){
            return `0${this.date.getMonth()+1}`;
        } else {
            return `${this.date.getMonth()+1}`;
        };
    };

    getCurrentDate(){
        return `${this.year}-${this.month}-${this.day}`;
    };

    renderDate(){
        const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const element =  monthName.find((elem, index)=>{
            if(this.date.getMonth() === index){
                return elem; 
            };
            return false;
        });
        return `${this.day}-${element}-${this.year}`;
    };
};


