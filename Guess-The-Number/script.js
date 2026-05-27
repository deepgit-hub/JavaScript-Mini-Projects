var score = 10

var randomNumber = Math.floor(Math.random() * 10) + 1

var enteredNumber = document.getElementById("num")

var result = document.getElementById("result")

var scoreDisplay = document.getElementById("score")

function check()
{
    var userGuess = enteredNumber.value

    if(randomNumber == userGuess)
    {
        result.textContent = "🎉 You're Right"

        alert("YOU WON 🎉 and your score is : "+score)
    }

    else
    {
        score = score - 1

        scoreDisplay.textContent = "Score : " + score

        result.textContent = "❌ You're Wrong"
    }
}
