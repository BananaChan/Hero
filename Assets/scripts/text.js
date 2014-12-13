#pragma strict
	var score: int = 0;
	var audioClips: AudioClip[];
	var scoreText : Text;

function Start () {
	transform.position.x=-10;
	transform.position.y=-10;
	
	scoreText = GameObject.Find("score").GetComponent(Text);
}

function Update () 
{
	var speed : float = 0.5f;
	/*
		1             // int
		0.1           // float
		true/false    // bool
	*/
	
//	transform.position.x+=0.01;
//	transform.position.y+=0.01;

	    if(Input.GetKey(KeyCode.UpArrow))
			{if (transform.position.y<11)transform.position.y+= speed;}
		if(Input.GetKey(KeyCode.DownArrow))
			{if (transform.position.y>-11)transform.position.y-= speed;}
		if(Input.GetKey(KeyCode.RightArrow))
			{transform.localScale.x=1;
			 if (transform.position.x<21.5)transform.position.x+= speed;}
	    if(Input.GetKey(KeyCode.LeftArrow))
			{transform.localScale.x=-1;
			 if (transform.position.x>-21.5)transform.position.x-= speed;}   
			 
			 rigidbody2D. velocity=new Vector2(0,0);
}	
function OnCollisionEnter2D (coll : Collision2D)
{
    if(coll.collider.name == "enemy")
    {
    	score ++;
        audio.pitch=0.5;
        audio.clip=audioClips[0];
        coll.collider.SendMessage("Die_func"); 
    }
    
    if(coll.collider.name == "enemy2")
    {
    	score += 10;
        audio.pitch=1;
        audio.clip=audioClips[0];
        coll.collider.SendMessage("Die_func");
    }
    
     if(coll.collider.name == "enemy3")
    {
    	score -= 5;
        audio.pitch=0.5;
        audio.clip=audioClips[1];
        coll.collider.SendMessage("Die_func");
    }
    
    audio.Play();
    scoreText.text = score.ToString();
}