<?php

require_once __DIR__ . '/src/Exception.php';
require_once __DIR__ . '/src/NotAttachedException.php';
require_once __DIR__ . '/src/Broker.php';

$broker = new Jasny\SSO\Broker('https://sso.bcsoetta.org/', '8', 'q9Qk3e8PLL');

if (empty($_REQUEST['command']) || !method_exists($broker, $_REQUEST['command'])) {
    header("Content-Type: application/json");
    header("HTTP/1.1 400 Bad Request");
    echo json_encode(['error' => 'Command not specified']);
    return;
}

try {
    $result = $broker->{$_REQUEST['command']}();
} catch (Exception $e) {
    $status = $e->getCode();
    $result = ['error' => $e->getMessage()];
}

// JSONP
if (!empty($_GET['callback'])) {
    if (!isset($result)) $result = null;
    if (!isset($status)) $status = isset($result) ? 200 : 204;

    header('Content-Type: application/javascript');
    echo $_GET['callback'] . '(' . json_encode($result) . ', ' . $status . ')';
    return;
}

// REST
if (!$result) {
    http_response_code(204);
} else {
    http_response_code(isset($status) ? $status : 200);
    header("Content-Type: application/json");
    echo json_encode($result);
}
