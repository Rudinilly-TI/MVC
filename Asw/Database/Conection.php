<?php
namespace Asw\Database;

Class Conection{
    const DADOS = './Config/Database.ini';
    private $dados;
    public function __construct(){
    $this->dados = parse_ini_file(DADOS);
    var_dump($this->dados);
    }
}