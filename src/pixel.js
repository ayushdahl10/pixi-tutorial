var pixiapp = new PIXI.Application({ background: "#1099bb", resizeTo: window });
document.body.appendChild(pixiapp.view);

const main={
    config:{
        background:null,
        player:null,
        player_pos:0,
        scale:1
    },
    //load game content 
    load_content:function()
    {
        // Load the background image
        this.config.background=PIXI.Sprite.from('assets/background/background.jpg')
        this.config.player=PIXI.Sprite.from('assets/player/idle.png')
        this.config.player.scale.x=2;
        this.config.player.scale.y=2;
        pixiapp.renderer.resize(window.innerWidth, window.innerHeight);
    },
    //draw sprite in screen
    draw:function()
    {
        pixiapp.stage.addChild(this.config.background)
        pixiapp.stage.addChild(this.config.player)
    },
    //call your game logic here
    update:function()
    {   

        this.resize();
        window.addEventListener('resize', this.resize.bind(this));
        requestAnimationFrame(this.update_player_position())
    },
    update_player_position:function()
    {
        document.addEventListener('keydown', (event) => {
            const speed = 10; // Adjust the speed as desired
          
            // Move the player based on the key pressed
            switch (event.code) {
              case 'ArrowUp':
                this.config.player.y -= speed;
                break;
              case 'ArrowDown':
                this.config.player.y += speed;
                break;
              case 'ArrowLeft':
                this.config.player.x -= speed;
                break;
              case 'ArrowRight':
                this.config.player.x += speed;
                break;
            }
          });
          requestAnimationFrame(this.update_player_position());
    },
    //resize the pixel images 
    resize:function()
    {   
        const scale = Math.min(window.innerWidth / pixiapp.screen.width, window.innerHeight / pixiapp.screen.height);
        const newWidth = pixiapp.screen.width * scale;
        const newHeight = pixiapp.screen.height * scale;
        this.config.background.width = newWidth;
        this.config.background.height = newHeight;
        this.config.background.x = (window.innerWidth - newWidth) / 2;
        this.config.background.y = (window.innerHeight - newHeight) / 2;
        pixiapp.renderer.resize(window.innerWidth, window.innerHeight);

    },
    run:function()
    {
        this.load_content();
        this.draw();
        this.update();

    }
}
main.run();
