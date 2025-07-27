


  

//<script>
  
  
  
  
  
const unique = prompt('input id').trim();

// Split into two parts

const parts = unique.split(':');
    
  
const  gid = parts[1];
const id = parts[0]; 

  
  
  
  
  
 
  
  
  
  
  
   

  
  function copyText(t) {
    navigator.clipboard.writeText(t);
  }

  document.addEventListener("DOMContentLoaded", () => {
    
    
          
    const base = r => `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:json&tq&gid=${gid}&range=${r}`;

    





const tables = [
  {
        id: "data",
        range: "A2:Z20",
        headers: ["Name", "आधार कार्ड | पैन कार्ड | voter id "],
        row: c => {
          const v = i => c[i]?.f || c[i]?.v || '';
         
          return `<tr>
          ${v(4) ? `<td><a href="${v(5)}" target="_blank"

 class="copy" onclick="copyText('${v(2)}')">${v(0)}</a>



</td><td><span class="copy" onclick="copyText('${v(2)}')">${v(2)}</span> - <span class="copy" onclick="copyText('${v(3)}')">${v(3)}</span>-<span class="copy" onclick="copyText('${v(4)}')">${v(4)}</span> 
</td>`: v(4)}</tr>`;

        }

      },
  
  
  
  
  
  
  {
        id: "maapasswordbook",
        range: "A22:Z40",
        headers: ["Name",  "Username","Password","Consumer"],
        row: c => {
          const v = i => c[i]?.f || c[i]?.v || '';
          
          return `<tr>
            
            
            
            
    ${v(4) ? `<td><a href='${v(4)}'>${v(0)}</a></td>
   <td><span class="copy" onclick="copyText('${v(1)}')">${v(1)}</span></td>
<td><span class="copy" onclick="copyText('${v(2)}')">${v(2)}</span></td>
<td class="copy" onclick="copyText('${v(3)}')">${v(3)}</td>

 ` : v(4)}
  
  </tr>`;
        }
      },
  
  
  
  
     
  {
        id: "insurance",
        range: "A42:Z60",
        headers: ["Name", "Policy_No | Amount | Date Of Birth | Due-Month"],
        row: c => {
          const v = i => c[i]?.f || c[i]?.v || '';
         
          return `<tr>
          ${v(5) ? `<td><a href="https://ebiz.licindia.in/D2CPM/#Login" target="_blank"

 class="copy" onclick="copyText('${v(4)}')">${v(0)}</a>



</td><td><span class="copy" onclick="copyText('${v(1)}')">${v(1)}</span> - <span class="copy" onclick="copyText('${v(2)}')">${v(2)}</span> - <span class="copy" onclick="copyText('${v(3)}')">${v(3)}</span>
</td>`: v(5)}</tr>`;

        }

      },
  




  
      
      
      
      
      {
        id: "bank_result",
        range: "A2:Z20",
        headers: ['Name','Account Number ','Ifsc-Code','details'],
        row: c => {
          const v = i => c[i]?.f || c[i]?.v || '';
          
          return `<tr>
            
            
              
            
            ${v(10) ? `<td>${v(0)}</td>
            
            <td>${v(1)}</td>

            

            <td>${v(2)}</td>

            <td>

            
    
<a href="${v(10)}" target="_blank">username -: </a><input type="exp" class="copy" value="${v(3)}" onclick="copyText(this.value)"style="width:80px;" readonly>
password-: <input type="cvv" class="copy" value="${v(4)}" onclick="copyText(this.value)"style="width:80px;"  readonly></td>



          ` : v(11)}
            
           
   
   
  </tr>`;
        }
      },
     
      
          
          
          
          
         
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
   
  
 
   
   
  
      
      
      
      
      
      
     
      
      
   
   
     
     
 
 

 
  
  
  
  
  
      
      
    ];

    // Auto-create containers and fetch data
    tables.forEach(({id,range,headers,row }) => {
      const container = document.createElement("div");
      container.id = id;
      container.textContent = "Loading...";
      document.body.appendChild(container);

      fetch(base(range))
        .then(r => r.text())
        .then(d => {
          const rows = JSON.parse(d.slice(47, -2)).table.rows;
          let html = `<table><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>`;
          rows.forEach(r => html += row(r.c));
          container.innerHTML = html + '</table></br>';
        });
    });
  });

  const styles = ` .table-container {
    overflow-x: auto;
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 400px;
  }

  th, td {
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
    white-space: nowrap;
  }

  th {
    background-color: #F88379;
    color: #fff;
  }

  .copy {
    cursor: pointer;
    
   
  }
  `;

const styleTag = document.createElement('style');

styleTag.textContent = styles;

document.head.appendChild(styleTag);
  
 

//</script>


  

  
  





 










          
          
          

