// import './styles.scss';
let check=false;
document.addEventListener('DOMContentLoaded', (event) => {  
console.log('DOMContentLoaded event fully loaded');  
console.log(event);
});  
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
        function meep(){
            console.log("As1")
            // document.getElementsByClassName('container-page-3')[0]
            //  .getElementsByClassName('page-3')[0]
            //  .getElementsByTagName('form')[0].getElementsByTagName('button')[0].addEventListener('click',thank_you_page)
            document.getElementById('Dynamic-fetching').style.display='none';
              const app = document.getElementById('Dynamic-fetching');
             document.getElementsByClassName('page-2')[0].style.display='flex';
        }
        function Page2(){
            console.log("As2")
                    const a=document.getElementsByClassName('yes-button')[0];
           console.log(a.addEventListener("click",meep));
            document.getElementsByClassName('page-2')[0].getElementsByClassName('container')[0].getElementsByClassName('card')[0].getElementsByClassName('options')[0].getElementsByClassName('option')[0].addEventListener('click',function (){nextPage('In store')
                document.cookie="In store"});
            document.getElementsByClassName('page-2')[0].getElementsByClassName('container')[0].getElementsByClassName('card')[0].getElementsByClassName('options')[0].getElementsByClassName('option')[1].addEventListener('click',()=>{nextPage('On the go')
                document.cookie="On the go"});
            document.getElementsByClassName('page-2')[0].getElementsByClassName('container')[0].getElementsByClassName('card')[0].getElementsByClassName('options')[0].getElementsByClassName('option')[2].addEventListener('click',()=>{nextPage('Online/Phone')
                document.cookie="Online/Phone"});
            document.getElementsByClassName('page-2')[0].getElementsByClassName('container')[0].getElementsByClassName('card')[0].getElementsByClassName('options')[0].getElementsByClassName('option')[3].addEventListener('click',()=>{nextPage('Multiple ways')
                document.cookie="Multiple ways"});
        }
        function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
       async function nextPage(content){
        console.log("As3")
        console.log(content)
        document.querySelector('.page-2 .question').innerHTML="How do you accept card payments?"
            if( document.getElementsByClassName('page-2')[0].getElementsByClassName('container')[0].getElementsByClassName('card')[0].getElementsByClassName('options')[0].getElementsByClassName('option')[0].innerHTML=="In store" || document.getElementsByClassName('page-2')[0].getElementsByClassName('container')[0].getElementsByClassName('card')[0].getElementsByClassName('options')[0].getElementsByClassName('option')[1].innerHTML=="On the go"||document.getElementsByClassName('page-2')[0].getElementsByClassName('container')[0].getElementsByClassName('card')[0].getElementsByClassName('options')[0].getElementsByClassName('option')[2].innerHTML=="Online/Phone"||document.getElementsByClassName('page-2')[0].getElementsByClassName('container')[0].getElementsByClassName('card')[0].getElementsByClassName('options')[0].getElementsByClassName('option')[3].innerHTML=="Multiple ways"){
                for(let i=0;i<4;i++){
                document.getElementsByClassName('page-2')[0].getElementsByClassName('container')[0].getElementsByClassName('card')[0].getElementsByClassName('options')[0].getElementsByClassName('option')[i].addEventListener('click',processing);
                }
                function processing(){
                   document.getElementsByClassName('processing-container')[0].style.display='flex';
                    document.getElementsByClassName('page-2')[0].style.display='none';
                   check=true;
                }
                await delay(300);
                 document.getElementsByClassName('processing-container')[0].style.display = 'none';
                 if(check) {document.getElementsByClassName('container-page-3')[0].style.display='flex';
                  console.log("container-page-3 executed");}
                //  document.getElementsByClassName('page-2')[0].getElementsByClassName('promotion')[0].getElementsByClassName('info').style.display='block';
            }
        }
        async function thank_you_page(){
            console.log("thank-you-button-clicked");
            window.location.href="clover-inc.local/thank-you-179";
        }
        function handleOptionClick(option){
            console.log("mellow")
        }
            // console.log(yes_btn);
        // onClick()
        function iterate(){
            console.log("As5")
            document.getElementsByClassName('container-page-3')[0]
             .getElementsByClassName('page-3')[0]
             .getElementsByTagName('form')[0].getElementsByTagName('button')[0].addEventListener('click',thank_you_page);
        }
        /*
        document.getElementsByClassName('page-2')[0].getElementsByClassName('container')[0].getElementsByClassName('card')[0].getElementsByClassName('options')[0].getElementsByClassName('option')[0].innerHTML="asdsdasad"
         */
// window.handleOptionClick = handleOptionClick;
iterate();
startCountdown()
Page2();