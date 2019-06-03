export class User {
    constructor(
        public firstname: string, 
        public lastname: string, 
        public gender: string, 
        public username: string,
        public email: string,
        public birthday: string,
        public password?: string
        ) {}
}