<?php
// Libraries & plugins
?>
<script src="assets/js/libs/jquery-1.8.2.min.js"></script>
<script src="assets/js/libs/spin.js"></script>
<script src="assets/js/libs/elastic-columns.js"></script>
<script src="assets/js/libs/jquery.colorbox.js"></script>

<?php
// Theme scripts
?>
<script src="assets/js/theme/global.js"></script>

<?php
// INT to DEV
// Scripts pour les intés seulement (injection css)
?>
<script src="http://localhost:3000/socket.io/socket.io.js"></script>
<script>var  ___socket___ = io.connect("http://localhost:3000");</script>
<script src="http://localhost:3001/client/browser-sync-client.min.js"></script>