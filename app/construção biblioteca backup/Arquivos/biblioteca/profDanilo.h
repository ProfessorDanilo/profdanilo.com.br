/*


/*controles das portas digitais*/
void ligarDigital(int x)
{
   pinMode(x,OUTPUT);
   digitalWrite(x, HIGH);
}
void desligarDigital(int x)
{
   pinMode(x,OUTPUT);
   digitalWrite(x, LOW);
}

/*ler porta digital*/
int lerDigital(int x)
{
  pinMode(x, INPUT);
  return digitalRead(x);
}

/*ler porta analogica*/
int lerAnalogica(int x)
{
  return analogRead(x);
}

/*pwm*/
void pwm(int x, int y){
    pinMode(x, OUTPUT);
    analogWrite(x, y);
}

/*COMUNICACAO SERIAL*/
/*inicia comunicacao serial*/
int iniciaComunicacao()
{
  Serial.begin(9600);
}
int lerSerial()
{
   return Serial.read();
}

int lerNumeroSerial()
{
   return Serial.parseInt();
}


/*espera x (segundo, minuto, milissegundo, microssegundo)*/
int esperaSegundos(float x)
{
  delay(x*1000);
}
int esperaMinutos(float x)
{
  delay(x*1000/60);
}
int esperaMicroSegundos(float x)
{
  delayMicroseconds(x);
}
int esperaMiliSegundos(int x)
{
  delay(x);
}



/*mostrando no monitor pulando linha*/
void imprimirPL(int x)
{
   Serial.println(x);
}

void imprimirPL(String x)
{
   Serial.println(x);
}

void imprimirPL(float x)
{
   Serial.println(x);
}
void imprimirPL(double x)
{
   Serial.println(x);
}
void imprimirPL(char x)
{
   Serial.println(x);
}


/*mostrando no monitor sem pular lina*/
void imprimir(int x)
{
   Serial.print(x);
}

void imprimir(String x)
{
   Serial.print(x);
}

void imprimir(float x)
{
   Serial.print(x);
}
void imprimir(double x)
{
   Serial.print(x);
}
void imprimir(char x)
{
   Serial.print(x);
}



//aleatorio entre numeros
int aleatorioEntre(int min, int max)
{
   return random(min, max);

}
int aleatorioSemente(int x)
{
    randomSeed(analogRead(x));
}

