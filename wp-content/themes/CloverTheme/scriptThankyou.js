console.log("Thank you js");
  function startCountdown() {
    console.log("first")
            let d=new Date();
            let hours=24-d.getHours();
            let minutes=60-d.getMinutes();
            let seconds=60-d.getSeconds();
            let totalTimeInSeconds = (hours * 3600) + (minutes * 60) + seconds;
            // document.getElementsByClassName('number')[2].innerText
            const timerElement = document.getElementById('timer');
            const interval = setInterval(() => {
                const hrs = Math.floor(totalTimeInSeconds / 3600)-1;
                const mins = Math.floor((totalTimeInSeconds % 3600) / 60);
                const secs = totalTimeInSeconds % 60;
                document.getElementsByClassName('number')[0].innerText=`${hrs}`;
                document.getElementsByClassName('number')[1].innerText=`${mins}`;
                document.getElementsByClassName('number')[2].innerText=`${secs}`;
                // timerElement.textContent = `${hrs}h ${mins}m ${secs}s`;

                totalTimeInSeconds--;

                if (totalTimeInSeconds < 0) {
                    clearInterval(interval);
                }
            }, 1000);
        }
        startCountdown();
 async function thank_you_page(){
        //    document.getElementsByClassName('container-page-3')[0].style.display='none';
        console.log("inside");
           document.getElementsByClassName('outerContainerThankYouPage')[0].style.display='block';
            document.getElementsByClassName('thank-you-page')[0].style.display='block';
            await delay(1000);
            let category=document.cookie.split(';')[0].split('=')[0];
            console.log(category)
            console.log("inside2");
             if(category=="On the go"){
                console.log("on the go")
                document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-header h2').innerHTML="Flex";
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-header p').innerHTML="The handheld POS system";
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[0].innerHTML="Serve at the counter, in line, at the table, or in the field"
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[1].innerHTML="100% mobile handheld POS system"
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[2].innerHTML="Built-in printer, camera, and barcode scanner"
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[3].innerHTML="Take swipe, dip, and contactless payments"
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[4].innerHTML="Accept payments, conduct business, and track sales"
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content img').src=cloverTheme.templateUrl +'/images/BigFlex.png'
               document.querySelector('.outerContainerThankYouPage .solutions .solution-box .solution-content .solution-header h2').innerHTML="Mini";
               document.querySelector('.outerContainerThankYouPage .solutions .solution-box .solution-content .solution-header p').innerHTML="A small but powerful POS system"
                document.querySelector('.outerContainerThankYouPage .solutions .solution-box .solution-content').getElementsByTagName('img')[0].src=cloverTheme.templateUrl +'/images/Mask Group 4@2x.png'
             }
        else if(category=="Online/Phone"){
            document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-header h2').innerHTML="POS system with no hardware required";
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-header p').innerHTML="";
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[0].innerHTML="Process payments for all major credit and debit cards on your computer, tablet, or mobile phone."
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[1].innerHTML="Send invoices and get paid faster through an online portal or set up recurring payments and get paid regularly."
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[2].innerHTML="Keep your books up to date by Integrating with best-in-class apps like Quickbooks for accounting"
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[3].style.display="none"
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[4].style.display="none"
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content img').src=cloverTheme.templateUrl +'/images/No_hardware_pos.png'

               document.querySelector('.outerContainerThankYouPage').getElementsByClassName('solutions')[0].getElementsByClassName('solution-box')[1].getElementsByClassName('solution-content')[0].getElementsByClassName('solution-header')[0].getElementsByTagName('h2')[0].innerHTML="Mini";
               document.querySelector('.outerContainerThankYouPage').getElementsByClassName('solutions')[0].getElementsByClassName('solution-box')[1].getElementsByClassName('solution-content')[0].getElementsByClassName('solution-header')[0].getElementsByTagName('p')[0].innerHTML="A small but powerful POS system";
               document.querySelector('.outerContainerThankYouPage').getElementsByClassName('solutions')[0].getElementsByClassName('solution-box')[1].getElementsByClassName('solution-content')[0].getElementsByTagName('img')[0].src=cloverTheme.templateUrl +'/images/Mask Group 4@2x.png';
                // document.querySelector('.outerContainerThankYouPage .solutions .solution-box .solution-content img').src='./assets/Mask Group 4@2x.png'
    console.log("Online/Phone")}
         else if(category=="In store")console.log("In store selected")
         else if(category=="Multiple ways"){
        document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-header h2').innerHTML="Station Solo + Flex";
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-header p').innerHTML="The handheld POS system";
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[0].innerHTML="Serve at the counter, in line, at the table, or in the field."
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[1].innerHTML="100% mobile handheld POS system."
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[2].innerHTML="Built-in printer, camera, and barcode scanner"
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[3].innerHTML="Take swipe, dip, and contactless payments"
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content .recommendation-features').getElementsByTagName('li')[4].innerHTML="Accept payments, conduct business, and track sales"
               document.querySelector('.outerContainerThankYouPage .recommendation .recommendation-box .recommendation-content img').src='/images/Solo+Flex.png'

                document.querySelector('.outerContainerThankYouPage').getElementsByClassName('solutions')[0].getElementsByClassName('solution-box')[1].getElementsByClassName('solution-content')[0].getElementsByClassName('solution-header')[0].getElementsByTagName('h2')[0].innerHTML="Mini";
               document.querySelector('.outerContainerThankYouPage').getElementsByClassName('solutions')[0].getElementsByClassName('solution-box')[1].getElementsByClassName('solution-content')[0].getElementsByClassName('solution-header')[0].getElementsByTagName('p')[0].innerHTML="A small but powerful POS system";
               document.querySelector('.outerContainerThankYouPage').getElementsByClassName('solutions')[0].getElementsByClassName('solution-box')[1].getElementsByClassName('solution-content')[0].getElementsByTagName('img')[0].src=cloverTheme.templateUrl +'/images/Mask Group 4@2x.png';
        console.log("Multiple ways selected")}
            console.log("thank you page");
        }
     function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
thank_you_page();