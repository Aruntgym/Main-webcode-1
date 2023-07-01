//Creat container for RWD
let container=document.createElement("div");
container.setAttribute("class","container");
let row=document.createElement("div");
row.classList.add("row","m-3");

//creat choose box and Go button by DOM 
let div=document.createElement("div");
div.setAttribute("class","input-group");
let select=document.createElement("select");
select.setAttribute("class","custom-select");
select.setAttribute("id","inputGroupSelect04");
select.setAttribute("aria-label","Example select with button addon");

//creat choose option using DOM
let option=document.createElement("option");
option.innerHTML=`Choose nationalize`;
let option1=document.createElement("option");
option1.innerHTML=`michael`;
let option2=document.createElement("option");
option2.innerHTML=`matthew`;
let option3=document.createElement("option");
option3.innerHTML=`jane`;
//Append all choose option into select Tag
select.append(option,option1,option2,option3);

//creat button and addEvent lisener
let div2=document.createElement("div");
div2.setAttribute("class","input-group-append");
let button=document.createElement("button");
button.classList.add("btn","btn-dark")
button.setAttribute("type","button");
button.innerHTML="Go";

//append button,div to row and container
div2.append(button);
div.append(select,div2);
row.append(div);
container.append(row);
document.body.append(container);


  async function fetchData(){
           try{
            let product_type=document.getElementById("inputGroupSelect04").value;
        console.log(product_type);
            const response = await fetch(`https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane`)
            const data = await response.json();
            console.log(data); 
            let demo = "";
            for(let i=0;i<data.length;i++){
                // if(a[i].innerHTML.toLowerCase().indexOf(product_type) != -1){
                //     a[i].style.display = 'block';
                // }else{
                //     a[i].style.display = 'none';
                // }
                if(data[i].name==="michael" || "Matthew" || "jane") {
                data[i].country.map((value)=>{
                        demo+=`<p><span>country_id: ${value.country_id}</span></p>
                        <p><span>probability: ${value.probability}</span></p>`
                })
                document.body.innerHTML +=`
            <div class="card" style="width: 18rem;">
            <div class="container">
            <div class="info">
            <p><span>name: ${data[i].name}</span></p>
            
            ${demo}

            </div>
            </div>
           </div>
            `;
            }
            }
         }catch (error) {
            console.log(error)
        }      
  }
  fetchData()