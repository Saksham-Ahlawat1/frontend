interface printable {
    void print();
}
interface showable {
    void show();
}
class A implements printable, showable {

    public void print() {
        System.out.println("printing the interface");
    }
    public void show() {
        System.out.println("showing the print");
    }
}
    

