 const oquvchilar = [
    "MOXIRBEK ABDUMALIKOV", 
    "HUMOYUN ABDUQODIROV",
    "AZIZJON ALIQULOV", 
    "ZAFAR IBROHIMOV", 
    "MIRKOMIL MIRXOMIDOV",
    "OYATILLO OBLOBERDIYEV", 
    "IBROHIM QAXROMONOV", 
    "JAHONGIR XALIMJONOV", 
    "AZAMAT SA'DULLAYEV",
    "FAZLIDDIN USMONOV", 
    "SHAXZODBEK SHAVKATOV",
    "ABDURASHID ABDURAXMONOV", 
    "SHAXZODBEK SODIQJONOV", 
    "ISLOMBEK KAMOLIDDINOV ",
    "OZODBEK NEMATOV", 
    "RUSLAN TODJIDINOV", 
    "TOHIRJON YUSUPOV", 
    "MEHRIDDIN BARNAYEV",
    "UMIDJON HAMIDJONOV", 
    "AXMADBEK USMONOV", 
    "SAID ORIFOV", 
    "SHOHAKBAR", 
    "SARDOR ERKINOV", 
    "SHOXRUZBEK ABDURAXMONOV",
    "SHIRINOV SHOXRUH "
];

 document.getElementById("tanlashBtn").addEventListener("click", function() {
     const tasodifiyIndex = Math.floor(Math.random() * oquvchilar.length);
    const tanlanganOquvchi = oquvchilar[tasodifiyIndex];

     document.getElementById("natija").innerText = "📖 " + tanlanganOquvchi;
});
