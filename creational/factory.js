class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandartMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standart: StandartMembership,
    premiun: PremiumMembership,
  };
}
