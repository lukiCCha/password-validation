const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirmentList = document.querySelectorAll(".content ul li");

//არრაი იმეების რაც ჭირდება რა პაროლს ძლიერი როიყოს და რამე;
const requirments = [
  { regex: /.{8,}/, index: 0},//კაროჩე მინიმუმ 8 ასო და რამე როიყოს რა;
  { regex: /.[0-9]/, index: 1},//0 და 9მდე 1 რომელიმე მაინც რო დაწეროს;
  { regex: /.[a-z]/, index: 2},//ერთი პატარა ასო მაინც;
  { regex: /.[^A-Za-z0-9]/, index: 3},//რამე სპეციალური რო ჩაწეროს იმისაა ეს;
  { regex: /.[A-Z]/, index: 4},//ერტი დიდი ასო მაინც -_-;
];

passwordInput.addEventListener("keyup", (e) => {
  requirments.forEach(item => {
    //ეს ამოწმენს თუ ედრება რა იმ რეგექსებს;
    const isValid = item.regex.test(e.target.value);
    const requirmentItem = requirmentList[item.index]

    //კაროჩე ვინც ვერ გაიგეთ ეგი ცვლის აიქონებს როცაა შესრულებული მოთხოვნები;
    if(isValid){
      requirmentItem.firstElementChild.className = "fas fa-check";
      requirmentItem.classList.add("valid");
    }
    else{
      requirmentItem.firstElementChild.className = "fas fa-circle";
      requirmentItem.classList.remove("valid");
    }
  })
});

eyeIcon.addEventListener("click", () => {
  //ეს ცვლის იფუთ ტიპს პაროლიდან ტექსტამდე და პირიქით;
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  //ეს ცვლის თვალის აიქონს ხაზიანიდან უხაზომდე და პირიქით;
  eyeIcon.className = `fas fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});


