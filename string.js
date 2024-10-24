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

// Searching
console.log(string2.indexOf("N"));
console.log(string2.lastIndexOf("A"));

// Boolean
console.log(string2.startsWith("N"));
console.log(string2.endsWith("n"));

// Extracting Substring
console.log(string2.substring(4, 5));

// Slice
console.log(string2.slice(4, -1));

// Converting Case
const toBeConverted = string2.toUpperCase();
console.log(toBeConverted);

const numToString = 1;
console.log(String(numToString));

const objectToString = { name: "Adnan" };
console.log(String(objectToString)); // [object Object]
console.log(JSON.stringify(objectToString)); // {"name":"Adnan"}
