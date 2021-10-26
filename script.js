
    function task(NoT)
    {
        this.name = NoT; 
        this.date = new Date();
    }

    var table_box = document.getElementById("box");
    var tb = document.createElement("tbody");
    var count=0;
    function addDetails(e)
    {
        e.preventDefault();
        count++;
        var myform = document.getElementById("myForm");
        var tbr = document.createElement("tr");
        var nameOfTask = myform.name.value;
        var obj = new task(nameOfTask);
       
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        
        document.getElementById("dis").textContent=count;
        td1.textContent=obj.name;
        td2.textContent=obj.date;
        
        let complete = document.createElement("button");
        complete.innerText="Done";
        td3.append(complete);
        
        var numberOfTasks = 0;
        complete.addEventListener("click",function(){
           
            if(numberOfTasks % 2==0)
            {
                
            complete.innerText="UnDone";
           td1.style.color="lightgreen";
           td1.style.textDecoration="line-through";
            } else
            {
            complete.innerText="Done";
            td1.style.textDecoration="none";
            td1.style.color="white";
            }
            numberOfTasks++;
        })

        let rem = document.createElement("button");
        rem.innerText="Remove";
        
        td4.append(rem);

        rem.addEventListener("click",function(){
            tbr.remove();
            count--;
             document.getElementById("dis").textContent=count;
        })
        

        tbr.append(td1,td2,td3,td4);
        tb.append(tbr);
        table_box.append(tb);

     
        


    }
    