//this script was written a while ago (in 2019 I guess) for using k6 tool
//I worked in a company which provided booking for business tourism. It included working with hotels and payments. My team worked on API, hotel database and backoffice.

//the urls, the names of the entities, API method elements were changed due to the NDA and the contract I had with my former employer.
//but it won't affect the understanding of the code.
//I had a task to start using load testing on the project. k6 is a great tool to start with and go on.

//the code below till the /// should be contained in a file in some directory to be used by a k6 command in command line

import http from "k6/http";
import {check} from "k6";
//importing libraries to work with k6

export default function () {
    //building the functon to call when using k6. Actually, this is a description of an API method used on the project
    let serverUrl = "SOME URL YOU NEED",
        data      = JSON.stringify({
            "SOME ELEMENT"  : "SOME VALUE",
            "Arr"     : [{
                "lastName"  : "Name",
                "firstName" : "Name",
                "middleName": "Name"
            }],
            "SOMEInfo": {
                "INFO"      : {
                    "lastName"  : "Name",
                    "firstName" : "Name",
                    "middleName": "Name",
                    "email"     : "email@domain.com",
                    "phone"     : "phone number you need"
                }, "customer": {"email": "email@domain.com", "phone": "phone number you need"}
            },
            "comments"     : "YOUR COMMENT"
        }),
        headers   = {
            "Content-Type": "application/json",
            "X-API-Key"   : "YOUR KEY VALUE",
            "Cookie"      : "YOUR COOKIE"
        };
    let res = http.post(serverUrl, data, {headers: headers});
    // Passing an object as the data parameter will automatically form-urlencode it

    // console.log(res.body); --> an optional thing

    check(res, {
         // Verify response
        "status is 200": (r) => r.status === 200,
    });
}

///
k6 run  --iterations 2 --vus 2  YOUR_FILE_NAME.js
//this string run in command line runs the .js file described above
