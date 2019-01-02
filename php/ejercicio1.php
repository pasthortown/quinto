<?php

class Naipe {

    public $baraja;

    function __construct() { 
        $this->baraja = $this->generarBaraja();
    }

    function generarBaraja() {
        $toReturn = [];
        $valores = ['A','2', '3', '4', '5', '6', '7', 'J', 'Q', 'K'];
        $palos = ['CR', 'CN', 'D', 'T'];
        foreach($palos as $palo) {
            foreach($valores as $valor){
                array_push($toReturn, $palo.'-'.$valor);
            }
        }
        shuffle($toReturn);
        return $toReturn;
    }
    
    function entregar() {
        $manos=[1=>array_slice($this->baraja,0,5), 2=>array_slice($this->baraja,0,5), 3=>array_slice($this->baraja,0,5), 4=>array_slice($this->baraja,0,5)];
        return $manos;
    }    
}

$Naipes = new Naipe();
echo json_encode($Naipes->entregar());