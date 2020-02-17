/** Coding challenge  (Quiz game in the console)
 * 1. Build a function constructor called question to describe a question. A question should include:
 * 
 * a)Question itself
 * b) The answers form which the player can choose the correct on (choose an adequate data structure here, array,
 *    object, etc.)
 * c) correct answwer (I would use a number for this)
 * 
 * 2. Create a couple of questions using the constructor
 * 3. Store them all inside an array
 *
 * 4. Select one random question and log it on the console, together with the possible answers (each question should have a number)
 * (Hint: write a method for the question objects for this task).
 * 
 * 
 * 5. Use the prompt function to ask the user for the correct answer. The user should input the number of ther correct answer
 * such as you displayed it on task 4
 * 
 * 6. Check if the number is correct and print to the console wheter the answer is correct at nor (Hint: write another method for this);
 *
 * 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't
 * interfere with other programmers' code (Hint: we learned a special technique to do exactly that). 
 * 
 *  ----- EXPERT LEVEL ----
 * 
 * 8. After you display the result, display the next random question, so that the game never end (Hint: write a function for this 
 * right after displaying the result)
 *
 * 
 * 9. Be careful: after task the gam literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. 
 * In this case, DON'T call the function from task 8. 
 * 
 * 10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use
 * the power  of clousures for this, but you don't have to, just do this with the tools you feel more comfortable at this point)
 * 
 * 11.- Display the score in the console. Use yet another method for this.
 **/



 

var Question = function () {

}