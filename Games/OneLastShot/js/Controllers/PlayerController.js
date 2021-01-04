/**
 * Moves the parent sprite based on keyboard input and detect collisions against platforms, pickups etc
 * @author niall mcguinness
 * @version 1.0
 * @class PlayerController
 */
class PlayerController {
  //#region Static Fields
  //#endregion

  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  constructor(moveKeys, runVelocity, jumpVelocity) {
    this.moveKeys = moveKeys;
    this.runVelocity = runVelocity;
    this.jumpVelocity = jumpVelocity;
  }

  //#region Core Methods - doesnt need to change
  Execute(gameTime, parent) {
    this.HandleInput(gameTime, parent);
    this.ApplyForces(parent);
    this.CheckCollisions(parent);
    this.ApplyInput(parent);
  }

  HandleInput(gameTime, parent) {
    this.HandleMove(gameTime, parent);
    this.HandleJump(gameTime, parent);
    this.HandleKeyboard(gameTime, parent);
  }

  ApplyForces(parent) {
    parent.Body.ApplyGravity();
    parent.Body.ApplyFriction();
  }

  CheckCollisions(parent) {
    this.HandleEnemyCollision(parent);
    // this.HandlePickupCollision(parent);
  }

  ApplyInput(parent) {
    //if we have small left over velocity values then set to zero
    if (Math.abs(parent.Body.velocityX) <= Body.MIN_SPEED)
      parent.Body.velocityX = 0;
    if (Math.abs(parent.Body.velocityY) <= Body.MIN_SPEED)
      parent.Body.velocityY = 0;

    //apply velocity to (x,y) of the parent's translation
    parent.Transform2D.TranslateBy(
      new Vector2(parent.Body.velocityX, parent.Body.velocityY)
    );

    //update the bounding surface when the player moves
    parent.collisionPrimitive.Move(
      parent.Body.velocityX,
      parent.Body.velocityY
    );
  }

  //#endregion

  //#region Common Methods - Equals, ToString, Clone
  Equals(other) {
    //to do...
    throw "Not Yet Implemented";
  }

  ToString() {
    //to do...
    throw "Not Yet Implemented";
  }

  Clone() {
    //to do...
    throw "Not Yet Implemented";
  }
  //#endregion

  //#region Your Game Specific Methods - add code for more CD/CR or input handling



    /**
   * Add code in the method to listen for keyboard input and do something in the game
   *
   * @param {*} gameTime
   * @param {*} parent
   * @memberof PlayerController
   */
  HandleKeyboard(gameTime, parent) {
    if (keyboardManager.IsKeyDown(this.moveKeys[4]) && !parent.Body.IsShooting) 
    {
      parent.Artist.SetTake("character_shoot");
      parent.Body.IsShooting = true;
      console.log("Shoot");
    }
  }

  /**
   * Change the names of the takes in this method to suit the take names in your game
   *
   * @param {*} gameTime
   * @param {*} parent
   * @memberof PlayerController
   */
  HandleMove(gameTime, parent) {
    //if left or right key pressed and player is on the ground then add/remove move velocity
    if (keyboardManager.IsKeyDown(this.moveKeys[0]))
    {
      parent.Body.AddVelocityX(-this.runVelocity * gameTime.ElapsedTimeInMs);
    } 
    else if (keyboardManager.IsKeyDown(this.moveKeys[1])) 
    {
      parent.Body.AddVelocityX(this.runVelocity * gameTime.ElapsedTimeInMs);
      parent.Artist.SetTake("run_right");
      parent.Body.IsShooting = false;
    }
   
  }

  /**
   * Change the code in this method to play a particular sound when the player jumps
   * and (optionally) change the animation
   *
   * @param {*} gameTime
   * @param {*} parent
   * @memberof PlayerController
   */
  HandleJump(gameTime, parent) {
    //if jump key is pressed and player is not jumping and on the ground then jump
    if (keyboardManager.IsKeyDown(this.moveKeys[2])) 
    {
      
      parent.Body.IsJumping = true;
      parent.Body.IsShooting = false;
      parent.Body.SetVelocityY(-this.jumpVelocity * gameTime.ElapsedTimeInMs);
      parent.Artist.SetTake("jump");
      
    }
  }


  /**
   * Change the code in this method to play a particular sound when the player 
   * collides with the enemy, or remove the enemy, or kill the player and change
   * to game over screen (i.e. by setting object manager to StatusType.Drawn only to pause
   * update and then by setting the "menu_winlose" <div> block to display=block with a message set in
   * the innerHTML of that <div> block )
   *
   * @param {*} gameTime
   * @param {*} parent
   * @memberof PlayerController
   */
  HandleEnemyCollision(parent) 
  {
    let sprites = objectManager.Find(ActorType.Enemy);

    if (sprites) {
      for (let i = 0; i < sprites.length; i++) {
        let sprite = sprites[i];

        if (Collision.Intersects(parent, sprite)) {
          objectManager.Remove(sprite);
          soundManager.Play("mob_hit");
          lives=lives-1;
        }
      }
    }
  }

   /**
   * Change the code in this method to play a particular sound when the player 
   * collides with the enemy, or remove the enemy, or kill the player and change
   * to game over screen (i.e. by setting object manager to StatusType.Drawn only to pause
   * update and then by setting the "menu_winlose" <div> block to display=block with a message set in
   * the innerHTML of that <div> block )
   *
   * @param {*} gameTime
   * @param {*} parent
   * @memberof PlayerController
   */
  HandleBoundsCollision(parent) 
  { 
    if (Collision.Intersects(parent, screenBounds)) 
    {
          //DOESNT WORK
         console.log("hit")
    }
      
    
  }
  //#endregion
}
