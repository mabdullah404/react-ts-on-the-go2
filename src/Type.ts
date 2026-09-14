
export interface CountryType{
    name :{
        common :string ;
        official : string ;
    },
    ccn3:{
        ccn3: string
    },

    flags:{
        flags:{
            png:string ;
            alt:string ;
        }
    },
    capital:{
        capital:string;
    },
    currencies:{
        currencies:{
            ANG:{
                name:string;
                symbol : string;
            }
        }
    },
    population:{
        population:number ;
    }

}