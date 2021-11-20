
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	var Block1;
	var Block2;
	var Block3;

	function setup() {
		createCanvas(800, 700);

	var block1_options = {
		restitution: 0.5,
		friction: 0.02,
		frictionAir:0
	}

	var block2_options = {
		restitution: 0.7,
		friction: 0.01,
		frictionAir:0.1
	}

	var block3_options = {
		restitution: 0.01,
		friction: 1,
		frictionAir:0.3
	}


		engine = Engine.create();
		world = engine.world;

		//Crie os Corpos Aqui.
		Block1 = Bodies.circle(220,10,10, block1_options);
		World.add(world,Block1);
		
		Block2 = Bodies.rectangle(110,50,10,10, block2_options);
        World.add(world,Block2);

		Block3 = Bodies.rectangle(350,50,10,10, block3_options);
		World.add(world,Block3);



		Engine.run(engine);
	
	}


	function draw() {
	rectMode(CENTER);
	ellipseMode(CENTER);
	background(0);
	drawSprites();
	  
	ellipse(Block1.position.x,Block1.position.y,50);
	rectangle(Block2.position.x,Block2.position.y,10);
	rectangle(Block3.position.x,Block3.position.y,20);
	Engine.update(engine);
	}



