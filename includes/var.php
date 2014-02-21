<?php
// INT to DEV
// Variables determining the page displayed and its layout
$layout = (isset($_GET['layout'])) ? $_GET['layout'] : false;
$page   = (isset($_GET['page'])) ? $_GET['page'] : false;

// classes that apply to the highest element possible depending on the layout used
$layoutClasses = array(
    'hp' => 'layout-hp',
);

// title of the page
$pageTitle = array(
    'hp' => 'Page d\'accueil',
);


// Writes dummy text, you dummy
function lorem($length) {
    $dummy_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis lectus sed nisl tempor lacinia. Nam nec augue nec lacus vehicula sagittis id eu elit. Praesent molestie nunc a quam consequat sollicitudin auctor ligula cursus. Nunc at lacinia augue. Aliquam vel lectus tortor, eget scelerisque erat. Nunc ornare cursus rutrum. Proin enim libero, mattis vitae tristique ac, auctor sit amet lorem. Nullam tincidunt facilisis dolor non cursus. Nullam fringilla tempus velit. Integer leo urna, porttitor porta cursus vel, laoreet at nisi. Sed dictum accumsan metus ut porta. Suspendisse a lectus ac tortor varius suscipit non in mauris. Morbi ullamcorper, orci et volutpat aliquam, leo orci facilisis tortor, eget viverra magna ante ac nunc. Nunc lacus sapien, hendrerit nec elementum ut, faucibus quis eros. Vivamus libero dui, euismod vel euismod vel, porta vitae ligula. Pellentesque et orci id odio luctus mollis. Nulla condimentum, felis et scelerisque eleifend, dui lectus convallis dolor, nec feugiat dui purus id nunc. Praesent a nunc ac metus dignissim aliquet. Duis lectus est, venenatis vitae feugiat sed, ultricies id augue. Aliquam quis fringilla ipsum. Nunc ornare mollis eros, sit amet commodo sapien congue in. Nullam placerat, nibh at fermentum viverra, tellus urna bibendum lectus, sed luctus arcu tellus nec lorem. Fusce eleifend pulvinar purus, id auctor nunc convallis at. Mauris rhoncus cursus risus, vel laoreet felis vestibulum quis. Nulla vitae diam dui. ";
    return ucfirst(trim(substr($dummy_text, rand(0, 100), $length)));
}