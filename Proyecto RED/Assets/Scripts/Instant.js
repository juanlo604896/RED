#pragma strict
private var tiempo : float;
private var tiem_inst : float;
private var rand : int;
private var rand_position : int;
static var tema : int;
var objetos : GameObject[];
//var obj : GameObject;
function Start () {
    tiempo = 0;
    tiem_inst = 2f;
    tema = Random.Range(0,2);
    objetos[0] = Resources.Load("obj");
    objetos[1] = Resources.Load("cap");
}

function Update () {
    Debug.Log("tema " + tema);
    tiempo += Time.deltaTime ;
    if(tiempo > tiem_inst){
        rand = Random.Range(0,2);
        tiempo = 0;
        Instantiate(objetos[rand], transform.position, transform.rotation);
        rand_position = Random.Range(-3,4);
        transform.position.x = rand_position;
    }
}