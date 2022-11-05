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
            <h1 class="form__heading">Zarejestruj się</h1>
            <?php 
                require_once "db.php";

                if (isset($_POST['register'])) {
                    $conn = mysqli_connect($HOST, $USER, $PASSWORD, $DB) or die("Nie udało się połączyć z bazą danych");

                    mysqli_set_charset($conn, "utf8");

                    $user_name = $_POST['user-name'];
                    $user_password = $_POST['user-password'];
                    $user_email = $_POST['user-email'];

                    class User {
                        public $name;
                        public $email;
                        public $encrypted_password;

                        function set_name($name) {
                            $this->name = $name;
                        }

                        function set_email($email) {
                            $this->email = $email;
                        }

                        function set_password($password) {
                            $this->encrypted_password = sha1($password);
                        }
                    }

                    $user = new User();
                    $user->set_name($user_name);
                    $user->set_email($user_email);
                    $user->set_password($user_password);

                    $q = "SELECT nazwa_uzytkownika FROM hasla WHERE nazwa_uzytkownika = '{$user->name}'";
                    $result = mysqli_query($conn, $q);

                    if (mysqli_num_rows($result) == 0) {
                        $q2 = "INSERT INTO hasla(nazwa_uzytkownika, email_uzytkownika, zaszyfrowane_haslo) VALUES ('{$user->name}', '{$user->email}', '{$user->encrypted_password}')";

                        if (mysqli_query($conn, $q2)) {
                            echo "<div class='form__alert'>
                                <p class='alert-info--green'>Twoje konto zostało pomyślnie utworzone</p>
                            </div>";

                            $logs = fopen("logs.txt", "a");
                            $now = date("Y-m-d H:i:s");

                            fwrite($logs, nl2br("Zarejestrowano nowe konto: {$user->name} w dniu $now\n"));
                            fclose($logs);
                        } else {
                            echo "<div class='form__alert'>
                                <p class='alert-info--red'>Problemy z utworzeniem konta</p>
                            </div>";
                        }
                    } else {
                        echo "<div class='form__alert'>
                                <p class='alert-info--red'>Konto z taką nazwą użytkownika już istnieje</p>
                            </div>";
                    }
                    mysqli_close($conn);
                }
            ?>
            <form action="" method="post">
                <input class="form__input form__input--mail" name="user-email" type="email" required>
                <input class="form__input form__input--name" type="text" name="user-name" required>
                <input class="form__input form__input--password" type="password" name="user-password" required>
                <input name="register" class="form__button" type="submit" value="Zarejestruj się">
            </form>
            <p class="form__info">Masz już konto? <a class="form__link" href="./index.php">Zaloguj się</a></p>
        </div>
    </main>
</body>
</html>