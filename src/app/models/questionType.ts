export enum Questiontype{
   text ="text",
   checkeckBox ="checkbox" , 
   paragraph = "paragraph",
   select = "select",
   number  = "number",
   date = "date", 
}

export interface Question{
    titre : string ,
    description: string ,
    type : Questiontype
}

 