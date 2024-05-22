import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";
actor DBank{


  stable var currentValue :Float=300;
  // currentValue:=300;
 
  stable var startTime=Time.now();
  // startTime:=Time.now();
 


  public func topUp(amount:Float){
    currentValue+=amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount:Float){
    currentValue-=amount;
    Debug.print(debug_show(currentValue));

  };

  public query func checkBalance():async Float{
    return currentValue;
  };

  public func compound(){
    let currentTime=Time.now();
    let timElapsedNS=currentTime-startTime;
    let timElapsed=timElapsedNS/1000000000;
    currentValue:=currentValue*(1.01**Float.fromInt(timElapsed));
    startTime:=currentTime;
  };
 
}