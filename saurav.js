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
       //saurav
      
      {
        id: "bank_result",
        range: "A2:Z20",
        headers: ['Name','Account Number ','Ifsc-Code','Cif','Password '],
        row: c => {
          const v = i => c[i]?.f || c[i]?.v || '';
          
          return `<tr>
            
            
              
            
            ${v(11) ? `<td>${v(0)}</td>
            
            <td>${v(1)}</td>

            

            <td>${v(2)}</td>

            <td class="copy" onclick="copyText('${v(3)}')">${v(3)}</td>

            
    <td>
<a href="https://www.bing.com/search?q=${v(11)}:${v(0)}" target="_blank">username -: </a><input type="exp" class="copy" value="${v(4)}" onclick="copyText(this.value)"style="width:80px;" readonly>
password-: <input type="cvv" class="copy" value="${v(5)}" onclick="copyText(this.value)"style="width:80px;"  readonly></td>



          ` : v(11)}
            
           
   
   
  </tr>`;
        }
      },
      
      
      
      
      
        
            
      
      
      {
        id: "passwordbook",
        range: "A22:Z70",
        headers: ["Name", "Username", "Password"],
        row: c => {
          const v = i => c[i]?.f || c[i]?.v || '';
          
          return `<tr>
            <td>
            
            ${v(0) ? `<a href="${v(0)}" target="_blank">${v(1)}</a>` : v(1)}</td>

            <td class="copy" onclick="copyText('${v(2)}')">${v(2)}</td>
            <td class="copy" onclick="copyText('${v(3)}')">${v(3)}</td>
          </tr>`;
        }
      },
      
      
      
      
      
      
      
      {
        id: "result",
        range: "A82:Z90",
        headers: ['Roll code - Roll No.','School/Collge','Year','Marks','%','Remarks'],
        row: c => {
          const v = i => c[i]?.f || c[i]?.v || '';
          
          return `<tr>
            <td>${v(0)}</td>
            <td>${v(1)}</td>
            
            <td>${v(2)}</td>
            <td>${v(3)}</td>
            <td>${v(4)}</td>
           
            <td>${v(5)}</td></tr>`;
        }
      },
      
      
      
      
      
      
      
      
      
      
      
      
      {
        id: "driveDiv",
        range: "B101:Z110",
        headers: ["Name", "Size", "Date"],
        row: c => {
          const v = i => c[i]?.f || c[i]?.v || '';
         
          return `<tr>
            <td><a href="https://drive.google.com/uc?export=download&id=${v(1)}" target="_blank">${v(0)}</a></td>
            <td>${v(2)}</td>
            <td>${v(3)}</td>
          </tr>`;
        }
      },
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
     
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    ];

    // Auto-create containers and fetch data
    tables.forEach(({ id, range, headers, row }) => {
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
