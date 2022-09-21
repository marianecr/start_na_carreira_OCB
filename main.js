function calculateTip(event) {
  event.preventDefault();

  let bill = document.getElementById("bill").value;
  let service_quality = document.getElementById("service_quality").value;
  let number_of_people = document.getElementById("people").value;

  if ((bill == "") | (service_quality == 0)) {
    alert("É necessário preencher todos os campos.");
    return;
  }

  if ((number_of_people == "") | (number_of_people <= 1)) {
    number_of_people = 1;
    document.getElementById("eachPerson").style.display = "none";
  } else {
    document.getElementById("eachPerson").style.display = "block";
  }

  let total = ((bill * service_quality) / number_of_people).toFixed(2);

  tip.innerHTML = total;
  document.getElementById("tipTotal").style.display = "block";
}

document.getElementById("tipTotal").style.display = "none";
document.getElementById("eachPerson").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit", calculateTip);
