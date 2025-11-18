import java.util.ArrayList;
import java.util.Scanner;

// Book class
class Book {
    private int id;
    private String title;
    private String author;
    private boolean isAvailable;

    public Book(int id, String title, String author) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void borrowBook() {
        if (isAvailable) {
            isAvailable = false;
            System.out.println("✅ You borrowed: " + title);
        } else {
            System.out.println("❌ Sorry, " + title + " is already borrowed.");
        }
    }

    public void returnBook() {
        if (!isAvailable) {
            isAvailable = true;
            System.out.println("✅ You returned: " + title);
        } else {
            System.out.println("⚠️ This book was not borrowed.");
        }
    }

    @Override
    public String toString() {
        return id + ". " + title + " by " + author + (isAvailable ? " (Available)" : " (Borrowed)");
    }
}

// Library class
class Library {
    private ArrayList<Book> books = new ArrayList<>();

    public void addBook(Book book) {
        books.add(book);
        System.out.println("✅ Book added: " + book.getTitle());
    }

    public void showBooks() {
        if (books.isEmpty()) {
            System.out.println("📭 No books in the library.");
        } else {
            System.out.println("📚 Library Books:");
            for (Book b : books) {
                System.out.println(b);
            }
        }
    }

    public Book findBookById(int id) {
        for (Book b : books) {
            if (b.getId() == id) {
                return b;
            }
        }
        return null;
    }
}

// Main System
public class LibraryManagementSystem {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Library library = new Library();

        // Sample books
        library.addBook(new Book(1, "Java Programming", "James Gosling"));
        library.addBook(new Book(2, "Effective Java", "Joshua Bloch"));
        library.addBook(new Book(3, "Clean Code", "Robert C. Martin"));

        while (true) {
            System.out.println("\n=== Library Menu ===");
            System.out.println("1. Show all books");
            System.out.println("2. Add a book");
            System.out.println("3. Borrow a book");
            System.out.println("4. Return a book");
            System.out.println("5. Exit");
            System.out.print("Enter choice: ");
            int choice = sc.nextInt();
            sc.nextLine(); // consume newline

            switch (choice) {
                case 1:
                    library.showBooks();
                    break;
                case 2:
                    System.out.print("Enter book ID: ");
                    int id = sc.nextInt();
                    sc.nextLine(); // consume newline
                    System.out.print("Enter book title: ");
                    String title = sc.nextLine();
                    System.out.print("Enter author name: ");
                    String author = sc.nextLine();
                    library.addBook(new Book(id, title, author));
                    break;
                case 3:
                    System.out.print("Enter book ID to borrow: ");
                    int borrowId = sc.nextInt();
                    Book borrowBook = library.findBookById(borrowId);
                    if (borrowBook != null) {
                        borrowBook.borrowBook();
                    } else {
                        System.out.println("❌ Book not found.");
                    }
                    break;
                case 4:
                    System.out.print("Enter book ID to return: ");
                    int returnId = sc.nextInt();
                    Book returnBook = library.findBookById(returnId);
                    if (returnBook != null) {
                        returnBook.returnBook();
                    } else {
                        System.out.println("❌ Book not found.");
                    }
                    break;
                case 5:
                    System.out.println("👋 Exiting... Thank you!");
                    sc.close();
                    return;
                default:
                    System.out.println("⚠️ Invalid choice! Try again.");
            }
        }
    }
}
