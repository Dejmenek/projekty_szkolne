<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Formularz rejestracyjny użytkownika</title>
</head>
<body>
    <main class="form__container">
        <div class="form__img">
            <img src="./img/characters.svg" alt="characters">
        </div>
        <div class="form__content">
            <h1 class="form__heading">Zaloguj się</h1>
            <?php 
                require_once "db.php";

                if(isset($_POST['login'])) {
                    $conn = mysqli_connect($HOST, $USER, $PASSWORD, $DB) or die("Nie udało się połączyć z bazą danych");

                    mysqli_set_charset($conn, "utf8");

                    $user_name = $_POST['user-name'];
                    $user_password = $_POST['user-password'];

                    class User {
                        public $name;
                        public $encrypted_password;

                        function set_name($name) {
                            $this->name = $name;
                        }

                        function set_password($password) {
                            $this->encrypted_password = sha1($password);
                        }
                    }

                    $user = new User();
                    $user->set_name($user_name);
                    $user->set_password($user_password);

                    $q = "SELECT nazwa_uzytkownika, zaszyfrowane_haslo FROM hasla WHERE nazwa_uzytkownika = '{$user->name}' AND zaszyfrowane_haslo = '{$user->encrypted_password}'";
                    $result = mysqli_query($conn, $q);

                    if(mysqli_num_rows($result) > 0) {
                        echo "<div class='form__alert'>
                                <p class='alert-info--purple'>Witamy na stronie {$user->name}</p>
                            </div>";

                        $logs = fopen("logs.txt", "a");
                        $now = date("Y-m-d H:i:s");

                        fwrite($logs, nl2br("Zalogowano się na konto: {$user->name} w dniu $now\n"));
                        fclose($logs);
                    } else {
                        echo "<div class='form__alert'>
                                <p class='alert-info--red'>Takie konto nie istnieje</p>
                            </div>";
                    }
                    mysqli_close($conn);
                }
            ?>
            <form action="" method="post">
                <input class="form__input form__input--name" name="user-name" type="text" required>
                <input class="form__input form__input--password" type="password" name="user-password" id="" required>
                <input name="login" class="form__button" type="submit" value="Zaloguj się">
            </form>
            <p class="form__info">Nie masz konta? <a class="form__link" href="./rejestracja.php">Zarejestruj się</a></p>
        </div>
    </main>
</body>
</html>