const arr = [
  "umicrszeaswtfmctwvoogehszwdjrwdcgyxxetbzevxrqphubyqbgpfetguyv",
  "vzdzfwyevkvqhmvqssnvpayihawydzcovzmh",
  "drvqqepesvornphmikbimxennygxisdysssmxjmaaecaqiwdgfxitoopigxauoojsebjmbcrymvpnnfomlkg",
  "vvszfvtykdyfiywxgxmjpcawzdaovbujmexggwczovhspkrdsskxzrpgfaspnbncdspktcyfkkshpyojwwlysizd",
  "epdtgfhgninnwqzztwm",
  "dmhynaogcxyaxsghzjwzyqfuwyinstxoqcdkxeobinpqeplw",
  "ruhxgdrzfyqyqmxclfqosyczqapiizxlzgixdxthhrv",
  "dwcblqnxtrwtqmtqenidhxnifdbmdvobwmcvwjxgbyjzgvrqzlskjbfirauguhyyjhlotuckssrkqzppzbqd",
  "gxdq",
  "paesyowqeguvxozbixjqppeagycjx",
  "glstauwugkidegnllapgzbzchckepmhbameuigsiqywbilwolxuwzzjwzouqknhlkbjzejxtponmkqjlojurxnryxyqy",
  "inyhioiwanafuhsprudtkqztoakxhbmqcmibsxlhycbmqrvtfabsncmiymthcxwkwkq",
  "djknenppuleedpptrfjgqfejcoghnxjlvjalxkyvnujgiiwdbtvgqvgsivkzqcrbfcvooyhqmrlacyiozytmampjwpknrj",
  "zzrpjoogwkdmdxdkdwgwugqtmzryrgtelnvydyqewpdzzptqzvffppgnhhcaiqotmyslntlwjajzuzbawidpxjtyxryg",
  "xmegifttkamzbpjqbghgwdrkvtnuwfmjdmwehdqiyvgpxxlbkcvkemjbmhbyeqyfssytuwaeysvgnidhcgpncxdxxzhrkbvyqfrs",
  "wgljaiyhyfdijjgihseciabfcoqfojhswewpkpartzmaaglvdfifpptycyonigwcgyklapzojivgojcrevugspejmwanolg",
  "oceurgzgvvctgydqexhghwcochhmtoxjugreqfdnsshffngchetrwedhinosdhwlgviohpkjowr",
  "dyl",
  "vjxkcihfmnmmz",
  "aheg",
  "dwsomlqmaqifihkwahvywzqamgominhxfsgrgbgvoiopnikhxonpetelfsguvhxgiujrij",
  "pdrjgfqzyqczpwdsfzypgkmsvnpboutmcffqrwuzkchaufymmczrdwulbvbanungpxqk",
  "eudbizaabgfzqytowifsuovmxmkjgajtliyfycbrkxeaarakapqoihawmdzmglfnglpwqnfd",
  "txdclnfwxevu",
  "kslqrafjshhadqszeljcekrpnpxqgppbnadmzmpufvadcghxqdqmafpbnutifigstxyilmgx",
  "yhhvhyoolv",
  "sjtubggxcla",
  "vydf",
];


const checkPalindrome = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] === arr[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

const findFirstPalindromicStringInArray = (words) => {
    let str

  for (let i = 0; i < words.length ; i++) {
       str = words[i]
      const check = checkPalindrome(str)
      console.log(check)
      if(check) return str
     
    }
    return "";
};

console.log(findFirstPalindromicStringInArray(arr));
console.log(findFirstPalindromicStringInArray(arr));


// console.log(findFirstPalindromicStringInArray(word));
// console.log(findFirstPalindromicStringInArray(word2));
