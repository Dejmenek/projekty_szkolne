<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Alfabet Morsa</title>
</head>
<body>
    <header>
        <h1>Alfabet Morsa</h1>
    </header>
    <form action="" method="GET">
        <main class="flex">
            <aside class="flex-column-center flex-aside">
                <img src="./img/walrus.png" alt="mors">
                <button class="submit-button" type="submit" name="option" value="latin">Latin > Morse</button>
                <button class="submit-button" type="submit" name="option" value="morse">Morse > Latin</button>
                <button class="submit-button" type="submit" name="option" value="morse_alphabet">Alfabet Morse'a</button>
            </aside>
            <section class="flex-column-center">
                <input type="text" name="user_text" id="user_input" placeholder="Wprowadź tekst">
                <div class="tables flex-gap">
                    <?php 
                        if (isset($_GET["option"])) 
                        {

                            $conn = mysqli_connect("localhost", "root", "", "morsy") or die("Błąd połączenia z bazą danych");
                            $user_input = $_GET["user_text"];
                            $translated_text = "";

                            mysqli_set_charset($conn, "utf8");

                            switch($_GET["option"]) 
                            {

                                case "morse":
                                    if ($user_input == "" || preg_match('/[a-zA-Z]/',$user_input)) 
                                    {
                                        echo "Wprowadz kod morsa";
                                    } else {
                                        $split_text = explode(" ", $user_input);

                                        foreach($split_text as $word) 
                                        {
                                            if ($word == "/") {
                                                $translated_text .= " ";
                                            } else {
                                                $q = "SELECT znak_l FROM alfabet WHERE znak_m = '{$word}'";
                                                $result = mysqli_query($conn, $q) or die("Problem z odczytaniem danych");

                                                if (mysqli_num_rows($result) == 0) {
                                                    echo "Wprowadziłeś znak, którego nie ma w alfabecie morsa!";
                                                    break;
                                                }

                                                $row = mysqli_fetch_row($result);
                                                $translated_text .= $row[0];
                                            }
                                            
                                        }

                                        echo "<p class='result'>{$translated_text}</p>";
                                    }
                                    break;

                                case "latin":
                                    if ($user_input == "" || preg_match('/\.|-/',$user_input)) 
                                    {
                                        echo "Wprowadz słowa";
                                    } else {
                                        $split_text = str_split($user_input);
        
                                        foreach($split_text as $letter) 
                                        {
                                            if ($letter == ' ') {
                                                $translated_text .= "/ ";
                                            } else {
                                                $q = "SELECT znak_m FROM alfabet WHERE znak_l = UPPER('{$letter}')";
                                                $result = mysqli_query($conn, $q) or die("Problem z odczytaniem danych");

                                                if (mysqli_num_rows($result) == 0) {
                                                    echo "Wprowadziłeś znak, który nie jest uwzględniony w programie!";
                                                    break;
                                                }

                                                $row = mysqli_fetch_row($result);
                                                $translated_text .= "{$row[0]} ";
                                            }
                                        }

                                        echo "<p class='result'>{$translated_text}</p>";
                                        echo '<script>
                                                    let text = document.querySelector(".result").textContent;
                                                    let textArray = text.split("");
                                                    let audioArray = [];
                                                    let i = 1;

                                                    for(let letter of textArray) {
                                                        if (letter == ".") {
                                                            audioArray.push(new Audio("./sounds/audio_blow.mp3"));
                                                        }
                                                        
                                                        if (letter == "-") {
                                                            audioArray.push(new Audio("./sounds/audio_ping.mp3"));
                                                        }
                                                    }

                                                    audioArray.forEach(sound => {
                                                        setTimeout(() => {
                                                            sound.play();
                                                        },600 * i);
                                                        i++;
                                                    });
                                            </script>';
                                    }

                                    break;

                                case "morse_alphabet":
                                    $q = "SELECT * FROM alfabet LIMIT 0,12";
                                    $q2 = "SELECT * FROM alfabet LIMIT 13,25";
                                    $result = mysqli_query($conn, $q) or die("Problem z odczytaniem danych");
                                    $result2 = mysqli_query($conn, $q2) or die("Problem z odczytaniem danych");

                                    echo "<table>
                                        <tr>
                                            <th>Litera</th>
                                            <th>Kod morsa</th>
                                        </tr>
                                        ";

                                    while ($row = mysqli_fetch_assoc($result)) {
                                        echo "<tr>
                                                <td>{$row['znak_l']}</td>
                                                <td>{$row['znak_m']}</td>
                                            </tr>";
                                    }

                                    echo "</table>";

                                    echo "<table>
                                        <tr>
                                            <th>Litera</th>
                                            <th>Kod morsa</th>
                                        </tr>
                                        ";

                                    while ($row = mysqli_fetch_assoc($result2)) {
                                        echo "<tr>
                                                <td>{$row['znak_l']}</td>
                                                <td>{$row['znak_m']}</td>
                                            </tr>";
                                    }

                                    echo "</table>";

                                    break;
                            }
                            mysqli_close($conn);
                        }
                    ?>
                </div>

            </section>
        </main>
    </form>
    <footer>
        <p>Stronę wykonał: Damian Sempski</p>
    </footer>
</body>
</html>