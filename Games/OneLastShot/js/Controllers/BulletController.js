/**
 * Moves bullet sprite based either on time-based or user input.
 * @author niall mcguinness
 * @version 1.0
 * @class BulletController
 */
class BulletController
{
    /**
     * Creates an instance of SimpleMoveController to show how we can move a sprite with a controller
     * 
     * @param {Number} moveSpeed Floating-point speed value
     * @memberof BulletController
     */
    constructor(moveSpeed)
    {
      this.moveSpeed = moveSpeed;
    }


    /**
     * Executes the code inside the method to modify the parent (usually modifying Transform2D or AnimatedSpiteArtist)
     *
     * @param {*} gameTime
     * @param {*} parent
     * @memberof BulletController
     */
    Execute(gameTime, parent)
    {
      this.HandleMove(gameTime, parent);
      this.ApplyInput(parent);
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
  
      //update the bounding surface when the bullet moves
      parent.collisionPrimitive.Move(
        parent.Body.velocityX,
        parent.Body.velocityY
      );
    }

   HandleMove(gameTime, parent) {
      
      //Hold to shoot
      if (keyboardManager.IsKeyDown(Keys.ArrowRight)) {
         parent.Body.AddVelocityX(this.moveSpeed * 8);
         soundManager.Play("shot");
      }
      
      else 
      {
         let sprites = objectManager.Find(ActorType.Player);
         if(sprites)
         {
            for (let i = 0; i < sprites.length; i++) {
               let sprite = sprites[i];
               parent.Body.SetVelocityX(sprite.Body.VelocityX);
               parent.Body.SetVelocityY(sprite.Body.VelocityY);
            }
         }
      }
   }

   Clone() {
    return new BulletController(this.moveSpeed);
   }

   //to do...Equals, GetHashCode
   Equals(other) {
      //to do...
      throw "Not Yet Implemented";
    }
}