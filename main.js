
//Call Back Function

function callDevice(strMsg1,funcDevice) {

    funcDevice(strMsg1);
}

callDevice("This is Android Device",function (cbStrMsg1){
                        console.log(cbStrMsg1);

});

callDevice("This is Ios Device", 
                    function (cbStrMsg1){
                        console.log(cbStrMsg1);

});

callDevice("This is Windows Device", 
                    function (cbStrMsg1){
                        console.log(cbStrMsg1);

});
