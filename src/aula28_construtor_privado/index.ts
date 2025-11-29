//Singleton GoF | Factory Method = GoF
export class DataBase {
  private static dataBase: DataBase;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) { }

  public connect(): void {
    console.log(`conexão ao banco de dados ${this.host}, user ${this.user}`);
  }

  static getDataBase(host: string, user: string, password: string): DataBase {

    if (this.dataBase) return DataBase.dataBase;

    DataBase.dataBase = new DataBase(host,user,password);
    return DataBase.dataBase;
  }
}


const db1 = DataBase.getDataBase("hoste.com.br", "PortalP2", "kleber araujo");
