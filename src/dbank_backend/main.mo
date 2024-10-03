import Time "mo:base/Time";
import Float "mo:base/Float";
import Debug "mo:base/Debug";
actor dbank{
  var currValue:Float = 300;
  currValue := 100;

  stable var start_time = Time.now();
  start_time := Time.now();

  public func topup(amount: Float){
    currValue += amount;
  };

  public func withdrow(amount:Float){
     var tp = amount;
     if(tp > 0){
      currValue -= amount;
     }else{
      Debug.print("Amount is not be zero or negative");
     }
  };

  public func compound(){
     let currentTime = Time.now();
    let timeElapsedNS = currentTime - start_time;
    let timeElapsedS = timeElapsedNS / 1000000000;
    currValue := currValue * (1.01 ** Float.fromInt(timeElapsedS));
    start_time := currentTime;
  };

  public query func checkbalance(): async Float{
    return currValue;
  };

  public func reset(){
    currValue := 0;
  }

}