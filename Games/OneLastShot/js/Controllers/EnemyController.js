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
    //   this.HandleMove(gameTime, parent);
    //   //this.ApplyForces(parent);
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
        if(sprites)
        {
            //we can use simple collision check here (i.e. Intersects) because dont need to think was it top, bottom, left, or right
            if (Collision.Intersects(parent, sprite)) 
            {
                //add your code here...

                //add to the score
                score += 10;

                //play a sound
                soundManager.Play("mob_hit");

                //remove the pickup
                //parent.Artist.SetTake("run_right");
                objectManager.Remove(sprite);
            }
        }
    }
  
    //#endregion
  }
  