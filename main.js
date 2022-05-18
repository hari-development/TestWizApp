$(document).ready(function() {
    //alert("loading js modules");
    $('.checkbox').change(function() {
        if (this.checked) {
           
            var x = document.getElementById("color461").value;
            if (x == "red") {
               
                smartlight(x, 1);
            } else if (x == "green") {
               
                smartlight(x, 1);
            } else if (x == "blue") {
               
                smartlight(x, 1);
            }
            

        } 
        else {
           
            smartlight("red", "0");
        }
    });
});

function smartlight(color,power) {
var data = JSON.stringify({
  "mode": "WRITE",
  "device_id": "CIL_BB_59",
  "source": "API",
  "api": "smartlight",
  "type": "strip_switch",
  "color": color,
  "power": power
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://wizklub.com/api/secured/wiziot-poll-request/");
xhr.setRequestHeader("Api-Access-Key", "FWGTauY-J8L2F5nsFkw9");
xhr.setRequestHeader("Api-Secret-Key", "KBOsYntdRXEmjapPEWwD05oyuD41jCWptw");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);

}

function rectangle(shape, filled) {


    $.ajax({
        url: "https://wizblock.ai/middleware/wiz-api/update/oled/",
        data: {
            data: JSON.stringify({

                "b": 200,
                "device_type": "WIZGEAR",
                "f": filled,
                "l": 500,
                "r": 0,
                "source": "Blockly",
                "type": shape,
                "x": 10,
                "y": 10,
                "username": "device461"

            })
        },
        type: 'POST',
        beforeSend: function(xhr) {

            xhr.setRequestHeader('token', "mOn4YCYqq5fq9eQ-GJn-ymojW1AZqhZ6XRUfB2fyM3MKwx7hqltsioikUr59pEPNeB7XTcWxmVN67waiD08Ksw");
        },
        success: function(data) {
            alert("success");
            //$("#sensor_value").val(data.response[sensor]);
        }
    });

}

function reset(reset) {

    $.ajax({
        url: "https://wizblock.ai/middleware/wiz-api/update/oled/",
        data: {
            data: JSON.stringify({

                "device_type": "WIZGEAR",
                "source": "Blockly",
                "type": reset,
                "username": "device461"

            })
        },
        type: 'POST',
        beforeSend: function(xhr) {

            xhr.setRequestHeader('token', "mOn4YCYqq5fq9eQ-GJn-ymojW1AZqhZ6XRUfB2fyM3MKwx7hqltsioikUr59pEPNeB7XTcWxmVN67waiD08Ksw");
        },
        success: function(data) {
            alert("success");
            //$("#sensor_value").val(data.response[sensor]);
        }
    });

}