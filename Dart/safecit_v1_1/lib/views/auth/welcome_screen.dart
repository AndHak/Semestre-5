import 'package:flutter/material.dart';
import './login_screen.dart';
import './register_screen.dart';

class WelcomeScreen extends StatefulWidget {
  const WelcomeScreen({super.key});

  @override
  State<WelcomeScreen> createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen> {
  bool isRegisterSelected = false;

  void _navigateAfterAnimation(bool register) {
    setState(() {
      isRegisterSelected = register; // Activa la animación
    });

    Future.delayed(const Duration(milliseconds: 250), () {
      if (!mounted) return; // Evita errores si el widget se desmonta

      Navigator.push(
        context,
        PageRouteBuilder(
          transitionDuration: const Duration(
            milliseconds: 250,
          ), // Tiempo de animación
          pageBuilder: (context, animation, secondaryAnimation) {
            return register ? const RegisterScreen() : const LoginScreen();
          },
          transitionsBuilder: (context, animation, secondaryAnimation, child) {
            return FadeTransition(
              opacity: CurvedAnimation(
                parent: animation,
                curve: Curves.easeOut, // Hace que la transición sea más suave
              ),
              child: child,
            );
          },
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;

    return Scaffold(
      backgroundColor: const Color(0xFF191820),
      body: SafeArea(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20.0),
            child: Column(
              children: [
                const Spacer(),
                SizedBox(
                  width: screenWidth - 100,
                  child: Image.asset(
                    'assets/images/Logo.png',
                    fit: BoxFit.contain,
                  ),
                ),
                const Text(
                  'Mantente seguro\n con SafeCit',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                    fontFamily: 'SegoeUI',
                  ),
                ),
                const SizedBox(height: 10),
                const Padding(
                  padding: EdgeInsets.symmetric(horizontal: 10),
                  child: Text(
                    'Tu compañero en cada trayecto.\nRecorre la ciudad con la confianza que\nnecesitas para moverte con tranquilidad.\nEncuentra rutas seguras, evita zonas\nde riesgo y llega a tu destino.',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 14,
                      color: Color.fromARGB(200, 255, 255, 255),
                      fontFamily: 'SegoeUI',
                    ),
                  ),
                ),
                const SizedBox(height: 50),
                Container(
                  height: 60,
                  decoration: BoxDecoration(
                    color: const Color.fromARGB(20, 255, 255, 255),
                    borderRadius: BorderRadius.circular(30),
                    border: Border.all(
                      color: const Color.fromARGB(50, 255, 255, 255),
                      width: 1,
                    ),
                  ),
                  child: Stack(
                    children: [
                      AnimatedAlign(
                        duration: const Duration(milliseconds: 300),
                        curve: Curves.easeInOut,
                        alignment:
                            isRegisterSelected
                                ? Alignment.centerRight
                                : Alignment.centerLeft,
                        child: Container(
                          width: (screenWidth - 50) / 2,
                          height: 60,
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(30),
                          ),
                        ),
                      ),
                      Row(
                        children: [
                          Expanded(
                            child: GestureDetector(
                              onTap: () => _navigateAfterAnimation(false),
                              child: SizedBox.expand(
                                child: Center(
                                  child: Text(
                                    'Iniciar sesión',
                                    style: TextStyle(
                                      color:
                                          isRegisterSelected
                                              ? Colors.white
                                              : Colors.black,
                                      fontSize: 17,
                                      fontWeight: FontWeight.bold,
                                      fontFamily: 'SegoeUI',
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: GestureDetector(
                              onTap: () => _navigateAfterAnimation(true),
                              child: SizedBox.expand(
                                child: Center(
                                  child: Text(
                                    'Registrarse',
                                    style: TextStyle(
                                      color:
                                          isRegisterSelected
                                              ? Colors.black
                                              : Colors.white,
                                      fontSize: 17,
                                      fontWeight: FontWeight.bold,
                                      fontFamily: 'SegoeUI',
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 20),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
