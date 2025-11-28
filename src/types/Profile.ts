export type User = {
    id: string;
    name: string;
    email?: string;
    phoneNumber?:string;
    role?:"USER"|"ADMIN"
    createdAt?:string;
  }


export type ProfileResponse = {
    profile : User;
    loanStats:{
        borrowed:number;
        late:number;
        returned:number;
        total:number;
    },
    reviewsCount:number;
}