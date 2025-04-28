// Foydalanuvchidan ismni so'rash
let ism = prompt("Ismingizni kiriting:");

// Ismni kichik harflarga o'tkazamiz
let kichikIsm = ism.toLowerCase();

// Foydalanuvchidan tekshiriladigan harfni so'rash
let harf = prompt("Ismingizda tekshiradigan harfni kiriting:");

// Harfni ham kichik harfga o'tkazamiz
let kichikHarf = harf.toLowerCase();

// If-else orqali tekshirish
if (kichikIsm.includes(kichikHarf)) {
    alert("Ha, ismingiz ichida bu harf ishtirok etgan!");
} else {
    alert("Yo'q, ismingiz ichida bu harf ishtirok etmagan!");
}