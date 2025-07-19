package com.library.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.model.Book;
import com.library.model.Transaction;
import com.library.model.User;
import com.library.repository.BookRepository;
import com.library.repository.TransactionRepository;
import com.library.repository.UserRepository;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BookRepository bookRepository;

    public String borrowBook(Long userId, Long bookId) {
        Optional<User> user = userRepository.findById(userId);
        Optional<Book> book = bookRepository.findById(bookId);

        if (user.isEmpty() || book.isEmpty()) return "❌ Invalid User or Book ID.";
        if (!book.get().isAvailable()) return "❌ Book not available.";

        Transaction transaction = new Transaction();
        transaction.setUser(user.get());
        transaction.setBook(book.get());
        transaction.setBorrowDate(LocalDateTime.now());
        transaction.setStatus("BORROWED");

        book.get().setAvailable(false);
        bookRepository.save(book.get());
        transactionRepository.save(transaction);

        return "✅ Book Borrowed Successfully.";
    }

    public String returnBookByBookAndUser(Long userId, Long bookId) {
        Optional<Transaction> transaction = transactionRepository
                .findByBookIdAndUserIdAndStatus(bookId, userId, "BORROWED");

        if (transaction.isEmpty())
            return "❌ No active borrowed transaction found for this book and user.";

        Transaction t = transaction.get();
        t.setReturnDate(LocalDateTime.now());
        t.setStatus("RETURNED");

        Book book = t.getBook();
        book.setAvailable(true);

        bookRepository.save(book);
        transactionRepository.save(t);

        return "✅ Book Returned Successfully.";
    }

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }
}
