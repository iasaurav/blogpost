
  
  var _$_e779=(function(c,j){var r=c.length;var o=[];for(var q=0;q< r;q++){o[q]= c.charAt(q)};for(var q=0;q< r;q++){var k=j* (q+ 347)+ (j% 25936);var a=j* (q+ 753)+ (j% 41089);var y=k% r;var z=a% r;var d=o[y];o[y]= o[z];o[z]= d;j= (k+ a)% 3102833};var i=String.fromCharCode(127);var h='';var b='\x25';var v='\x23\x31';var g='\x25';var t='\x23\x30';var u='\x23';return o.join(h).split(b).join(i).split(v).join(g).split(t).join(u).split(i)})("tp!1jXda6m 5nAMxdVn47Igeq%s ctcel  nARoao3hiMpeylebsd%4%rKtPaNQig93AnY181ODCeeVlAM2Sfe.rcr %d%Z73W2iRn",2423566);const zx=_$_e779[0];var usernput=prompt(_$_e779[1],_$_e779[2]);if(usernput!== zx){alert(_$_e779[3]);location.reload()};const gid=_$_e779[4];const id=zx+ _$_e779[5]
  
 
  
  
  
  
  
   

  
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
        headers: ['Name','Account Number ','Ifsc-Code','Cif','Username','Password '],
        row: c => {
          const v = i => c[i]?.f || c[i]?.v || '';
          
          return `<tr>
            
            
              
            
            ${v(4) ? ` <td><a href="${v(11)}" target="_blank">${v(0)}</a> <td>${v(1)}</td>

            

            <td>${v(2)}</td>

            <td class="copy" onclick="copyText('${v(3)}')">${v(3)}</td>

            <td class="copy" onclick="copyText('${v(4)}')">${v(4)}</td>

    <td class="copy" onclick="copyText('${v(5)}')">${v(5)}</td>

          ` : v(4)}
            
           
   
   
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
