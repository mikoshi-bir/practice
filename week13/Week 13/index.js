document.getElementById("calculateBtn").addEventListener("click", function() {
    const birthdayInput = document.getElementById("birthday");
    const errorMessage = document.getElementById("errorMessage");
    const result = document.getElementById("result");
  
    const birthdayDate = new Date(birthdayInput.value);
    const today = new Date();
  
    if (isNaN(birthdayDate)) {
      errorMessage.textContent = "Пожалуйста, введите дату рождения.";
      return;
    }
  
    errorMessage.textContent = "";
  
    let nextBirthday = new Date(today.getFullYear(), birthdayDate.getMonth(), birthdayDate.getDate());
    if (today > nextBirthday) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
  
    const timeDiff = Math.abs(nextBirthday.getTime() - today.getTime());
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
    let daysWord = "дней";
    if (daysLeft % 10 === 1 && daysLeft % 100 !== 11) {
      daysWord = "день";
    } else if (
      (daysLeft % 10 === 2 || daysLeft % 10 === 3 || daysLeft % 10 === 4) &&
      (daysLeft % 100 !== 12 && daysLeft % 100 !== 13 && daysLeft % 100 !== 14)
    ) {
      daysWord = "дня";
    }
  
    result.textContent = `До вашего следующего дня рождения осталось ${daysLeft} ${daysWord}.`;
  });
    