function trigent(){
    // QUESTION-1
    // var a=b=5;
    // console.log(a);//5
    // console.log(b);//5
    // console.log(a==b);//true
    
    /**
     * In JavaScript, we can create a variable without using let, const, or var.
     * When we do this, the variable behaves like a global variable.
     * For example, b = 5 creates a global variable b with the value 5.
     * Since a = b, it means a also gets the value 5.
     * Therefore, when you print a and b, both will have the value 5.
     * 
     * Note: we can avoit it by using strict mode("use strict";) on the top of function.
     * when we do this, it will prevent to creation of varibale without using any keyword
     * and it will throw error(ReferenceError: b is not defined)
     */

    // QUESTION-2  
    // for(let i=0; i<3; i++){ 
    //     setTimeout(()=>{
    //         console.log(i);//3 3 3
    //     }, 1000+i)  
    // }
   
    /**
     * Explanation:
    * The for loop runs, and control goes to the setTimeout function, which has a callback.
    * setTimeout is asynchronous, so it doesn’t stop the loop. The loop keeps running.
    * The callback will execute after the delay.
    * When i becomes 3, the loop stops.
    * Since i is declared with var, it reuses the same memory for each iteration, updating the value of i.
    * By the time the callback runs, i is 3.
    * So, when the callback executes, it logs i = 3.
     * 
     */

     // QUESTION-3
    for(var i=0; i<3; i++){ 
        setTimeout(()=>{
            console.log(i);//0 1 2
        }, 1000+i)  
    }
      /**
     * Explanation:
    * The for loop runs, and control goes to the setTimeout function, which has a callback.
    * setTimeout is asynchronous, so it doesn’t stop the loop. The loop keeps running.
    * The callback will execute after the delay.
    * When i becomes 3, the loop stops.
    * Since i is declared with let, each iteration of the loop gets its own separate copy of i
    * By the time the callback runs, each callback "remembers" the value of i from its respective iteration.
    * So, when the callbacks execute, they log i = 0, i = 1, and i = 2 (depending on the iteration).
     * 
     */
    
}

trigent();
