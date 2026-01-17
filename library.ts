/**
 * Functions to operate a Potmeter
 */
//% block="Pot"
//% groups=['Values']
//% weight=6 color=#ff6f00 icon="\uf0a9"
namespace rb0potmeter {

    function getPercentage(value: number): number{
        value = value > 1010 ? 1023 : value;
        value /= 1023;
        value = value > 0.99 ? 1.0 : value;
        value = value ** 0.54;
        value *= 100;
        return value;
    }
    
    /**
    * Initialize Pot
    * @param port Keyestudio port where the Pot is connected
    */
    //% blockId="rb0potmeter_simplecreate"
    //% block="Pot at port %port" 
    //% weight=90 color=100 blockGap=24
    //% port.defl=KeyestudioPort.P0
    export function rb0potmeter_simplecreate(port: KeyestudioPort) {
        let pin1 = rb0base.getPinFromKeyestudioPort(port);
        rb0base.enablePin(pin1);
    }

    /**
    * Initialize Potmeter
    * @param pin1 pin where the Pot is connected
    */
    //% blockId="rb0potmeter_advancedcreate"
    //% block="Pot at pin %pin2" 
    //% weight=90 color=100 blockGap=24 advanced=true
    //% pin1.defl=DigitalPin.P0
    export function rb0potmeter_advancedcreate(pin1: DigitalPin) {
        rb0base.enablePin(pin1);
    }

    /**
     * Read Pot value that is connected at port
     */
    //% blockId="rb0potmeter_simpleReadPot"
    //% block="pot value on %port"
    //% group="Values"
    //% weight=70
    export function readPotSimple(port: KeyestudioPort): number {
        let pin1 = rb0base.getPinFromKeyestudioPort(port);
        return getPercentage(pins.analogReadPin(pin1));
    }
    
     /**
     * Read Pot value that is connected at pin
     */
    //% blockId="rb0potmeter_advancedReadPot"
    //% block="pot value on %pin"
    //% group="Values"
    //% weight=70 advanced=true
    export function readPotAdvanced(pin: DigitalPin): number {
        return getPercentage(pins.analogReadPin(pin));        
    }

    /**
    * Read Pot real value that is connected at port
    */
    //% blockId="rb0potmeter_advancedReadPotRealValue"
    //% block="pot real value on %port"
    //% group="Values"
    //% weight=60
    export function readPotRealValueAdvanced(port: KeyestudioPort): number {
        let pin1 = rb0base.getPinFromKeyestudioPort(port);
        return pins.analogReadPin(pin1);
    }

}
