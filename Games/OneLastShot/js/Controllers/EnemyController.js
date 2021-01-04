/**
 * Moves the parent sprite based on keyboard input and detect collisions against platforms, pickups etc
 * @author niall mcguinness
 * @version 1.0
 * @class EnemyController
 */
class EnemyController {
    //#region Static Fields
    //#endregion
  
    //#region Fields
    //#endregion
  
    //#region Properties
    //#endregion
  
    constructor(moveVelocity) {
      this.moveVelocity = moveVelocity;
    }
  
    //#region Core Methods - doesnt need to change
    Execute(gameTime, parent) {
        parent.Body.AddVelocityX(-this.moveVelocity * 8);
        this.CheckCollisions(parent);
        this.ApplyInput(parent);
    }
  
    // ApplyForces(parent) {
    //   parent.Body.ApplyGravity();
    //   parent.Body.ApplyFriction();
    // }
  
    CheckCollisions(parent) {
      this.HandleBulletCollision(parent);
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
  
    
  
    // //#endregion
  
    // //#region Common Methods - Equals, ToString, Clone
    // Equals(other) {
    //   //to do...
    //   throw "Not Yet Implemented";
    // }
  
    // ToString() {
    //   //to do...
    //   throw "Not Yet Implemented";
    // }
  
    // Clone() {
    //   //to do...
    //   throw "Not Yet Implemented";
    // }
    // //#endregion
  
    // //#region Your Game Specific Methods - add code for more CD/CR or input handling
  
  
 
        
    
  
    /**
     * Change the code in this method to play a particular sound when the player collects
     * a pickup, update the score based on the pickup ID, and possibly play a celebration 
     * animation if the pickup is the final level objective.
     *
     * @param {*} gameTime
     * @param {*} parent
     * @memberof EnemyController
     */
    HandleBulletCollision(parent) {
      let sprites = objectManager.Find(ActorType.Bullet);

      if (sprites) {
        for (let i = 0; i < sprites.length; i++) {
          let sprite = sprites[i];
  
          if (Collision.Intersects(parent, sprite)) {
            //add your code here...
            objectManager.Remove(sprite);
            //this.ResetBullet(sprite);
            soundManager.Play("mob_hit");
            parent.Artist.SetTake("monster_die");
            //objectManager.Remove(parent);
            //this.ResetEnemy(parent);

            score+=50;
          }
        }
      }
    }

    ResetEnemy(parent)
    {      
      let x = (Math.ceil(Math.random() * 100)+850);
      let y = (Math.ceil(Math.random() * 410)+50);
      console.log("reset",x,y);
      parent.Body.SetVelocityX(x);
      parent.Body.SetVelocityY(y);
      //objectManager.Update(gameTime);
    }

    ResetBullet(sprite)
    {
      sprite.Body.SetVelocityX(30);
      sprite.Body.SetVelocityY(100);
    }
  
    //#endregion
  }
  