document.querySelector("#add-time")
.addEventListener('click', cloneField);


function cloneField() {
    
   const newFielsContainer = document.querySelector('.schedule-item').cloneNode(true);

   const fields = newFielsContainer.querySelectorAll('input');
   
   fields.forEach(function (field) {
        field.value = "";
   });

   document.querySelector('#schedule-items').appendChild(newFielsContainer);
}