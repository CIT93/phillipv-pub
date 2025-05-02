# Initial thought: 
I would create a seperate js file to import/export high order function. 


# My updated thoughts: 
After thinking about the code, I would only need to update the render.js file since that file is responsible for redering the table. Since the average row will appear in the render table body, I would implament HOF as its own variable and update the const renderTbl. 