var GeneratebtnText = document.getElementById("gen-info");
var Scanner = document.getElementById("scanner");
var scanit = document.getElementById("file-scan");

scanit.addEventListener('click',() =>{
    var scanner = new Instascan.Scanner({ video: document.getElementById('scanner-preview'), scanPeriod: 5, mirror: false });
      scanner.addListener('scan',function(content){
       
       // alert(content);

        setTimeout(() => {
          Scanner.classList.remove("Show-Scanner");
            document.getElementById("qr-text").value = content.toString();
        },1000);
     //     
          setTimeout(() => {
              document.getElementById("qr-contents").classList.add("Expand");
              GeneratebtnText.innerHTML = "Generating the info";
          },2000);

          setTimeout(() => {
            GeneratebtnText.innerHTML = "Generated the Info";
            
        },3000);
          
        //window.location.href=content;
      });
      
      Instascan.Camera.getCameras().then(function (cameras){
        if(cameras.length>0){
        Scanner.classList.add("Show-Scanner");
          scanner.start(cameras[0]);
          $('[name="options"]').on('change',function(){
            if($(this).val()==1){
              if(cameras[0]!=""){
               // alert("H");
                scanner.start(cameras[0]);
              }else{
                alert('No Front camera found!');
              }
            }else if($(this).val()==2){
              if(cameras[1]!=""){
                alert("Opening Back Camera");
                scanner.start(cameras[1]);
              }else{
                alert('No Back camera found!');
              }
            }
          });
        }else{
          console.error('No cameras found.');
          alert('No cameras found.');
        }
      }).catch(function(e){
        console.error(e);
      //  alert(e);
      alert('No cameras found');
      });
})

