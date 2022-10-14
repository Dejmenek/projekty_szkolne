<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <title>Wisielec</title>
</head>
<body>
    <header class="header flex-center-header">
        <img src="./img/hangman.png" class="logo">
        <h1 class="header__heading">Wisielec</h1>
    </header>
    <main class="main flex-center">
        <p class="category"></p>
        <p class="hint"></p>
        <div class="svg__container">
        <svg xmlns="http://www.w3.org/2000/svg" width="174" height="180" fill="none" viewBox="0 0 174 180">
            <g class="Group 1">
                <path stroke="#000" stroke-width="10" d="M0 175h99" class="part"/>
                <path stroke="#000" stroke-width="10" d="M49 180V10" class="part"/>
                <path stroke="#000" stroke-width="10" d="M44 5h105" class="part"/>
                <path stroke="#000" stroke-width="10" d="m94.535 4.536-47 46.999" class="part"/>
                <path stroke="#000" stroke-width="10" d="M145 1v40" class="part"/>
                <circle cx="145" cy="60" r="16.5" stroke="#000" stroke-width="5" class="part"/>
                <path stroke="#000" stroke-width="5" d="M147.5 77v39" class="part"/>
                <path stroke="#000" stroke-width="5" d="m149 102-22-22" class="part"/>
                <path stroke="#000" stroke-width="5" d="m172 81-25 21" class="part"/>
                <path stroke="#000" stroke-width="5" d="m146.914 117.608-21 25" class="part"/>
                <path stroke="#000" stroke-width="5" d="m167.915 139.393-21-25" class="part"/>
            </g>
        </svg>
        </div>
        <div class="password"></div>
        <dialog class="modal">
            <p class="modal__description"></p>
            <button class="close_modal">Ok</button>
        </dialog>
        <div class="keyboard flex">
            <div class="key">a</div>
            <div class="key">ą</div>
            <div class="key">b</div>
            <div class="key">c</div>
            <div class="key">ć</div>
            <div class="key">d</div>
            <div class="key">e</div>
            <div class="key">ę</div>
            <div class="key">f</div>
            <div class="key">g</div>
            <div class="key">h</div>
            <div class="key">i</div>
            <div class="key">j</div>
            <div class="key">k</div>
            <div class="key">l</div>
            <div class="key">ł</div>
            <div class="key">m</div>
            <div class="key">n</div>
            <div class="key">o</div>
            <div class="key">ó</div>
            <div class="key">p</div>
            <div class="key">q</div>
            <div class="key">r</div>
            <div class="key">s</div>
            <div class="key">ś</div>
            <div class="key">t</div>
            <div class="key">u</div>
            <div class="key">v</div>
            <div class="key">w</div>
            <div class="key">x</div>
            <div class="key">y</div>
            <div class="key">z</div>
            <div class="key">ź</div>
            <div class="key">ż</div>
        </div>
        <div class="buttons">
            <button class="btn btn--restart">Zagraj jeszcze raz</button>
            <button class="btn btn--hint">Podpowiedź</button>
        </div>
    </main>
    <footer class="footer flex-center">
        <p>Stronę wykonał: Damian Sempski</p>
    </footer>
    <?php 
        include_once "connect.php";

        $conn = mysqli_connect($host, $user, $pass, $db) or die("Problemy z połączeniem z bazą danych");

        $q_records = "SELECT COUNT(*) FROM hasla";
        $result = mysqli_query($conn, $q_records) or die("Problemy z odczytaniem danych");
        $number_of_records = mysqli_fetch_row($result);
        $random_id_password = rand(1, intval($number_of_records[0]));

        $q_password = "SELECT nazwa_hasla, kategoria, podpowiedz FROM hasla WHERE id_hasla = {$random_id_password}";
        $result2 = mysqli_query($conn, $q_password) or die("Problemy z odczytaniem danych");
        $password_data = mysqli_fetch_row($result2);

        mysqli_close($conn);
    ?>
    <script>
        let passwordName = "<?php echo $password_data[0]?>";
        let passwordCategory = "<?php echo $password_data[1]?>";
        let passwordHint = "<?php echo $password_data[2]?>";
    </script>
</body>
</html>