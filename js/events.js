// console.log('amit hsasan fayssal');

// const n1=12;
// const n2=13;

// const result=n1+n2;

// document.getElementById();
 
//<button onclick="makeRed()"> button red</button>
function makeRed()
{
    document.body.style.backgroundColor='red';
}

//<button onclick="makedark()">button coral</button>
function makedark()
{
    document.body.style.backgroundColor='coral';
}
// <button id="make-Purple">button purple</button>
const Buttonclick= document.getElementById('make-Purple');
Buttonclick.onclick =function makePurple()
{
  document.body.style.backgroundColor='purple';
}
//<button id="make-pink"> button make pink</button>

const makeGreenButton=document.getElementById('make-pink');
        makeGreenButton.addEventListener('click',function makeGreen()
        {
            document.body.style.backgroundColor='pink';
        })

        // text innerText change button text
        //  <h3 id="handler-status">I am software engineer</h3>
  //<button onclick=" handleonclick()"> handel event by add onclick function </button>


        function handleonclick()
        {
            const handlerStatus = document.getElementById('handler-status');

            handlerStatus.innerText='i am a programmer i have no life';

        }