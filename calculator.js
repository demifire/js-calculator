/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule(){
    var memory = 0;
    var total = 0;

    function currentTotal(){
        return total;
    };

    function getTotal(){
        return total;
    };
    function validation(num){
        if(typeof num !== 'number'){
            throw err;
        }
    }

    return {
        load: function (num){
            validation(num);
            total = num;
            return total;
        },
        getTotal: getTotal,
        currentTotal: currentTotal,
        add: function(num){
            validation(num);
            total += num;
            return total;
        },
        subtract: function(num){
            validation(num);
            total -= num;
            return total;
        },
        multiply: function(num){
            validation(num);
            total *= num;
            return total;
        },
        divide: function(num){
            validation(num);
            total /= num;
            return total;
        },
        recallMemory: function(){
            memory = total;
            return memory;
        },
        saveMemory: function(){
            var save = memory;
            return save;
        },
        clearMemory: function(){
            memory = 0;
            total = 0;
            return memory;
        },
        }
    };


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

