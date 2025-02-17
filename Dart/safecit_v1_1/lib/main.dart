// main.dart
import 'package:flutter/material.dart';
import 'views/auth/welcome_screen.dart';

void main() {
  runApp(const SafeCitApp());
}

class SafeCitApp extends StatelessWidget {
  const SafeCitApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SafeCit',
      theme: ThemeData(
        primaryColor: const Color.fromRGBO(25, 24, 32, 255), // Color de fondo
      ),
      home: WelcomeScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}
