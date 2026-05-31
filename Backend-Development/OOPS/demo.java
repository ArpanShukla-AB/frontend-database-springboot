public class demo{
    public static void main(String[] args) {
        student st1;
        st1 = new student();

        st1.studentName = "RAM";
        st1.studentId = 101;
        st1.studentCity = "Delhi";

    st1.study();
    st1.showFullDetails();


    student st2 = new student();
    st2.studentName = "Shyam";
    st2.studentId = 102;
    st2.studentCity = "Mumbai";

    st2.study();
    st2.showFullDetails();

    }
}