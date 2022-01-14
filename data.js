class cal {
    constructor() {
        this.input = createInput("").attribute("placeholder","0");
        this.b1 = createButton("1");
        this.b2 = createButton("2");
        this.b3 = createButton("3");
        this.b4 = createButton("4");
        this.b5 = createButton("5");
        this.b6 = createButton("6");
        this.b7 = createButton("7");
        this.b8 = createButton("8");
        this.b9 = createButton("9");
        this.b0 = createButton("0");
        this.bac = createButton("AC");
        this.bdot = createButton(".");
        this.bmulti = createButton("×");
        this.bdiv = createButton("÷");
        this.bmin = createButton("-");
        this.bplus = createButton("+");
        this.bequal = createButton("=");
        this.bspace = createButton("⌫");
        this.bo = createButton("(");
        this.bc = createButton(")");
    }

    style() {
        this.bequal.class("equal");
        this.input.class("di");
        this.b1.class("db");
        this.b2.class("db");
        this.b3.class("db");
        this.b4.class("db");
        this.b5.class("db");
        this.b6.class("db");
        this.b7.class("db");
        this.b8.class("db");
        this.b9.class("db");
        this.b0.class("db");
        this.bac.class("p");
        this.bdot.class("db");
        this.bmulti.class("dcb");
        this.bdiv.class("dcb");
        this.bmin.class("dcb");
        this.bplus.class("dcb");
        this.bspace.class("p");
        this.bo.class("p");
        this.bc.class("p");
    }

    hmp() {
    this.b1.mousePressed(()=> {
        ui = ui+"1";
    });
    this.b2.mousePressed(()=> {
        ui = ui+"2";
    });
    this.b3.mousePressed(()=> {
        ui = ui+"3";
    });
    this.b4.mousePressed(()=> {
        ui = ui+"4";
    });
    this.b5.mousePressed(()=> {
        ui = ui+"5";
    });
    this.b6.mousePressed(()=> {
        ui = ui+"6";
    });
    this.b7.mousePressed(()=> {
        ui = ui+"7";
    });
    this.b8.mousePressed(()=> {
        ui = ui+"8";
    });
    this.b9.mousePressed(()=> {
        ui = ui+"9";
    });
    this.b0.mousePressed(()=> {
        ui = ui+"0";
    });
    this.bac.mousePressed(()=> {
        ui = '';
    });
    this.bdot.mousePressed(()=> {
        ui = ui+".";
    });
    this.bequal.mousePressed(()=> {
        result = eval(this.input.value());
        ui = result;
    });
    this.bmulti.mousePressed(()=> {
        ui = ui+"*";
    });
    this.bdiv.mousePressed(()=> {
        ui = ui+"/";
    });
    this.bmin.mousePressed(()=> {
        ui = ui+"-";
    });
    this.bplus.mousePressed(()=> {
        ui = ui+"+";    
    });
    this.bo.mousePressed(()=> {
        ui = ui+"(";    
    });
    this.bc.mousePressed(()=> {
        ui = ui+")";    
    });
    this.bspace.mousePressed(()=> {    
        ui = ui.slice(0,-1);
    });
    this.input.value(ui);
    }

    display() {
        this.style();
        this.hmp();
        var pos = windowWidth/2-293+100;
        posY = windowHeight/2-293;
        this.input.position(/*windowWidth/2-180*/pos+10,posY+10/*windowWidth/2-650*/);
        this.b1.position(pos+10,posY+180);
        this.b2.position(pos+92,posY+180);
        this.b3.position(pos+174,posY+180);
        this.b4.position(pos+10,posY+260);
        this.b5.position(pos+92,posY+260);
        this.b6.position(pos+174,posY+260);
        this.b7.position(pos+10,posY+340);
        this.b8.position(pos+92,posY+340);
        this.b9.position(pos+174,posY+340);
        this.b0.position(pos+10,posY+420);
        this.bdot.position(pos+92,posY+420);
        this.bac.position(pos+10,posY+100);
        this.bmulti.position(pos+256,posY+340);
        this.bdiv.position(pos+256,posY+420);
        this.bmin.position(pos+256,posY+180);
        this.bplus.position(pos+256,posY+260);
        this.bequal.position(pos+174,posY+420);
        this.bspace.position(pos+92,posY+100);
        this.bo.position(pos+174,posY+100);
        this.bc.position(pos+256,posY+100);
    }
}