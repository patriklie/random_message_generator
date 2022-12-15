# Random message generator!

### This is my second attempt on the random message generator, it's based on the solution provided by CodeCademy.

## My attempt at explainin the code:
* Arrow function generating a random number based on the parameter/arguement "num".
*optionsObject is just that, an object with keys that has arrays as values.
* randomizedMessage is declared as an empty array.
* A for in loop, that loops through the keys inside the object "optionsObject".
* Each loop generates a random number based on the length of each keys array.length.
* Switch case used with a template literal pushed into the empty array for each case.
* Function joinArray takes in an array as an arguement and joins it with a linebreak
into a new variable that's is then logged for the result.