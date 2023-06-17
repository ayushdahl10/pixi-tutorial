var pixiapp = new PIXI.Application({   
    background: "#1099bb",
    resizeTo: window });

document.body.appendChild(pixiapp.view);

const main={
    config:{
        background:'',
        scale:1
    },
    load_content:function()
    {
        // Load the background image
        this.config.background=PIXI.Sprite.from('assets/background/background.jpg')
        pixiapp.renderer.resize(window.innerWidth, window.innerHeight);
    },
    draw:function()
    {
        pixiapp.stage.addChild(this.config.background)
    },
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
        this.resize();
        window.addEventListener('resize', this.resize.bind(this));
    }
}
main.run();
