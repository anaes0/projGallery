function donate() {
        let name = prompt("What is your name?");
        let phone = prompt("What is your phone number?");
        let age = prompt("How old are you?");
        if (
          name !== null &&
          name !== "" &&
          name !== undefined &&
          phone !== null &&
          phone !== "" &&
          phone !== undefined &&
          age !== null &&
          age !== "" &&
          age !== undefined
        ) {
          if (age >= 18) {
            alert(
              "Thank you, " +
                name +
                " 🌺 We'll call you shortly at " +
                phone +
                " to discuss your donation!"
            );
          } else {
            alert("Sorry, " + name + " you cannot donate. Minimum age is 18.");
          }
        } else {
          alert("Please, try to type some text. ");
        }
      }

      let donateButton = document.querySelector(".donate-button");
      donateButton.addEventListener("click", donate);

      function help() {
        let name = prompt("What is your name?");
        let email = prompt("What is your email address?");
        let difference = prompt("Are you ready to make a difference 🐾 ?");
        difference = difference.toLocaleLowerCase().trim();
        if (
          name !== null &&
          name !== "" &&
          name !== undefined &&
          email !== null &&
          email !== "" &&
          email !== undefined &&
          difference !== null &&
          difference !== "" &&
          difference !== undefined
        )
          if (difference === "yes") {
            alert(
              "Great, " +
                name +
                "! You will receive an email shortly to " +
                email +
                ". Your help is extremely valuable 🌺"
            );
          } else {
            alert(
              "That's okey, " +
                name +
                ". Contact us in case you change your mind."
            );
          }
        else {
          alert("Please, try to type some text.");
        }
      }

      let helpButton = document.querySelector(".help-button");
      helpButton.addEventListener("click", help);