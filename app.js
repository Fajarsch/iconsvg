const logo = document.querySelectorAll("#logo path");
const text = document.querySelectorAll("#text path");

for(let i = 0; i < logo.length; i++) {
    console.log(`Icon ${i} is ${logo[i].getTotalLength()}`);
}

for(let i = 0; i < text.length; i++) {
    console.log(`Text ${i} is ${text[i].getTotalLength()}`);
}