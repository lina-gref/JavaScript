//This simple randomizer was written in about 5 mins. But it saved a lot of time.
//I worked a lot with contact base and I needed to check the API methods of creating and editing the existing entities via Postman.
//In this one, I defined the format of the required field for the contact entity page.
//This is a pre-request script. It must run before your main method executes.
//You can find a 'Pre-request script' tab in your Postman.
//The main HTTP method used is POST.
//Setting globals is necessary to use them in other tabs, such as request Body (in my case, but also in Parameters tab and Tests tab as well)

let abc = "abcdefghijklmnopqrstuvwxyz";
let abc1 = "1234567890";
let rs = "";
let rs1 = "";

for(let i = 0; i <= 8; i++){
    rs += abc[Math.round(Math.random() * (abc.length - 1))];
};

for(let i = 0; i <= 9; i++){
    rs1 += abc1[Math.round(Math.random() * (abc1.length - 1))];
};
pm.globals.set("email", rs+"@domain.com");
pm.globals.set("name", rs);
pm.globals.set("surname", rs);
pm.globals.set("phone", "+7"+rs1);