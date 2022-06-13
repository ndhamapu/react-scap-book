# react-scap-book



# REACTJS

I am going through road to react : Your journey to master React.js book and wanted to code some sample and make few changes so i get familiar with react syntax.
This repository will have samples that I practise and modify from the book.

# Creating Application template

```
npx create-react-app hacker-stories
```

### __Simple Handler Concept__
The excerpts from the book.

The concept of the callback handler in a nutshell: We pass a function from a parent component (App) to a child component (Search) via props; we call this function in the child component (Search), but have the actual implementation of the called function in the parent component (App).

 Essentially when an (event) handler is passed as props from a parent component to its child component, it becomes a callback handler. 
 
 React props are always passed down the component tree, and callback handlers passed as functions in props can be used to communicate up the component hierarchy.

