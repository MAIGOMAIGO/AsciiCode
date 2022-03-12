window.onload = () => {

    const table = document.getElementById("table");
    const URL = "https://script.google.com/macros/s/AKfycby9QW9fWZIgIH3hrxn8QqIOHjDokNDtWORA36ACxR7a7TMKhjKpwmBM_s2mQn2sA-DK/exec";
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load",() =>{
        const str = xhr.responseText;
        const ascii = str.split(",");
        ascii.splice(45,1);
        ascii[44] = ",";

        for(let h=0;h<64;h++){

            const newRow = table.insertRow();
            
            for(let w=0;w<6;w++){
            
                const newCell = newRow.insertCell();
                let text = "";
                switch (w%6){
                    case 0:
                        text = String(h);
                        break;
                    case 1:
                        text = toHex(h);
                        break;
                    case 2:
                        text = ascii[h];
                        break;
                    case 3:
                        text = String(h+64);
                        break;
                    case 4:
                        text = toHex(h+64)
                        break;
                    case 5:
                        text = ascii[h+64];
                        break
                }
                const newText = document.createTextNode(text);
                newCell.style.textAlign = "center";
                newCell.style.verticalAlign = "middle";
                newCell.appendChild(newText);
            }
        }
    });
    xhr.open("GET",URL);
    xhr.send();
}

function toHex(v) {
    return '0x' + (('00' + v.toString(16).toUpperCase()).slice(-2));
}