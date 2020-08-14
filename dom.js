 // select all the buttons
 var btns = document.querySelectorAll('.accordion-btn');

 // add a function for every button
 btns.forEach(btn => btn.addEventListener('click', function(e){
     const paragraph = e.currentTarget.parentElement.parentElement;
    //  paragraph.classList.toggle('show');
    if(paragraph.classList.contains('show')){
        paragraph.classList.remove('show');
        paragraph.classList.remove('childShow');
        paragraph.classList.remove('grandChildShow');
    }else{
        paragraph.classList.add('show');
    }
 }));

 // select all the child accordion buttons
 var childBtns = document.querySelectorAll('.child-btn');

 // add a function for every child button 
 childBtns.forEach(btn => btn.addEventListener('click', function(e){
    const childParagraph = e.currentTarget.parentElement.parentElement;
    if(childParagraph.classList.contains('childShow')){
        childParagraph.classList.remove('childShow');
        childParagraph.classList.remove('grandChildShow');
    }else{
        childParagraph.classList.add('childShow');
    }
 }))

 // select all the grandChild accordion buttons
 var grandChildBtns = document.querySelectorAll('.grandchild-btn');

 // add a function for every grandchild button 
 grandChildBtns.forEach(btn => btn.addEventListener('click', function(e){
    const grandChildParagraph = e.currentTarget.parentElement.parentElement;
    grandChildParagraph.classList.toggle('grandChildShow');
    console.log(grandChildParagraph);
 }));

