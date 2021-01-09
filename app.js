//**MOVIE RATING APP JTC*//

const moviesArray = [];

//SUBMIT FUNCTION
$("form").submit(function (e) {
  e.preventDefault();
  let title = $("input").eq(0).val();
  let rating = $("input").eq(1).val();
  let movie = {
    title: title,
    rating: rating,
  };
  moviesArray.push(movie);
  checkActive() === "abc" ? sortAbc() : sort123();
  fillTable();
  $("input").eq(0).val("");
  $("input").eq(1).val("");
});

//CHANGE SORT FUNCTION
$("#sort-container").on("click", "p", function () {
  $("p").toggleClass("active");
  checkActive() === "abc" ? sortAbc() : sort123();
  fillTable();
});

//CHECK ACTIVE SORT FUNCTION
const checkActive = () => {
  if ($("#abc").hasClass("active")) {
    return "abc";
  } else if ($("#123").hasClass("active")) {
    return "123";
  }
};

//SORT ABC FUNCTION
const sortAbc = () => {
  moviesArray.sort(function (a, b) {
    var nameA = a.title.toLowerCase(),
      nameB = b.title.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
};

//SORT 123 FUNCTION
const sort123 = () => {
  moviesArray.sort(function (a, b) {
    return b.rating - a.rating;
  });
};

//FILL FUNCTION
const fillTable = () => {
  resetTable();
  for (currentMovie of moviesArray) {
    $("table").append(
      `'<tr><td>${currentMovie.title}</td><td>${currentMovie.rating}</td><td><i class="fas fa-trash-alt"></i></td></tr>'`
    );
  }
};

//RESET TABLE
const resetTable = () => {
  $("table").html("<tr><th>Title</th><th>Rating</th><th></th></tr>");
};

//DELETE
$("table").on("click", "i", function (event) {
  let targetElement =
    event.target.parentElement.parentElement.children[0].innerText;
  let indexToRemove = moviesArray.findIndex(
    (movie) => movie.title === targetElement
  );
  moviesArray.splice(indexToRemove, 1);
  $(this).closest("tr").remove();
});
