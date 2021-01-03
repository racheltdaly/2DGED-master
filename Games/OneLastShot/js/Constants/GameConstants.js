/***************************************** Sprite Sheet Position & Animation Data ************************************************************************************************/

/**
 * Class to store together all sprite data for space invaders
 */
class SpriteData {

  //#region Sprite Data
  static RUNNER_START_POSITION = new Vector2(100, 575);
  static RUNNER_MOVE_KEYS = [Keys.A, Keys.D, Keys.Space, Keys.Enter,Keys.ArrowRight];
  static RUNNER_RUN_VELOCITY = 0.2;
  static RUNNER_JUMP_VELOCITY = 0.2;

  //randomises enemy start position
  static ENEMY_X = (Math.ceil(Math.random() * 100)+850);
  static ENEMY_Y = (Math.ceil(Math.random() * 410));

  static ENEMY_START_POSITION = new Vector2(this.ENEMY_X,this.ENEMY_Y);
  static ENEMY_MOVE_VELOCITY = 0.002;
  
  static CHARACTER_ANIMATION_DATA = Object.freeze({
    id: "runner_animation_data",
    spriteSheet: document.getElementById("character_sheet"),
    actorType: ActorType.Player,
    alpha: 1,
    takes: {  
      "run_right" :  {       
        fps: 12,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 8,
        boundingBoxDimensions: new Vector2(37, 53), //notice I choose the largest of all the widths taken from the cellData array below
        cellData: [
          new Rect(515, 0, 35, 53),
          new Rect(450, 0, 35, 53),
          new Rect(390, 0, 32, 53),
          new Rect(325, 0, 37, 53),
          new Rect(260, 0, 34, 53),
          new Rect(195, 0, 30, 53),
          new Rect(135, 0, 30, 53),
          new Rect(70, 0, 31, 53),
          new Rect(5, 0, 28, 53)
        ]
      },
      "run_left" : {     
        fps: 12,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 8,
        boundingBoxDimensions: new Vector2(49, 54), //notice I choose the largest of all the widths taken from the cellData array below
        cellData: [
          new Rect(0, 305, 47, 54),
          new Rect(55, 305, 44, 54),
          new Rect(107, 305, 39, 54),
          new Rect(152, 305, 46, 54),
          new Rect(208, 305, 49, 54),
          new Rect(265, 305, 46, 54),
          new Rect(320, 305, 42, 54),
          new Rect(380, 305, 35, 54),
          new Rect(425, 305, 35, 54)
        ]
      },
      "jump" : {     
        fps: 20,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 4,
        boundingBoxDimensions: new Vector2(37, 56), //notice I choose the largest of all the widths taken from the cellData array below
        cellData: [
          new Rect(10, 155, 35, 56),
          new Rect(75, 155, 31, 55),
          new Rect(140, 155, 31, 56),
          new Rect(200, 155, 35, 56),
          new Rect(263, 155, 37, 56),
          new Rect(326, 155, 37, 56),
          new Rect(395, 155, 32, 56)
        ]
      },
      "character_shoot" : {     
        fps: 13,
        maxLoopCount: 0, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 8,
        boundingBoxDimensions: new Vector2(49, 57), //notice I choose the largest of all the widths taken from the cellData array below
        cellData: [
          new Rect(5, 75, 49, 56),
          new Rect(73, 75, 41, 55),
          new Rect(137, 75, 44, 56),
          new Rect(200, 75, 42, 56),
          new Rect(265, 75, 40, 55),
          new Rect(330, 72, 42, 59),
          new Rect(395, 70, 38, 60),
          new Rect(455, 72, 44, 59),
          new Rect(518, 75, 43, 56),
          new Rect(585, 74, 40, 57),
          new Rect(650, 75, 39, 56),
          new Rect(713, 74, 37, 56),
          new Rect(778, 75, 37, 56)
        ]
      }

    }
  });
  
