----inheritance------ > it is a mechanishm in java by which one class is allowed to inherit the features of another class

class Dog extends Animal{

}

Types of inheritance ---
1.Single inheritance -- one parent one child 
2.Multi Level Inheritance -- one parent two child 
3.Hierarchical inheritance --- one parent has multiple child 
4.Multiple inheritance --- one child has multiple parent using interfaces we can do not using calss 
5.Hybrid inheritance --- combination of parent and child . Multiple involvement is not allowed
6.Cyclic inheritance --- forms cycle 



SuperKeyword -- super keyword is used to refer immediate parent keyword
super() used to call parent class constructor from inside child class constructor


--Method overriding--

--Encapulasation--
Wrapping of data memebers(variables) and member (methods) in a single unit


private vaiable cannot modiied after the scope in any scope local and global scope it cannot be accessed it can be accessses through getter or setter



--Abstarction--
Showing feature and hiding internal deatils(implementation)
100% abstarction go for =>Interfaces abstarcation
abstract classes 0% to 100 % =>Abstract classes


--abstract method--
function has name 
public void class(); =>This method has no body so it will be abstract method 
use abstract keyword
abstract public void call();

--abstarct class can not be instantined object can not be created
 --abstarct-- public class MyClass{
    public void cal()
    {
        System.out.println("calacalating method");
    }

    abstract public void launchRocket();
}

//abstract class ka object nahi baba shakte
class start{
public static void main(String[] args){
     My class myClass = new MyClass() => this is not possible in this
}
}

we have to amke all classes as abstract




interfaces 
public interface Shape{
     int i = 34; // will by default public static final

     void calaculateArea(); will by default public abstarct

}

