import 'package:flutter/material.dart';
import '../../widgets/widgets_auth.dart';

class RegisterScreen extends StatefulWidget {
  const RegisterScreen({super.key});

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  bool _isPasswordVisible = false;

  void _togglePasswordVisibility() {
    setState(() {
      _isPasswordVisible = !_isPasswordVisible;
    });
  }

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

              // Titulo
              const Text(
                "Unetenos,\nTe protegemos!",
                textAlign: TextAlign.left,
                style: TextStyle(
                  fontSize: 32,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                  fontFamily: 'Segoe UI',
                  height: 1.2,
                ),
              ),

              const SizedBox(height: 40),

              // Campos de entrada usando el widget reutilizable
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

              const SizedBox(height: 10),

              buildInputField(
                "assets/icons/lock.png",
                "Contraseña",
                isPassword: true,
                isPasswordVisible: _isPasswordVisible,
                onTogglePassword: _togglePasswordVisibility,
              ),

              const SizedBox(height: 50),

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
                    "Registrarse",
                    style: TextStyle(
                      color: Colors.black,
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ),

              const SizedBox(height: 10),

              const Center(
                child: Text(
                  "registrarse con",
                  style: TextStyle(color: Colors.white70, fontSize: 14),
                ),
              ),

              const SizedBox(height: 25),

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

              Center(
                child: RichText(
                  text: TextSpan(
                    text: "¿Ya tienes una cuenta? ",
                    style: const TextStyle(color: Colors.white70, fontSize: 14),
                    children: [
                      WidgetSpan(
                        child: GestureDetector(
                          onTap: () {},
                          child: const Text(
                            " Iniciar Sesión",
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
