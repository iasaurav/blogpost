
  

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
        id: "maapasswordbook",
        range: "A2:Z20",
        headers: ["Name", "Username", "Password","Consumer"],
        row: c => {
          const v = i => c[i]?.f || c[i]?.v || '';
          
          return `<tr>
            
            
   ${v(4) ? `<td><a href="${v(0)}" target="_blank">${v(1)}</a></td>
<td class="copy" onclick="copyText('${v(2)}')">${v(2)}</td>

            <td class="copy" onclick="copyText('${v(3)}')">${v(3)}</td>

          <td class="copy" onclick="copyText('${v(4)}')">${v(4)}</td>

  
` : v(4)}
  
  
  
  
  
  
  </tr>`;
        }
      },
      
      
     
      {
        id: "insurance",
        range: "A32:Z40",
        headers: ["Name", "Policy_No", "Amount","Due-Month"],
        row: c => {
          const v = i => c[i]?.f || c[i]?.v || '';
         
          return `<tr>
${v(5) ? `<td>${v(0)}</td><td>${v(1)}</td><td>${v(2)}</td><td>${v(3)}</td>` : v(5)}






</tr>`;
        }
      },
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
   
  
 
   
   
  
      
      
      
      
      
      
     
      
      {
        id: "creditcard",
        range: "A52:Z60",
        headers: ["Name","Card"],
        row: c => {
          const v = i => c[i]?.f || c[i]?.v || '';
          
          return `<tr><td class="copy" onclick="copyText('${v(0)}')">${v(0)}</td>

     
     
     
     
 
 
 ${v(2) ? `<td>cardno:<input type="card" class="copy" value="${v(1)}" onclick="copyText(this.value)" readonly>
exp-:<input type="exp" class="copy" value="${v(2)}" onclick="copyText(this.value)"style="width:50px;" readonly>
cvv-: <input type="cvv" class="copy" value="${v(3)}" onclick="copyText(this.value)"style="width:40px;"  readonly>
</td>`:v(3)}
 
  
  
  
  
  </tr>`;
        }
      },
      
      
      
      
  //saurav
      
        {
        id: "bank_result",
        range: "A71:Z90",
        headers: ['Name','Account Number ','Ifsc-Code','Cif','Password '],
        row: c => {
          const v = i => c[i]?.f || c[i]?.v || '';
          
          return `<tr>
            
            
              
            
            ${v(0) ? `<td>${v(0)}</td>
            
            <td>${v(1)}</td>

            

            <td>${v(2)}</td>

            <td class="copy" onclick="copyText('${v(3)}')">${v(3)}</td>

            
    <td>
<a href="https://www.bing.com/search?q=${v(11)}:${v(0)}" target="_blank">username -:</a><input type="exp" class="copy" value="${v(4)}" onclick="copyText(this.value)"style="width:50px;" readonly>
password-: <input type="cvv" class="copy" value="${v(5)}" onclick="copyText(this.value)"style="width:40px;"  readonly></td>



          ` : v(0)}
            
           
   
   
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

  
  
 

//</script>

