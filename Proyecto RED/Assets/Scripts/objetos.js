#pragma strict
private var tema : Instant;
private var gameState : GameState;
private var velocidad : int = 2;
function Start () {
    
    gameState = gameObject.GetComponent(GameState);
    tema = gameObject.GetComponent(Instant);
    
}

function Update () {
    transform.Translate(0,Time.deltaTime * -velocidad,0);

    //Debug.Log("Tema " + tema.tema + "Tag " + gameObject.tag);

    for (var i=0; i<Input.touchCount; i++){
        var ray = Camera.main.ScreenPointToRay(Input.GetTouch(i).position);
        var hit : RaycastHit;
        if(GetComponent.<Collider>().Raycast(ray,hit,100)){
            if(tema.tema.ToString() == gameObject.tag){
                gameState.puntos = gameState.puntos + 1;
                //Destroy(gameObject);
            }
            if(tema.tema.ToString() != this.gameObject.tag){
            
                gameState.vidas = gameState.vidas - 1;
                //Destroy(gameObject);
            }
            Destroy(gameObject);
            
        }
    }
}

