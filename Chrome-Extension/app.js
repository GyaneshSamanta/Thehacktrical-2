// Onload
window.onload = generator();

//OnClick
document.getElementById("hate").addEventListener("click", generator);

// Dark Mode Trigger
document.getElementById("dark").addEventListener("click", darkMode);

// Copy Trigger
document.getElementById("example").addEventListener("click", copyToClipboard("#placeholder"));

// Copy Function
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  
// Generator
function generator() {
    // List
    var firstPart = ["๐","๐", "๐,", "๐", "๐", "๐", "๐", "๐คฃ", "โบ๏ธ", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐ฅฐ", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐คช", "๐คจ", "๐ง", "๐ค", "๐", "๐คฉ", "๐ฅณ", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "โน๏ธ", "๐ฃ", "๐", "๐ซ", "๐ฉ", "๐ฅบ", "๐ข", "๐ญ", "๐ค", "๐ ", "๐ก", "๐คฌ", "๐คฏ", "๐ณ", "๐ฅต", "๐ฅถ", "๐ฑ", "๐จ", "๐ฐ", "๐ฅ", "๐", "๐ค", "๐ค", "๐คญ", "๐คซ", "๐คฅ", "๐ถ", "๐", "๐", "๐ฌ", "๐", "๐ฏ", "๐ฆ", "๐ง", "๐ฎ", "๐ฒ", "๐ฅฑ", "๐ด", "๐คค", "๐ช", "๐ต", "๐ค", "๐ฅด", "๐คข", "๐คฎ", "๐คง", "๐ท", "๐ค", "๐ค", "๐ค", "๐ค ",  "๐", "๐ฟ", "๐น", "๐บ", "๐คก", "๐ฉ", "๐ป", "๐", "โ ๏ธ", "๐ฝ", "๐พ", "๐ค", "๐", "๐บ", "๐ธ" ,"๐น", "๐ป", "๐ผ", "๐ฝ", "๐", "๐ฟ", "๐พ",
    "๐", "๐ค", "๐", "โ", "๐", "๐", "๐ค", "โ๏ธ", "๐ค", "๐ค", "๐ค", "๐ค", "๐", "๐", "๐", "๐", "๐", "โ๏ธ", "๐", "๐", "โ", "๐", "๐ค", "๐ค", "๐", "๐", "๐", "๐คฒ", "๐ค", "๐", "โ๏ธ", "๐", "๐คณ", "๐ช", "๐ฆพ", "๐ฆต", "๐ฆฟ", "๐ฆถ", "๐", "๐ฆป", "๐", "๐ง ", "๐ฆท", "๐ฆด", "๐", "๐", "๐", "๐", "๐", "๐ฉธ", "๐ถ", "๐ฑ", "๐ญ", "๐น", "๐ฐ", "๐ฆ", "๐ป", "๐ผ", "๐จ", "๐ฏ", "๐ฆ", "๐ฎ", "๐ท", "๐ฝ", "๐ธ", "๐ต", "๐", "๐", "๐", "๐", "๐", "๐ง", "๐ฆ", "๐ค", "๐ฃ", "๐ฅ", "๐ฆ", "๐ฆ", "๐ฆ", "๐ฆ", "๐บ", "๐", "๐ด", "๐ฆ", "๐", "๐", "๐ฆ", "๐", "๐", "๐", "๐ฆ", "๐ฆ", "๐ท", "๐ธ", "๐ฆ", "๐ข", "๐", "๐ฆ", "๐ฆ", "๐ฆ", "๐", "๐ฆ", "๐ฆ", "๐ฆ", "๐ฆ", "๐ก", "๐ ", "๐", "๐ฌ", "๐ณ", "๐", "๐ฆ", "๐", "๐", "๐", "๐ฆ", "๐ฆ", "๐ฆง", "๐", "๐ฆ", "๐ฆ", "๐ช", "๐ซ", "๐ฆ", "๐ฆ", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐ฆ", "๐", "๐ฆ", "๐", "๐ฉ", "๐ฆฎ", "๐โ๐ฆบ", "๐", "๐", "๐ฆ", "๐ฆ", "๐ฆ", "๐ฆข", "๐ฆฉ", "๐", "๐", "๐ฆ", "๐ฆจ", "๐ฆก", "๐ฆฆ", "๐ฆฅ", "๐", "๐", "๐ฟ", "๐ฆ", "๐พ", "๐", "๐ฒ", "๐ต", "๐", "๐ฒ", "๐ณ", "๐ด", "๐ฑ", "๐ฟ", "โ๏ธ", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐พ", "๐", "๐ท", "๐น", "๐ฅ", "๐บ", "๐ธ", "๐ผ", "๐ป", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐", "๐ช", "๐ซ", "โญ๏ธ", "๐", "โจ", "โก๏ธ", "โ๏ธ", "๐ฅ", "๐ฅ", "๐ช", "๐", "โ๏ธ", "๐ค", "โ", "๐ฅ", "โ๏ธ", "๐ฆ", "๐ง", "โ", "๐ฉ", "๐จ", "โ๏ธ", "โ๏ธ", "โ๏ธ", "๐ฌ", "๐จ", "๐ง", "๐ฆ", "โ๏ธ", "โ๏ธ", "๐", "๐ซ"];
    var name = firstPart[Math.floor(Math.random() * firstPart.length)];
    //alert(name);
    // Remove ex
    if (document.getElementById("name")) {
    document.getElementById("placeholder").removeChild(document.getElementById("name"));
    }
    // Add new
    var element = document.createElement("div");
    element.setAttribute("id", "name");
    element.appendChild(document.createTextNode(name));
    document.getElementById("placeholder").appendChild(element);
    }

// Dark Mode
function darkMode() {
    var element = document.body;
    element.classList.toggle("darkmode");
    var element = document.getElementById("placeholder");
    element.classList.toggle("undark");
  }