interface Tax {
  calculate(valueBase: number): number
}

class ICMS implements Tax {
  public calculate(valueBase: number): number {
    return valueBase * 0.2 
  }
}

class IOF implements Tax {
  public calculate(valueBase: number): number {
    return valueBase * 0.3 
  }
}

class ISS implements Tax {
  public calculate(valueBase: number): number {
    return valueBase * 0.5
  }
}

class ISSQN implements Tax {
  public calculate(valueBase: number): number {
    return valueBase * 0.7
  }
}

class TaxCalculator {
  public calculate(tax: Tax, valueBase: number): number {
    return tax.calculate(valueBase)
  }
}

class Main {
  constructor() {}

  public main(): void {
    const calculator = new TaxCalculator()

    console.log('\nICMS: ', calculator.calculate(new ICMS(), 100))
    console.log('IOF: ', calculator.calculate(new IOF(), 100))
    console.log('ISS: ', calculator.calculate(new ISS(), 100))
    console.log('ISSQN: ', calculator.calculate(new ISSQN(), 100))    
  }
}

new Main().main()
