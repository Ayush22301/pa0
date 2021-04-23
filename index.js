
let key  = 11;   //taking key value as 11

const aval =  "a".charCodeAt(0);   //ASCII value of char 'a'

const valA = "A".charCodeAt(0);   // ASCII value of chr 'A'

let encdata = $(".enc")[0];
let decdata = $(".dec")[0];


encdata.oninput = function (x){
    // getting plain text from textarea
    let plainText = x.target.value;
    // encrypting plainText into cipherText
    let cipherText = encrypt(plainText, key);
    decdata.value = cipherText;
}

decdata.oninput = function (x){
  // getting cipher text from textarea
    let cipherText = x.target.value;
    // decrypting cipherText into plainText
    let plainText = decrypt(cipherText, key);
    encdata.value = plainText;
}

function encrypt(s, x)
{
    let res = "";
    for (i = 0; i < s.length; i++)
    {
         if (s[i] >= 'A' && s[i] <= 'Z')  // for capital alphabets
        {
            let crnt = s.charCodeAt(i)-valA;
            // res = (val+key)%26+97
            crnt += x;
            crnt %= 26;
            crnt += aval;
            res += String.fromCharCode(crnt);
        }
        else if (s[i] >= 'a' && s[i] <= 'z')   // for small alphabets
        {
            let crnt = s.charCodeAt(i)- aval;
            // res = (crnt+key)%26+65
            crnt += x;       //increasing val by key
            crnt %= 26;
            crnt += valA;
            res += String.fromCharCode(crnt);
        }
        else            // only alphabets allowed NO other char or number
        {
            res += " enter char values!!!";
        }
    }
    return res;
}


function decrypt(s, x)
{
    x = 26 - x;
    let res = "";
    for (i = 0; i < s.length; i++)
    {
        if (s[i] >= 'a' && s[i] <= 'z')  // for small alphabets
        {
            let crnt = s.charCodeAt(i) - aval;
            // res = (val+key)%26+65
            crnt += x;
            crnt %= 26;
            crnt += valA;
            res += String.fromCharCode(crnt);
        }
        else if (s[i] >= 'A' && s[i] <= 'Z')       // for capital alphabets
        {
            let crnt = str.charCodeAt(i) - valA;
            // res = (val+key)%26+97
            crnt += x;
            crnt %= 26;
            crnt += aval;
            res += String.fromCharCode(crnt);
        }
        else                  // only alphabets allowed NO other char or number
        {
            res += "enter char values  !!!";
        }
    }
    return res;
}

