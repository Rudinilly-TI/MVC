<?php
namespace Asw\Database;
use \PDO;
Class Conection{
    const DADOS = '../Config/Database.ini';
    private $dados;
    public function __construct(){
    $this->dados = parse_ini_file(self:: DADOS);
    //var_dump($this->dados);
    
    $con = new PDO($this->dados['driver']);
    $con = new PDO($this->dados['driver'].":host=".$this->dados['host'],"dbname=".$this->dados['banco'],"charset=UTF-8",$this->dados['user'],$this->dados['pass']);
  
    return $con;
    }  

}