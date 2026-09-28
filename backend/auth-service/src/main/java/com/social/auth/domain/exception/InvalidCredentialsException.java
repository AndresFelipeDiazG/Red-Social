package com.social.auth.domain.exception;

/**
 * Se lanza igual si el usuario no existe que si la contrasena no coincide.
 */
public class InvalidCredentialsException extends RuntimeException {

    public InvalidCredentialsException() {
        super("Usuario o contrasena incorrectos");
    }
}
