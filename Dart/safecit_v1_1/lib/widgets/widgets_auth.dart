import 'package:flutter/material.dart';

/// Widget para los campos de entrada de texto
Widget buildInputField(
  String iconPath,
  String hint, {
  bool isPassword = false,
  required bool isPasswordVisible,
  required VoidCallback onTogglePassword,
}) {
  return SizedBox(
    height: 70, // Aumento de la altura del campo de texto
    child: TextField(
      obscureText: isPassword ? !isPasswordVisible : false,
      style: const TextStyle(color: Colors.white),
      decoration: InputDecoration(
        filled: true,
        fillColor: const Color.fromARGB(15, 255, 255, 255),
        contentPadding: const EdgeInsets.symmetric(
          vertical: 20,
          horizontal: 25,
        ),
        prefixIcon: Padding(
          padding: const EdgeInsets.only(left: 20, right: 15),
          child: Image.asset(iconPath, width: 28, height: 28),
        ),
        hintText: hint,
        hintStyle: const TextStyle(
          color: Color.fromARGB(170, 255, 255, 255),
          fontSize: 13,
        ),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(35),
          borderSide: const BorderSide(color: Colors.white24, width: 1),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(35),
          borderSide: const BorderSide(color: Colors.white24, width: 1),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(35),
          borderSide: const BorderSide(color: Colors.white70, width: 1.2),
        ),
        suffixIcon:
            isPassword
                ? Padding(
                  padding: const EdgeInsets.only(right: 15),
                  child: IconButton(
                    icon:
                        isPasswordVisible
                            ? Image.asset(
                              "assets/icons/open_eye.png",
                              width: 24,
                            )
                            : Image.asset(
                              "assets/icons/closed_eye.png",
                              width: 24,
                            ),
                    onPressed:
                        onTogglePassword, // Ahora se maneja desde el LoginScreen
                  ),
                )
                : null,
      ),
    ),
  );
}

/// Widget para los botones de redes sociales
Widget buildSocialButton(String assetPath) {
  return SizedBox(
    width: 50,
    height: 50,
    child: Center(child: Image.asset(assetPath, width: 50)),
  );
}
