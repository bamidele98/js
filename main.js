const numbers = [1,2,3,4,5]
 const getNum = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(i, ` i will make it `);
    }
 }
 getNum(numbers);

 class myArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }
    get(i){
        return this.data[i];
    }
    shift(){
        for (let index = 0; index < this.length; index++) {
        this.data[index] = this.data[index + 1];
        }
        delete this.data[this.length - 1];    
        this.length--;
    }
    delete(index){
        for (let i = index; i < this.length - 1; i++){
            
            this.data[i] = this.data[i +1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

 }
 const newArray = new myArray();
 newArray.push("mango");
 newArray.push("orange");
 newArray.push("apple");
 console.log(newArray);
 console.log(newArray.delete(2));
 console.log(newArray);
 
 
 
 
 

 