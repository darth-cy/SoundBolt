(function(){

    // Settings
    var Id = "vortex",
        ColorBg = "#000",
        EmmiterSpeed = 5,
        EmmiterRate = 30,
        ColorParticle = {
            h: 200,
            s: 30,
            l: 10
        },
        ParticleDetail = 10;

    //Constants
    var Tau = Math.PI*2;


    // Vortex Constructor
    function Vortex(){

        this.canvas = document.getElementById(Id);
        this.c = this.canvas.getContext("2d");

        this.w = 1280;
        this.h = 720;
        window.onresize = function(){ this.resize() }.bind(this);
        this.resize();

        this.emmiter = {
            x: 0,
            y: 0,
            rad: 0
        };

        this.time = {
            delta: 0,
            now: new Date().getTime(),
            last: 0,
            fps: 0,
            frame: 0
        }

        this.particles = [];

        this.c.fillStyle = ColorBg;
        this.c.fillRect(0,0,this.w,this.h);

        this.step();
    }

    // Resize canvas to match window
    Vortex.prototype.resize = function(){
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.canvas.width = this.w;
        this.canvas.height = this.h;
        this.c.fillStyle = ColorBg;
        this.c.fillRect(0,0,this.w,this.h);
    };

    Vortex.prototype.step = function(){
        this.time.frame++;
        this.time.last = this.time.now;
        this.time.now = new Date().getTime();
        this.time.delta = this.time.now - this.time.last;
        if( this.time.delta > 500 ) this.time.delta = 500;

        this.c.globalAlpha = 0.05;
        this.c.globalCompositeOperation = "source-over";
        this.c.fillStyle = ColorBg;
        this.c.fillRect(0,0,this.w,this.h);

        this.emmiter.x = Math.cos( this.emmiter.rad ) * (this.w/7);
        this.emmiter.y = Math.sin( this.emmiter.rad ) * (this.h/7);
        this.emmiter.x += (this.w/2);
        this.emmiter.y += (this.h/2);

        this.emmiter.rad += (EmmiterSpeed/10000)*this.time.delta;

        this.emmit();
        this.c.globalAlpha = 0.02;
        this.c.globalCompositeOperation = "lighter";
        this.updateDrawParticles();

        requestAnimationFrame( this.step.bind(this) );
    };

    Vortex.prototype.emmit = function(){
        for( var i = 0 ; i < ((EmmiterRate/100)*this.time.delta) ; i++ ){
            this.particles.unshift( new Particle(this.emmiter.x, this.emmiter.y) );
        }
    };

    Vortex.prototype.updateDrawParticles = function(){
        var scale = 0.1,
            w = 0,
            h = 0;
        for( var i = 0 ; i < this.particles.length ; i++ ){
            this.particles[i].update(this.time.delta);
            w = this.particles[i].canvas.width * scale;
            h = this.particles[i].canvas.height * scale;
            this.c.drawImage(
                this.particles[i].canvas,
                this.particles[i].x-(w/2),
                this.particles[i].y-(h/2),
                w,
                h
            );
            if( !this.particles[i].isVisible(this.w,this.h) ){
                this.particles.splice(i,1);
                i--;
            }
            scale += 0.005;
        }
    };






    function Particle(x,y){

        this.x = x;
        this.y = y;

        this.direction = random()*Tau;
        this.velocity = 1;

        this.canvas = document.createElement("canvas");
        this.c = this.canvas.getContext("2d");
        this.canvas.width = 100;
        this.canvas.height = 100;

        this.drawCache();

    }

    Particle.prototype.drawCache = function(){
        for( var i = 0 ; i < ParticleDetail ; i++ ){
            this.c.beginPath();
            var color = "hsl(0,0%,100%)";

            if( random() > 0.005 ){
                color = "hsl("+
                    (ColorParticle.h + random(-70,70) )+","+
                    (ColorParticle.s + random(-30,30) )+"%,"+
                    (ColorParticle.l + random(-30,30) )+"%)";
                this.c.globalAlpha = random(0.5,0.9);
            } else {
                this.c.globalAlpha = 1;
            }

            var x = 50 + random(-20,20),
                y = 50 + random(-20,20);
            this.c.arc(x,y,random(5,15),0,Tau);
            this.c.fillStyle = color;
            this.c.fill();
        }
    };

    Particle.prototype.update = function(d){
        this.x += ((Math.cos(this.direction) * d) * this.velocity)/100;
        this.y += ((Math.sin(this.direction) * d) * this.velocity)/100;
        this.velocity += (2 * d)/200;
    };

    Particle.prototype.isVisible = function(w,h){
        if( this.x < ( w/5 )*-1 || this.y < ( h/5 )*-1 ) return false;
        if( this.x > w+(w/5) || this.y > h+(h/5) ) return false;
        return true;
    };






    //Random numbers
    function random(min,max){

        if( typeof min !== "number" ) min = 0;
        if( typeof max !== "number" ) max = 1;

        var rand = Math.random();

        rand = rand*(max-min);
        rand += min;

        return rand;
    }



    // Create vortex
    new Vortex();

})();
