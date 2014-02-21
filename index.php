<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
    <?php include 'includes/var.php'; ?>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Intégration <?php echo $page; ?></title>
    <meta name="description" content="Lorem ipsum" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui" />

    <?php include "includes/assets-header.php"; ?>
</head>
<body class="<?php echo ((isset($layoutClasses[$layout])) ? $layoutClasses[$layout] : ''); ?>">

<div class="global version--full">
    <?php
    // HEADER
    include 'components/global_header.php';

    // MAIN en fonction de la variable layout, ou la liste de pages intégrées
    if ($layout && file_exists('layouts/'.$layout.'.php')) {
        include 'layouts/'.$layout.'.php';
    } else {
        include 'pages/__integration.php';
    }

    // FOOTER
    include 'components/global_footer.php';
    ?>
</div>

<?php include 'includes/assets-footer.php'; ?>
</body>
</html>