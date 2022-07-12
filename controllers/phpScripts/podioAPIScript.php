<?php
require 'vendor/autoload.php';
// require __DIR__ . '../../vendor/autoload.php';

$shortopts  = "";
$longopts  = array(
    "client:",
    "secret:",
    "username:",
    "password:",
    "itemID:"           
);

//get parameter values from terminal command
$val = getopt($shortopts, $longopts);

// Podio Authentication
Podio::setup($val["client"], $val["secret"]);
Podio::authenticate_with_password($val["username"], $val["password"]);

// GET Podio Item by ID
$item = PodioItem::get_basic($val["itemID"]);

$data = [
    "amount" => $item->fields['amount']->values,
    "category" => $item->fields['category']->values,
    "status" => $item->fields['status']->values,
    "description" => $item->fields['description']->values,
    "project" => $item->fields['project']->values
];

echo json_encode($data);