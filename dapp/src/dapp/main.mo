import Debug "mo:base/Debug";
actor DBank {
  // create variable currentValue
  var currentValue = 3000;

  // create constant id
  let id = "SKM909090";

  // create function topUp to increase currentValue
  public func topUp(amount : Nat) : async Nat {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
    return currentValue;
  };

  // create function withdraw to decrase currentValue
  public func withdraw(amount : Nat) : async Nat {
    let temp : Int = currentValue - amount;
    if (temp >= 0) {
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      Debug.print("Your account do not have enough balance!");
    };
    return currentValue;
  };

  public func getBalance() : async Nat {
    return currentValue;
  };

};
