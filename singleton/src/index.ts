class Connection {
  private id: number

  constructor() {
    this.id = Math.random()
  }

  public runSQL() {
    console.log('RUNNING SQL: ', this.id)
  }
}

class Database {
  public static connection:Connection = null

  public static getConnection() {
    if (!this.connection) {
      this.connection = new Connection()
    }
    return this.connection
  }
}

class UserDao {
  public searchAll() {
    console.log('SEARCH ALL')
    Database.getConnection().runSQL()
  }

  public save() {
    console.log('SAVING')
    Database.getConnection().runSQL()
  }
}

class Main {
  constructor() {}

  public main(): void {
    const dao = new UserDao()

    dao.searchAll()
    dao.save()
  }
}

new Main().main()
