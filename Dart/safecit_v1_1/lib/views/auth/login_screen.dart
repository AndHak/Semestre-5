import 'package:flutter/material.dart';
import '../../widgets/widgets_auth.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  bool _isPasswordVisible = false; // Estado para visibilidad de contraseña

  void _togglePasswordVisibility() {
    setState(() {
      _isPasswordVisible = !_isPasswordVisible;
    });
  } // Estado para visibilidad de contraseña

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF191820),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.only(left: 20, right: 20, top: 30),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Flecha de retroceso
              Transform.translate(
                offset: const Offset(
                  -10,
                  0,
                ), // Mueve el botón 10 píxeles a la izquierda
                child: IconButton(
                  padding: EdgeInsets.zero,
                  constraints: const BoxConstraints(),
                  icon: Image.asset("assets/icons/arrow_back.png", width: 24),
                  onPressed: () => Navigator.pop(context),
                ),
              ),
              const SizedBox(height: 10),

              // Título
              const Text(
                "Hola,\nBienvenido a\nSafeCit",
                style: TextStyle(
                  fontSize: 32,
                  fontWeight: FontWeight.bold, // Forma correcta en Flutter
                  color: Colors.white,
                  fontFamily: 'Segoe UI',
                  height: 1.2,
                ),
              ),

              const SizedBox(height: 40),

              // Campos de entrada usando el Widget reutilizable
              buildInputField(
                "assets/icons/email.png",
                "Email",
                isPassword: false,
                isPasswordVisible: false,
                onTogglePassword: () {},
              ),
              const SizedBox(height: 10),
              buildInputField(
                "assets/icons/lock.png",
                "Contraseña",
                isPassword: true,
                isPasswordVisible: _isPasswordVisible,
                onTogglePassword: _togglePasswordVisibility,
              ),

              // ¿Olvidaste tu contraseña?
              Transform.translate(
                offset: Offset(0, -8), // Lo sube 8 píxeles
                child: Align(
                  alignment: Alignment.centerRight,
                  child: TextButton(
                    onPressed: () {},
                    style: TextButton.styleFrom(padding: EdgeInsets.zero),
                    child: const Text(
                      "¿Olvidó su contraseña?",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 12,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
              ),

              const SizedBox(height: 25),

              // Botón de Iniciar Sesión
              SizedBox(
                width: double.infinity,
                height: 70,
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(35),
                    ),
                  ),
                  onPressed: () {},
                  child: const Text(
                    "Iniciar sesión",
                    style: TextStyle(
                      color: Colors.black,
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ),

              const SizedBox(height: 10),

              // Texto "o continuar con"
              const Center(
                child: Text(
                  "o continuar con",
                  style: TextStyle(color: Colors.white70, fontSize: 14),
                ),
              ),

              const SizedBox(height: 25),

              // Botones de redes sociales
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  buildSocialButton("assets/icons/google.png"),
                  const SizedBox(width: 15),
                  buildSocialButton("assets/icons/apple.png"),
                  const SizedBox(width: 15),
                  buildSocialButton("assets/icons/facebook.png"),
                ],
              ),

              const SizedBox(height: 25),

              // ¿No tienes cuenta? Regístrate
              Center(
                child: RichText(
                  text: TextSpan(
                    text: "¿No tienes una cuenta? ",
                    style: const TextStyle(color: Colors.white70, fontSize: 14),
                    children: [
                      WidgetSpan(
                        child: GestureDetector(
                          onTap: () {
                            // Navegar a la pantalla de registro
                          },
                          child: const Text(
                            " Regístrate",
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 14,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 50),
            ],
          ),
        ),
      ),
    );
  }
}
