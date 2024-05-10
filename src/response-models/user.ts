export default class UserReponse {
  id: number;
  fistname: string;
  lastname: string;
  email: string;
  password: string;

  constructor(id: number, fistname: string, lastname: string, email: string, password: string) {
    this.id = id
    this.fistname = fistname
    this.lastname = lastname
    this.email = email
    this.password = password
  }

}