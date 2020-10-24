import React, {useState, useEffect} from 'react';

const Game = () => {

    useEffect(() => {
      setUseERan(true)
      shuffle(arr)
      // alert(arr)
    }, []);
    const [useERan, setUseERan] = useState(false)
    const [winCount, setWinCount] = useState(0)
    const [verifier, setVerifier] = useState(true)
    const [i, setI] = useState(0)
    const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9])

    // let verifier = true
    // let arr = [1,2,3,4]

    

    function incrementer(){
        
    }

    // does this arrow function below do the binding automatically?
    const buttonHigh = () => {
      // alert('present index of array = ' + arr.indexOf(arr[0]))

      if (arr[i] < arr[i+1])
      {
        alert('You win!')
        setI(i+1)
        setWinCount(winCount+1)
        if (arr.indexOf(arr[i])=== 7){
          setVerifier(false)
        }
        // verifier = false
        // alert(arr)
        if (winCount == 7)
        alert('YOU WIN THE GAME!')
      }
      if (arr[i] > arr[i+1])
      {
        alert('You lose!')
        window.location.reload();
        // setI(i+1)
        // if (arr.indexOf(arr[i])=== 7){
        //   setVerifier(false)
        // }
        // verifier = false
        // alert(arr)
      }
    }

    const buttonLow = () => {
      if (arr[i] > arr[i+1])
      {
        alert('You win!')
        setI(i+1)
        setWinCount(winCount+1)
        if (arr.indexOf(arr[i])=== 7){
          setVerifier(false)
        }
        // verifier = false
        // alert(arr)
        if (winCount == 7)
        alert('YOU WIN THE GAME!')
      }
      if (arr[i] < arr[i+1])
      {
        alert('You lose!')
        window.location.reload();
        // setI(i+1)
        // if (arr.indexOf(arr[i])=== 7){
        //   setVerifier(false)
        // }
        // verifier = false
        // alert(arr)
      }
    }

    function shuffle(array) {
        var currentIndex = array.length;
        var temporaryValue
        var randomIndex
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        // setArr(array)
        return array;
      }

    return(
        <div>
             <p>{ arr}</p>
             <button onClick={buttonHigh}>High</button>
             <br />
             <button onClick={buttonLow}>Low</button>
             <p>win count: {winCount}</p>
             <p>
              {winCount === 0 ? arr[0] : ''}
              {winCount === 1 ? arr[0] + '' + arr[1] : ''} 
              {winCount === 2 ? arr[0] + '' + arr[1] + '' + arr[2] : ''} 
              {winCount === 3 ? arr[0] + '' + arr[1] + '' + arr[2] + '' + arr[3] : ''} 
              {winCount === 4 ? arr[0] + '' + arr[1] + '' + arr[2] + '' + arr[3] + '' + arr[4] : ''} 
              {winCount === 5 ? arr[0] + '' + arr[1] + '' + arr[2] + '' + arr[3] + '' + arr[4] + '' + arr[5] : ''} 
              {winCount === 6 ? arr[0] + '' + arr[1] + '' + arr[2] + '' + arr[3] + '' + arr[4] + '' + arr[5]+ '' + arr[6] : ''} 
              {winCount === 7 ? arr[0] + '' + arr[1] + '' + arr[2] + '' + arr[3] + '' + arr[4] + '' + arr[5]+ '' + arr[6]+ '' + arr[7] : ''}
              {winCount === 8 ? arr[0] + '' + arr[1] + '' + arr[2] + '' + arr[3] + '' + arr[4] + '' + arr[5]+ '' + arr[6]+ '' + arr[7] + '' + arr[8] : ''}
             </p>
             {/* <p> {useERan ? (verifier ? arr[i]: arr) : ''}</p>  */}
        </div>
    )
}

export default Game;