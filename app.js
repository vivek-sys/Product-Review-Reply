// DOM Elements
const productLinkInput = document.getElementById("product-link");
const ratingInput = document.getElementById("rating");
const feedbackInput = document.getElementById("feedback");
const submitBtn = document.getElementById("submit-btn");
const reviewDisplay = document.getElementById("review-display");
const replyDisplay = document.getElementById("reply-display");

// Function to handle review submission
function handleReviewSubmission() {
    const productLink = productLinkInput.value.trim();
    const rating = parseInt(ratingInput.value);
    const feedback = feedbackInput.value.trim();

    // Validate product link, rating, and feedback
    if (!productLink) {
        alert("Please provide a product link.");
        return;
    }
    if (!rating || rating < 1 || rating > 5 || feedback === "") {
        alert("Please provide a valid rating (1-5) and feedback.");
        return;
    }

    // Display the review
    const reviewOutput = `Fetching review in Yoshops.com website...\n\nProduct Link: ${productLink}\nRating: ${rating}/5 - "${feedback}"`;
    reviewDisplay.textContent = reviewOutput;

    // Generate a reply based on the rating
    let replyMessage = "";
    if (rating >= 4) {
        replyMessage = "Thank you for your positive feedback! We're glad you enjoyed the product.";
    } else if (rating === 3) {
        replyMessage = "Thank you for your feedback! We will work on improving our product.";
    } else {
        replyMessage = "We're sorry to hear about your experience. Please contact us for support.";
    }

    // Display the reply
    replyDisplay.textContent = replyMessage;

    // Clear the input fields
    productLinkInput.value = "";
    ratingInput.value = "";
    feedbackInput.value = "";
}

// Event Listener for the Submit Button
submitBtn.addEventListener("click", handleReviewSubmission);
