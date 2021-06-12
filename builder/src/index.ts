interface IBuilder<T> {
  builds(): T 
}

class Product {
  constructor(
    private description: string,
    private value: number
  ) {}
}

class Invoice {
  constructor(
    private of: string,
    private to: string,
    private bank: string,
    private rate: number,
    private price: number,
    private date: Date,
    private typePayment: string,
    private products: Product[]
  ) {}
}

class InvoiceBuilder implements IBuilder<Invoice> {
  private bank: string
  private rate: number = 0
  private price: number = 0
  private date: Date
  private typePayment: string
  private products: Product[] = []

  constructor(
    private of: string,
    private to: string,
  ) {}

  public builds(): Invoice {
    return new Invoice(
      this.of,
      this.to,
      this.bank,
      this.rate,
      this.price,
      this.date,
      this.typePayment,
      this.products
    )
  }

  public forToday(): InvoiceBuilder {
    this.date = new Date()
    return this
  }

  public forBankNubank(): InvoiceBuilder {
    this.bank = 'Nubank'
    return this
  }
  public paymentWithCreditCard(): InvoiceBuilder {
    this.typePayment = 'Credit Cart'
    return this
  }

  public paymentWithBankSlip(): InvoiceBuilder {
    this.typePayment = 'Bank Slip'
    return this
  }

  public withProduct(product: Product): InvoiceBuilder {
    this.products.push(product)
    this.price += product.value
    this.rate += product.value * 0.05
    return this
  }
}

class Main {
  constructor() {}

  public main(): void {
    const firstInvoice = new InvoiceBuilder('Nelson', 'Wenner')
      .forToday()
      .forBankNubank()
      .paymentWithCreditCard()
      .paymentWithBankSlip()
      .withProduct(new Product('Notebook', 1000))
      .withProduct(new Product('HeadPhone', 500))
      .builds()

    console.log('To: ', firstInvoice.to)
    console.log('Price: ', firstInvoice.price)
    console.log('Rate: ', firstInvoice.rate)
    firstInvoice.products.forEach((p, i) => console.log(`Product ${ i+1 }`, p.description))
  }
}

new Main().main()
