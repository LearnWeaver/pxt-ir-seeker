
//% weight=100 color=#00A654 icon="\uf11b" block="IR Seeker"
//% groups='["Inputs"]'
namespace BBR_IRSeeker {
	
    let irAddr = 0x08
  
    //% block
    //% group=Inputs
    export function direction(): number {
        if(initialized == false){
            init();
        }
        const data = pins.i2cReadBuffer(irAddr, 2, true);
        return data.getNumber(NumberFormat.Int8LE, 1);
    }
	
    //% block
    //% group=Inputs
    export function strength(): number {
        if(initialized == false){
            init();
        }
        const data = pins.i2cReadBuffer(irAddr, 2, true);
        return data[1];
    }

    
	
    let initialized = false;
    
    function init(): void {
        if (initialized) return;
        pins.i2cWriteNumber(irAddr, 0x01, NumberFormat.Int8LE)
        initialized = true;

    }


    

} 
