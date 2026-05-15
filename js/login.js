// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario
    const loginForm = document.querySelector('.login-form');
    
    // Credenciales de prueba (simulación)
    const validCredentials = {
        username: 'admin',
        password: '123456'
    };
    
    // Manejar el envío del formulario
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir el envío real del formulario
        
        // Obtener los valores de los inputs
        const username = loginForm.querySelector('input[type="text"]').value.trim();
        const password = loginForm.querySelector('input[type="password"]').value;
        const rememberMe = loginForm.querySelector('input[type="checkbox"]').checked;
        
        // Validar que los campos no estén vacíos
        if (!username || !password) {
            showMessage('Por favor completa todos los campos', 'error');
            return;
        }
        
        // Simular tiempo de carga
        const submitButton = loginForm.querySelector('.btn');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Cargando...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            // Verificar credenciales
            if (username === validCredentials.username && password === validCredentials.password) {
                // Login exitoso
                showMessage('¡Inicio de sesión exitoso! Redirigiendo...', 'success');
                
                // Guardar sesión si "Remember me" está marcado
                if (rememberMe) {
                    localStorage.setItem('user', JSON.stringify({ 
                        username: username, 
                        rememberMe: true,
                        loginTime: new Date().toISOString()
                    }));
                } else {
                    sessionStorage.setItem('user', JSON.stringify({ 
                        username: username, 
                        rememberMe: false,
                        loginTime: new Date().toISOString()
                    }));
                }
                
                // Redirigir al dashboard después de un breve delay
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
                
            } else {
                // Login fallido
                showMessage('Usuario o contraseña incorrectos', 'error');
                
                // Limpiar campo de contraseña
                loginForm.querySelector('input[type="password"]').value = '';
                
                // Restaurar botón
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }
            
        }, 1000); // Simular delay de red
    });
    
    // Función para mostrar mensajes
    function showMessage(message, type) {
        // Eliminar mensaje anterior si existe
        const existingMessage = document.querySelector('.login-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Crear elemento para el mensaje
        const messageDiv = document.createElement('div');
        messageDiv.className = `login-message ${type}`;
        messageDiv.textContent = message;
        
        // Estilos comunes
        Object.assign(messageDiv.style, {
            padding: '10px',
            borderRadius: '5px',
            marginTop: '15px',
            textAlign: 'center',
            fontSize: '14px',
            transition: 'all 0.3s ease',
            opacity: '1'
        });
        
        // Insertar mensaje antes del botón
        const btn = loginForm.querySelector('.btn');
        btn.parentNode.insertBefore(messageDiv, btn);
        
        // No eliminar automáticamente el mensaje de éxito
        if (type !== 'success') {
            // Eliminar mensaje de error después de 3 segundos
            setTimeout(() => {
                messageDiv.style.opacity = '0';
                setTimeout(() => {
                    if (messageDiv.parentNode) {
                        messageDiv.remove();
                    }
                }, 300);
            }, 3000);
        }
    }
    
    // Verificar si ya hay una sesión activa al cargar la página
    function checkExistingSession() {
        const savedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
        if (savedUser) {
            const userData = JSON.parse(savedUser);
            const usernameInput = loginForm.querySelector('input[type="text"]');
            const rememberCheckbox = loginForm.querySelector('input[type="checkbox"]');
            
            usernameInput.value = userData.username;
            
            if (userData.rememberMe) {
                rememberCheckbox.checked = true;
            }
            
            // Si hay una sesión activa, redirigir directamente al dashboard
            if (userData.username === validCredentials.username) {
                window.location.href = 'dashboard.html';
            }
        }
    }
    
    // Verificar sesión existente
    checkExistingSession();
    
    // Funcionalidad para el enlace "Forgot Password?"
    const forgotPasswordLink = document.querySelector('.remember-forgot a');
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Funcionalidad de recuperación de contraseña no implementada aún');
    });
});