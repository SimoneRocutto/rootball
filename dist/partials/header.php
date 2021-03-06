<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../css/style.css" />
  <title>Rootball Official Site</title>

  <link rel="stylesheet" href="../../node_modules/@fortawesome/fontawesome-free/css/all.css"></script>
</head>

<body>
  <div class="main-wrapper">
    <nav class="navbar hidden transition-opacity dropdown-is-hidden" id="navbar">
      <a class="navbar__logo" href="./">
        <?php echo file_get_contents('../images/svg/logo-black.svg'); ?>
        <div class="logo__word">Rootball</div>

      </a>
      <button class="navbar__toggle" id="navbar-toggle">
        <div class="toggle__lines"></div>
      </button>
      <ul class="navlist" id="nav-list">
        <li class="navlist__li"><a href="./" class="navlist__a">Home</a></li>
        <li class="navlist__li"><a href="./rules.php" class="navlist__a">Rules</a></li>
        <li class="navlist__li"><a href="./about.php" class="navlist__a">About</a></li>
        <li class="navlist__li"><a href="./contact-us.php" class="navlist__a">Contact Us</a></li>
      </ul>
    </nav>