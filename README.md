# Rock-Paper-Scissors Game

A simple Rock-Paper-Scissors game built using HTML, CSS, and JavaScript. Users can play against the computer, and the game keeps track of the scores. It also includes a reset feature to start a new game at any time.
# Demo Link 
https://weather-95zn03c5r-abhishek99ms-projects.vercel.app/

## Features

- Play Rock-Paper-Scissors against the computer.
- Game automatically determines if you win, lose, or draw.
- Scores are updated in real-time.
- Includes a **Reset Game** button to restart the game at any time.

## Project Structure

```bash
├── index.html        # Main HTML file for the game
├── Index.css         # Stylesheet for the game layout and design
├── App.js            # Main JavaScript file for game logic
├── README.md         # Documentation for the project
└── Image/            # Folder containing images for rock, paper, and scissors
```

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/rock-paper-scissors-game.git
```

### 2. Navigate to the Project Directory

```bash
cd rock-paper-scissors-game
```

### 3. Open the Game in Your Browser

You can open the `index.html` file directly in your browser:

- Double-click on the `index.html` file.
- Or, right-click the file and choose **Open with** > **Your preferred browser**.

Alternatively, you can use an HTTP server if you prefer to host it locally (for example, using Python's simple server):

```bash
python -m http.server
```

Then, navigate to `http://localhost:8000` in your browser.

## How to Play

1. **Choose** one of the options: Rock, Paper, or Scissors by clicking on the corresponding image.
2. The computer will randomly pick its choice.
3. The result of the round (win, lose, or draw) will be displayed, and scores will be updated.
4. **Reset** the game anytime by clicking the **Reset Game** button to start fresh.

### Winning Conditions:
- Rock beats Scissors
- Scissors beat Paper
- Paper beats Rock

## Technologies Used

- **HTML5**: Structure and layout of the game.
- **CSS3**: Styling and responsive design.
- **JavaScript**: Game logic and interactivity (random computer choices, score updates, etc.).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

