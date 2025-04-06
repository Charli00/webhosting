import streamlit as st
import streamlit.components.v1 as components

st.title("🎮 Guess the Number Game")

# Load the JavaScript and HTML into Streamlit
html_code = """
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        #container { margin: 50px auto; width: 300px; padding: 20px; border: 1px solid black; border-radius: 10px; }
        button { padding: 10px; font-size: 16px; background-color: green; color: white; border: none; cursor: pointer; }
        input { padding: 5px; width: 50px; text-align: center; }
        #Wrong_ANSWER { font-size: 18px; margin-top: 10px; color: red; }
    </style>
</head>
<body>
    <div id="container">
        <h2>Guess the Number (1 to 10)</h2>
        <input type="text" id="Number">
        <button id="submit" onclick="Get_user_Random()">Check</button>
        <p id="Final_score"></p>
        <p id="Wrong_ANSWER"></p>
    </div>

    <script>
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        let score = 10;

        function Get_user_Random() {
            let userInput = document.getElementById("Number").value;
            let message = document.getElementById("Wrong_ANSWER");
            let scoreDisplay = document.getElementById("Final_score");

            if (parseInt(userInput) === randomNumber) {
                message.innerHTML = "🎉 You guessed it right!";
            } else {
                score -= 1;
                message.innerHTML = "❌ You are wrong!";
            }

            scoreDisplay.innerHTML = "Your Score: " + score;
        }
    </script>
</body>
</html>
"""

# Render the HTML inside Streamlit
components.html(html_code, height=400)