  static ENEMY_ANIMATION_DATA = Object.freeze({
    id: "enemy_animation_data",
    spriteSheet: document.getElementById("monster_flying"),
    actorType: ActorType.Enemy,
    alpha: 1,
    takes: {  
      "monster_fly" :  {    
        fps: 12,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 2,
        boundingBoxDimensions: new Vector2(47, 36), 
        cellData: [
          new Rect(1100, 60, 45, 31),
          new Rect(950, 60, 42, 25),
          new Rect(800, 60, 46, 28),
          new Rect(650, 60, 46, 27),
          new Rect(500, 60, 46, 27),
          new Rect(350, 60, 45, 30),
          new Rect(200, 60, 47, 36),
          new Rect(50, 60, 45, 34)
        ]
      }
    }
  });
  
  static COLLECTIBLES_ANIMATION_DATA = Object.freeze({
    id: "collectibles_animation_data",
    spriteSheet: document.getElementById("spritesheet_main"),
    alpha: 1,
    actorType: ActorType.Pickup,
    takes: {  
      "sapphire_glint" :  {
        fps: 6,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 4,
        boundingBoxDimensions: new Vector2(46, 50), 
        cellData: [
          new Rect(185, 138, 30, 35),
          new Rect(220, 138, 30, 35),
          new Rect(258, 138, 30, 35),
          new Rect(294, 138, 30, 35),
          new Rect(331, 138, 30, 35)
        ]
      },
      "ruby_glint" :  {
        fps: 6,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 4,
        boundingBoxDimensions: new Vector2(30, 35), 
        cellData: [
          new Rect(3, 138, 30, 35),
          new Rect(39, 138, 30, 35),
          new Rect(76, 138, 30, 35),
          new Rect(112, 138, 30, 35),
          new Rect(148, 138, 30, 35)
        ]
      },
      "gold_glint" :  {
        fps: 6,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 2,
        boundingBoxDimensions: new Vector2(30, 30), 
        cellData: [
          new Rect(65, 540, 30, 30),
          new Rect(96, 540, 30, 30),
          new Rect(128, 540, 30, 30)
        ]
      }
    }
  });
  
  static PLATFORM_DATA = Object.freeze({
    id: "platform",
    spriteSheet: document.getElementById("spritesheet_jungle"),
    sourcePosition: new Vector2(0, 112),
    sourceDimensions: new Vector2(48, 48),
    rotation: 0,
    scale: new Vector2(1, 1),
    origin: new Vector2(0, 0),
    alpha: 1,
    actorType: ActorType.Platform,
    translationArray: [
      //added spaces here so that you can easily see which grouping is which on screen
      new Vector2(100, 650),
      new Vector2(150, 650),
      new Vector2(200, 650),
  
      new Vector2(250, 600),
      new Vector2(300, 600),
  
      new Vector2(400, 550),
      new Vector2(450, 550),    
      new Vector2(500, 550),
      new Vector2(550, 550),  
  
      new Vector2(650, 500),
      new Vector2(700, 450),
    ]
  });
  
  static BACKGROUND_DATA = [
    {
      id: "background_1",
      spriteSheet: document.getElementById("layer_1"),
      sourcePosition: new Vector2(0,0),
      sourceDimensions: new Vector2(928, 793),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(2, 2),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.2
    },
    {
      id: "background_2",
      spriteSheet: document.getElementById("layer_2"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(924, 790),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(2, 3),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.15
    },
    {
      id: "background_3",
      spriteSheet: document.getElementById("layer_3"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(924, 790),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(2, 3),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.1
    },
    {
      id: "background_4",
      spriteSheet: document.getElementById("layer_4"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(924, 790),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(2, 3),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.05
    },
    {
      id: "background_5",
      spriteSheet: document.getElementById("layer_5"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(924, 790),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(2, 3),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.01
    },
    {
      id: "background_6",
      spriteSheet: document.getElementById("layer_6"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(924, 790),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(2, 3),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.01
    },
    {
      id: "background_7",
      spriteSheet: document.getElementById("layer_7"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(924, 790),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(2, 1.7),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.01
    },
    {
      id: "background_8",
      spriteSheet: document.getElementById("layer_8"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(924, 790),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(2, 2.9),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.01
    },
    {
      id: "background_9",
      spriteSheet: document.getElementById("layer_9"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(924, 790),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(2, 2.9),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.01
    }
  ];
  //#endregion
  
  }
  