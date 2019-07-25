window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    
  // openSCB call
  document.getElementById('OKbutton').addEventListener('click', function () {
    liff.openWindow({
            url:'scbeasysim://billpayment-anonymous/a197dc4a-df4e-4c10-ba73-63a619e18066',
            external:true
    });
});

    // closeWindow call
    document.getElementById('Cancelbutton').addEventListener('click', function () {
        liff.closeWindow();
    });


}

