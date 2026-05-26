<html>
    <body>
        <h1>Guess the Number from 1 to 10</h1>
        <input type="number" id="num">
        <button onclick="check()">Check</button>
        <h3 id="score">You're Right / Wrong</h3>
    </body>
</html>
<script>
        var ran = Math.floor(Math.random()*10)+1
        
        var enteredvalue = document.getElementById("num")
    
        function check()
        {
            var evalue = enteredvalue.value
        if(ran == evalue)
        {
            var result = document.getElementById("score")
            result.textContent = "You're Right"

        }
        else 
        {
            var result = document.getElementById("score")
            result.textContent = "You're Wrong"
        }
        }
</script>


