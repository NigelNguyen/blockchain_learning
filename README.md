# Motoko Notes

Github: 

# Install and Setup Motoko

1. Install dfx CLI
2. Type command to create new project

```bash
dfx new project_name
```

1. Inside select menu, choose “Motoko”
2. Select front end framework
3. Go to project folder → type command to start backend

```bash
dfx start
```

1. Then open other terminal, and type command after each time you change code to refresh and re-deploy motoko

```bash
dfx deploy
```

# Basic

- var: create variable

```jsx
// Import Debug from mokoto base
import Debug "mo:base/Debug";

actor DBank{
  var currentValue = 3000;
  currentValue := 300;
  Debug.print(debug_show(currentValue))
};
```

- let: create constant, syntax as var.
- data types:
    - Nat: natural number
- fucntion:

```jsx
import Debug "mo:base/Debug";
actor DBank {
  // create variable currentValue 
  var currentValue = 3000;
  currentValue := 300;

  // create constant id
  let id = "SKM909090";
  
  // create function topUp to increase currentValue
  func topUp(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  topUp();
};

```

The function inside actor like that called private function and cannot be call outside the actor itself.

To call function outside actor, change it to public function.

```jsx
public func topUp() {
    currentValue += 1;
    Debug.print(debug_show(currentValue));
};
```

- Simple complete code:

```jsx
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

```