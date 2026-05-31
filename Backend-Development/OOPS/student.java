class student{

    //data members:instance variables
    int studentId;
    String studentName;
    String studentCity;

    public student(){
        System.out.println("creating objects");
    }

    public student(int st){
        System.out.println("parametrized constructor");
    }

    //Behaviour:member methods : methods: functions

    public void study(){
        System.out.println(studentName + " is Studying");
    }

    public void showFullDetails(){
        System.out.println("My name is " + studentName);
        System.out.println("My id is " + studentId);
        System.out.println("I am from " + studentCity);
    }
}