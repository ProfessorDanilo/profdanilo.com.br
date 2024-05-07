/*
 * UTILIZEI PARTE DO CÓDIGO COM COMENTÁRIOS MANTIDOS
  LiquidCrystal Library - Hello World

 Demonstrates the use a 16x2 LCD display.  The LiquidCrystal
 library works with all LCD displays that are compatible with the
 Hitachi HD44780 driver. There are many of them out there, and you
 can usually tell them by the 16-pin interface.

 This sketch prints "Hello World!" to the LCD
 and shows the time.

  The circuit:
 * LCD RS pin to digital pin 12
 * LCD Enable pin to digital pin 11
 * LCD D4 pin to digital pin 5
 * LCD D5 pin to digital pin 4
 * LCD D6 pin to digital pin 3
 * LCD D7 pin to digital pin 2
 * LCD R/W pin to ground
 * LCD VSS pin to ground
 * LCD VCC pin to 5V
 * 10K resistor:
 * ends to +5V and ground
 * wiper to LCD VO pin (pin 3)

 Library originally added 18 Apr 2008
 by David A. Mellis
 library modified 5 Jul 2009
 by Limor Fried (https://www.ladyada.net)
 example added 9 Jul 2009
 by Tom Igoe
 modified 22 Nov 2010
 by Tom Igoe
 modified 7 Nov 2016
 by Arturo Guadalupi

 This example code is in the public domain.

 https://www.arduino.cc/en/Tutorial/LiquidCrystalHelloWorld


*ADICIONEI SENSOR DHT
*PORTA A0
*/

// include the library code:
#include <LiquidCrystal.h>
#include "DHT.h"
//#include "MQ7.h"
//#define A_PIN 1   //tentei usar a biblioteca mas desisti
//#define VOLTAGE 5
// init MQ7 device
//MQ7 mq7(A_PIN, VOLTAGE);
/*entã resolvi considerar 0v como o mínimo (20ppm) segundo
 * datasheet
 * enquanto que o máximo 5V ou entrada analógica de 1023
 * como 2000 ppm que é o máximo que o MQ7 lê
 * https://www.sparkfun.com/datasheets/Sensors/Biometric/MQ-7.pdf
 */
// Ligações do Arduino
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

DHT dht(A0, DHT11); //Definindo porta e modelo do sensor



void setup() {

  pinMode(A0, INPUT);//MQ7
  pinMode(8, OUTPUT);//para soar o alarme
  
  lcd.begin(16, 2); // Aqui informo que são 16 caracteres e 2 linhas
  lcd.setCursor(0, 0); // To colocando para exibir a frase na coluna 0 e linha 0 (opcional)
  lcd.print("Bem vindo ao lab"); // Escrevo "Arduino"
  lcd.setCursor(0, 1); // E agora to colocando para exibir a frase na coluna 0 e linha 1
  lcd.print("de fisica"); // E escrevo "Display LCD"

 
  //iniciando serial para testar comunicação
  Serial.begin(9600);
  Serial.println("DHTxx test!");
  dht.begin();
/*//exclua este comentário para usar a biblioteca do MQ7 
  Serial.println("");   // blank new line

  Serial.println("Calibrating MQ7");
  mq7.calibrate();    // calculates R0
  Serial.println("Calibration done!");
  */
  
  delay(3000);
}


void loop() {
  

  // A leitura da temperatura e umidade pode levar 250ms!
  // O atraso do sensor pode chegar a 2 segundos.
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  // testa se retorno é valido, caso contrário algo está errado.
  if (isnan(t) || isnan(h)) 
  {
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("Failed to read");
    lcd.setCursor(0,1);
    lcd.print("from DHT!");
  } 
  else
  {/*
    Serial.print("PPM = "); Serial.println(mq7.readPpm());

    Serial.println("");   // blank new line
  */
    //exibindo no lcd
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("Umidade:");
    lcd.setCursor(0,1);
    lcd.print(h);
    lcd.setCursor(6,1);
    lcd.print("por cento");
    delay(3000);
    //printando no serial monitor
    Serial.print("Umidade: ");
    Serial.print(h);
    Serial.print(" %t");
    //exibindo no lcd
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("Temperatura:");
    lcd.setCursor(0,1);
    lcd.print(t);
    lcd.setCursor(6,1);
    lcd.print("*C");
    delay(3000);
    //printando no serial monitor
    Serial.print("Temperatura: ");
    Serial.print(t);
    Serial.println(" *C");}
    //exibindo no lcd
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("Concent. de CO:");
    lcd.setCursor(0,1);
    int conc=map(analogRead(A1),0,1023,20,2000);
    lcd.print(conc);//concentração em ppm de CO
    lcd.setCursor(7,1);
    lcd.print("ppm");
    delay(3000);
    if(conc<450){
        lcd.clear();
        lcd.setCursor(0,0);
        lcd.print("Concentracao");
        lcd.setCursor(0,1);
        lcd.print("normal");
        delay(3000);      
    }
    if(conc>=450&conc<700){
        lcd.clear();
        lcd.setCursor(0,0);
        lcd.print("Concent. alta");
        lcd.setCursor(0,1);
        lcd.print("mas aceitavel");
        delay(3000);     
    }
    if(conc>=700&conc<1000){
        lcd.clear();
        lcd.setCursor(0,0);
        lcd.print("Concent. alta");
        lcd.setCursor(0,1);
        lcd.print("MAXIMO TOLERAVEL");
        delay(3000);     
    }
    if(conc>=1000){
        while(conc>=1000){
          lcd.clear();
          lcd.setCursor(0,0);
          lcd.print("Concent. MUITO");
          lcd.setCursor(0,1);
          lcd.print("ALTA EVACUE AREA");
          int conc=map(analogRead(A1),0,1023,20,2000);
          tone(8, 440, 500);
          tone(8, 494, 500);
          tone(8, 523, 500);
          tone(8, 577, 500);
          tone(8, 620, 500);
          lcd.clear();
          lcd.setCursor(0,0);
          lcd.print("    ATENCAO!!! ");
          delay(500);
          if(conc<900){break;}
        }
        }
        delay(3000);     
    
    
      

    
}
