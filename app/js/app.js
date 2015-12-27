import React from "react";
import ReactDOM from "react-dom";
import deepFreeze from "deep-freeze";
import expect from "expect";
import {createStore} from "redux";

require("../scss/core.scss");

/*
 * Open the console to see
 * that all tests have passed.
 */

 /*
  * Open the console to see
  * that the tests have passed.
  */

 const toggleTodo = (todo) => {
   return {
     ...todo,
     completed: !todo.completed
   };
 };

 const testToggleTodo = () => {
   const todoBefore = {
     id: 0,
     text: "Learn Redux",
     completed: false
   };
   const todoAfter = {
     id: 0,
     text: "Learn Redux",
     completed: true
   };

   deepFreeze(todoBefore);

   expect(
     toggleTodo(todoBefore)
   ).toEqual(todoAfter);
 };

 testToggleTodo();
 console.log("All tests passed.");
