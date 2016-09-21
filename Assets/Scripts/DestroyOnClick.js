#pragma strict

function OnMouseDown () 
{
	if (gameObject.transform.position.y > -1 && gameObject.tranform.position.y < 4)
	{
		Destroy(GameObject);
	}
}
