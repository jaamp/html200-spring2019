const languages = ["Java", "C#", "Fortran", "HTML", "JavaScript", "COBOL"];
languages.push("CSS");
languages.splice(2, 1);
let allLang = languages.join(", ");
for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}
console.log(allLang);