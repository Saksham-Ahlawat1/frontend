interface A {
    void print();
    void show();
}
interface B {

}
interface C extends A, B {

}
class Demo implements A, B {
    public void print() {
        System.out.println("print method");
    }
    public void show() {
        System.out.println("show method");
    }
    public static void main(String[] args) {
        A obj = new Demo();
        obj.print();
        obj.show();
    }
}
    


