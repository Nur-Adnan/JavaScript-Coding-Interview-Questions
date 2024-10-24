const string = new String("Nur Adnan");
console.log(string); // Output: [Nur Adnan]
const string2 = "Nur Adnan";
console.log(string2); // Output: Nur Adnan
const string3 = "Nur Adnan";
console.log(string3); // Output: Nur Adnan
const string4 = `Nur Adnan`;
console.log(string4); // Output: Nur Adnan

// Finding the length
console.log(string2.length);

// accessing characters
console.log(string2[1]);
console.log(string2.charAt(1));

// Looping
for (let i = 0; i < string2.length; i++) {
  console.log(string2[i]);
}

// Modifying String - String in Js are immutable
console.log(string2.replace("Nur", "Chowdhury"));
console.log(string2.replaceAll("r", "e"));

// Concat - to join a string
const newStr = string2.concat(" Chowdhury");
console.log(newStr);

// Trim - to remove white spaces
const str = "   Nur Adnan   ";
console.log(str.trim());
