import {compatibleCore} from "../misc.js";

export class pf1e {
    constructor(){
        
    }

    getItemTypes() {
        types = [
            {value:'weapon', name:'Weapons'},
            {value:'equipment', name:'Armor/Equipment'},
            {value:'consumable', name:'Consumables'},
            {value:'gear', name:'Gear'},
            {value:'ammo', name:'Ammunition'},
            {value:'misc', name:'Miscellaneous'},
            {value:'tradeGoods', name:'Trade Goods'},
            {value:'container', name:'Containers'}
        ]
        return types;
    }
}

