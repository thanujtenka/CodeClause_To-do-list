const input=document.getElementById("inputfield");
        
        const innercontainer=document.getElementById("list-container"); 
        function add()
        {
            if(input.value=='')
            alert("compalsary add text");
            else
            {
                        let li=document.createElement("li"); 
                        li.innerHTML=input.value;
                        innercontainer.appendChild(li); 
                        let span=document.createElement("span");
                        span.innerHTML="\u00d7";
                        li.appendChild(span); 
                        
            } 
            input.value=''; 
            storedata();
        } 
        innercontainer.addEventListener("click",function(e){
            if(e.target.tagName==="LI"){
               e.target.classList.  toggle("checked"); 
               storedata();
            }
            else if(e.target.tagName==="SPAN") 
            {
                e.target.parentElement.remove(); 
                storedata();
            }
        },false); 
        function storedata()
        {
            localStorage.setItem("data",innercontainer.innerHTML);
        } 
        function display()
        {
            innercontainer.innerHTML= localStorage.getItem("data");
            
        } 
        display();