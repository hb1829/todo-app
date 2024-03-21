// todo.utils.js

// Import the Todo model from the models directory 
import { Todo } from "../models/todo.model.js";


/** 
 * Add a new todo to the database
 * After the data is logged in the database, it should be saved.
 * Async - await operation
*/
export const addTodo = async (todoData) => {
    try {
        const newTodo = new Todo(todoData);
        await newTodo.save();
    } catch (error) {
        throw error;
    }
}


/** 
 * UpdateById todo to the database
 * Async - await operation
*/
export const updateTodo = async (todoId,updatedTodoData) => {
    try {
        await Todo.findByIdAndUpdate(todoId,updatedTodoData, {new: true});
    } catch (error) {
        throw error;
    }
}

/** 
 * Delete a todo based on Id from the database
 * Async - await operation
*/

export const deleteTodo = async (todoId) => {
    try {
        await Todo.findByIdAndDelete(todoId);
    } catch (error) {
        throw error;
    }
}


/** 
 * Mark a Todo as complete if id matches
 * Async - await operation
*/

export const markTodoAsComplete = async (todoId) => {
    try {
        await Todo.findByIdAndUpdate(todoId, {complete: true});   
    } catch (error) {
        throw error;
    }
}