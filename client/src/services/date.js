export default class ToDay {
     
    constructor(){
        this.date = new Date();
    };
    
    renderDate(){
        const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const element =  monthName.find((elem, index)=>{
            if(this.date.getMonth() === index){
                return elem; 
            };
            return false;
        });
        return `${this.date.getDate()}-${element}-${this.date.getFullYear()}`;
    };
};


