<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    function get()
    {
        return "hola";
    }

    function suma(Request $data)
    {
        $valores = $data->json()->all();
        return $valores;
    }

    function ganador(Request $data)
    {
        $votos = $data->json()->all();
        // Verifico Candidatos
        $candidatos = [];
        foreach($votos as $voto){
            $noExiste = true;
            foreach($candidatos as $candidato) {
                if($candidato["Candidato"] == $voto) {
                    $noExiste = false;
                }
            }
            if($noExiste) {
                array_push($candidatos, ["Candidato"=>$voto,"Votos"=>0]);
            }
        }
        // Cuento los votos
        for($i = 0; $i<sizeof($candidatos);$i++) {
            foreach($votos as $voto){
                if ($candidatos[$i]["Candidato"]==$voto){
                    $candidatos[$i]["Votos"]++;
                }
            }
        }
        // Busco Mayor
        $mayor=["Candidato"=>"","Votos"=>0];
        foreach($candidatos as $candidato){
            if($candidato["Votos"]>$mayor["Votos"]){
                $mayor = $candidato;
            }else{
                //Verifico si hay empate
                if($candidato["Votos"] == $mayor["Votos"]){
                    if(strcmp($mayor["Candidato"], $candidato["Candidato"])>0){
                        $mayor = $candidato;
                    }
                }
            }
        }
        return $mayor;
    }
}
